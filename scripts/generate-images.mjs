// Pipeline de imágenes IA de Vorka — generación con la API de Gemini.
// Ver scripts/README.md para el flujo completo (generar → QC → aprobación
// humana → optimize-images.mjs).
//
// Uso:
//   node scripts/generate-images.mjs --shots assets/prompts/shots-esteticdent.json \
//     [--only id1,id2] [--variants 2] [--model gemini-2.5-flash-image]
//
// Requiere GEMINI_API_KEY en el entorno (key de Google AI Studio). OJO: la
// generación de imágenes requiere un proyecto con cuota para modelos de
// imagen — el free tier puro devuelve 429 "limit: 0" (verificado 2026-07-23).
//
// REGLA DURA (CLAUDE.md, autenticidad del vertical salud): este pipeline
// NUNCA genera imágenes de resultados clínicos ni pares antes/después. Si la
// shot list lo pide, el script se niega a correr y lo reporta.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const API_BASE = 'https://generativelanguage.googleapis.com/v1beta/models';
const DEFAULT_MODEL = 'gemini-2.5-flash-image';
const OUT_DIR = 'assets/generated/review';
const REINTENTOS = 2; // reintentos por llamada, con backoff
const PAUSA_ENTRE_LLAMADAS_MS = 6500; // free tier de imagen suele ser <10 RPM

// Palabras que delatan una shot de resultados clínicos / antes-después.
const PATRONES_PROHIBIDOS = /antes\s*\/?\s*despu[eé]s|before\s*\/?\s*after|resultado(s)? cl[ií]nico(s)?|antes y despu[eé]s/i;

function parseArgs(argv) {
  const args = { variants: 2, model: DEFAULT_MODEL, only: null, shots: null };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--shots') args.shots = argv[++i];
    else if (a === '--only') args.only = argv[++i].split(',').map((s) => s.trim());
    else if (a === '--variants') args.variants = Number(argv[++i]);
    else if (a === '--model') args.model = argv[++i];
    else {
      console.error(`Argumento desconocido: ${a}`);
      process.exit(1);
    }
  }
  if (!args.shots) {
    console.error('Uso: node scripts/generate-images.mjs --shots <shots.json> [--only id1,id2] [--variants N] [--model <modelo>]');
    process.exit(1);
  }
  if (!Number.isInteger(args.variants) || args.variants < 1 || args.variants > 8) {
    console.error('--variants debe ser un entero entre 1 y 8');
    process.exit(1);
  }
  return args;
}

const dormir = (ms) => new Promise((r) => setTimeout(r, ms));

function extraerRetryDelayMs(cuerpoError) {
  // El 429 de Gemini suele traer "Please retry in 12.3s" o un RetryInfo.
  const m = /retry in ([\d.]+)s/i.exec(cuerpoError ?? '');
  return m ? Math.ceil(Number(m[1]) * 1000) + 500 : null;
}

async function llamarGemini({ apiKey, model, prompt, refImageB64, refMime }) {
  const parts = [];
  if (refImageB64) parts.push({ inlineData: { mimeType: refMime, data: refImageB64 } });
  parts.push({ text: prompt });

  const body = {
    contents: [{ parts }],
    generationConfig: { responseModalities: ['IMAGE'] },
  };

  const res = await fetch(`${API_BASE}/${model}:generateContent`, {
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

  // Bloqueo de seguridad: sin candidatos o finishReason de seguridad.
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
    throw new Error(`la respuesta no trae imagen${texto ? ` (texto: ${texto.slice(0, 120)})` : ''}`);
  }
  return { data: Buffer.from(img.inlineData.data, 'base64'), mime: img.inlineData.mimeType };
}

// El aspect ratio va DENTRO del prompt, no en generationConfig: los modelos
// de imagen de Gemini respetan bien la instrucción textual y así el prompt
// completo queda auditable en una sola pieza. (imageConfig.aspectRatio existe
// pero no todos los modelos image-capable lo aceptan — la vía textual es la
// portable.)
function armarPrompt(base, shot) {
  return `${base.trim()}\n\nSUJETO: ${shot.sujeto}\n\nRelación de aspecto de la imagen: ${shot.aspect}.`;
}

async function main() {
  const args = parseArgs(process.argv);
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('Falta GEMINI_API_KEY en el entorno.');
    process.exit(1);
  }

  const shotsDoc = JSON.parse(await readFile(args.shots, 'utf8'));
  const base = await readFile(shotsDoc.base, 'utf8');
  let shots = shotsDoc.shots;

  // REGLA DURA — rechazar la shot list completa si pide resultados clínicos.
  const prohibidas = shots.filter((s) => PATRONES_PROHIBIDOS.test(`${s.id} ${s.sujeto} ${s.uso}`));
  if (prohibidas.length > 0) {
    console.error('SHOT LIST RECHAZADA — este pipeline nunca genera resultados clínicos ni antes/después (CLAUDE.md, autenticidad del vertical salud).');
    console.error('Shots en conflicto: ' + prohibidas.map((s) => s.id).join(', '));
    console.error('La sección "Sonrisas reales" mantiene sus placeholders; quita esas shots y vuelve a correr.');
    process.exit(2);
  }

  if (args.only) {
    const desconocidos = args.only.filter((id) => !shots.some((s) => s.id === id));
    if (desconocidos.length) {
      console.error(`IDs no encontrados en la shot list: ${desconocidos.join(', ')}`);
      process.exit(1);
    }
    shots = shots.filter((s) => args.only.includes(s.id));
  }

  await mkdir(OUT_DIR, { recursive: true });
  const resumen = [];

  for (const shot of shots) {
    let refImageB64 = null;
    let refMime = null;
    if (shot.refImage) {
      const buf = await readFile(shot.refImage);
      refImageB64 = buf.toString('base64');
      refMime = shot.refImage.endsWith('.png') ? 'image/png' : 'image/jpeg';
    }
    const prompt = armarPrompt(base, shot);
    let generadas = 0;
    const fallos = [];

    for (let v = 1; v <= args.variants; v++) {
      let ultimoError = null;
      for (let intento = 0; intento <= REINTENTOS; intento++) {
        try {
          if (intento > 0) await dormir(ultimoError?.retryDelayMs ?? 3000 * 3 ** (intento - 1));
          const { data, mime } = await llamarGemini({ apiKey, model: args.model, prompt, refImageB64, refMime });
          const ext = mime === 'image/jpeg' ? 'jpg' : 'png';
          const destino = path.join(OUT_DIR, `${shot.id}-v${v}.${ext}`);
          await writeFile(destino, data);
          console.log(`OK  ${shot.id}-v${v} (${Math.round(data.length / 1024)} KB)`);
          generadas++;
          ultimoError = null;
          break;
        } catch (err) {
          ultimoError = err;
          if (err.safetyBlock) break; // reintentar un bloqueo no ayuda
        }
      }
      if (ultimoError) {
        const tipo = ultimoError.safetyBlock ? 'BLOQUEO-SEGURIDAD' : `ERROR ${ultimoError.status ?? ''}`.trim();
        console.error(`${tipo}  ${shot.id}-v${v}: ${ultimoError.message.split('\n')[0].slice(0, 160)}`);
        fallos.push(`v${v}: ${tipo}`);
      }
      await dormir(PAUSA_ENTRE_LLAMADAS_MS);
    }
    resumen.push({ id: shot.id, generadas, pedidas: args.variants, fallos: fallos.join('; ') || '—' });
  }

  console.log('\nResumen:');
  console.table(resumen);
  const totalFallos = resumen.reduce((n, r) => n + (r.pedidas - r.generadas), 0);
  if (totalFallos > 0) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
