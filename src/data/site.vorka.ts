// Identidad propia de VORKA (la agencia) — ver CLAUDE.md "Identidad de marca
// — VORKA". Exclusiva de este sitio (vorka.io); nunca reutilizar esta paleta
// ni esta tipografía en la web de un cliente.
import type { SiteConfig } from './types';

export const siteConfigVorka: SiteConfig = {
  negocioSlug: 'vorka',
  nombre: 'VORKA',
  tagline: 'Piensa rápido. Ejecuta más rápido.',
  ciudad: 'Ecuador',
  direccion: 'Atención remota',
  telefonoWhatsApp: '593997109978',
  colores: {
    primario: '#39D353',
    acento: '#1DA1F2',
    texto: '#FFFFFF',
    fondo: '#1A1A1A',
    fondoAlterno: '#333333',
    // Sprint 1 T3a (2026-07-23): #666 sobre el fondo #1A1A1A daba ~3:1 —
    // falla AA para texto normal (mín. 4.5:1). #A1A1AA da ~6.7:1. Este token
    // alimenta labels de stats, valores de la comparativa y textos del
    // portafolio, todos sobre fondo oscuro.
    gris: '#A1A1AA',
  },
  // Fase 1 (rediseño 2026-07): Plus Jakarta Sans + Inter, auto-hospedadas en
  // public/fonts/vorka/ (ver Vorka/index.astro) — sin googleFontsUrl a
  // propósito, así BaseLayout no inyecta el <link> a fonts.googleapis.com.
  fuentes: {
    titulos: "'Plus Jakarta Sans', sans-serif",
    texto: "'Inter', sans-serif",
  },
  seo: {
    // SEO técnico (Sprint 3 T3): title + description orientados a las
    // búsquedas objetivo "diseño web Ecuador" y "páginas web para negocios
    // Quito", sin keyword stuffing — la keyword abre el título y la primera
    // frase de la descripción, que es lo que Google pondera.
    tituloDefault: 'Diseño web en Ecuador: páginas web para negocios en Quito | Vorka',
    descripcionDefault:
      'Diseño de páginas web para negocios locales en Quito y todo Ecuador desde $249: listas en 5 a 7 días, optimizadas para móvil, con ventas por WhatsApp y factura SRI automática con Ordercash.',
  },
  webhookContactoUrl: '',
};

export const ORDERCASH_URL = 'https://ordercash.app';
