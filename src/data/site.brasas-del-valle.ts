import type { SiteConfig } from './types';
import { brandKitBrasasValle } from './brandkit.brasas-del-valle';

// Capa 3 — Brasas del Valle (parrilla/asador, Valle de los Chillos, Quito).
// CLON DE DEMO con marca ficticia, derivado de Shangrila: sirve para mostrar
// el trabajo de Vorka sin usar la marca real de un negocio con cuyo dueño aún
// no se ha hablado. No es un cliente real ni un local real. Variante Capa 2:
// V2 "Restroo" (menú completo con tabs), la misma del demo original.
//
// Como es una marca inventada, el TELÉFONO y la DIRECCIÓN son ficticios a
// propósito (no apuntan a ningún negocio real). El teléfono es un placeholder
// obviamente falso: NO PUBLICAR como sitio activo con este número. Si esto se
// vuelve un cliente real, reemplazar por los datos verdaderos.
const TELEFONO_PLACEHOLDER_FICTICIO = '593000000000';

export const siteConfigBrasasValle: SiteConfig = {
  negocioSlug: 'brasas-del-valle',
  nombre: 'Brasas del Valle',
  tagline: 'Parrillada al carbón, servida caliente, en el corazón del Valle de los Chillos',
  ciudad: 'Valle de los Chillos, Quito',
  direccion: 'Av. Ilaló y De los Fresnos, Valle de los Chillos, Quito',
  telefonoWhatsApp: TELEFONO_PLACEHOLDER_FICTICIO,
  colores: brandKitBrasasValle.paleta,
  fuentes: brandKitBrasasValle.tipografia,
  mapaEmbedUrl:
    'https://www.google.com/maps?q=Av.+Ilal%C3%B3%2C+Valle+de+los+Chillos%2C+Quito%2C+Ecuador&output=embed',
  seo: {
    tituloDefault: 'Brasas del Valle · Parrilla en el Valle de los Chillos, Quito',
    descripcionDefault:
      'Parrillada al carbón, churrasco y pollo a la brasa en el Valle de los Chillos. Pedidos por WhatsApp.',
  },
  webhookContactoUrl: '',
};
