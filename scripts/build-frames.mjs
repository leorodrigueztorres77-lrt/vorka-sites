/**
 * build-frames.mjs — Pipeline video → secuencia de frames WebP, para las
 * secciones scroll-driven de Fase 3 (/vorka/, "El sistema Vorka"). Portado
 * sin cambios de comportamiento desde SiteWise+ (caso El Fogón Ecuatoriano).
 *
 * Uso:
 *   node scripts/build-frames.mjs --input scripts/_source/construccion.mp4 --name construccion --frames 120
 *
 * Extrae N frames uniformes del video con ffmpeg (ffmpeg-static), los
 * redimensiona con sharp y los exporta como WebP en dos juegos:
 *   public/frames/<name>/desktop/frame-0001.webp  (1440 px de ancho)
 *   public/frames/<name>/mobile/frame-0001.webp   (720 px de ancho)
 *
 * PRESUPUESTO DURO por secuencia: desktop ≤ 5 MB, mobile ≤ 2 MB.
 * Si se supera, baja calidad (70→60→50) y luego resolución (-160 px)
 * y reintenta. Si aun así no cumple, termina con código de error.
 */

import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdir, readdir, rm, stat, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import ffmpegPath from 'ffmpeg-static';
import sharp from 'sharp';

const execFileAsync = promisify(execFile);

// ---------- CLI ----------
function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i += 2) {
    const key = argv[i]?.replace(/^--/, '');
    args[key] = argv[i + 1];
  }
  if (!args.input || !args.name || !args.frames) {
    console.error(
      'Uso: node scripts/build-frames.mjs --input <video.mp4> --name <secuencia> --frames <n>',
    );
    process.exit(1);
  }
  return { input: resolve(args.input), name: args.name, frames: Number(args.frames) };
}

// ---------- ffmpeg ----------
async function videoDurationSeconds(input) {
  // ffmpeg-static no incluye ffprobe: leemos la duración del stderr de ffmpeg.
  try {
    await execFileAsync(ffmpegPath, ['-i', input], { windowsHide: true });
  } catch (err) {
    const m = /Duration:\s*(\d+):(\d+):(\d+\.\d+)/.exec(String(err.stderr ?? ''));
    if (m) return Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3]);
    throw new Error(`No se pudo leer la duración de ${input}`);
  }
  throw new Error('ffmpeg -i no devolvió información del video');
}

/** Extrae `count` frames PNG uniformes a `outDir` (lossless, master). */
async function extractFrames(input, outDir, count) {
  const duration = await videoDurationSeconds(input);
  // fps = count / duración cubre todo el clip de forma uniforme.
  const fps = count / duration;
  await rm(outDir, { recursive: true, force: true, maxRetries: 10, retryDelay: 300 });
  await mkdir(outDir, { recursive: true });
  await execFileAsync(
    ffmpegPath,
    [
      '-i', input,
      '-vf', `fps=${fps.toFixed(6)}`,
      '-frames:v', String(count),
      '-f', 'image2',
      join(outDir, 'master-%04d.png'),
    ],
    { windowsHide: true, maxBuffer: 64 * 1024 * 1024 },
  );
  const produced = (await readdir(outDir)).filter((f) => f.endsWith('.png'));
  if (produced.length < count) {
    throw new Error(`ffmpeg produjo ${produced.length}/${count} frames`);
  }
  return produced.sort().slice(0, count);
}

// ---------- WebP ----------
async function encodeSet(masterDir, masterFiles, outDir, width, quality) {
  // maxRetries: OneDrive puede tener bloqueados los archivos mientras sincroniza.
  await rm(outDir, { recursive: true, force: true, maxRetries: 10, retryDelay: 300 });
  await mkdir(outDir, { recursive: true });
  let total = 0;
  for (let i = 0; i < masterFiles.length; i++) {
    const buf = await sharp(join(masterDir, masterFiles[i]))
      .resize({ width, withoutEnlargement: false })
      .webp({ quality, effort: 6, smartSubsample: true })
      .toBuffer();
    total += buf.length;
    const name = `frame-${String(i + 1).padStart(4, '0')}.webp`;
    await writeFile(join(outDir, name), buf);
  }
  return total;
}

const MB = 1024 * 1024;

async function buildSet(label, masterDir, masterFiles, outDir, baseWidth, budgetBytes) {
  const qualities = [70, 60, 50, 42];
  const widths = [baseWidth, baseWidth - 160, baseWidth - 320];
  for (const width of widths) {
    for (const quality of qualities) {
      const total = await encodeSet(masterDir, masterFiles, outDir, width, quality);
      const avgKb = total / masterFiles.length / 1024;
      const totalMb = total / MB;
      console.log(
        `  [${label}] ${width}px q${quality}: ${masterFiles.length} frames, ` +
          `media ${avgKb.toFixed(1)} KB/frame, total ${totalMb.toFixed(2)} MB ` +
          `(presupuesto ${(budgetBytes / MB).toFixed(1)} MB)`,
      );
      if (total <= budgetBytes) {
        return { width, quality, total, avgKb };
      }
      console.log(`  [${label}] excede presupuesto — reintentando con menos calidad/resolución…`);
    }
  }
  return null;
}

// ---------- main ----------
const { input, name, frames } = parseArgs(process.argv);

try {
  await stat(input);
} catch {
  console.error(`ERROR: no existe el video de entrada: ${input}`);
  process.exit(1);
}

console.log(`\n=== Secuencia "${name}": ${frames} frames desde ${input} ===`);
const masterDir = resolve(`.frames-tmp/${name}`);
const masterFiles = await extractFrames(input, masterDir, frames);
console.log(`Extraídos ${masterFiles.length} frames master.`);

const outBase = resolve(`public/frames/${name}`);
const desktop = await buildSet('desktop', masterDir, masterFiles, join(outBase, 'desktop'), 1440, 5 * MB);
const mobile = await buildSet('mobile', masterDir, masterFiles, join(outBase, 'mobile'), 720, 2 * MB);

await rm(masterDir, { recursive: true, force: true, maxRetries: 10, retryDelay: 300 });

console.log(`\n--- Informe secuencia "${name}" ---`);
for (const [label, r] of [
  ['desktop', desktop],
  ['mobile', mobile],
]) {
  if (r) {
    console.log(
      `${label}: OK — ${frames} frames @ ${r.width}px q${r.quality}, ` +
        `media ${r.avgKb.toFixed(1)} KB, total ${(r.total / MB).toFixed(2)} MB`,
    );
  }
}

if (!desktop || !mobile) {
  console.error(
    `\nERROR: la secuencia "${name}" no cumple el presupuesto ` +
      `(desktop ≤ 5 MB, mobile ≤ 2 MB) ni con calidad 50 y resolución reducida.`,
  );
  process.exit(1);
}
