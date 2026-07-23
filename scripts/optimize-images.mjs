// Pipeline de imágenes IA de Vorka — post-proceso de lo APROBADO.
// Toma todo lo que haya en assets/generated/approved/ (aprobación humana de
// Leo — este script no decide nada) y exporta WebP 1x y 2x por uso a
// public/images/<cliente>/. Ver scripts/README.md.
//
// Uso:
//   node scripts/optimize-images.mjs [--shots assets/prompts/shots-esteticdent.json] \
//     [--out public/images/esteticdent]
import sharp from 'sharp';
import { readdir, readFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const APPROVED_DIR = 'assets/generated/approved';
const CALIDAD_WEBP = 80;

// Anchos 1x/2x por uso de la shot list (relación de aspecto ya viene de la
// imagen generada; solo se redimensiona por ancho, sin recorte).
const TAMANOS_POR_USO = {
  hero: { w1x: 1600, w2x: 2400 },
  'card-servicio': { w1x: 800, w2x: 1200 },
  reserva: { w1x: 800, w2x: 1200 },
  'card-tecnologia': { w1x: 900, w2x: 1400 },
};

function parseArgs(argv) {
  const args = { shots: 'assets/prompts/shots-esteticdent.json', out: 'public/images/esteticdent' };
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === '--shots') args.shots = argv[++i];
    else if (argv[i] === '--out') args.out = argv[++i];
    else {
      console.error(`Argumento desconocido: ${argv[i]}`);
      process.exit(1);
    }
  }
  return args;
}

// "card-limpieza-v2.APROBABLE.png" → id "card-limpieza"
function idDesdeArchivo(nombre) {
  return nombre
    .replace(/\.(png|jpe?g|webp)$/i, '')
    .replace(/\.APROBABLE$/i, '')
    .replace(/-v\d+$/i, '');
}

const args = parseArgs(process.argv);
const shotsDoc = JSON.parse(await readFile(args.shots, 'utf8'));

const archivos = (await readdir(APPROVED_DIR)).filter((f) => /\.(png|jpe?g|webp)$/i.test(f));
if (archivos.length === 0) {
  console.error(`No hay imágenes en ${APPROVED_DIR}/ — mueve ahí lo aprobado (paso de aprobación humana) y vuelve a correr.`);
  process.exit(1);
}

await mkdir(args.out, { recursive: true });
const resumen = [];

for (const archivo of archivos) {
  const id = idDesdeArchivo(archivo);
  const shot = shotsDoc.shots.find((s) => s.id === id);
  if (!shot) {
    console.error(`AVISO: ${archivo} no corresponde a ningún id de ${args.shots} — omitida.`);
    resumen.push({ id, salida: 'OMITIDA (id desconocido)' });
    continue;
  }
  const tam = TAMANOS_POR_USO[shot.uso];
  if (!tam) {
    console.error(`AVISO: uso "${shot.uso}" sin tamaños definidos — omitida ${archivo}.`);
    resumen.push({ id, salida: `OMITIDA (uso ${shot.uso})` });
    continue;
  }

  const origen = path.join(APPROVED_DIR, archivo);
  const salida1x = path.join(args.out, `${id}.webp`);
  const salida2x = path.join(args.out, `${id}@2x.webp`);
  await sharp(origen).resize({ width: tam.w1x, withoutEnlargement: true }).webp({ quality: CALIDAD_WEBP }).toFile(salida1x);
  await sharp(origen).resize({ width: tam.w2x, withoutEnlargement: true }).webp({ quality: CALIDAD_WEBP }).toFile(salida2x);
  const meta = await sharp(salida1x).metadata();
  resumen.push({ id, uso: shot.uso, salida: `${id}.webp (${meta.width}x${meta.height}) + @2x` });
  console.log(`OK  ${id} → ${salida1x} + @2x (uso: ${shot.uso})`);
}

console.log('\nResumen:');
console.table(resumen);
console.log(
  '\nSiguiente paso: actualizar las rutas en src/data/<cliente>.ts — cada FotoGaleria acepta ' +
    '`src` (1x) y `src2x` opcional; los componentes emiten srcset automáticamente cuando src2x está presente.',
);
