import type {
  CategoriaMenu,
  EstadisticasNegocio,
  EstadoFidelizacion,
  FotoGaleria,
  HistoriaNegocio,
  HorarioDia,
  Testimonio,
} from './types';

// Capa 2 (restaurante) — estructura de ejemplo. demo-personalizer reemplaza
// estos valores con el menú, fotos y horarios reales del cliente en Capa 3.
// `imagen` en los platos destacados y `imagenPortada` por categoría usan las
// mismas fotos placeholder de `galeriaSample` — demo-personalizer las
// reemplaza por fotos reales del plato (o mejoradas con IA) en Capa 3.

export const menuSample: CategoriaMenu[] = [
  {
    categoria: 'Entradas',
    imagenPortada: '/images/placeholder-plato-3.webp',
    platos: [
      {
        nombre: 'Plato de entrada 1',
        descripcion: 'Descripción breve del plato',
        precio: 4.5,
        imagen: '/images/placeholder-plato-3.webp',
        calificacion: 4,
        tipo: 'Vegetariano',
      },
      { nombre: 'Plato de entrada 2', descripcion: 'Descripción breve del plato', precio: 5.0, calificacion: 4 },
    ],
  },
  {
    categoria: 'Platos Fuertes',
    imagenPortada: '/images/placeholder-plato-1.webp',
    platos: [
      {
        nombre: 'Plato fuerte destacado',
        descripcion: 'Descripción breve del plato',
        precio: 9.5,
        destacado: true,
        imagen: '/images/placeholder-plato-1.webp',
        calificacion: 5,
        tipo: 'Más pedido',
      },
      {
        nombre: 'Plato fuerte 2',
        descripcion: 'Descripción breve del plato',
        precio: 8.0,
        imagen: '/images/placeholder-plato-2.webp',
        calificacion: 4,
      },
      { nombre: 'Plato fuerte 3', descripcion: 'Descripción breve del plato', precio: 10.0, calificacion: 4 },
    ],
  },
  {
    categoria: 'Bebidas',
    imagenPortada: '/images/placeholder-plato-4.webp',
    platos: [
      { nombre: 'Bebida 1', precio: 2.0 },
      { nombre: 'Bebida 2', precio: 2.5 },
    ],
  },
  {
    categoria: 'Postres',
    platos: [
      {
        nombre: 'Postre de la casa',
        descripcion: 'Descripción breve',
        precio: 3.5,
        imagen: '/images/placeholder-plato-4.webp',
        destacado: true,
        calificacion: 5,
        tipo: 'Dulce',
      },
    ],
  },
];

// Extensión .webp obligatoria (estándar de rendimiento en CLAUDE.md: WebP/AVIF,
// nunca JPEG/PNG sin optimizar). demo-personalizer debe convertir las fotos del
// cliente a WebP/AVIF antes de reemplazar estas rutas en Capa 3.
export const galeriaSample: FotoGaleria[] = [
  { src: '/images/placeholder-plato-1.webp', alt: 'Foto de plato de ejemplo 1' },
  { src: '/images/placeholder-plato-2.webp', alt: 'Foto de plato de ejemplo 2' },
  { src: '/images/placeholder-plato-3.webp', alt: 'Foto de plato de ejemplo 3' },
  { src: '/images/placeholder-plato-4.webp', alt: 'Foto de plato de ejemplo 4' },
];

export const horariosSample: HorarioDia[] = [
  { dia: 'Lunes a Viernes', horario: '12:00 – 21:00' },
  { dia: 'Sábado', horario: '12:00 – 22:00' },
  { dia: 'Domingo', horario: '12:00 – 18:00' },
];

// Placeholder — demo-personalizer lo llena con el historial real de pedidos
// del cliente (misma fuente de datos que reactivation-campaigns). Si el
// negocio no tiene historial suficiente todavía, se omite este componente
// en la primera entrega en lugar de mostrar datos inventados.
export const estadoFidelizacionSample: EstadoFidelizacion = {
  pedidosRealizados: 3,
  pedidosParaRecompensa: 5,
  recompensa: '10% de descuento en tu próximo pedido',
};

// Placeholder — demo-personalizer lo reemplaza con la historia real del
// negocio (años de trayectoria, diferenciador, origen del nombre, etc.).
export const historiaSample: HistoriaNegocio = {
  texto:
    'Contamos aquí el origen del restaurante: desde cuándo abre sus puertas, ' +
    'qué lo distingue (receta familiar, ingredientes locales, tradición del ' +
    'barrio) y qué experiencia quiere que viva cada cliente que llega.',
};

export const testimoniosSample: Testimonio[] = [
  {
    nombre: 'Cliente de ejemplo',
    texto: 'Comentario de ejemplo sobre la experiencia en el restaurante.',
    calificacion: 5,
  },
  {
    nombre: 'Otro cliente de ejemplo',
    texto: 'Otro comentario de ejemplo destacando la calidad y el servicio.',
    calificacion: 5,
  },
];

// Placeholder — demo-personalizer lo reemplaza con las cifras reales del
// negocio (Google My Business, historial de pedidos). Si un dato no existe
// todavía, se omite en vez de inventarlo (ver src/data/types.ts).
export const statsSample: EstadisticasNegocio = {
  ratingGoogle: 4.8,
  totalResenas: 120,
  pedidosPorMes: 200,
  aniosTrayectoria: 6,
  familiasClientes: 500,
  platosEnCarta: menuSample.reduce((total, cat) => total + cat.platos.length, 0),
};
