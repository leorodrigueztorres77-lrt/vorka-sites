/** @type {import('tailwindcss').Config} */
// Capa 1 (infraestructura, no de un cliente): tokens genéricos de tipografía
// reutilizables por cualquier futura página que adopte Tailwind. Los colores
// exactos de El Fogón Ecuatoriano se aplican en la página con clases
// arbitrarias (bg-[#C1440E]) para no ensuciar este config compartido con
// tokens de un solo cliente (ver CLAUDE.md, Capa 3 vs Capa 1/2).
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
