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

/**
 * Formatea un número ecuatoriano ("593998308906") para mostrar como
 * "+593 99 830 8906" — código de país + celular local de 9 dígitos en
 * grupos 2-3-4. Todos los clientes de Vorka son negocios ecuatorianos, así
 * que este formato aplica de forma genérica (Capa 1), no es específico de
 * un cliente. Si el número no calza con el patrón esperado (593 + 9
 * dígitos), devuelve el original con "+" para no romper el render.
 */
export function formatearTelefonoEC(phone: string): string {
  const digits = phone.replace(/[^\d]/g, '');
  const codigoPais = digits.slice(0, 3);
  const local = digits.slice(3);
  if (codigoPais !== '593' || local.length !== 9) return `+${digits}`;
  return `+${codigoPais} ${local.slice(0, 2)} ${local.slice(2, 5)} ${local.slice(5)}`;
}
