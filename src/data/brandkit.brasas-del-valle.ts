// brand-kit-starter — Brasas del Valle (restaurante/parrilla, Valle de los Chillos, Quito).
// CLON DE DEMO con marca ficticia, derivado de Shangrila para mostrar el
// trabajo sin usar la marca real de un negocio con cuyo dueño aún no se ha
// hablado. La paleta y tipografía son genéricas del rubro (no marca del
// dueño); se conservan para que el clon luzca igual de pulido.
// Tono: "casual y enérgico". Paleta tomada de la tabla de
// CLAUDE.md ("Identidad visual para clientes sin marca definida" → Restaurante
// → Casual/moderno/enérgico → acento naranja o coral sobre neutros claros),
// máximo 3 colores. No incluye símbolo/ícono: el "logo" es un wordmark
// tipográfico (nombre del negocio en la fuente de titulares), renderizado
// automáticamente por Header.astro a partir de --font-titulos / --color-primario.
// Un logo con símbolo gráfico es un servicio aparte, fuera de alcance de
// brand-kit-starter.
//
// Tipografía elegida a propósito distinta de El Fogón (Cormorant Garamond,
// tono elegante/tradicional): Fredoka (redondeada, con peso y energía) casa
// mejor con el tono casual/enérgico pedido para Brasas del Valle. Ninguna de las dos
// es Poppins/Montserrat (identidad exclusiva de Vorka) ni las fuentes de
// Ordercash — regla de CLAUDE.md.
export const brandKitBrasasValle = {
  paleta: {
    primario: '#E85D2C', // naranja-coral vibrante
    acento: '#C2410C', // coral oscuro — botones y estados hover
    texto: '#241A14', // neutro cálido oscuro, no negro puro
  },
  tipografia: {
    titulos: "'Fredoka', sans-serif",
    texto: "'Work Sans', sans-serif",
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Work+Sans:wght@400;500;600;700&display=swap',
  },
  wordmark: {
    tipo: 'tipografico' as const,
    nota: 'Nombre del negocio en Fredoka 700, color primario — sin ícono/símbolo.',
  },
};
