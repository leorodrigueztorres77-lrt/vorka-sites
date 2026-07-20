// brand-kit-starter — Estetic Dent (consultorio odontológico, Quito).
// ACTUALIZADO 2026-07-19 con identidad real: Leo compartió capturas de
// instagram.com/esteticdent.uio y el negocio SÍ tiene marca propia — el kit
// grafito/teal-esmeralda anterior era un placeholder inventado (además de
// estar basado en una dirección incorrecta, ver site.esteticdent.ts) y queda
// reemplazado por brand-kit-starter paso 3. El logo real es un óvalo azul
// marino oscuro con el wordmark "ESTETIC DENT" en blanco y una línea
// dorada/mostaza fina debajo; las piezas gráficas promocionales (ofertas,
// avisos, CTAs) usan predominantemente naranja/coral como color de énfasis —
// por eso el acento real es naranja, no el dorado decorativo del logo, que
// aparece solo como detalle menor. Sigue siendo naturalmente distinto del
// kit de Odontocrea (teal/morado).
// Valores hex exactos son una lectura aproximada de las capturas, no un
// archivo de marca oficial — confirmar con el cliente si tiene el logo en
// vectorial con la paleta exacta antes de producción final.
export const brandKitEsteticdent = {
  paleta: {
    primario: '#122B54', // azul marino oscuro del logo real
    acento: '#F2703C', // naranja/coral — color dominante en sus piezas promocionales reales
    texto: '#1C232E', // azul-gris muy oscuro, casi negro, coherente con el marino primario
  },
  tipografia: {
    titulos: "'Manrope', sans-serif",
    texto: "'Inter', sans-serif",
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&family=Inter:wght@400;500;600&display=swap',
  },
  wordmark: {
    tipo: 'tipografico' as const,
    nota: 'Nombre del negocio en Manrope 800, color primario (azul marino real) — el cliente ya tiene un logo propio (óvalo azul marino + línea dorada) que se puede incorporar cuando entregue el archivo original, en vez de quedarse solo con wordmark.',
  },
};
