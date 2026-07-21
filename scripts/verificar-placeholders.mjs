// Postbuild: escanea el HTML ya compilado en dist/ en busca de fugas de
// placeholder (spec SALUD 2026-07-20, checklist de QA pre-entrega:
// "grep el HTML compilado por placeholder|por confirmar|TODO|lorem|banco de
// imágenes → debe devolver cero resultados"). Es el último filtro, después de
// validarConfigCliente.ts (que actúa sobre los datos antes de renderizar) —
// atrapa fugas que vengan de props no cubiertas por ese validador (ej. copy
// hardcodeado en un componente).
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const DIST_DIR = 'dist';
// /\bTODO\b/ (sin la bandera "i") — sitio en español, la palabra común "todo"
// ("incluye todo lo de Básica") aparece en copy real de forma constante; el
// marcador de desarrollo que este patrón busca siempre se escribe en
// mayúsculas ("TODO:"), nunca en minúscula.
const PATRONES = [/placeholder/i, /por confirmar/i, /\bTODO\b/, /lorem ipsum/i, /banco de (fotos|im[aá]genes)/i];

async function listarHtml(dir) {
  const entradas = await readdir(dir, { withFileTypes: true });
  const archivos = [];
  for (const entrada of entradas) {
    const ruta = join(dir, entrada.name);
    if (entrada.isDirectory()) {
      archivos.push(...(await listarHtml(ruta)));
    } else if (entrada.name.endsWith('.html')) {
      archivos.push(ruta);
    }
  }
  return archivos;
}

// Extrae solo el texto que un visitante realmente ve/lee en el navegador —
// nunca nombres de clase CSS, rutas de archivo, atributos HTML o comentarios.
// Sin esto, el scan de texto crudo generaba falsos positivos masivos: la
// clase `.testimonios-placeholder-demo` (Testimonials.astro), la ruta
// `/images/placeholder-hero.webp` (default de Hero.astro/HeroSplit.astro), el
// atributo `placeholder="tunegocio.com"` de un <input> real (AnalizadorWeb.astro),
// y los comentarios HTML `<!-- PLACEHOLDER IA -->` que el propio CLAUDE.md
// exige dejar (Nivel 2.5) — ninguno de estos es una fuga real de cara al
// usuario final, que es lo único que este gate debe atrapar.
function extraerTextoVisible(html) {
  return html
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]*>/g, ' ');
}

let archivosHtml;
try {
  archivosHtml = await listarHtml(DIST_DIR);
} catch {
  console.error(`[verificar-placeholders] No se encontró "${DIST_DIR}" — ¿corriste "astro build" antes?`);
  process.exit(1);
}

const hallazgos = [];
for (const archivo of archivosHtml) {
  const html = await readFile(archivo, 'utf-8');
  const textoVisible = extraerTextoVisible(html);
  for (const patron of PATRONES) {
    // Respeta las flags propias de cada patrón (ej. /\bTODO\b/ sin "i" es
    // deliberadamente sensible a mayúsculas) — forzar "gi" aquí las pisaba.
    const flags = patron.flags.includes('g') ? patron.flags : `${patron.flags}g`;
    const coincidencias = textoVisible.match(new RegExp(patron.source, flags));
    if (coincidencias) {
      hallazgos.push(`${archivo}: ${coincidencias.length}x coincidencia con ${patron}`);
    }
  }
}

if (hallazgos.length > 0) {
  console.error('[verificar-placeholders] Fugas de placeholder encontradas en el HTML compilado:');
  hallazgos.forEach((h) => console.error(`  - ${h}`));
  process.exit(1);
}

console.log(`[verificar-placeholders] OK — ${archivosHtml.length} archivos HTML sin fugas de placeholder.`);
