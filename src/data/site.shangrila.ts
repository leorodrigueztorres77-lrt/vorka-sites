import type { SiteConfig } from './types';
import { brandKitShangrila } from './brandkit.shangrila';

// Capa 3 — Shangrila (parrilla/asador, Valle de los Chillos, Quito).
// Variante Capa 2 elegida por Leo: V2 "Restroo" (menú completo con tabs).
//
// DATO CRÍTICO PENDIENTE: no se proporcionó un número de WhatsApp real. El
// valor de abajo es un placeholder obviamente falso — NO PUBLICAR sin
// reemplazarlo, o el CTA principal "Pedir por WhatsApp" llevará a un número
// inexistente (mismo patrón usado en site.el-fogon-ecuatoriano.ts).
const TELEFONO_PLACEHOLDER_PENDIENTE = '593000000000';

// DIRECCIÓN SIN VERIFICAR: Google Maps (link compartido por Leo) no expuso la
// dirección en texto plano al momento de la consulta; este dato viene de una
// búsqueda web que asocia el nombre del negocio a "Valle de los Chillos - Los
// Cisnes OE10-180 y San Juan de Dios, Quito". Confirmar con el cliente antes
// de publicar — si es incorrecta, el mapa y el botón "Cómo llegar" quedan mal.
export const siteConfigShangrila: SiteConfig = {
  negocioSlug: 'shangrila',
  nombre: 'Shangrila',
  tagline: 'Parrillada al carbón, servida caliente, en el corazón del Valle de los Chillos',
  ciudad: 'Valle de los Chillos, Quito',
  direccion: 'Los Cisnes OE10-180 y San Juan de Dios, Valle de los Chillos, Quito',
  telefonoWhatsApp: TELEFONO_PLACEHOLDER_PENDIENTE,
  colores: brandKitShangrila.paleta,
  fuentes: brandKitShangrila.tipografia,
  mapaEmbedUrl:
    'https://www.google.com/maps?q=Los+Cisnes+OE10-180+y+San+Juan+de+Dios%2C+Valle+de+los+Chillos%2C+Quito%2C+Ecuador&output=embed',
  seo: {
    tituloDefault: 'Shangrila · Parrilla en el Valle de los Chillos, Quito',
    descripcionDefault:
      'Parrillada al carbón, churrasco y pollo a la brasa en el Valle de los Chillos. Pedidos por WhatsApp.',
  },
  webhookContactoUrl: '',
};
