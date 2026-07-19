import type { CategoriaServicios, FotoGaleria, HorarioDia, Testimonio } from './types';

// Capa 3 — Estetic Dent. El cliente no entregó todavía un catálogo de
// servicios ni precios por escrito, así que las categorías/servicios de abajo
// son contenido de relleno razonable para una clínica de estética dental
// (marcado como placeholder) — Leo debe confirmar servicios y precios reales
// con el cliente antes de publicar. Ver demo-personalizer paso 6.
export const serviciosEsteticdent: CategoriaServicios[] = [
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
      { nombre: 'Implante dental unitario', descripcion: 'Incluye planificación con imagen digital.', precioDesde: 900, duracionMin: 90 },
      { nombre: 'Corona sobre implante', precioDesde: 450, duracionMin: 60 },
    ],
  },
  {
    categoria: 'Limpieza y prevención',
    servicios: [{ nombre: 'Limpieza dental', descripcion: 'Profilaxis y revisión general.', precioDesde: 30, duracionMin: 30 }],
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
  { src: '/images/esteticdent/hero-1600.webp', alt: 'Consultorio dental moderno y luminoso (foto de banco, placeholder temporal)' },
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
