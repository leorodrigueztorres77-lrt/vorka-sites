// Corre Lighthouse contra una URL local (astro preview) usando el Chromium ya
// instalado por Playwright — evita depender de un Chrome del sistema. Uso:
//   node scripts/lighthouse-check.mjs <url> [--mobile|--desktop]
import { chromium } from 'playwright';
import lighthouse from 'lighthouse';

const url = process.argv[2];
if (!url) {
  console.error('Uso: node scripts/lighthouse-check.mjs <url> [--mobile|--desktop]');
  process.exit(1);
}
const formFactor = process.argv.includes('--desktop') ? 'desktop' : 'mobile';

const browser = await chromium.launch({
  args: ['--remote-debugging-port=9222'],
});

try {
  const config =
    formFactor === 'desktop'
      ? {
          extends: 'lighthouse:default',
          settings: {
            formFactor: 'desktop',
            screenEmulation: { disabled: true },
            throttling: { rttMs: 40, throughputKbps: 10240, cpuSlowdownMultiplier: 1 },
          },
        }
      : undefined; // default config ya es mobile (Moto G power emulation + 4G slow)

  const result = await lighthouse(
    url,
    { port: 9222, output: 'json', onlyCategories: ['performance', 'accessibility', 'seo'] },
    config,
  );

  const { categories } = result.lhr;
  console.log(`\nLighthouse (${formFactor}) — ${url}`);
  for (const [key, cat] of Object.entries(categories)) {
    console.log(`  ${cat.title}: ${Math.round(cat.score * 100)}`);
  }
} finally {
  await browser.close();
}
