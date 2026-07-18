import type { SiteConfig } from './types';

// Capa 3 (placeholder) — demo-personalizer reemplaza estos valores con los
// del cliente real: nombre, colores derivados de su marca, contacto, etc.
// Los colores NO son los de Vorka ni los de Ordercash — son un placeholder
// neutro hasta que se defina la identidad del negocio del cliente.
export const siteConfig: SiteConfig = {
  negocioSlug: 'nombre-del-restaurante',
  nombre: 'Nombre del Restaurante',
  tagline: 'Descripción corta del negocio',
  ciudad: 'Ciudad, Ecuador',
  direccion: 'Dirección de ejemplo 123',
  telefonoWhatsApp: '593999999999',
  email: 'contacto@ejemplo.com',
  colores: {
    primario: '#C0392B',
    acento: '#F1C40F',
    texto: '#2B2B2B',
  },
  mapaEmbedUrl: '',
  seo: {
    tituloDefault: 'Nombre del Restaurante — Ciudad, Ecuador',
    descripcionDefault:
      'Descripción SEO de ejemplo: tipo de cocina, ciudad y diferenciador del negocio.',
  },
  webhookContactoUrl: '',
};
