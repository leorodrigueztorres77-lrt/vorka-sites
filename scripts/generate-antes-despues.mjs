// Generación de pares antes/después ILUSTRATIVOS con Gemini — SOLO para demos
// de venta donde el cliente todavía no existe (sin negocio real que pueda
// verse afectado por publicidad engañosa). Excepción explícita y acotada a
// la regla dura de generate-images.mjs, autorizada por Leo el 2026-07-23
// para el caso demo-esteticdent — NO usar este script para un cliente real
// sin volver a confirmar con Leo.
//
// Técnica en 2 pasos por par (misma persona en ambas fotos):
//   1. Genera el retrato "antes" (texto → imagen) con el bloque de estilo base.
//   2. Edita ESA imagen (imagen + texto → imagen) pidiendo mantener rostro,
//      peinado, ropa, fondo y encuadre idénticos, cambiando solo la sonrisa.
//
// Uso:
//   node scripts/generate-antes-despues.mjs --pairs assets/prompts/pares-esteticdent.json [--only id1,id2] [--attempt 1]
//
// Requiere GEMINI_API_KEY en el entorno.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const API_BASE = 'https://generativelanguage.googleapis.com/v1beta/models';
const MODEL = 'gemini-2.5-flash-image';
const OUT_DIR = 'assets/generated/review';
const REINTENTOS_HTTP = 2;
const PAUSA_MS = 6500;

const dormir = (ms) => new Promise((r) => setTimeout(r, ms));

function parseArgs(argv) {
  const args = { pairs: null, only: null, attempt: 1 };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--pairs') args.pairs = argv[++i];
    else if (a === '--only') args.only = argv[++i].split(',').map((s) => s.trim());
    else if (a === '--attempt') args.attempt = Number(argv[++i]);
    else { console.error(`Argumento desconocido: ${a}`); process.exit(1); }
  }
  if (!args.pairs) { console.error('Falta --pairs <archivo.json>'); process.exit(1); }
  return args;
}

function extraerRetryDelayMs(msg) {
  const m = /retry in ([\d.]+)s/i.exec(msg ?? '');
  return m ? Math.ceil(Number(m[1]) * 1000) + 500 : null;
}

async function llamarGemini({ apiKey, prompt, aspect, refImageB64, refMime }) {
  const parts = [];
  if (refImageB64) parts.push({ inlineData: { mimeType: refMime, data: refImageB64 } });
  parts.push({ text: prompt });

  const body = {
    contents: [{ parts }],
    generationConfig: { responseModalities: ['IMAGE'], imageConfig: { aspectRatio: aspect } },
  };

  const res = await fetch(`${API_BASE}/${MODEL}:generateContent`, {
    method: 'POST',
    headers: { 'x-goog-api-key': apiKey, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const json = await res.json().catch(() => ({}));

  if (!res.ok) {
    const msg = json?.error?.message ?? `HTTP ${res.status}`;
    const err = new Error(msg);
    err.status = res.status;
    err.retryDelayMs = res.status === 429 ? extraerRetryDelayMs(msg) : null;
    throw err;
  }

  const blockReason = json.promptFeedback?.blockReason;
  const candidato = json.candidates?.[0];
  const finish = candidato?.finishReason;
  if (blockReason || (finish && /SAFETY|PROHIBITED|BLOCK/i.test(finish))) {
    const err = new Error(`bloqueo de seguridad (${blockReason ?? finish})`);
    err.safetyBlock = true;
    throw err;
  }

  const img = (candidato?.content?.parts ?? []).find((p) => p.inlineData);
  if (!img) {
    const texto = (candidato?.content?.parts ?? []).find((p) => p.text)?.text;
    throw new Error(`sin imagen en la respuesta${texto ? ` (texto: ${texto.slice(0, 120)})` : ''}`);
  }
  return { data: Buffer.from(img.inlineData.data, 'base64'), mime: img.inlineData.mimeType };
}

async function conReintentos(fn) {
  let ultimoError = null;
  for (let intento = 0; intento <= REINTENTOS_HTTP; intento++) {
    try {
      if (intento > 0) await dormir(ultimoError?.retryDelayMs ?? 3000 * 3 ** (intento - 1));
      return await fn();
    } catch (err) {
      ultimoError = err;
      if (err.safetyBlock) throw err;
    }
  }
  throw ultimoError;
}

async function main() {
  const args = parseArgs(process.argv);
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) { console.error('Falta GEMINI_API_KEY en el entorno.'); process.exit(1); }

  const doc = JSON.parse(await readFile(args.pairs, 'utf8'));
  const base = (await readFile(doc.base, 'utf8')).trim();
  let pares = doc.pares;
  if (args.only) pares = pares.filter((p) => args.only.includes(p.id));

  await mkdir(OUT_DIR, { recursive: true });
  const resumen = [];

  for (const par of pares) {
    const sufijo = `-intento${args.attempt}`;
    try {
      // Paso 1 — antes.
      const promptAntes = `${base}\n\nSUJETO (foto "antes"): ${par.sujetoAntes}`;
      const antes = await conReintentos(() => llamarGemini({ apiKey, prompt: promptAntes, aspect: par.aspect }));
      const extAntes = antes.mime === 'image/jpeg' ? 'jpg' : 'png';
      const destinoAntes = path.join(OUT_DIR, `${par.id}-antes${sufijo}.${extAntes}`);
      await writeFile(destinoAntes, antes.data);
      console.log(`OK  ${par.id}-antes${sufijo} (${Math.round(antes.data.length / 1024)} KB)`);
      await dormir(PAUSA_MS);

      // Paso 2 — después, editando la imagen "antes" (misma persona).
      const promptDespues = `Edita esta imagen manteniendo EXACTAMENTE la misma persona, mismo rostro, mismo peinado, misma ropa, mismo fondo, mismo encuadre y misma iluminación. Cambia únicamente: ${par.transformacion}. Fotorrealista, sin otros cambios.`;
      const despues = await conReintentos(() => llamarGemini({
        apiKey, prompt: promptDespues, aspect: par.aspect,
        refImageB64: antes.data.toString('base64'), refMime: antes.mime,
      }));
      const extDespues = despues.mime === 'image/jpeg' ? 'jpg' : 'png';
      const destinoDespues = path.join(OUT_DIR, `${par.id}-despues${sufijo}.${extDespues}`);
      await writeFile(destinoDespues, despues.data);
      console.log(`OK  ${par.id}-despues${sufijo} (${Math.round(despues.data.length / 1024)} KB)`);

      resumen.push({ id: par.id, intento: args.attempt, estado: 'generado (pendiente QC visual)' });
    } catch (err) {
      const tipo = err.safetyBlock ? 'BLOQUEO-SEGURIDAD' : `ERROR ${err.status ?? ''}`.trim();
      console.error(`${tipo}  ${par.id}: ${err.message.split('\n')[0].slice(0, 160)}`);
      resumen.push({ id: par.id, intento: args.attempt, estado: tipo });
    }
    await dormir(PAUSA_MS);
  }

  console.log('\nResumen:');
  console.table(resumen);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
