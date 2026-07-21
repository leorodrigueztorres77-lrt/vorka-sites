import type {
  CategoriaServicios,
  EstadisticasNegocio,
  FotoGaleria,
  HistoriaNegocio,
  HorarioDia,
  ItemTecnologia,
  PasoProceso,
  PerfilProfesional,
  Testimonio,
} from './types';

// Capa 2 (consultorio médico/dental) — estructura de ejemplo, análoga a
// restaurant.sample.ts. demo-personalizer reemplaza estos valores con los
// servicios, fotos y horarios reales del cliente en Capa 3. Toda ruta de
// imagen aquí es un placeholder Nivel 2 (CLAUDE.md, "Manejo de imágenes") —
// no existen archivos reales en public/images para estas rutas todavía;
// demo-personalizer las reemplaza por fotos reales (o banco de fotos
// específico de consultorio médico/dental, nunca "doctor genérico" de stock
// para perfilProfesionalSample.foto) antes de cualquier entrega a un cliente.

export const serviciosSample: CategoriaServicios[] = [
  {
    categoria: 'Limpieza y prevención',
    imagenPortada: '/images/placeholder-consultorio-1.webp',
    servicios: [
      {
        nombre: 'Limpieza dental',
        descripcion: 'Profilaxis y remoción de placa, revisión general incluida.',
        precioDesde: 25,
        duracionMin: 30,
        imagen: '/images/placeholder-consultorio-1.webp',
        destacado: true,
        tipo: 'Más solicitado',
      },
      { nombre: 'Aplicación de flúor', descripcion: 'Prevención de caries en niños y adultos.', precioDesde: 15, duracionMin: 20 },
    ],
  },
  {
    categoria: 'Ortodoncia',
    imagenPortada: '/images/placeholder-consultorio-2.webp',
    servicios: [
      {
        nombre: 'Brackets metálicos',
        descripcion: 'Tratamiento completo con controles mensuales incluidos.',
        precioDesde: 800,
        duracionMin: 60,
        imagen: '/images/placeholder-consultorio-2.webp',
      },
      { nombre: 'Alineadores transparentes', descripcion: 'Alternativa estética a los brackets tradicionales.', precioDesde: 1200, duracionMin: 45 },
    ],
  },
  {
    categoria: 'Estética dental',
    servicios: [
      { nombre: 'Blanqueamiento dental', descripcion: 'Sesión en consultorio, resultado visible desde la primera cita.', precioDesde: 90, duracionMin: 60 },
      { nombre: 'Carillas de resina', precioDesde: 60, duracionMin: 45 },
    ],
  },
  {
    categoria: 'Urgencias',
    servicios: [
      {
        nombre: 'Atención de urgencia',
        descripcion: 'Dolor agudo, fractura o trauma dental — atención el mismo día.',
        precioDesde: 20,
        duracionMin: 30,
        tipo: 'Urgencias',
      },
    ],
  },
];

// Extensión .webp obligatoria (estándar de rendimiento, CLAUDE.md). Fotos de
// ambiente/equipo del consultorio — placeholder Nivel 2 hasta reemplazo real.
export const galeriaSample: FotoGaleria[] = [
  { src: '/images/placeholder-consultorio-1.webp', alt: 'Sala de atención del consultorio' },
  { src: '/images/placeholder-consultorio-2.webp', alt: 'Equipo de diagnóstico digital' },
  { src: '/images/placeholder-consultorio-3.webp', alt: 'Recepción del consultorio' },
  { src: '/images/placeholder-consultorio-4.webp', alt: 'Sala de espera' },
];

// V3 ("la modernidad y el equipamiento") — argumento de tecnología, ver
// Equipamiento.astro. Placeholder genérico para la página de showcase;
// demo-personalizer lo reemplaza con el equipamiento real del cliente.
export const tecnologiaSample: ItemTecnologia[] = [
  { titulo: 'Radiografía digital', beneficio: 'Diagnóstico en minutos y con menos radiación que una placa tradicional.' },
  { titulo: 'Cámara intraoral', beneficio: 'Ves lo que vemos, antes de decidir cualquier tratamiento.' },
  { titulo: 'Esterilización certificada', beneficio: 'Instrumental sellado e individual para cada paciente.' },
];

export const horariosSample: HorarioDia[] = [
  { dia: 'Lunes a Viernes', horario: '09:00 – 18:00' },
  { dia: 'Sábado', horario: '09:00 – 13:00' },
  { dia: 'Domingo', horario: 'Cerrado' },
];

// Placeholder — demo-personalizer lo reemplaza con la historia real del
// profesional/consultorio (formación, motivación, enfoque de atención).
export const historiaSample: HistoriaNegocio = {
  texto:
    'Contamos aquí la formación del profesional, su enfoque de atención (cercano, ' +
    'preventivo, indoloro) y qué distingue a este consultorio de una clínica ' +
    'genérica — por qué un paciente nuevo debería elegirlo.',
};

export const testimoniosSample: Testimonio[] = [
  {
    nombre: 'Paciente de ejemplo',
    texto: 'Comentario de ejemplo sobre la atención recibida en el consultorio.',
    calificacion: 5,
  },
  {
    nombre: 'Otro paciente de ejemplo',
    texto: 'Otro comentario de ejemplo destacando la puntualidad y el trato.',
    calificacion: 5,
  },
];

// Placeholder — demo-personalizer lo reemplaza con las cifras reales del
// consultorio (Google My Business, historial de pacientes). Si un dato no
// existe todavía, se omite en vez de inventarlo (ver src/data/types.ts).
export const statsSample: EstadisticasNegocio = {
  ratingGoogle: 4.9,
  totalResenas: 85,
  aniosTrayectoria: 8,
  pacientesAtendidos: 1200,
  segurosAceptados: ['Salud S.A.', 'BMI', 'Confiamed', 'Ecuasanitas'],
};

// Placeholder — demo-personalizer lo llena con el nombre, título y foto
// reales del profesional. Nunca reemplazar `foto` por un "doctor genérico"
// de stock (CLAUDE.md) — si no hay foto real, priorizar mejorarla con IA.
export const perfilProfesionalSample: PerfilProfesional = {
  nombre: 'Dra. Nombre Apellido',
  tituloProfesional: 'Odontóloga',
  especialidad: 'Ortodoncia',
  universidad: 'Universidad Central del Ecuador',
  aniosExperiencia: 8,
  foto: '/images/placeholder-profesional.webp',
  credenciales: ['Especialista en Ortodoncia', 'Postgrado en Rehabilitación Oral'],
};

// V5 ("la accesibilidad y la facilidad de agendar") — proceso de 3 pasos.
export const pasosSample: PasoProceso[] = [
  { numero: 1, titulo: 'Escríbenos', descripcion: 'Cuéntanos qué necesitas por WhatsApp.' },
  { numero: 2, titulo: 'Confirmamos', descripcion: 'Te proponemos un horario disponible.' },
  { numero: 3, titulo: 'Te atendemos', descripcion: 'Llegas a tu cita, sin filas ni esperas.' },
];
