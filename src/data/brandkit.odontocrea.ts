// brand-kit-starter — Odontocrea (consultorio odontológico, Quito).
// ACTUALIZADO 2026-07-19 con identidad real: Leo compartió capturas de
// instagram.com/odontocrea.uio y el negocio SÍ tiene marca propia — el kit
// verde salvia/terracota anterior era un placeholder inventado y queda
// reemplazado por brand-kit-starter paso 3 ("si SÍ tiene identidad, usa esos
// elementos reales"). El logo real es una insignia circular turquesa/teal con
// ícono de persona + diente; las piezas gráficas promocionales usan un
// morado/magenta como color secundario de énfasis — no verde salvia ni
// terracota, así que sigue siendo naturalmente distinto del kit de Estetic
// Dent (grafito/teal-esmeralda), sin que haya sido necesario forzarlo.
// Los valores hex exactos son una lectura aproximada de las capturas (no un
// archivo de marca oficial) — confirmar con el cliente antes de producción
// final si se dispone del logo en vectorial/con paleta exacta.
//
// AJUSTE 2026-07-20 (spec SALUD, "Calidad general" — contraste AA): el
// primario y el acento leídos directo de Instagram no pasaban WCAG AA en los
// usos reales de Capa 2 — primario (#0EA5B5) como texto/fondo con blanco
// rendía ~2.97:1 (Header, HeroSplit, botones, ServiciosTabs, StatsFila...);
// acento (#7C3AED) combinado con --color-texto oscuro (el patrón que usan
// HeroProfesional/HeroConfianza/TeamSection/ServiciosFiltrable para su
// badge/avatar) rendía ~2.57:1. Ambos se oscurecen/aclaran dentro del mismo
// tono (teal más profundo, morado más claro) hasta pasar 4.5:1 — no es un
// cambio de identidad, es la misma paleta ajustada a un nivel usable.
export const brandKitOdontocrea = {
  paleta: {
    primario: '#0A7480', // turquesa/teal del logo, oscurecido para AA (blanco sobre esto: ~5.5:1)
    acento: '#A87FF5', // morado/magenta de piezas promocionales, aclarado para AA (texto oscuro sobre esto: ~4.9:1)
    texto: '#1B2B2E', // gris-verde muy oscuro, casi negro, coherente con el teal primario
  },
  tipografia: {
    titulos: "'Quicksand', sans-serif",
    texto: "'Nunito Sans', sans-serif",
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Quicksand:wght@600;700&family=Nunito+Sans:wght@400;500;600;700&display=swap',
  },
  wordmark: {
    tipo: 'tipografico' as const,
    nota: 'Nombre del negocio en Quicksand 700, color primario (teal real de marca) — el cliente ya tiene un ícono propio (insignia circular persona+diente) que se puede incorporar como logo real cuando entregue el archivo original, en vez de quedarse solo con wordmark.',
  },
};
