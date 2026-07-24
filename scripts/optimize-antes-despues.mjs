// Post-proceso puntual de los 6 pares antes/después aprobados en QC-REPORT.md
// (ronda 3, 2026-07-23) — export WebP 1x/2x a public/images/esteticdent/,
// mismo patrón que optimize-images.mjs pero con el mapeo fijo de esta entrega
// (no depende de una shot list porque estos ids no viven en shots-esteticdent.json).
import sharp from 'sharp';
import path from 'node:path';

const SRC_DIR = 'assets/generated/review';
const OUT_DIR = 'public/images/esteticdent';
const CALIDAD_WEBP = 80;
const ANCHO_1X = 640;
const ANCHO_2X = 1280;

const MAPA = [
  { origen: 'transformacion-ortodoncia-antes-intento2.png', destino: 'sonrisa-ortodoncia-antes' },
  { origen: 'transformacion-ortodoncia-despues-intento2.png', destino: 'sonrisa-ortodoncia-despues' },
  { origen: 'transformacion-blanqueamiento-antes-intento1.png', destino: 'sonrisa-blanqueamiento-antes' },
  { origen: 'transformacion-blanqueamiento-despues-intento1.png', destino: 'sonrisa-blanqueamiento-despues' },
  { origen: 'transformacion-diseno-sonrisa-antes-intento2.png', destino: 'sonrisa-diseno-antes' },
  { origen: 'transformacion-diseno-sonrisa-despues-intento2.png', destino: 'sonrisa-diseno-despues' },
];

for (const { origen, destino } of MAPA) {
  const src = path.join(SRC_DIR, origen);
  const out1x = path.join(OUT_DIR, `${destino}.webp`);
  const out2x = path.join(OUT_DIR, `${destino}@2x.webp`);
  await sharp(src).resize({ width: ANCHO_1X, withoutEnlargement: true }).webp({ quality: CALIDAD_WEBP }).toFile(out1x);
  await sharp(src).resize({ width: ANCHO_2X, withoutEnlargement: true }).webp({ quality: CALIDAD_WEBP }).toFile(out2x);
  const meta = await sharp(out1x).metadata();
  console.log(`OK  ${destino} → ${out1x} (${meta.width}x${meta.height}) + @2x`);
}
