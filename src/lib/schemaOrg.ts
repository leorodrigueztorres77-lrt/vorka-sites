// JSON-LD schema.org para el vertical consultorio médico/dental (spec SALUD
// 2026-07-20, "SEO local"). @type "Dentist" para consultorios odontológicos
// (subtipo de MedicalBusiness que Google reconoce específicamente) — pasar
// tipo: 'MedicalClinic' para un consultorio médico no dental.
//
// Nunca fabrica datos: aggregateRating solo se agrega si `googleBusinessUrl`,
// `ratingGoogle` Y `totalResenasGoogle` están confirmados en el SiteConfig
// (CLAUDE.md prohíbe inventar una calificación), y openingHoursSpecification
// solo incluye los días cuyo formato de texto libre (ej. "Lunes a Viernes",
// "09:00 – 18:00") el parser reconoce con certeza — un horario en un formato
// distinto se omite del schema en vez de arriesgar un dato incorrecto de cara
// a Google.
import type { CategoriaServicios, HorarioDia, SiteConfig } from '@/data/types';

const DIAS_SEMANA = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const NOMBRE_A_INDICE: Record<string, number> = {
  lunes: 0,
  martes: 1,
  miercoles: 2,
  miércoles: 2,
  jueves: 3,
  viernes: 4,
  sabado: 5,
  sábado: 5,
  domingo: 6,
};

function parsearDias(dia: string): string[] | null {
  const texto = dia.trim().toLowerCase();
  const rango = texto.match(/^(\p{L}+)\s+a\s+(\p{L}+)$/u);
  if (rango) {
    const desde = NOMBRE_A_INDICE[rango[1]];
    const hasta = NOMBRE_A_INDICE[rango[2]];
    if (desde == null || hasta == null || hasta < desde) return null;
    return DIAS_SEMANA.slice(desde, hasta + 1);
  }
  const indice = NOMBRE_A_INDICE[texto];
  return indice != null ? [DIAS_SEMANA[indice]] : null;
}

function parsearHorario(horario: string): { opens: string; closes: string } | null {
  if (/cerrado/i.test(horario)) return null;
  const match = horario.match(/(\d{1,2}:\d{2})\s*[–-]\s*(\d{1,2}:\d{2})/);
  return match ? { opens: match[1], closes: match[2] } : null;
}

function construirHorarios(horarios?: HorarioDia[]) {
  if (!horarios) return undefined;
  const especificaciones = horarios.flatMap((h) => {
    const dias = parsearDias(h.dia);
    const rango = parsearHorario(h.horario);
    if (!dias || !rango) return [];
    return [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: dias,
        opens: rango.opens,
        closes: rango.closes,
      },
    ];
  });
  return especificaciones.length > 0 ? especificaciones : undefined;
}

interface SchemaConsultorioOpts {
  site: SiteConfig;
  /** URL absoluta y canónica de la página. */
  url: string;
  tipo?: 'Dentist' | 'MedicalClinic';
  horarios?: HorarioDia[];
  servicios?: CategoriaServicios[];
}

export function schemaConsultorio({ site, url, tipo = 'Dentist', horarios, servicios }: SchemaConsultorioOpts) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': tipo,
    name: site.nombre,
    description: site.seo.descripcionDefault,
    url,
    telephone: `+${site.telefonoWhatsApp}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.direccion,
      // site.ciudad suele venir como "Quito, Ecuador" — addressCountry ya
      // cubre el país, así que solo se toma la parte de la localidad.
      addressLocality: site.ciudad.split(',')[0].trim(),
      addressCountry: 'EC',
    },
  };

  const horariosSchema = construirHorarios(horarios);
  if (horariosSchema) schema.openingHoursSpecification = horariosSchema;

  if (site.googleBusinessUrl && site.ratingGoogle != null && site.totalResenasGoogle != null) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: site.ratingGoogle,
      reviewCount: site.totalResenasGoogle,
      bestRating: 5,
    };
  }

  const itemsConPrecio = (servicios ?? []).flatMap((cat) => cat.servicios).filter((s) => s.precioDesde != null);
  if (itemsConPrecio.length > 0) {
    schema.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name: 'Servicios',
      itemListElement: itemsConPrecio.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'MedicalProcedure', name: s.nombre },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: s.precioDesde,
          priceCurrency: 'USD',
        },
      })),
    };
  }

  return schema;
}
