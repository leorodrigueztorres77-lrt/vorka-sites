import type { CategoriaServicios, FotoGaleria, HistoriaNegocio, HorarioDia, PerfilProfesional, Testimonio } from './types';

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
// Intento 2026-07-20 (spec SALUD, "el hero nunca debe mostrar una silla
// vacía") de reemplazar esta foto por una con personas fue revertido: el
// README.md de esta carpeta documenta que Leo ya rechazó explícitamente fotos
// de banco con personas posando como "doctor"/"paciente" para este cliente
// (2026-07-19, retirados-fake-personas/) — ese precedente pesa más que la
// regla genérica del spec hasta que Leo confirme lo contrario. Se mantiene la
// foto original de sillón/equipo (Pexels, ver README.md).
export const heroFotoOdontocrea = '/images/odontocrea/hero-1600.webp?v=2';

// Galería complementaria (spec SALUD 2026-07-20, requisito de ≥4 imágenes) —
// hero + foto de historia + 2 fotos adicionales de banco (Pexels, Nivel 2),
// integradas junto a Testimonials en vez de como galería flotante (regla de
// profundidad visual #2, CLAUDE.md). Ninguna muestra personas posando (ver
// nota arriba). Ver README.md de esta carpeta para el origen exacto de cada
// archivo.
export const galeriaOdontocrea: FotoGaleria[] = [
  { src: heroFotoOdontocrea, alt: 'Sillón y equipo dental en sala de atención de Odontocrea' },
  { src: '/images/odontocrea/historia.webp?v=2', alt: 'Equipo de Odontocrea en el consultorio' },
  { src: '/images/odontocrea/equipo-diagnostico.webp', alt: 'Equipo de diagnóstico dental de cerca' },
  { src: '/images/odontocrea/instrumental.webp', alt: 'Instrumental dental esterilizado y modelos de ortodoncia' },
];

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

// Vacío a propósito (spec SALUD 2026-07-20, "Nunca fabricar testimonios"): el
// cliente no ha confirmado reseñas reales de Google todavía. Testimonials.astro
// omite la sección entera cuando este array está vacío en la entrega final;
// para la demo de venta la página pasa `modoDemo` en su lugar, que muestra un
// bloque explícitamente rotulado como ilustrativo — nunca nombres inventados.
export const testimoniosOdontocrea: Testimonio[] = [];

// Equipo (spec SALUD 2026-07-20, "TeamSection obligatorio"). Único nombre
// confirmado hoy: "Dr. Cristian Egas" aparece como contacto directo en una
// publicación de Instagram (ver site.odontocrea.ts) — no hay confirmación de
// que sea el único profesional del consultorio ni de su especialidad exacta,
// así que se usa el título genérico "Odontólogo" en vez de inventar una
// especialidad. Sin foto (`foto` undefined a propósito): no hay foto real
// confirmada todavía, y CLAUDE.md prohíbe sustituir por un genérico de stock
// — TeamSection muestra sus iniciales en su lugar.
export const profesionalesOdontocrea: PerfilProfesional[] = [
  {
    nombre: 'Dr. Cristian Egas',
    tituloProfesional: 'Odontólogo',
  },
];
