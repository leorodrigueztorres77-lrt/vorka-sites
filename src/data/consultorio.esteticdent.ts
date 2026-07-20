import type { CategoriaServicios, FotoGaleria, HorarioDia, Testimonio } from './types';

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
export const galeriaEsteticdent: FotoGaleria[] = [
  { src: '/images/esteticdent/clinica-ia.webp', alt: 'Consultorio dental moderno y luminoso (imagen generada con IA, placeholder de demo)' },
  { src: '/images/esteticdent/equipo-destacado.webp', alt: 'Sillón y equipo dental de última generación (foto de banco, placeholder temporal)' },
  { src: '/images/esteticdent/equipamiento-1.webp', alt: 'Equipo de diagnóstico dental minimalista (foto de banco, placeholder temporal)' },
  { src: '/images/esteticdent/equipamiento-2.webp', alt: 'Instrumental dental sobre bandeja en sala clara (foto de banco, placeholder temporal)' },
];

export const horariosEsteticdent: HorarioDia[] = [
  { dia: 'Lunes a Viernes', horario: '09:00 – 18:00' },
  { dia: 'Sábado', horario: '09:00 – 13:00' },
  { dia: 'Domingo', horario: 'Cerrado' },
];

// PLACEHOLDER — el cliente no tiene todavía reseñas reales de Google citables
// para esta entrega. Nombres ecuatorianos creíbles, nunca presentar como
// reseñas reales hasta reemplazar por citas verificadas (mismo criterio ya
// autorizado para El Fogón Ecuatoriano y Shangrila).
export const testimoniosEsteticdent: Testimonio[] = [
  {
    nombre: 'Paola Andrade',
    texto: 'Me hice el diseño de sonrisa y el resultado se ve súper natural. Todo el equipo muy profesional.',
    calificacion: 5,
  },
  {
    nombre: 'Diego Herrera',
    texto: 'Buena tecnología, explican cada paso antes de hacerlo. Se nota la experiencia de años.',
    calificacion: 5,
  },
];
