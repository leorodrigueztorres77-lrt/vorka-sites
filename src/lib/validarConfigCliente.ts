// Validación de contenido en tiempo de build (spec SALUD 2026-07-20, "Fugas de
// placeholder"). Se llama desde el frontmatter de cada página de demo/entrega
// — al ejecutarse en Node durante `astro build`, un `throw` aquí detiene el
// build completo en vez de dejar pasar una fuga de placeholder al sitio
// publicado. No sustituye al escaneo del HTML ya compilado (ver
// scripts/verificar-placeholders.mjs) — este chequeo actúa sobre los DATOS de
// Capa 3 antes de renderizar; el otro actúa sobre el HTML final como último
// filtro.
import type { CategoriaServicios, FotoGaleria, HorarioDia, SiteConfig } from '@/data/types';

const PATRONES_PROHIBIDOS: RegExp[] = [
  /\btodo\b/i,
  /placeholder/i,
  /por confirmar/i,
  /lorem ipsum/i,
  /banco de (fotos|imágenes)/i,
  /\bpendiente\b/i,
];

function escanearValor(valor: unknown, ruta: string, errores: string[]): void {
  if (typeof valor === 'string') {
    for (const patron of PATRONES_PROHIBIDOS) {
      if (patron.test(valor)) {
        errores.push(`${ruta}: texto prohibido detectado (coincide con ${patron}) → "${valor}"`);
      }
    }
    return;
  }
  if (Array.isArray(valor)) {
    valor.forEach((item, i) => escanearValor(item, `${ruta}[${i}]`, errores));
    return;
  }
  if (valor && typeof valor === 'object') {
    for (const [clave, v] of Object.entries(valor)) {
      escanearValor(v, `${ruta}.${clave}`, errores);
    }
  }
}

export interface ValidarConfigClienteParams {
  site: SiteConfig;
  servicios: CategoriaServicios[];
  galeria: FotoGaleria[];
  horarios: HorarioDia[];
}

/**
 * Lanza un Error (y por lo tanto detiene `astro build`) si el config de un
 * cliente tiene fugas de placeholder o le faltan campos obligatorios. Llamar
 * una vez por página de demo/entrega, con los datos ya ensamblados de Capa 3.
 */
export function validarConfigCliente({ site, servicios, galeria, horarios }: ValidarConfigClienteParams): void {
  const errores: string[] = [];

  escanearValor(site, 'site', errores);
  escanearValor(servicios, 'servicios', errores);
  escanearValor(galeria, 'galeria', errores);
  escanearValor(horarios, 'horarios', errores);

  if (!site.nombre?.trim()) errores.push('site.nombre es obligatorio');
  if (!site.direccion?.trim()) errores.push('site.direccion es obligatorio');
  if (!site.telefonoWhatsApp?.trim()) errores.push('site.telefonoWhatsApp es obligatorio');
  if (!horarios || horarios.length === 0) errores.push('horarios: se requiere al menos un día configurado');

  const totalServicios = servicios.reduce((acc, cat) => acc + cat.servicios.length, 0);
  if (totalServicios < 3) {
    errores.push(`servicios: se requieren al menos 3 servicios en total, hay ${totalServicios}`);
  }

  if (galeria.length < 4) {
    errores.push(`galeria: se requieren al menos 4 imágenes, hay ${galeria.length}`);
  }

  if (errores.length > 0) {
    throw new Error(
      `[validarConfigCliente] "${site.nombre || site.negocioSlug}" no pasa la validación de contenido:\n` +
        errores.map((e) => `  - ${e}`).join('\n')
    );
  }
}
