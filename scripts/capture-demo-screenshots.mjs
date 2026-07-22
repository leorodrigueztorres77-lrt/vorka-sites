// Captura screenshots reales de página completa de los demos de Portafolio
// (Fase 2 del rediseño /vorka/) contra un servidor local ya corriendo
// (astro preview o astro dev). Ancho 390px (mobile), sin recorte de alto
// (fullPage), exportado a WebP calidad 75 vía sharp. Uso:
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

const DEMOS = [
  { slug: 'el-fogon-ecuatoriano', ruta: '/demo-el-fogon-ecuatoriano/' },
  { slug: 'shangrila', ruta: '/demo-shangrila/' },
  { slug: 'esteticdent', ruta: '/demo-esteticdent/' },
];

const OUT_DIR = path.resolve('public/images/vorka/portafolio');

const browser = await chromium.launch();

try {
  await mkdir(OUT_DIR, { recursive: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

  for (const demo of DEMOS) {
    const url = new URL(demo.ruta, baseUrl).toString();
    console.log(`Capturando ${demo.slug} — ${url}`);
    await page.goto(url, { waitUntil: 'networkidle' });
    const png = await page.screenshot({ fullPage: true });
    const outPath = path.join(OUT_DIR, `${demo.slug}.webp`);
    await sharp(png).webp({ quality: 75 }).toFile(outPath);
    console.log(`  -> ${outPath}`);
  }
} finally {
  await browser.close();
}
