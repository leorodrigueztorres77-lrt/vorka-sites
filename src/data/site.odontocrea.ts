import type { SiteConfig } from './types';
import { brandKitOdontocrea } from './brandkit.odontocrea';

// Capa 3 — Odontocrea (consultorio odontológico, Quito).
// Variante Capa 2 elegida: V2 "Reddent" — los servicios completos son el
// argumento. Confirmado ahora con capturas reales de instagram.com/odontocrea.uio
// (compartidas por Leo, 2026-07-19): bio "Tu Sonrisa y salud Oral es nuestra
// prioridad", dos sedes (MATRIZ Libertad de Chillogallo + SUCURSAL La
// Magdalena), highlights "Piezas incluidas / Ortodoncia / Cirugía Apical",
// contenido de urgencias odontológicas y odontopediatría — amplitud de
// servicios + cercanía siguen siendo el argumento correcto, no un ángulo
// tecnológico puntual ni un profesional-estrella único.
//
// Número de WhatsApp real (de la bio de Instagram): 0983591828 — también
// aparece como contacto directo de "Dr. Cristian Egas" en una publicación.
// Segundo número visible en bio: 0987057462 (no usado como principal, pero
// dejarlo anotado por si Leo prefiere ese). Verificar con el cliente que siga
// activo antes de publicar — dato leído de una captura de pantalla, no
// confirmado directamente por el negocio a Vorka.
const TELEFONO_WHATSAPP_IG = '593983591828';

// DIRECCIÓN — leída de una publicación de Instagram (captura de pantalla),
// sede "MATRIZ Libertad de Chillogallo": "Carlos Freile y pasaje Mercedes
// Cadena Lt. 301, La Libertad de Chillogallo, Quito". Existe una segunda sede
// ("SUCURSAL La Magdalena") sin dirección exacta visible en las capturas.
// Confirmar ambas direcciones con el cliente antes de publicar.
export const siteConfigOdontocrea: SiteConfig = {
  negocioSlug: 'odontocrea',
  nombre: 'Odontocrea',
  tagline: 'Tu sonrisa y salud oral, nuestra prioridad — con sedes en Chillogallo y La Magdalena',
  ciudad: 'Quito, Ecuador',
  direccion: 'Carlos Freile y pasaje Mercedes Cadena Lt. 301, La Libertad de Chillogallo, Quito (sede matriz)',
  telefonoWhatsApp: TELEFONO_WHATSAPP_IG,
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
