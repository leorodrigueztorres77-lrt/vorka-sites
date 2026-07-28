# Hero phone preview — imágenes de origen

Estas 3 imágenes alimentan `src/components/vorka/HeroPhonePreview.astro` (la
maqueta de teléfono rotatoria del hero de Vorka). NO son assets nuevos ni stock
elegido a ojo: son versiones **reducidas y auto-hospedadas** de la MISMA imagen
hero que usa cada demo (regla de origen — "los pixels del producto salen del
producto"). Reducidas a 480×340 WebP q72 para no cargar la imagen full-size del
demo dentro de un mockup de ~216px de ancho (regla de rendimiento).

| Archivo | Fuente exacta (la que usa el demo) |
|---|---|
| `sabor.webp` | `public/images/sabor-de-los-andes/hornado-hero-800.webp` (reescalada) |
| `brasas.webp` | Pexels foto 38399759 — la misma URL que hotlinkea `restaurant.brasas-del-valle.ts` (`heroFotoBrasasValle`), aquí descargada y auto-hospedada para no hotlinkear a Pexels en la home pública (regla Capa 1, caso El Fogón) |
| `esteticdent.webp` | `public/images/esteticdent/mishel-chamorro-hero-ia.webp` (reescalada) |

**Si un demo cambia su imagen hero, regenerar la correspondiente aquí** (mismo
recorte 480×340 cover). El resto del branding (nombre, tagline, colores,
tipografía, CTA) el componente lo lee en vivo de los `site.*`/`brandkit.*` de
cada demo — solo estas imágenes son un derivado estático que hay que refrescar
a mano.
