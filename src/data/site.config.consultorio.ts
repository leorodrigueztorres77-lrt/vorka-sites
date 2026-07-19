import type { SiteConfig } from './types';

// Capa 3 (placeholder) — demo-personalizer reemplaza estos valores con los
// del cliente real: nombre del profesional/consultorio, colores derivados de
// su marca (o de brand-kit-starter si no tiene una propia), contacto, etc.
// Paleta placeholder: azul-verde (teal), la opción "confianza clínica/moderna"
// de la tabla de brand-kit-starter en CLAUDE.md — nunca la Electric Blue de
// Vorka ni la de Ordercash.
export const siteConfigConsultorio: SiteConfig = {
  negocioSlug: 'nombre-del-consultorio',
  nombre: 'Nombre del Consultorio',
  tagline: 'Odontología integral para toda la familia',
  ciudad: 'Ciudad, Ecuador',
  direccion: 'Dirección de ejemplo 123',
  telefonoWhatsApp: '593999999999',
  email: 'contacto@ejemplo.com',
  colores: {
    primario: '#0E7C7B',
    acento: '#5FD4C4',
    texto: '#1F2D2D',
  },
  mapaEmbedUrl: '',
  seo: {
    tituloDefault: 'Nombre del Consultorio — Ciudad, Ecuador',
    descripcionDefault:
      'Descripción SEO de ejemplo: especialidad, ciudad y diferenciador del consultorio.',
  },
  webhookContactoUrl: '',
};
