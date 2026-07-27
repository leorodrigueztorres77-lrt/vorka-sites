import type { SiteConfig } from './types';
import { brandKitSaborAndes } from './brandkit.sabor-de-los-andes';

// Capa 3 — Sabor de los Andes (comida ecuatoriana, Conocoto, Quito).
// CLON DE DEMO con marca ficticia, derivado de El Fogón Ecuatoriano: sirve
// para mostrar el trabajo de Vorka sin usar la marca real de un negocio con
// cuyo dueño aún no se ha hablado. No es un cliente real ni un local real.
//
// Como es una marca inventada, el TELÉFONO y la DIRECCIÓN son ficticios a
// propósito (no apuntan a ningún negocio real). Si algún día esto se convierte
// en un cliente real, reemplazar por los datos verdaderos — igual que en el
// demo original. El teléfono es un placeholder obviamente falso: NO PUBLICAR
// como sitio activo con este número.
const TELEFONO_PLACEHOLDER_FICTICIO = '593000000000';

export const siteConfigSaborAndes: SiteConfig = {
  negocioSlug: 'sabor-de-los-andes',
  nombre: 'Sabor de los Andes',
  tagline: 'Hornado, llapingachos y fritada al estilo de casa en el corazón de Conocoto',
  ciudad: 'Conocoto, Quito',
  direccion: 'Av. Abdón Calderón N4-52 y Los Arupos, Conocoto, Quito',
  telefonoWhatsApp: TELEFONO_PLACEHOLDER_FICTICIO,
  colores: brandKitSaborAndes.paleta,
  fuentes: brandKitSaborAndes.tipografia,
  mapaEmbedUrl:
    'https://www.google.com/maps?q=Av.+Abd%C3%B3n+Calder%C3%B3n%2C+Conocoto%2C+Quito%2C+Ecuador&output=embed',
  seo: {
    tituloDefault: 'Sabor de los Andes · Comida ecuatoriana en Conocoto, Quito',
    descripcionDefault:
      'Hornado, llapingachos y comida ecuatoriana tradicional en Conocoto. Pedidos por WhatsApp.',
  },
  webhookContactoUrl: '',
};
