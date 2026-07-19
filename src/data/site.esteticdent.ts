import type { SiteConfig } from './types';
import { brandKitEsteticdent } from './brandkit.esteticdent';

// Capa 3 — Estetic Dent (consultorio odontológico, Quito, sector Fundeporte).
// Variante Capa 2 elegida: V3 "Vervedent" — modernidad y equipamiento. Encaja
// con lo único verificable sobre el negocio (búsqueda web, ver fuentes en el
// resumen entregado a Leo): "estética dental" + 30 años de trayectoria + un
// equipo de especialistas (no un solo profesional-estrella), lo que descarta
// V1. La variante V3 vende precisión y tecnología, coherente con el nombre
// "Estetic" (resultado estético, moderno) sin necesitar una foto de un
// profesional específico — evita el riesgo de "doctor genérico" de stock.
//
// DATO CRÍTICO PENDIENTE: no se pudo extraer un número de WhatsApp real desde
// Instagram/Facebook (ambos bloquean scraping no autenticado). Placeholder
// obviamente falso — NO PUBLICAR sin reemplazarlo.
const TELEFONO_PLACEHOLDER_PENDIENTE = '593000000001';

// DIRECCIÓN SIN VERIFICAR: una búsqueda web asocia el nombre del negocio a
// "Fundeporte" (complejo deportivo conocido en el sector de Iñaquito/El
// Batán, Quito) a través del nombre de su página de Facebook ("Estetic Dent
// | Fundeporte"), pero no se confirmó una dirección exacta en texto plano.
// Confirmar con el cliente antes de publicar.
export const siteConfigEsteticdent: SiteConfig = {
  negocioSlug: 'esteticdent',
  nombre: 'Estetic Dent',
  tagline: 'Odontología de precisión y estética, con 30 años de trayectoria en Quito',
  ciudad: 'Quito, Ecuador',
  direccion: 'Sector Fundeporte, Quito (dirección exacta por confirmar con el cliente)',
  telefonoWhatsApp: TELEFONO_PLACEHOLDER_PENDIENTE,
  colores: brandKitEsteticdent.paleta,
  fuentes: brandKitEsteticdent.tipografia,
  mapaEmbedUrl: '',
  seo: {
    tituloDefault: 'Estetic Dent — Odontología estética en Quito',
    descripcionDefault:
      'Estética dental y odontología de precisión en Quito, con 30 años de trayectoria y equipo especializado. Agenda tu cita por WhatsApp.',
  },
  webhookContactoUrl: '',
};
