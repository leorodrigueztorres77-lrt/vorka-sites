import type { CategoriaServicios, FotoGaleria, HorarioDia, ItemTecnologia, PerfilProfesional, Testimonio } from './types';

// Capa 3 — Estetic Dent. Los precios/duraciones de abajo siguen siendo
// relleno placeholder (el cliente no entregó un catálogo por escrito) — Leo
// debe confirmarlos antes de publicar (ver demo-personalizer paso 6). Las
// CATEGORÍAS y varios servicios ya están alineados con contenido real:
// capturas de instagram.com/esteticdent.uio (compartidas por Leo, 2026-07-19)
// confirman "urgencias dentales las 24H" como diferenciador publicado varias
// veces, rayos X digital gratis en cada consulta, implantes "de alta gama", y
// periodoncia (encías) como servicio propio — se añaden/ajustan esas líneas.
export const serviciosEsteticdent: CategoriaServicios[] = [
  {
    categoria: 'Urgencias odontológicas',
    servicios: [
      { nombre: 'Atención de urgencia 24h', descripcion: 'Dolor agudo, trauma o infección dental — atención prioritaria, publicado como servicio propio del negocio.', precioDesde: 25, duracionMin: 30, destacado: true, tipo: 'Urgencias' },
    ],
  },
  {
    categoria: 'Estética dental',
    servicios: [
      {
        nombre: 'Diseño de sonrisa',
        descripcion: 'Planificación digital del resultado antes de iniciar el tratamiento.',
        precioDesde: 350,
        duracionMin: 60,
        destacado: true,
        tipo: 'Más solicitado',
      },
      { nombre: 'Blanqueamiento dental', descripcion: 'Sesión en consultorio con resultado inmediato.', precioDesde: 120, duracionMin: 60 },
      { nombre: 'Carillas de porcelana', descripcion: 'Por pieza, incluye prueba estética previa.', precioDesde: 180, duracionMin: 90 },
    ],
  },
  {
    categoria: 'Ortodoncia invisible',
    servicios: [
      { nombre: 'Alineadores transparentes', descripcion: 'Tratamiento completo, controles incluidos.', precioDesde: 1500, duracionMin: 45 },
    ],
  },
  {
    categoria: 'Implantes y rehabilitación',
    servicios: [
      { nombre: 'Implante dental unitario', descripcion: 'Implantes de alta gama, incluye planificación con rayos X digital gratis en cada consulta.', precioDesde: 900, duracionMin: 90 },
      { nombre: 'Corona sobre implante', precioDesde: 450, duracionMin: 60 },
      { nombre: 'Reemplazo de prótesis dental', descripcion: 'Para prótesis viejas o mal adaptadas.', precioDesde: 350, duracionMin: 60 },
    ],
  },
  {
    categoria: 'Limpieza, prevención y periodoncia',
    servicios: [
      { nombre: 'Limpieza dental', descripcion: 'Profilaxis y revisión general, con rayos X digital gratis en cada consulta.', precioDesde: 30, duracionMin: 30 },
      { nombre: 'Tratamiento de encías (periodoncia)', descripcion: 'Para sangrado, dolor o movilidad dental.', precioDesde: 60, duracionMin: 45 },
    ],
  },
];

// PLACEHOLDER Nivel 2 (CLAUDE.md, "Manejo de imágenes") — banco de fotos con
// licencia comercial (Pexels), auto-hospedadas en public/images/esteticdent/
// (ver README.md de esa carpeta con el origen exacto de cada archivo). Todas
// muestran equipo/ambiente de clínica dental moderna — a propósito, ninguna
// es un "doctor genérico" posando como el profesional real (regla de
// autenticidad de CLAUDE.md), coherente con que V3 no requiere una foto de un
// profesional específico. Reemplazar por fotos reales del consultorio en
// cuanto el cliente las proporcione.
// El estado de placeholder (Nivel 2/2.5, banco de fotos / generado con IA)
// vive en el README.md de public/images/esteticdent/ y en el comentario de
// arriba — nunca en el `alt` visible: ese texto lo lee un lector de pantalla
// y un paciente real, así que debe describir la foto, no delatar que es de
// relleno (spec SALUD 2026-07-20, "Fugas de placeholder").
// AJUSTE 2026-07-21: `equipo-destacado.webp` (Pexels) se reemplaza por
// `equipo-destacado-ia.webp` (Nivel 2.5, generado con IA) — feedback directo
// de Leo cuestionando si el texto "de última generación" correspondía
// realmente a la foto de banco (un sillón genérico, sobreexpuesto, sin nada
// visiblemente moderno). Ver README.md de esta carpeta para el detalle
// completo; el alt ahora describe "diseño moderno" en vez de un superlativo
// de "última generación" que no estaba verificado con el cliente real.
export const galeriaEsteticdent: FotoGaleria[] = [
  { src: '/images/esteticdent/clinica-ia.webp?v=2', alt: 'Sala de tratamiento dental moderna con luz cálida natural' },
  { src: '/images/esteticdent/equipo-destacado-ia.webp', alt: 'Sillón dental de diseño moderno en Estetic Dent' },
  { src: '/images/esteticdent/equipamiento-1.webp', alt: 'Equipo de diagnóstico dental minimalista' },
  { src: '/images/esteticdent/equipamiento-2.webp', alt: 'Instrumental dental sobre bandeja en sala clara' },
];

// Fase 2 (spec de diseño 2026-07-21): argumento de tecnología — título del
// equipo + beneficio en lenguaje de paciente. Rayos X digital gratis ya está
// confirmado (ver serviciosEsteticdent arriba); cámara intraoral y
// esterilización son estándar del rubro para una clínica que ya invirtió en
// equipamiento moderno (coherente con brief de la variante V3) — Leo puede
// ajustar la redacción exacta si el cliente confirma detalles distintos.
export const tecnologiaEsteticdent: ItemTecnologia[] = [
  { titulo: 'Radiografía digital', beneficio: 'Diagnóstico en minutos y hasta 90% menos radiación. Incluida gratis en tu consulta.' },
  { titulo: 'Cámara intraoral', beneficio: 'Ves lo que vemos, antes de decidir cualquier tratamiento.' },
  { titulo: 'Esterilización certificada', beneficio: 'Instrumental sellado e individual para cada paciente.' },
];

export const horariosEsteticdent: HorarioDia[] = [
  { dia: 'Lunes a Viernes', horario: '09:00 – 18:00' },
  { dia: 'Sábado', horario: '09:00 – 13:00' },
  { dia: 'Domingo', horario: 'Cerrado' },
];

// Vacío a propósito (spec SALUD 2026-07-20, "Nunca fabricar testimonios"): el
// cliente no ha confirmado reseñas reales de Google todavía. Testimonials.astro
// omite la sección entera cuando este array está vacío en la entrega final;
// para la demo de venta la página pasa `modoDemo` en su lugar, que muestra un
// bloque explícitamente rotulado como ilustrativo — nunca nombres inventados.
export const testimoniosEsteticdent: Testimonio[] = [];

// Equipo (spec SALUD 2026-07-20, "TeamSection obligatorio"). Único nombre
// confirmado hoy vía capturas reales de instagram.com/esteticdent.uio
// (compartidas por Leo, 2026-07-19): "Dra. Mishell A. Chamorro, endodoncia" —
// ver site.esteticdent.ts. Sin años de experiencia ni universidad porque esos
// datos no están confirmados todavía — nunca inventar una credencial para
// rellenar el campo.
//
// AJUSTE 2026-07-21: se reincorpora `foto` (mishel-chamorro-hero-ia.webp) tras
// feedback de Leo de que todo el sitio se veía frío/sin personas — la foto ya
// existía en disco (real, con nombre, retocada con IA solo en luz/fondo, ver
// README.md de public/images/esteticdent/) y se había quitado el 2026-07-19
// solo del HERO por falta de armonía general del sitio, no por un problema de
// autenticidad/consentimiento. Colocarla aquí, en una tarjeta de equipo de
// tamaño estándar (no dominando el hero), resuelve la calidez sin repetir el
// problema de armonía que motivó quitarla la primera vez.
// AJUSTE 2026-07-21: se añade Dra. Rosa Reascos, entregada por Leo como
// archivo real (originales/Rosa Reascos.jpg, pieza promocional de Instagram
// con overlay de diseño — ver README.md de public/images/esteticdent/ para el
// proceso de recorte + retoque IA). `tituloProfesional: 'Odontóloga'` es el
// único dato confirmable a partir de la foto (realizando una limpieza dental
// con equipo completo) — sin `especialidad` porque el cliente no ha
// confirmado un área específica todavía (nunca inventar esa credencial).
export const profesionalesEsteticdent: PerfilProfesional[] = [
  {
    nombre: 'Dra. Mishell A. Chamorro',
    tituloProfesional: 'Odontóloga',
    especialidad: 'Endodoncia',
    foto: '/images/esteticdent/mishel-chamorro-hero-ia.webp',
  },
  {
    nombre: 'Dra. Rosa Reascos',
    tituloProfesional: 'Odontóloga',
    foto: '/images/esteticdent/rosa-reascos.webp',
  },
];
