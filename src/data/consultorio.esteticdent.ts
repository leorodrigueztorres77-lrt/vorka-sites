import type { CategoriaServicios, FotoGaleria, HorarioDia, ItemTecnologia, ParAntesDespues, PerfilProfesional, Testimonio } from './types';

// Capa 3 — Estetic Dent. Los precios/duraciones de abajo siguen siendo
// relleno placeholder (el cliente no entregó un catálogo por escrito) — Leo
// debe confirmarlos antes de publicar (ver demo-personalizer paso 6). Las
// CATEGORÍAS y varios servicios ya están alineados con contenido real:
// capturas de instagram.com/esteticdent.uio (compartidas por Leo, 2026-07-19)
// confirman rayos X digital gratis en cada consulta, implantes "de alta
// gama", y periodoncia (encías) como servicio propio — se añaden/ajustan
// esas líneas.
//
// FASE 4.3 (spec de diseño de Leo): las capturas de Instagram publicitan
// "urgencias dentales las 24H", pero horariosEsteticdent (abajo) confirma
// L-V 9-18 / Sáb 9-13 — sin cobertura nocturna real. Copy corregido a
// "Urgencias con atención prioritaria" (sin la promesa de 24h) hasta que Leo
// confirme con el cliente si de verdad hay un canal de urgencias fuera de
// horario (ej. un número aparte) o si la publicación original solo se
// refería a "sin cita previa dentro del horario normal".
export const serviciosEsteticdent: CategoriaServicios[] = [
  {
    categoria: 'Urgencias odontológicas',
    servicios: [
      { nombre: 'Urgencias con atención prioritaria', descripcion: 'Dolor agudo, trauma o infección dental — te atendemos con prioridad dentro de nuestro horario de atención.', precioDesde: 25, duracionMin: 30, destacado: true, tipo: 'Urgencias' },
    ],
  },
  {
    categoria: 'Estética dental',
    servicios: [
      {
        // FASE 4.1/4.3 (spec de diseño de Leo): el badge "Más solicitado" se
        // mueve a Limpieza dental (ver categoría de abajo) — Diseño de
        // sonrisa sigue siendo servicio ancla, pero por ser el aspiracional,
        // no el de mayor demanda.
        nombre: 'Diseño de sonrisa',
        descripcion: 'Planificación digital del resultado antes de iniciar el tratamiento.',
        precioDesde: 350,
        duracionMin: 60,
        destacado: true,
      },
      { nombre: 'Blanqueamiento dental', descripcion: 'Sesión en consultorio con resultado inmediato.', precioDesde: 120, duracionMin: 60 },
      { nombre: 'Carillas de porcelana', descripcion: 'Por pieza, incluye prueba estética previa.', precioDesde: 180, duracionMin: 90 },
    ],
  },
  {
    categoria: 'Ortodoncia invisible',
    servicios: [
      { nombre: 'Alineadores transparentes', descripcion: 'Tratamiento completo, controles incluidos.', precioDesde: 1500, duracionMin: 45 },
    ],
  },
  {
    categoria: 'Implantes y rehabilitación',
    servicios: [
      { nombre: 'Implante dental unitario', descripcion: 'Implantes de alta gama, incluye planificación con rayos X digital gratis en cada consulta.', precioDesde: 900, duracionMin: 90 },
      { nombre: 'Corona sobre implante', precioDesde: 450, duracionMin: 60 },
      { nombre: 'Reemplazo de prótesis dental', descripcion: 'Para prótesis viejas o mal adaptadas.', precioDesde: 350, duracionMin: 60 },
    ],
  },
  {
    categoria: 'Limpieza, prevención y periodoncia',
    servicios: [
      { nombre: 'Limpieza dental', descripcion: 'Profilaxis y revisión general, con rayos X digital gratis en cada consulta.', precioDesde: 30, duracionMin: 30, destacado: true, tipo: 'Más solicitado' },
      { nombre: 'Tratamiento de encías (periodoncia)', descripcion: 'Para sangrado, dolor o movilidad dental.', precioDesde: 60, duracionMin: 45 },
    ],
  },
];

// PLACEHOLDER Nivel 2 (CLAUDE.md, "Manejo de imágenes") — banco de fotos con
// licencia comercial (Pexels), auto-hospedadas en public/images/esteticdent/
// (ver README.md de esa carpeta con el origen exacto de cada archivo). Todas
// muestran equipo/ambiente de clínica dental moderna — a propósito, ninguna
// es un "doctor genérico" posando como el profesional real (regla de
// autenticidad de CLAUDE.md), coherente con que V3 no requiere una foto de un
// profesional específico. Reemplazar por fotos reales del consultorio en
// cuanto el cliente las proporcione.
// El estado de placeholder (Nivel 2/2.5, banco de fotos / generado con IA)
// vive en el README.md de public/images/esteticdent/ y en el comentario de
// arriba — nunca en el `alt` visible: ese texto lo lee un lector de pantalla
// y un paciente real, así que debe describir la foto, no delatar que es de
// relleno (spec SALUD 2026-07-20, "Fugas de placeholder").
// AJUSTE 2026-07-21: `equipo-destacado.webp` (Pexels) se reemplaza por
// `equipo-destacado-ia.webp` (Nivel 2.5, generado con IA) — feedback directo
// de Leo cuestionando si el texto "de última generación" correspondía
// realmente a la foto de banco (un sillón genérico, sobreexpuesto, sin nada
// visiblemente moderno). Ver README.md de esta carpeta para el detalle
// completo; el alt ahora describe "diseño moderno" en vez de un superlativo
// de "última generación" que no estaba verificado con el cliente real.
export const galeriaEsteticdent: FotoGaleria[] = [
  { src: '/images/esteticdent/clinica-ia.webp?v=2', alt: 'Sala de tratamiento dental moderna con luz cálida natural' },
  { src: '/images/esteticdent/equipo-destacado-ia.webp', alt: 'Sillón dental de diseño moderno en Estetic Dent' },
  { src: '/images/esteticdent/equipamiento-1.webp', alt: 'Equipo de diagnóstico dental minimalista' },
  { src: '/images/esteticdent/equipamiento-2.webp', alt: 'Instrumental dental sobre bandeja en sala clara' },
];

// TODO PLACEHOLDER Nivel 2.5 (generado con IA, SOLO demo de venta) —
// cabeceras 3:2 de las cards ancla de servicios. Set 2026-07-23 del pipeline
// de Gemini (gemini-2.5-flash-image, assets/prompts/shots-esteticdent.json):
// QC en assets/generated/review/QC-REPORT.md, aprobación humana de Leo,
// masters en assets/generated/approved/. Reemplaza el set de Pollinations
// del 2026-07-22 (archivado en retirados-pollinations/). Las personas NO son
// reales (sintéticas) — reemplazar por fotos reales de pacientes de la
// clínica (con consentimiento) antes de la entrega final. El alt describe la
// foto, nunca delata que es de relleno (spec SALUD, "Fugas de placeholder").
export const imagenesAnclaEsteticdent: Record<string, FotoGaleria> = {
  'Limpieza dental': {
    src: '/images/esteticdent/card-limpieza.webp',
    src2x: '/images/esteticdent/card-limpieza@2x.webp',
    alt: 'Paciente sonriendo en el sillón dental durante su visita',
  },
  'Diseño de sonrisa': {
    src: '/images/esteticdent/card-diseno-sonrisa.webp',
    src2x: '/images/esteticdent/card-diseno-sonrisa@2x.webp',
    alt: 'Selección del tono dental con guía de colores junto a la sonrisa de una paciente',
  },
  'Urgencias con atención prioritaria': {
    src: '/images/esteticdent/card-urgencias.webp',
    src2x: '/images/esteticdent/card-urgencias@2x.webp',
    alt: 'Odontóloga tranquilizando a un paciente en el sillón dental',
  },
};

// TODO PLACEHOLDER Nivel 2.5 (generado con IA, SOLO demo de venta) —
// cabeceras 16:9 de las cards de tecnología, una por ítem de
// tecnologiaEsteticdent (mismo orden: radiografía, cámara, esterilización).
// Mismo set 2026-07-23 del pipeline de Gemini (ver comentario de arriba).
// Reemplazar por fotos reales del equipamiento del consultorio antes de la
// entrega final.
export const fotosTecnologiaEsteticdent: FotoGaleria[] = [
  {
    src: '/images/esteticdent/tec-radiografia.webp',
    src2x: '/images/esteticdent/tec-radiografia@2x.webp',
    alt: 'Profesional señalando una radiografía panorámica digital en el monitor',
  },
  {
    src: '/images/esteticdent/tec-camara-intraoral.webp',
    src2x: '/images/esteticdent/tec-camara-intraoral@2x.webp',
    alt: 'Cámara intraoral en la mano de una odontóloga con la imagen dental en pantalla',
  },
  {
    src: '/images/esteticdent/tec-esterilizacion.webp',
    src2x: '/images/esteticdent/tec-esterilizacion@2x.webp',
    alt: 'Instrumental dental sellado en fundas de esterilización sobre bandeja metálica',
  },
];

// TODO PLACEHOLDER Nivel 2 (spec de densidad visual de Leo, 2026-07-22) —
// pares antes/después de "Sonrisas reales", fotos de banco (Pexels) SOLO para
// el demo de venta. Cada par usa la MISMA persona (dos momentos de la misma
// sesión fotográfica) para que el par sea plausible, pero NO son casos
// clínicos reales: publicar esto en la entrega final sería publicidad
// engañosa (CLAUDE.md, regla de autenticidad). Antes de publicar, reemplazar
// por casos reales del consultorio con consentimiento escrito del paciente —
// si el cliente no los tiene, la sección se quita completa (basta con pasar
// un array vacío: AntesDespues.astro la omite sola).
export const sonrisasEsteticdent: ParAntesDespues[] = [
  {
    tratamiento: 'Ortodoncia con alineadores',
    antes: {
      src: '/images/esteticdent/sonrisa-ortodoncia-antes.webp',
      alt: 'Paciente revisando su alineador dental antes del tratamiento',
    },
    despues: {
      src: '/images/esteticdent/sonrisa-ortodoncia-despues.webp',
      alt: 'Paciente riendo con su sonrisa alineada tras el tratamiento',
    },
  },
  {
    tratamiento: 'Blanqueamiento dental',
    antes: {
      src: '/images/esteticdent/sonrisa-blanqueamiento-antes.webp',
      alt: 'Selección del tono dental de la paciente con guía de colores',
    },
    despues: {
      src: '/images/esteticdent/sonrisa-blanqueamiento-despues.webp',
      alt: 'Paciente mostrando su sonrisa más luminosa en el sillón dental',
    },
  },
  {
    tratamiento: 'Diseño de sonrisa',
    antes: {
      src: '/images/esteticdent/sonrisa-diseno-antes.webp',
      alt: 'Paciente durante el tratamiento dental en consultorio',
    },
    despues: {
      src: '/images/esteticdent/sonrisa-diseno-despues.webp',
      alt: 'Paciente sonriendo en el sillón dental con su nueva sonrisa',
    },
  },
];

// Fase 2 (spec de diseño 2026-07-21): argumento de tecnología — título del
// equipo + beneficio en lenguaje de paciente. Rayos X digital gratis ya está
// confirmado (ver serviciosEsteticdent arriba); cámara intraoral y
// esterilización son estándar del rubro para una clínica que ya invirtió en
// equipamiento moderno (coherente con brief de la variante V3) — Leo puede
// ajustar la redacción exacta si el cliente confirma detalles distintos.
export const tecnologiaEsteticdent: ItemTecnologia[] = [
  { titulo: 'Radiografía digital', beneficio: 'Diagnóstico en minutos y hasta 90% menos radiación. Incluida gratis en tu consulta.' },
  { titulo: 'Cámara intraoral', beneficio: 'Ves lo que vemos, antes de decidir cualquier tratamiento.' },
  { titulo: 'Esterilización certificada', beneficio: 'Instrumental sellado e individual para cada paciente.' },
];

export const horariosEsteticdent: HorarioDia[] = [
  { dia: 'Lunes a Viernes', horario: '09:00 – 18:00' },
  { dia: 'Sábado', horario: '09:00 – 13:00' },
  { dia: 'Domingo', horario: 'Cerrado' },
];

// AJUSTE 2026-07-21: reseñas reales de Google Business (captura compartida por
// Leo, perfil "Clínica Dental Estetic Dent" — 5.0/5, 2 opiniones totales).
// Solo se integra UNA de las dos: la segunda reseña visible en la captura
// ("Mishell Alejandra Chamorro") coincide con el nombre de la propia Dra.
// Chamorro del equipo (ver profesionalesEsteticdent) — Leo confirmó que es
// ella misma, así que se descarta como testimonio de paciente (mostrar la
// reseña de la propia doctora sería engañoso). Solo queda la de Ana Lucía
// Flores. Con únicamente 1 reseña real y total de 2 en el perfil, evitar
// cualquier copy que implique "muchos pacientes opinan" en esta sección u
// otras — el dato real es escaso todavía.
export const testimoniosEsteticdent: Testimonio[] = [
  {
    nombre: 'Ana Lucía Flores',
    texto: 'Excelente centro de atención dental que entiende la necesidad de cada paciente.',
    calificacion: 5,
  },
];

// Equipo (spec SALUD 2026-07-20, "TeamSection obligatorio"). Único nombre
// confirmado hoy vía capturas reales de instagram.com/esteticdent.uio
// (compartidas por Leo, 2026-07-19): "Dra. Mishell A. Chamorro, endodoncia" —
// ver site.esteticdent.ts. Sin años de experiencia ni universidad porque esos
// datos no están confirmados todavía — nunca inventar una credencial para
// rellenar el campo.
//
// AJUSTE 2026-07-21: se reincorpora `foto` (mishel-chamorro-hero-ia.webp) tras
// feedback de Leo de que todo el sitio se veía frío/sin personas — la foto ya
// existía en disco (real, con nombre, retocada con IA solo en luz/fondo, ver
// README.md de public/images/esteticdent/) y se había quitado el 2026-07-19
// solo del HERO por falta de armonía general del sitio, no por un problema de
// autenticidad/consentimiento. Colocarla aquí, en una tarjeta de equipo de
// tamaño estándar (no dominando el hero), resuelve la calidez sin repetir el
// problema de armonía que motivó quitarla la primera vez.
// AJUSTE 2026-07-21: se añade Dra. Rosa Reascos, entregada por Leo como
// archivo real (originales/Rosa Reascos.jpg, pieza promocional de Instagram
// con overlay de diseño — ver README.md de public/images/esteticdent/ para el
// proceso de recorte + retoque IA). `tituloProfesional: 'Odontóloga'` es el
// único dato confirmable a partir de la foto (realizando una limpieza dental
// con equipo completo) — sin `especialidad` porque el cliente no ha
// confirmado un área específica todavía (nunca inventar esa credencial).
//
// FASE 3.7 (spec de diseño de Leo): se añade `lineaExperiencia` a cada
// perfil — texto acotado a lo ya confirmado (especialidad de Mishell;
// ninguna afirmación de años/credenciales sin confirmar). `registroProfesional`
// se deja SIN definir a propósito: el spec original sugería un valor
// placeholder ("Reg. ACESS #____"), pero TeamSection.astro lo muestra tal
// cual en el sitio público — eso sería una fuga de placeholder visible al
// paciente (CLAUDE.md, regla explícita). El componente ya soporta el campo;
// Leo solo necesita confirmar los números reales de registro para activarlo.
export const profesionalesEsteticdent: PerfilProfesional[] = [
  {
    nombre: 'Dra. Mishell A. Chamorro',
    tituloProfesional: 'Odontóloga',
    especialidad: 'Endodoncia',
    foto: '/images/esteticdent/mishel-chamorro-hero-ia.webp',
    lineaExperiencia: 'Especialista en endodoncia, atención cercana y sin dolor.',
  },
  {
    nombre: 'Dra. Rosa Reascos',
    tituloProfesional: 'Odontóloga',
    foto: '/images/esteticdent/rosa-reascos.webp',
    lineaExperiencia: 'Atención odontológica integral, cercana a cada paciente.',
  },
];
