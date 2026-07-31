// brand-kit-starter — Sabor de los Andes (restaurante de comida ecuatoriana,
// Conocoto, Quito). CLON DE DEMO con marca ficticia: derivado de El Fogón
// Ecuatoriano para poder mostrar el trabajo sin usar la marca real de un
// negocio con cuyo dueño Vorka aún no ha hablado. Mismo rubro, misma calidad
// de maqueta; solo cambia la identidad. No es un cliente real.
//
// Tono: "cálido y tradicional". Paleta tomada de la tabla de CLAUDE.md
// ("Identidad visual para clientes sin marca definida" → Restaurante →
// Cálido/familiar/tradicional → tonos tierra), máximo 3 colores. No incluye
// símbolo/ícono: el "logo" es un wordmark tipográfico (nombre del negocio en
// la fuente de titulares), renderizado por Header.astro a partir de
// --font-titulos / --color-primario. La paleta terracota y la tipografía
// (Cormorant Garamond itálica para titulares) son genéricas del rubro, no
// marca registrada — se conservan para que el clon luzca igual de pulido.
export const brandKitSaborAndes = {
  paleta: {
    primario: '#C1440E', // terracota
    acento: '#9B3510', // terracota oscuro — botones y estados hover
    texto: '#1A1A1A',
  },
  tipografia: {
    titulos: "'Cormorant Garamond', serif",
    texto: "'Inter', sans-serif",
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700;1,800&family=Inter:wght@400;500;600;700&display=swap',
  },
  wordmark: {
    tipo: 'tipografico' as const,
    nota: 'Nombre del negocio en Cormorant Garamond 700 itálica, color primario, sin ícono/símbolo.',
  },
};
