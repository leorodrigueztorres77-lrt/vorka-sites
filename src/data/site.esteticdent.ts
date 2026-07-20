import type { SiteConfig } from './types';
import { brandKitEsteticdent } from './brandkit.esteticdent';

// Capa 3 — Estetic Dent (consultorio odontológico, Quito).
// Variante Capa 2 elegida: V3 "Vervedent" — modernidad y equipamiento. Sigue
// encajando con datos ahora CONFIRMADOS vía capturas reales de
// instagram.com/esteticdent.uio (compartidas por Leo, 2026-07-19): bio
// "Especialistas en ortodoncia, endodoncia, odontopediatría y cirugía oral",
// equipo de varios especialistas (ej. Dra. Mishell A. Chamorro, endodoncia) —
// no un solo profesional-estrella, lo que sigue descartando V1. Diferenciadores
// reales encontrados en publicaciones: rayos X digital gratis en cada consulta,
// implantes de alta gama, urgencias dentales 24h, certificados dentales
// convalidables con el IESS, ayuda con formularios de reembolso de seguros.
//
// CORRECCIÓN IMPORTANTE DE UBICACIÓN: la dirección anterior (sector
// Fundeporte, Iñaquito/El Batán) era un dato de búsqueda web INCORRECTO. La
// bio real dice "Odontólogo Sur de Quito 📍" y una publicación de "Cómo
// llegar" muestra el mapa sobre "Av. Quitumbe Ñan" — el negocio está en
// Quitumbe (sur de Quito), no en el sector Fundeporte del norte. Confirmar
// dirección exacta con el cliente, pero el sector correcto ya está verificado.
//
// TELÉFONO REAL confirmado 2026-07-19: una publicación de Odontopediatría
// ("¡AGENDA TU CITA! 0998308906") muestra el número completo — coincide con
// el parcial "0998308..." visto antes cortado en otra publicación. La bio
// también expone un link corto de WhatsApp Business
// (wa.me/message/DQUTFYM2WTWWG1) que debería apuntar al mismo número.
// Verificar que siga activo antes de publicar — dato leído de una captura de
// pantalla, no confirmado directamente por el negocio a Vorka.
const TELEFONO_WHATSAPP_IG = '593998308906';

export const siteConfigEsteticdent: SiteConfig = {
  negocioSlug: 'esteticdent',
  nombre: 'Estetic Dent',
  tagline: 'Especialistas en ortodoncia, endodoncia, odontopediatría y cirugía oral — al sur de Quito',
  ciudad: 'Quito, Ecuador',
  direccion: 'Quitumbe, sur de Quito (dirección exacta por confirmar con el cliente)',
  telefonoWhatsApp: TELEFONO_WHATSAPP_IG,
  colores: brandKitEsteticdent.paleta,
  fuentes: brandKitEsteticdent.tipografia,
  mapaEmbedUrl: '',
  seo: {
    tituloDefault: 'Estetic Dent — Odontología estética en Quito',
    descripcionDefault:
      'Especialistas en ortodoncia, endodoncia, odontopediatría y cirugía oral al sur de Quito. Rayos X digital gratis en cada consulta. Agenda tu cita por WhatsApp.',
  },
  webhookContactoUrl: '',
};
