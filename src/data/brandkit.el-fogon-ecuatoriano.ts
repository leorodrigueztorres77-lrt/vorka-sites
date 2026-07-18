// brand-kit-starter — El Fogón Ecuatoriano (restaurante, Conocoto, Quito).
// Tono confirmado por el cliente: "cálido y tradicional". Paleta tomada de la
// tabla de CLAUDE.md ("Identidad visual para clientes sin marca definida" →
// Restaurante → Cálido/familiar/tradicional → tonos tierra), máximo 3 colores.
// No incluye símbolo/ícono: el "logo" es un wordmark tipográfico (nombre del
// negocio en la fuente de titulares), renderizado automáticamente por
// Header.astro a partir de --font-titulos / --color-primario. Un logo con
// símbolo gráfico es un servicio aparte, fuera de alcance de este skill.
//
// Paleta terracota confirmada en la reconstrucción "Savaro" de Leo, se
// mantiene sin cambios en esta segunda reconstrucción ("Umami", ver
// demo-el-fogon-ecuatoriano.astro) — solo cambia la tipografía de titulares:
// Playfair Display → Cormorant Garamond (itálica, para el tratamiento
// editorial del hero). `acento` es el terracota oscuro para botones/hover.
export const brandKitElFogonEcuatoriano = {
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
    nota: 'Nombre del negocio en Cormorant Garamond 700 itálica, color primario — sin ícono/símbolo.',
  },
};
