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
  // Logo real entregado por Leo como archivo (2026-07-21, originales/Logo.jpg,
  // 165x181px) — ver README.md de public/images/esteticdent/ para el proceso
  // de recorte circular + upscale (sin IA generativa, para no distorsionar el
  // wordmark exacto de la marca).
  logoUrl: '/images/esteticdent/logo-estetic-dent.webp',
  // Renditions @2x/@4x para el símbolo circular de 40px del header — evita
  // servir el maestro de 660x724 en un render tan pequeño.
  logoSrcset: {
    src2x: '/images/esteticdent/logo-estetic-dent-80.webp',
    src4x: '/images/esteticdent/logo-estetic-dent-160.webp',
  },
  tagline: 'Especialistas en ortodoncia, endodoncia, odontopediatría y cirugía oral — al sur de Quito',
  ciudad: 'Quito, Ecuador',
  // Solo zona, sin dirección exacta confirmada todavía (ver comentario de
  // arriba) — nunca renderizar el caveat "por confirmar" en el sitio público
  // (spec SALUD 2026-07-20, "Fugas de placeholder"): si un dato opcional no
  // está confirmado, se muestra solo lo que sí se sabe (la zona), no una nota
  // parentética visible al paciente.
  direccion: 'Quitumbe, sur de Quito',
  telefonoWhatsApp: TELEFONO_WHATSAPP_IG,
  colores: brandKitEsteticdent.paleta,
  fuentes: brandKitEsteticdent.tipografia,
  // FASE 3.5 (spec de diseño de Leo): embed de la ZONA (Av. Quitumbe Ñan, ver
  // comentario de dirección arriba), no de la dirección exacta del local —
  // esa todavía no está confirmada. Formato "google.com/maps?q=...&output=embed"
  // no requiere API key. Reemplazar por el embed de la ubicación exacta en
  // cuanto el cliente la confirme (comentario interno, nunca un caveat visible
  // en el sitio — spec SALUD 2026-07-20, "Fugas de placeholder").
  mapaEmbedUrl: 'https://www.google.com/maps?q=Av.+Quitumbe+%C3%91an,+Quito,+Ecuador&output=embed',
  // Handle real confirmado por captura de Instagram (2026-07-19) — ver
  // consultorio.esteticdent.ts. Sin googleBusinessUrl/ratingGoogle: ninguna
  // calificación de Google está confirmada todavía (spec SALUD, "nunca
  // inventar una calificación").
  instagramUrl: 'https://www.instagram.com/esteticdent.uio/',
  seo: {
    tituloDefault: 'Estetic Dent — Odontología estética en Quito',
    descripcionDefault:
      'Especialistas en ortodoncia, endodoncia, odontopediatría y cirugía oral al sur de Quito. Rayos X digital gratis en cada consulta. Agenda tu cita por WhatsApp.',
  },
  webhookContactoUrl: '',
};
