import type { SiteConfig } from './types';
import { brandKitElFogonEcuatoriano } from './brandkit.el-fogon-ecuatoriano';

// Capa 3 — El Fogón Ecuatoriano (Conocoto, Quito). Reemplaza la web anterior
// de Systeme.io (sin dominio propio ni menú digital).
//
// DATO CRÍTICO PENDIENTE: Leo no proporcionó un número de WhatsApp real (el
// mensaje original solo traía el texto literal "[teléfono real]"). El valor
// de abajo es un placeholder obviamente falso — NO PUBLICAR este sitio sin
// reemplazarlo primero, o el botón principal de "Pedir por WhatsApp" (el CTA
// más importante del sitio) llevará a un número inexistente.
const TELEFONO_PLACEHOLDER_PENDIENTE = '593000000000';

// TAGLINE PLACEHOLDER — la versión anterior ("Sabor de siempre, receta de
// casa") es exactamente el ejemplo de tagline genérica que el checklist de
// conversión de CLAUDE.md marca como FALLA ("podría ser cualquier restaurante
// de Ecuador"). Esta versión nombra el plato destacado real del menú
// (Hornado, ver restaurant.el-fogon-ecuatoriano.ts) y el barrio real
// (Conocoto) en vez de frases genéricas de calidez. Sigue siendo redactada
// por Vorka, no una cita real del cliente — confirmar con Leo/cliente antes
// de publicar.
export const siteConfigElFogon: SiteConfig = {
  negocioSlug: 'el-fogon-ecuatoriano',
  nombre: 'El Fogón Ecuatoriano',
  tagline: 'Hornado, llapingachos y fritada al estilo de casa en el corazón de Conocoto',
  ciudad: 'Conocoto, Quito',
  direccion: 'Charles Darwin, Casa #7, Conocoto, Quito',
  telefonoWhatsApp: TELEFONO_PLACEHOLDER_PENDIENTE,
  colores: brandKitElFogonEcuatoriano.paleta,
  fuentes: brandKitElFogonEcuatoriano.tipografia,
  mapaEmbedUrl:
    'https://www.google.com/maps?q=Charles+Darwin+Casa+%237%2C+Conocoto%2C+Quito%2C+Ecuador&output=embed',
  seo: {
    tituloDefault: 'El Fogón Ecuatoriano · Comida ecuatoriana en Conocoto, Quito',
    descripcionDefault:
      'Hornado, llapingachos y comida ecuatoriana tradicional en Conocoto. Pedidos por WhatsApp.',
  },
  webhookContactoUrl: '',
};
