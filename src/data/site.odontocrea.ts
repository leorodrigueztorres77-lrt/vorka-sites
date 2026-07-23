import type { Sede, SiteConfig } from './types';
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
// Segunda sede (spec SALUD 2026-07-20, "Bloque de confianza local" —
// multi-sede). Solo la zona ("La Magdalena") está confirmada por captura de
// Instagram — sin dirección exacta ni horario propio todavía. `direccion`
// muestra únicamente el dato ya confirmado (la zona), sin ningún paréntesis
// "por confirmar" visible al paciente (spec SALUD, "Fugas de placeholder");
// ese caveat vive solo aquí, en el comentario interno. Confirmar la dirección
// exacta con el cliente antes de publicar la entrega final.
const sedeLaMagdalena: Sede = {
  nombre: 'Sucursal La Magdalena',
  direccion: 'La Magdalena, Quito',
};

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
  sedesAdicionales: [sedeLaMagdalena],
  // Handle real confirmado por captura de Instagram (2026-07-19) — ver
  // consultorio.odontocrea.ts. Sin googleBusinessUrl/ratingGoogle: ninguna
  // calificación de Google está confirmada todavía, así que LocationMap no
  // muestra ningún badge de rating (spec SALUD, "nunca inventar una
  // calificación").
  instagramUrl: 'https://www.instagram.com/odontocrea.uio/',
  seo: {
    tituloDefault: 'Odontocrea — Todas las especialidades odontológicas en Quito',
    descripcionDefault:
      'Clínica dental en Quito con todas las especialidades y atención cercana. Agenda tu cita por WhatsApp.',
  },
  webhookContactoUrl: '',
};
