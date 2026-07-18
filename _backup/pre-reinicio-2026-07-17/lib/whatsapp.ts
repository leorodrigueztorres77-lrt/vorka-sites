// Capa 1 — lógica reutilizable de WhatsApp con tracking, para cualquier vertical.

export interface WhatsAppLinkOptions {
  /** Número en formato internacional sin signos, ej. "593999999999" */
  phone: string;
  /** Mensaje pre-cargado, ej. "Hola, quiero pedir Ceviche Mixto" */
  message: string;
  /** Slug del negocio, usado en el parámetro de tracking utm_source */
  negocioSlug: string;
}

/**
 * Construye el link de WhatsApp con parámetros de tracking estándar de Vorka:
 * ?utm_source=web&negocio={slug}
 */
export function buildWhatsAppLink({ phone, message, negocioSlug }: WhatsAppLinkOptions): string {
  const cleanPhone = phone.replace(/[^\d]/g, '');
  const encodedMessage = encodeURIComponent(message);
  const base = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
  return `${base}&utm_source=web&negocio=${encodeURIComponent(negocioSlug)}`;
}
