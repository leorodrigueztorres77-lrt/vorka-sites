// Identidad propia de VORKA (la agencia) — ver CLAUDE.md "Identidad de marca
// — VORKA". Exclusiva de este sitio (vorka.io); nunca reutilizar esta paleta
// ni esta tipografía en la web de un cliente.
import type { SiteConfig } from './types';

export const siteConfigVorka: SiteConfig = {
  negocioSlug: 'vorka',
  nombre: 'VORKA',
  tagline: 'Think Smart, Move Fast.',
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
  fuentes: {
    titulos: "'Poppins', sans-serif",
    texto: "'Montserrat', sans-serif",
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Montserrat:wght@300;400;500;600;700&display=swap',
  },
  seo: {
    // SEO local (corrección V2 de Leo 2026-07): título con precio de entrada
    // y descripción orientada a beneficio + ciudad.
    tituloDefault: 'Vorka — Agencia digital en Ecuador | Webs profesionales desde $350',
    descripcionDefault:
      'Creamos webs profesionales para tu negocio en Quito y Ecuador. Entrega en días, desde $350. Automatización de ventas por WhatsApp con Ordercash.',
  },
  webhookContactoUrl: '',
};

export const ORDERCASH_URL = 'https://ordercash.app';
