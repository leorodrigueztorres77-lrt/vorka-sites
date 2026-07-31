import type { CategoriaMenu, FotoGaleria, HistoriaNegocio, HorarioDia, Testimonio } from './types';

// Capa 3 — Sabor de los Andes. CLON DE DEMO con marca ficticia, derivado de
// El Fogón Ecuatoriano para mostrar el trabajo sin usar la marca real de un
// negocio con cuyo dueño aún no se ha hablado. Todo el contenido (menú,
// precios, historia, testimonios) es relleno razonable para el rubro (comida
// ecuatoriana tradicional), no datos de un negocio real. Si esto se vuelve un
// cliente real, reemplazar por datos verdaderos antes de publicar.

// PLACEHOLDER — platos y precios de referencia para comida ecuatoriana
// tradicional; confirmar con el cliente antes de publicar.
//
// CHECKLIST DE CONVERSIÓN (CLAUDE.md) — GAP CONOCIDO, NO RESUELTO: los platos
// de $6+ (Hornado, Fritada, Seco de pollo, Llapingachos completos) requieren
// foto y no la tienen. No se les asignó ninguna de las fotos de banco ya
// verificadas (mote pillo, ceviche, empanadas, bolones de verde) porque
// ninguna es realmente ese plato — CLAUDE.md prohíbe explícitamente mostrar
// fotos de stock que no correspondan al plato real ("el cliente real notaría
// de inmediato que no es su comida"). Requiere Nivel 1 (foto real del
// cliente) o una búsqueda adicional de Nivel 2 con match específico antes de
// publicar — no forzar un placeholder aproximado solo para "completar" el
// checklist.
export const menuSaborAndes: CategoriaMenu[] = [
  {
    categoria: 'Entradas',
    platos: [
      {
        nombre: 'Empanadas de morocho',
        descripcion: 'Con ají de tomate de árbol',
        precio: 3.5,
        // PLACEHOLDER Nivel 2: misma foto de empanadas ecuatorianas ya usada
        // en la galería (ver galeriaSaborAndes) — categoría correcta (empanada),
        // no necesariamente la receta exacta de morocho. Reemplazar con foto
        // real del cliente.
        imagen:
          'https://images.pexels.com/photos/37758930/pexels-photo-37758930.jpeg?auto=compress&cs=tinysrgb&w=200&fm=webp',
      },
      { nombre: 'Choclo con queso', precio: 3.0 },
    ],
  },
  {
    categoria: 'Platos Fuertes',
    platos: [
      {
        nombre: 'Hornado',
        descripcion: 'Cerdo horneado lentamente, llapingachos, mote y curtido',
        precio: 8.5,
        destacado: true,
        // PLACEHOLDER IA — generada por IA (Nano Banana 2), es el plato correcto
        // (hornado ecuatoriano). Solo demo de venta; reemplazar por foto real
        // del cliente (Nivel 1) antes de publicar. Cierra parcialmente el GAP
        // documentado arriba (fritada/seco de pollo siguen sin foto).
        imagen: '/images/sabor-de-los-andes/hornado-hero-800.webp?v=2',
      },
      {
        nombre: 'Fritada',
        descripcion: 'Con mote, maduro y curtido de cebolla',
        precio: 8.0,
      },
      {
        nombre: 'Seco de pollo',
        descripcion: 'Con arroz y aguacate',
        precio: 6.5,
      },
      {
        nombre: 'Llapingachos completos',
        descripcion: 'Con chorizo, huevo y ensalada',
        precio: 6.0,
      },
    ],
  },
  {
    categoria: 'Bebidas',
    platos: [
      { nombre: 'Jugo natural del día', precio: 1.75 },
      { nombre: 'Chicha morada', precio: 2.0 },
    ],
  },
  {
    categoria: 'Postres',
    platos: [{ nombre: 'Dulce de higos con queso', precio: 2.5 }],
  },
];

// PLACEHOLDER — horario de referencia; confirmar con el cliente.
export const horariosSaborAndes: HorarioDia[] = [
  { dia: 'Martes a Sábado', horario: '11:00 a 20:00' },
  { dia: 'Domingo', horario: '11:00 a 16:00' },
  { dia: 'Lunes', horario: 'Cerrado' },
];

// PLACEHOLDER — historia de referencia (tono cálido/tradicional pedido por el
// cliente); reemplazar con la historia real del negocio cuando la entregue.
export const historiaSaborAndes: HistoriaNegocio = {
  texto:
    'En Sabor de los Andes cocinamos como en casa: hornado hecho despacio, ' +
    'llapingachos a mano y esa sazón que se aprende en familia y se sirve con ' +
    'cariño. Nacimos en el barrio de Conocoto con la idea de que la comida de ' +
    'siempre, la que sabe a domingo en familia, merece un lugar donde ' +
    'encontrarla todos los días.',
};

// PLACEHOLDER — Nivel 2 (banco de fotos con licencia comercial, Pexels),
// usado porque el cliente no tiene todavía fotos digitales propias de calidad.
// Reemplazar por fotos reales del local/platos apenas estén disponibles (ver
// CLAUDE.md "Manejo de imágenes"). Ninguna de estas fotos debe presentarse
// como si fuera un plato real de Sabor de los Andes.
//
// Nota de búsqueda: no se encontró en Pexels/Unsplash una foto específica
// verificada de hornado, llapingachos o encebollado bajo licencia comercial
// clara. En su lugar se usaron 4 fotos confirmadas como comida ecuatoriana
// real (etiquetadas "Ecuador"/"Quito, Pichincha, Ecuador" en su metadata):
// mote pillo, ceviche, empanadas y un tendido de platos ecuatorianos — más
// fieles al rubro que fotos genéricas de comida latina, pero no son los
// platos exactos que pidió Leo. Reemplazar por Nivel 1 (fotos propias del
// cliente) en cuanto estén disponibles.
export const galeriaSaborAndes: FotoGaleria[] = [
  {
    src: 'https://images.pexels.com/photos/37228246/pexels-photo-37228246.jpeg?auto=compress&cs=tinysrgb&w=900&fm=webp',
    alt: 'Mote pillo con huevo frito, cocina ecuatoriana de Quito (foto de banco, placeholder temporal)',
  },
  {
    src: 'https://images.pexels.com/photos/38330330/pexels-photo-38330330.jpeg?auto=compress&cs=tinysrgb&w=900&fm=webp',
    alt: 'Ceviche ecuatoriano servido con chifles (foto de banco, placeholder temporal)',
  },
  {
    src: 'https://images.pexels.com/photos/37758930/pexels-photo-37758930.jpeg?auto=compress&cs=tinysrgb&w=900&fm=webp',
    alt: 'Empanadas de comida callejera ecuatoriana, Quito (foto de banco, placeholder temporal)',
  },
  {
    src: 'https://images.pexels.com/photos/32655071/pexels-photo-32655071.jpeg?auto=compress&cs=tinysrgb&w=900&fm=webp',
    alt: 'Bolones de verde con salsa, comida ecuatoriana (foto de banco, placeholder temporal)',
  },
];

// PLACEHOLDER IA — imagen 100% generada por IA (Nano Banana 2 vía Higgsfield,
// 2026-07-18, ver public/images/sabor-de-los-andes/README.md). Muestra el
// plato estrella real del menú (hornado con llapingacho, mote y curtido) y es
// local/optimizada (WebP, sin dependencia de Pexels). SOLO para el demo de
// venta: por la regla de autenticidad del vertical (CLAUDE.md, "nunca mostrar
// comida 100% generada por IA como si fuera real"), reemplazar por Nivel 1
// (foto real del cliente mejorada) antes de la entrega final.
export const heroFotoSaborAndes = '/images/sabor-de-los-andes/hornado-hero-1600.webp?v=2';

// PLACEHOLDER — el cliente no tiene todavía reseñas reales de Google para
// citar. El brief de esta reconstrucción ("Umami") autoriza explícitamente
// usar nombres ecuatorianos creíbles como placeholder mientras no existan
// reseñas reales (María Torres, Carlos Benítez, Ana Morales). Reemplazar por
// citas reales apenas el cliente tenga reseñas verificables — no presentar
// esto como reseñas reales de Google en ningún material de venta.
export const testimoniosSaborAndes: Testimonio[] = [
  {
    nombre: 'María Torres',
    texto:
      'El hornado sabe exactamente como el de mi abuela. Pedimos casi todos los domingos, ' +
      'llega rápido y siempre calientito.',
    calificacion: 5,
  },
  {
    nombre: 'Carlos Benítez',
    texto:
      'Los llapingachos completos son mi pedido de siempre. Se nota que cocinan con calma, ' +
      'no como comida rápida.',
    calificacion: 5,
  },
  {
    nombre: 'Ana Morales',
    texto:
      'Pedir por WhatsApp es súper fácil y el sabor no tiene comparación con otros lugares ' +
      'de Conocoto que hemos probado.',
    calificacion: 5,
  },
];
