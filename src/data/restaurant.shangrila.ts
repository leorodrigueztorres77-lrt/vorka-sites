import type { CategoriaMenu, FotoGaleria, HistoriaNegocio, HorarioDia, Testimonio } from './types';

// Capa 3 — Shangrila (parrilla/asador, Valle de los Chillos). El cliente no
// entregó todavía menú, horarios ni historia por escrito, así que este
// archivo usa contenido de relleno razonable para el rubro (parrilla/asador)
// marcado como placeholder — no bloquea la entrega, per demo-personalizer.
//
// RUBRO RE-VERIFICADO (2026-07): la duda original sobre si este negocio era
// en realidad un chifa (por otros "Shangri-La" de la región) queda descartada
// — el propio Facebook del negocio (facebook.com/shangrilauio, misma
// dirección Los Cisnes OE10-180 y San Juan de Dios) tiene un video promocional
// titulado "The Shangrila está en el valle de los Chillos, ven y disfruta de
// los mejores cortes...", confirmando parrilla/asado de carnes de fuente
// propia del negocio, no una suposición de Vorka. Sigue sin existir un menú
// público con platos y precios exactos — los ítems de abajo siguen siendo
// relleno razonable para el rubro (ya confirmado), no la carta real; Leo debe
// confirmar platos/precios exactos con el cliente antes de publicar.
export const menuShangrila: CategoriaMenu[] = [
  {
    categoria: 'Entradas',
    platos: [
      { nombre: 'Empanadas de queso', descripcion: 'Fritas, con ají casero', precio: 3.0 },
      { nombre: 'Choclo con queso', precio: 3.0 },
    ],
  },
  {
    categoria: 'Parrilladas',
    platos: [
      {
        nombre: 'Parrillada Shangrila',
        descripcion: 'Costillas, chorizo y morcilla al carbón, con mote y curtido',
        precio: 12.5,
        destacado: true,
        // PLACEHOLDER Nivel 2 (banco de fotos con licencia comercial, Pexels) —
        // foto de parrillada mixta (costillas, chorizo, brochetas), colores
        // vibrantes acordes al tono "casual y enérgico" de la marca. Reemplazar
        // con foto real del cliente.
        imagen:
          'https://images.pexels.com/photos/33233601/pexels-photo-33233601.jpeg?auto=compress&cs=tinysrgb&w=400&fm=webp',
        calificacion: 5,
        tipo: 'Más pedido',
      },
      {
        nombre: 'Churrasco a la parrilla',
        descripcion: 'Con papas fritas, ensalada y huevo',
        precio: 9.5,
        // PLACEHOLDER Nivel 2 — foto de churrasco en tiras con papas fritas y
        // guarnición, coherente con el plato.
        imagen:
          'https://images.pexels.com/photos/28992200/pexels-photo-28992200.jpeg?auto=compress&cs=tinysrgb&w=400&fm=webp',
        calificacion: 5,
      },
      {
        nombre: 'Pollo a la brasa',
        descripcion: 'Cuarto de pollo, con papas y ensalada',
        precio: 7.5,
        // PLACEHOLDER Nivel 2 — foto de cuarto de pollo asado con papas y
        // ensalada, coherente con el plato.
        imagen:
          'https://images.pexels.com/photos/34110271/pexels-photo-34110271.jpeg?auto=compress&cs=tinysrgb&w=400&fm=webp',
        calificacion: 4,
      },
      {
        nombre: 'Brochetas mixtas',
        descripcion: 'Res, pollo y chorizo, con arroz',
        precio: 8.0,
        // PLACEHOLDER Nivel 2 — foto de brochetas a la parrilla, coherente con el plato.
        imagen:
          'https://images.pexels.com/photos/7866189/pexels-photo-7866189.jpeg?auto=compress&cs=tinysrgb&w=400&fm=webp',
        calificacion: 4,
      },
    ],
  },
  {
    categoria: 'Bebidas',
    platos: [
      { nombre: 'Jugo natural del día', precio: 1.75 },
      { nombre: 'Gaseosa', precio: 1.5 },
      { nombre: 'Cerveza nacional', precio: 2.5 },
    ],
  },
  {
    categoria: 'Postres',
    platos: [{ nombre: 'Flan de la casa', precio: 2.5 }],
  },
];

// PLACEHOLDER — horario de referencia; confirmar con el cliente.
export const horariosShangrila: HorarioDia[] = [
  { dia: 'Martes a Domingo', horario: '12:00 – 21:00' },
  { dia: 'Lunes', horario: 'Cerrado' },
];

// PLACEHOLDER — historia de referencia (tono casual/enérgico pedido por Leo);
// reemplazar con la historia real del negocio cuando la entregue.
export const historiaShangrila: HistoriaNegocio = {
  texto:
    'En Shangrila el carbón nunca se apaga: parrilladas servidas al punto, ' +
    'porciones generosas y ese ambiente de fin de semana en familia que se ' +
    'siente apenas llegas. Nacimos en el Valle de los Chillos con una idea ' +
    'simple — la parrillada de siempre, sin vueltas, directo del carbón a tu mesa.',
};

// PLACEHOLDER — Nivel 2 (banco de fotos con licencia comercial, Pexels), usado
// porque el cliente no tiene todavía fotos digitales propias. Cada foto fue
// verificada por su descripción/metadata como plato de parrilla/asado real
// (no comida genérica ni de otro rubro) — reemplazar por fotos reales del
// local/platos apenas estén disponibles (ver CLAUDE.md "Manejo de imágenes").
// (2026-07) Fotos renovadas: la foto original (ID 410648, oscura y de tono
// "fine dining") no calzaba con el tono "casual y enérgico" declarado en
// brandkit.shangrila.ts, y se repetía 3 veces (hero + galería + menú) — ver
// CLAUDE.md, regla de tratamiento de color/mood consistente con el tono del
// negocio. Además la foto ID 361184 usada aquí y en el menú estaba caída
// (HTTP 404). Se reemplazaron con 3 fotos distintas, brillantes y vibrantes.
export const galeriaShangrila: FotoGaleria[] = [
  {
    src: 'https://images.pexels.com/photos/32986488/pexels-photo-32986488.jpeg?auto=compress&cs=tinysrgb&w=900&fm=webp',
    alt: 'Brochetas mixtas a la parrilla con papas fritas y encurtidos (foto de banco, placeholder temporal)',
  },
  {
    src: 'https://images.pexels.com/photos/35100315/pexels-photo-35100315.jpeg?auto=compress&cs=tinysrgb&w=900&fm=webp',
    alt: 'Bife a la parrilla con vegetales (foto de banco, placeholder temporal)',
  },
];

// PLACEHOLDER Nivel 2 — foto de pollo y brochetas a la parrilla sobre tabla de
// madera, luz natural, tono cálido y enérgico coherente con la marca.
export const heroFotoShangrila =
  'https://images.pexels.com/photos/38399759/pexels-photo-38399759.jpeg?auto=compress&cs=tinysrgb&w=1600&fm=webp';

// PLACEHOLDER — el cliente no tiene todavía reseñas reales de Google para
// citar. Nombres ecuatorianos creíbles como placeholder (mismo criterio
// autorizado para El Fogón) — reemplazar por citas reales apenas existan
// reseñas verificables, nunca presentar esto como reseñas reales.
export const testimoniosShangrila: Testimonio[] = [
  {
    nombre: 'Andrés Salazar',
    texto:
      'La parrillada Shangrila no falla — llega calientita y las porciones son ' +
      'bien generosas. Nuestro plan de casi todos los sábados.',
    calificacion: 5,
  },
  {
    nombre: 'Gabriela Endara',
    texto: 'El churrasco es mi pedido de siempre. Piden por WhatsApp y llega rapidísimo.',
    calificacion: 5,
  },
];
