// Tipos compartidos por Capa 1 (sistema base) y Capa 2 (vertical restaurante).
// El contenido real de estos tipos lo llena demo-personalizer en Capa 3 —
// aquí solo se define la forma de los datos.

export interface SiteConfig {
  negocioSlug: string;
  nombre: string;
  tagline: string;
  ciudad: string;
  direccion: string;
  telefonoWhatsApp: string;
  email?: string;
  colores: {
    primario: string;
    acento: string;
    texto: string;
    /**
     * Tokens de tema oscuro — opcionales. Sin definir, el sitio cae en el
     * tema claro por defecto de Capa 1 (fondo blanco, ver global.css). Solo
     * la propia web de Vorka (identidad exclusiva, ver CLAUDE.md) los usa hoy
     * — nunca asignar estos 3 campos en el SiteConfig de un cliente.
     */
    fondo?: string;
    fondoAlterno?: string;
    gris?: string;
  };
  /**
   * Tipografía del negocio del cliente. Opcional: si no se define, el sistema
   * base usa una pila de fuentes de sistema neutra. Nunca debe caer por
   * defecto en Poppins/Montserrat (identidad exclusiva de Vorka) ni en las
   * fuentes de Ordercash.
   */
  fuentes?: {
    titulos: string;
    texto: string;
    /**
     * URL del stylesheet de Google Fonts (ej. "https://fonts.googleapis.com/css2?family=...").
     * Sin esto, `titulos`/`texto` solo quedan como nombre de variable CSS y la
     * fuente nunca se carga en el navegador — BaseLayout la inyecta como <link>.
     */
    googleFontsUrl?: string;
  };
  mapaEmbedUrl?: string;
  seo: {
    tituloDefault: string;
    descripcionDefault: string;
  };
  webhookContactoUrl?: string;
  /** Año de fundación — usado por variantes de Capa 2 con badge de trayectoria (ej. V1, V4). */
  anioFundacion?: number;
}

/**
 * Estadísticas del negocio — alimenta los contadores animados de las
 * variantes centradas en prueba social, compartida por restaurante (V1
 * badges, V4 hero + stats, V5 contadores del hero) y consultorio (V4 hero +
 * stats, V5 seguros/precio). Todos los campos son opcionales: si el negocio
 * no tiene un dato todavía (ej. reseñas de Google recién empezando), se omite
 * ese contador en vez de inventar una cifra — CLAUDE.md prohíbe mostrar datos
 * de fidelización/reputación inventados.
 */
export interface EstadisticasNegocio {
  ratingGoogle?: number;
  totalResenas?: number;
  pedidosPorMes?: number;
  aniosTrayectoria?: number;
  familiasClientes?: number;
  platosEnCarta?: number;
  /** Consultorio (V4 "La confianza primero") — pacientes atendidos en total, no por mes. */
  pacientesAtendidos?: number;
  /** Consultorio — seguros médicos/dentales aceptados. Ver también SeguroAceptado
   * más abajo: este campo alimenta el conteo en StatsFila; el listado visible de
   * nombres de aseguradoras lo muestra el componente consultorio/SegurosAceptados. */
  segurosAceptados?: string[];
}

export interface Testimonio {
  nombre: string;
  texto: string;
  calificacion: 1 | 2 | 3 | 4 | 5;
}

export interface HorarioDia {
  dia: string;
  horario: string;
}

export interface PlatoMenu {
  nombre: string;
  descripcion?: string;
  precio: number;
  imagen?: string;
  destacado?: boolean;
  /** Calificación individual del plato (V2 "Restroo" — rating por ítem del menú). */
  calificacion?: 1 | 2 | 3 | 4 | 5;
  /** Etiqueta corta tipo badge (V5 "Craving" — ej. "Vegetariano", "Picante"). */
  tipo?: string;
}

export interface CategoriaMenu {
  categoria: string;
  platos: PlatoMenu[];
  /** Foto de portada de la categoría (V4 "HeavenPalate" — portadas visuales clickeables). */
  imagenPortada?: string;
}

export interface FotoGaleria {
  src: string;
  alt: string;
}

/**
 * Sección "Nuestra historia" (Capa 2, restaurante) — usada por las variantes
 * cuyo orden de secciones pone la historia del negocio antes que el menú.
 */
export interface HistoriaNegocio {
  texto: string;
  foto?: string;
}

/**
 * Estado de fidelización de un cliente frecuente (Capa 2, restaurante).
 * Usa la misma forma de datos que alimenta el skill `reactivation-campaigns`.
 * Si el negocio no tiene aún historial de pedidos suficiente, este componente
 * puede omitirse en la primera entrega (ver Menu/LoyaltyStatus).
 */
export interface EstadoFidelizacion {
  pedidosRealizados: number;
  pedidosParaRecompensa: number;
  recompensa: string;
}

/**
 * Servicio médico/dental (Capa 2, consultorio) — análogo a PlatoMenu del
 * vertical restaurante. `precioDesde` en vez de un precio fijo porque el
 * costo real de una consulta suele depender del diagnóstico; el sitio nunca
 * promete un precio cerrado que el profesional no pueda cumplir.
 */
export interface ServicioMedico {
  nombre: string;
  descripcion?: string;
  precioDesde: number;
  /** Duración estimada en minutos — usado por V2 ("los servicios completos"). */
  duracionMin?: number;
  imagen?: string;
  destacado?: boolean;
  /** Etiqueta corta tipo badge, ej. "Urgencias", "Más solicitado". */
  tipo?: string;
}

export interface CategoriaServicios {
  categoria: string;
  servicios: ServicioMedico[];
  /** Foto de portada de la categoría (V4 — portadas visuales clickeables, mismo patrón que MenuPortadas). */
  imagenPortada?: string;
}

/**
 * Perfil del profesional (Capa 2, consultorio) — alimenta V1 ("el
 * profesional es la estrella"). CLAUDE.md prohíbe una foto de "doctor
 * genérico" de stock aquí: `foto` debe ser real (mejorada con IA si hace
 * falta) o el componente debe manejar su ausencia sin sustituir por stock.
 */
export interface PerfilProfesional {
  nombre: string;
  /** Ej. "Odontóloga", "Médico General", "Dr. en Odontología". */
  tituloProfesional: string;
  especialidad?: string;
  universidad?: string;
  aniosExperiencia?: number;
  foto?: string;
  /** Credenciales cortas en lista, ej. "Especialista en Ortodoncia", "Postgrado PUCE". */
  credenciales?: string[];
}

/**
 * Paso de un proceso visual de 3 pasos (Capa 2, consultorio V5 — "la
 * accesibilidad y la facilidad de agendar"): Escríbenos → Confirmamos → Te
 * atendemos.
 */
export interface PasoProceso {
  numero: number;
  titulo: string;
  descripcion?: string;
}
