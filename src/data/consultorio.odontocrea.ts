import type { CategoriaServicios, HistoriaNegocio, HorarioDia, Testimonio } from './types';

// Capa 3 — Odontocrea. El cliente no entregó todavía un catálogo de precios
// por escrito, así que los precios/duraciones de abajo siguen siendo relleno
// placeholder — Leo debe confirmarlos antes de publicar (ver demo-personalizer
// paso 6). Las CATEGORÍAS en cambio ya están alineadas con contenido real:
// capturas de instagram.com/odontocrea.uio (compartidas por Leo, 2026-07-19)
// muestran "Urgencias odontológicas" como tema recurrente de publicaciones,
// por lo que se añade como categoría propia en vez de dejarla implícita.
export const serviciosOdontocrea: CategoriaServicios[] = [
  {
    categoria: 'Urgencias odontológicas',
    servicios: [
      { nombre: 'Atención de urgencia', descripcion: 'Dolor agudo, trauma dental o infección — atención prioritaria.', precioDesde: 25, duracionMin: 30, destacado: true, tipo: 'Urgencias' },
    ],
  },
  {
    categoria: 'Odontología general y preventiva',
    servicios: [
      { nombre: 'Limpieza dental', descripcion: 'Profilaxis y revisión general.', precioDesde: 30, duracionMin: 30, destacado: true, tipo: 'Más solicitado' },
      { nombre: 'Resinas y curaciones', descripcion: 'Tratamiento de caries por pieza.', precioDesde: 40, duracionMin: 45 },
    ],
  },
  {
    categoria: 'Ortodoncia',
    servicios: [
      { nombre: 'Brackets metálicos', descripcion: 'Tratamiento completo, controles mensuales incluidos.', precioDesde: 800, duracionMin: 45 },
      { nombre: 'Alineadores transparentes', precioDesde: 1500, duracionMin: 45 },
    ],
  },
  {
    categoria: 'Endodoncia y cirugía oral',
    servicios: [
      { nombre: 'Tratamiento de conducto', descripcion: 'Por pieza, incluye control post-tratamiento.', precioDesde: 150, duracionMin: 60 },
      { nombre: 'Extracción de muela del juicio', precioDesde: 120, duracionMin: 45 },
    ],
  },
  {
    categoria: 'Odontopediatría',
    servicios: [{ nombre: 'Consulta y limpieza para niños', descripcion: 'Ambiente adaptado para los más pequeños.', precioDesde: 25, duracionMin: 30 }],
  },
  {
    categoria: 'Estética dental',
    servicios: [
      { nombre: 'Blanqueamiento dental', precioDesde: 120, duracionMin: 60 },
      { nombre: 'Carillas de porcelana', precioDesde: 180, duracionMin: 90 },
    ],
  },
];

// PLACEHOLDER Nivel 2 (CLAUDE.md, "Manejo de imágenes") — banco de fotos con
// licencia comercial (Pexels), auto-hospedadas en public/images/odontocrea/
// (ver README.md de esa carpeta con el origen exacto de cada archivo).
// Reemplazar por fotos reales de la clínica en cuanto el cliente las
// proporcione.
// ?v=2 (2026-07-19): mismo nombre de archivo, contenido reemplazado (fotos con
// personas posando retiradas por problema de autenticidad) — cache-busting
// obligatorio (lección de El Fogón Ecuatoriano, CLAUDE.md) para forzar
// refresco en navegadores que ya cachearon la v1.
export const heroFotoOdontocrea = '/images/odontocrea/hero-1600.webp?v=2';

// Texto actualizado 2026-07-19 para reflejar datos reales de Instagram: la
// bio del negocio usa textualmente "Tu Sonrisa y salud Oral es nuestra
// prioridad", y el negocio opera dos sedes (MATRIZ Libertad de Chillogallo +
// SUCURSAL La Magdalena) — antes el texto no mencionaba ninguna sede real.
export const historiaOdontocrea: HistoriaNegocio = {
  texto:
    'Tu sonrisa y tu salud oral son nuestra prioridad. En Odontocrea encuentras ' +
    'todas las especialidades — desde una limpieza de rutina hasta ortodoncia, ' +
    'cirugía o una urgencia dental — en un solo lugar, con un equipo que te ' +
    'conoce por tu nombre y te explica cada paso antes de hacerlo. Atendemos en ' +
    'dos sedes en Quito: Chillogallo y La Magdalena.',
  foto: '/images/odontocrea/historia.webp?v=2',
};

export const horariosOdontocrea: HorarioDia[] = [
  { dia: 'Lunes a Viernes', horario: '09:00 – 19:00' },
  { dia: 'Sábado', horario: '09:00 – 14:00' },
  { dia: 'Domingo', horario: 'Cerrado' },
];

// PLACEHOLDER — el cliente no tiene todavía reseñas reales de Google citables
// para esta entrega. Nombres ecuatorianos creíbles, nunca presentar como
// reseñas reales hasta reemplazar por citas verificadas.
export const testimoniosOdontocrea: Testimonio[] = [
  {
    nombre: 'Mónica Salazar',
    texto: 'Llevo a toda mi familia, desde mis hijos hasta mi mamá. Siempre nos atienden con mucha paciencia.',
    calificacion: 5,
  },
  {
    nombre: 'Fernando Ríos',
    texto: 'Me hice el tratamiento de conducto y no dolió nada de lo que esperaba. Muy buena atención.',
    calificacion: 5,
  },
];
