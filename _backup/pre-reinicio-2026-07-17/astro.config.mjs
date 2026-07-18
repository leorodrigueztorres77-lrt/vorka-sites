import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Pipeline de build/deploy: salida estática lista para Hostinger (Capa 1).
// site/base se ajustan por proyecto de cliente cuando se conoce el dominio final.
//
// Tailwind se agrega para la reconstrucción de El Fogón Ecuatoriano (estilo
// Savaro). applyBaseStyles:false porque el reset propio ya vive en
// src/styles/global.css (Capa 1) — evita que Preflight de Tailwind pise ese
// reset en páginas que no importan src/styles/tailwind.css.
export default defineConfig({
  output: 'static',
  build: {
    format: 'directory',
  },
  integrations: [tailwind({ applyBaseStyles: false })],
});
