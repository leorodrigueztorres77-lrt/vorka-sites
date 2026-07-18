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
}

export interface CategoriaMenu {
  categoria: string;
  platos: PlatoMenu[];
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
