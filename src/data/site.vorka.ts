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
    gris: '#666666',
  },
  // Fase 1 (rediseño 2026-07): Plus Jakarta Sans + Inter, auto-hospedadas en
  // public/fonts/vorka/ (ver Vorka/index.astro) — sin googleFontsUrl a
  // propósito, así BaseLayout no inyecta el <link> a fonts.googleapis.com.
  fuentes: {
    titulos: "'Plus Jakarta Sans', sans-serif",
    texto: "'Inter', sans-serif",
  },
  seo: {
    // SEO GTM (spec de Leo 2026-07): mensaje amplio para negocios locales.
    tituloDefault: 'Vorka — Webs profesionales para negocios locales en Ecuador',
    descripcionDefault:
      'Creamos la web de tu negocio en 5–7 días y la conectamos con ventas por WhatsApp y facturación electrónica SRI automática con Ordercash. Para cualquier negocio local en Ecuador.',
  },
  webhookContactoUrl: '',
};

export const ORDERCASH_URL = 'https://ordercash.app';
