/**
 * fal-generate-vorka-sistema.mjs — Fase 3 de /vorka/ ("El sistema Vorka").
 *
 * Genera 2 imágenes de arranque (fal-ai/nano-banana-2, ~$0.04 c/u) y a partir
 * de ellas 2 clips de 6s/720p (bytedance/seedance-2.0/image-to-video,
 * ~$1.82 c/u) — visuales abstractos oscuros en la paleta de marca de Vorka
 * (verde #39D353 primario, azul #1DA1F2 acento), sin texto renderizado por la
 * IA (los modelos de video no renderizan texto de forma confiable — el
 * copy real vive en overlays HTML aparte, ver CLAUDE.md).
 *
 * SECUENCIA A "construccion": paneles 3D oscuros ensamblándose en la
 *   silueta de un sitio web/teléfono.
 * SECUENCIA B "conversion": una burbuja de chat abstracta se transforma en
 *   un check/recibo — representa WhatsApp → pedido/cita confirmados.
 *
 * FAL_KEY se lee de forma efímera desde SiteWise+/.env (proyecto hermano) —
 * nunca se imprime ni se hardcodea en ningún archivo de este repo.
 *
 * Costo total estimado: 2×$0.04 + 2×$1.82 ≈ $3.72.
 */

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const FAL_ENV_PATH = resolve(ROOT, '..', 'SiteWise+', '.env');
const OUT_DIR = resolve(ROOT, 'scripts', '_source');

const env = await readFile(FAL_ENV_PATH, 'utf8');
const FAL_KEY = /FAL_KEY=(\S+)/.exec(env)?.[1];
if (!FAL_KEY) {
  console.error('ERROR: FAL_KEY no encontrada en SiteWise+/.env');
  process.exit(1);
}
const AUTH = { Authorization: `Key ${FAL_KEY}`, 'Content-Type': 'application/json' };

await mkdir(OUT_DIR, { recursive: true });

// ---------- fal helpers ----------

async function generarImagen(prompt, nombreArchivo) {
  const res = await fetch('https://queue.fal.run/fal-ai/nano-banana-2', {
    method: 'POST',
    headers: AUTH,
    body: JSON.stringify({ prompt, aspect_ratio: '16:9', resolution: '1K' }),
  });
  if (!res.ok) throw new Error(`submit imagen: HTTP ${res.status} ${await res.text()}`);
  const job = await res.json();
  console.log(`[${nombreArchivo}] imagen encolada: ${job.request_id}`);

  let out;
  for (let i = 0; i < 60; i++) {
    const s = await (await fetch(`${job.status_url}?logs=0`, { headers: AUTH })).json();
    process.stdout.write(`\r[${nombreArchivo}] ${s.status}          `);
    if (s.status === 'COMPLETED') {
      out = await (await fetch(job.response_url, { headers: AUTH })).json();
      break;
    }
    if (s.status === 'FAILED') throw new Error(`${nombreArchivo} imagen FAILED: ${JSON.stringify(s)}`);
    await new Promise((r) => setTimeout(r, 3000));
  }
  const url = out?.images?.[0]?.url;
  if (!url) throw new Error(`[${nombreArchivo}] sin imagen en la respuesta`);
  console.log(`\n[${nombreArchivo}] imagen lista: ${url}`);

  const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
  await writeFile(resolve(OUT_DIR, `${nombreArchivo}.png`), buf);
  console.log(`[${nombreArchivo}] guardado ${nombreArchivo}.png (${buf.length} bytes)`);
  return url; // URL pública de fal — reutilizable directo como image_url del video
}

async function submitVideo(input) {
  const res = await fetch('https://queue.fal.run/bytedance/seedance-2.0/image-to-video', {
    method: 'POST',
    headers: AUTH,
    body: JSON.stringify(input),
  });
  if (!res.ok) throw new Error(`submit video: HTTP ${res.status} ${await res.text()}`);
  return res.json();
}

async function waitForVideo(job, label) {
  for (let i = 0; i < 120; i++) {
    const res = await fetch(`${job.status_url}?logs=0`, { headers: AUTH });
    const status = await res.json();
    process.stdout.write(`\r[${label}] ${status.status}          `);
    if (status.status === 'COMPLETED') break;
    if (status.status === 'FAILED') throw new Error(`${label} FAILED: ${JSON.stringify(status)}`);
    await new Promise((r) => setTimeout(r, 5000));
  }
  const out = await fetch(job.response_url, { headers: AUTH });
  if (!out.ok) throw new Error(`response: HTTP ${out.status} ${await out.text()}`);
  const data = await out.json();
  console.log(`\n[${label}] video listo: ${data.video?.url}`);
  return data.video.url;
}

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download: HTTP ${res.status}`);
  await writeFile(dest, Buffer.from(await res.arrayBuffer()));
  console.log(`Guardado ${dest}`);
}

// ---------- prompts ----------

const PROMPT_IMG_CONSTRUCCION =
  'Abstract 3D render, dark near-black #0d0d0d background, minimal professional tech aesthetic. ' +
  'Thin flat rectangular panels in vibrant green #39D353 and electric blue #1DA1F2 floating in ' +
  'space, softly glowing edges, arranging themselves into the silhouette of a smartphone/website ' +
  'screen outline. Soft studio lighting, subtle reflections, shallow depth of field, no text, no ' +
  'letters, no UI mockup content, no logos, purely abstract geometric shapes. Photorealistic 3D ' +
  'render quality, Octane/Cinema4D style, high detail, no watermark.';

const PROMPT_IMG_CONVERSION =
  'Abstract 3D render, dark near-black #0d0d0d background, minimal professional tech aesthetic. ' +
  'A smooth glossy chat speech-bubble shape in vibrant green #39D353 with electric blue #1DA1F2 ' +
  'glowing rim light, floating in space, soft studio lighting, subtle reflections, shallow depth ' +
  'of field. No text, no letters, no icons, no logos, purely an abstract smooth 3D shape. ' +
  'Photorealistic 3D render quality, Octane/Cinema4D style, high detail, no watermark.';

const PROMPT_VIDEO_CONSTRUCCION =
  'The flat green and blue rectangular panels drift slowly and smoothly together from scattered ' +
  'positions, converging and locking into place to form a clean smartphone/website screen outline ' +
  'silhouette, fully assembled by the end of the clip. Single continuous shot, fixed camera, slow ' +
  'perfectly constant motion, no cuts, no zoom, no flicker, no text appears at any point. Dark ' +
  'studio background, soft glow, photorealistic 3D render, no watermark.';

const PROMPT_VIDEO_CONVERSION =
  'The glossy green chat speech-bubble shape smoothly and continuously morphs — its tail folds in ' +
  'and its body reshapes — into a clean checkmark shape by the end of the clip. Single continuous ' +
  'shot, fixed camera, slow perfectly constant morphing motion, no cuts, no zoom, no flicker, no ' +
  'text appears at any point. Dark studio background, soft green and blue glow, photorealistic 3D ' +
  'render, no watermark.';

// ---------- main ----------

console.log('Generando imagen de arranque: construccion…');
const imgConstruccionUrl = await generarImagen(PROMPT_IMG_CONSTRUCCION, 'construccion-start');

console.log('\nGenerando imagen de arranque: conversion…');
const imgConversionUrl = await generarImagen(PROMPT_IMG_CONVERSION, 'conversion-start');

const COMMON = {
  resolution: '720p',
  duration: '6',
  aspect_ratio: '16:9',
  generate_audio: false,
  bitrate_mode: 'high',
};

console.log('\nEncolando videos…');
const [videoConstruccion, videoConversion] = await Promise.all([
  submitVideo({ ...COMMON, image_url: imgConstruccionUrl, prompt: PROMPT_VIDEO_CONSTRUCCION }),
  submitVideo({ ...COMMON, image_url: imgConversionUrl, prompt: PROMPT_VIDEO_CONVERSION }),
]);
console.log(`construccion encolado: ${videoConstruccion.request_id}`);
console.log(`conversion encolado: ${videoConversion.request_id}`);

const [urlConstruccion, urlConversion] = await Promise.all([
  waitForVideo(videoConstruccion, 'construccion'),
  waitForVideo(videoConversion, 'conversion'),
]);

await download(urlConstruccion, resolve(OUT_DIR, 'construccion.mp4'));
await download(urlConversion, resolve(OUT_DIR, 'conversion.mp4'));

console.log('\nListo. 2 imágenes + 2 clips generados en scripts/_source/.');
