import type { SiteConfig } from './types';
import { brandKitOdontocrea } from './brandkit.odontocrea';

// Capa 3 — Odontocrea (consultorio odontológico, Quito).
// Variante Capa 2 elegida: V2 "Reddent" — los servicios completos son el
// argumento. Encaja con lo único verificable sobre el negocio (búsqueda web):
// se presenta como clínica que ofrece "todas las especialidades... con
// calidez y calidad", además de tener presencia como "OdontoCrea Spa Clínica
// Dental" — el argumento de venta es la amplitud de servicios en un ambiente
// cercano, no un profesional-estrella ni un ángulo tecnológico puntual.
//
// DATO CRÍTICO PENDIENTE: no se pudo extraer un número de WhatsApp real desde
// Instagram/Facebook (ambos bloquean scraping no autenticado). Placeholder
// obviamente falso — NO PUBLICAR sin reemplazarlo.
const TELEFONO_PLACEHOLDER_PENDIENTE = '593000000002';

// DIRECCIÓN SIN VERIFICAR: no se encontró una dirección exacta en las
// fuentes consultadas — solo se confirmó "Quito, Ecuador" como ciudad.
// Confirmar con el cliente antes de publicar.
export const siteConfigOdontocrea: SiteConfig = {
  negocioSlug: 'odontocrea',
  nombre: 'Odontocrea',
  tagline: 'Todas las especialidades odontológicas, con la calidez de una clínica que te conoce',
  ciudad: 'Quito, Ecuador',
  direccion: 'Dirección por confirmar con el cliente',
  telefonoWhatsApp: TELEFONO_PLACEHOLDER_PENDIENTE,
  colores: brandKitOdontocrea.paleta,
  fuentes: brandKitOdontocrea.tipografia,
  mapaEmbedUrl: '',
  seo: {
    tituloDefault: 'Odontocrea — Todas las especialidades odontológicas en Quito',
    descripcionDefault:
      'Clínica dental en Quito con todas las especialidades y atención cercana. Agenda tu cita por WhatsApp.',
  },
  webhookContactoUrl: '',
};
