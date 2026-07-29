// Captura screenshots reales de página completa de los demos de Portafolio
// (Fase 2 del rediseño /vorka/) contra un servidor local ya corriendo
// (astro preview o astro dev). Ancho 390px (mobile) a 2x (deviceScaleFactor:2,
// Sprint 3.3 T2c — nitidez en pantallas retina; el thumbnail se muestra a
// ~336 CSS px que en retina son ~672 físicos), sin recorte de alto (fullPage),
// exportado a WebP calidad 50 vía sharp (2x = 4x píxeles, así que se baja la
// calidad para mantener el peso aproximado del set 1x anterior). Uso:
//   node scripts/capture-demo-screenshots.mjs <base-url>
import { chromium } from 'playwright';
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const baseUrl = process.argv[2];
if (!baseUrl) {
  console.error('Uso: node scripts/capture-demo-screenshots.mjs <base-url>');
  process.exit(1);
}

// El portafolio público de Vorka muestra los CLONES de marca ficticia de los
// dos demos de restaurante (Sabor de los Andes, Brasas del Valle), no las
// marcas reales de El Fogón / Shangrila — esos demos siguen vivos por URL
// directa, pero no se exhiben en el showcase mientras no se hable con sus
// dueños. Este script captura exactamente lo que el portafolio referencia.
const DEMOS = [
  { slug: 'sabor-de-los-andes', ruta: '/demo-sabor-de-los-andes/' },
  { slug: 'brasas-del-valle', ruta: '/demo-brasas-del-valle/' },
  { slug: 'esteticdent', ruta: '/demo-esteticdent/' },
];

const OUT_DIR = path.resolve('public/images/vorka/portafolio');

const browser = await chromium.launch();

try {
  await mkdir(OUT_DIR, { recursive: true });
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });

  for (const demo of DEMOS) {
    const url = new URL(demo.ruta, baseUrl).toString();
    console.log(`Capturando ${demo.slug} — ${url}`);
    await page.goto(url, { waitUntil: 'networkidle' });
    const png = await page.screenshot({ fullPage: true });
    const outPath = path.join(OUT_DIR, `${demo.slug}.webp`);
    // WebP tope su alto en 16383px; una página muy larga a 2x lo supera (ej.
    // Sabor: 11478×2=22956). Si pasa, se reduce a 16000px preservando aspecto
    // — sigue siendo más nítido que el set 1x anterior en la zona visible.
    let pipe = sharp(png);
    const meta = await pipe.metadata();
    const MAX_H = 16000;
    if (meta.height > MAX_H) pipe = pipe.resize({ height: MAX_H });
    const info = await pipe.webp({ quality: 50 }).toFile(outPath);
    // width/height reales del WebP (a 2x, width≈780): sirven para fijar los
    // atributos width/height del <img> en Portafolio.astro y mantener CLS 0.
    console.log(`  -> ${outPath}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)}KB`);
  }
} finally {
  await browser.close();
}
