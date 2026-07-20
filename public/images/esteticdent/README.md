# Assets — Estetic Dent (SOLO este cliente, vertical consultorio)

⚠️ **PLACEHOLDER Nivel 2 (CLAUDE.md, "Manejo de imágenes")** — banco de fotos
con licencia comercial (Pexels), usadas porque no fue posible obtener fotos
reales de la clínica ni de un profesional específico vía Instagram/Facebook
(ambos bloquean scraping no autenticado). Descargadas y convertidas a WebP
localmente (`sharp`) el 2026-07-18 — nunca hotlinked al CDN de Pexels.

| Archivo | Origen (Pexels photo ID) | Contenido |
|---|---|---|
| `equipo-destacado.webp` | 35438269 | Sillón y equipo dental de última generación |
| `equipamiento-1.webp` | 6812453 | Equipo de diagnóstico dental minimalista |
| `equipamiento-2.webp` | 3845729 | Instrumental dental sobre bandeja en sala clara |

Ninguna de estas fotos es un "doctor genérico" posando como el profesional
real (regla de autenticidad de CLAUDE.md) — todas son ambientales/equipo,
coherente con que la variante V3 elegida no requiere una foto de un
profesional específico. **Reemplazar por fotos reales del consultorio en
cuanto el cliente las proporcione** — no publicar la entrega final con estas
fotos de banco sin que Leo lo confirme explícitamente.

No mover estos archivos a carpetas compartidas ni reutilizarlos en otros
clientes (incluyendo Odontocrea, competidor directo en la misma ciudad).

## Foto generada con IA — `clinica-ia.webp` (Nivel 2.5, CLAUDE.md)

⚠️ **PLACEHOLDER Nivel 2.5 — SOLO demo de venta, NUNCA entrega final.**

| Archivo | Origen | Contenido |
|---|---|---|
| `clinica-ia.webp` | Generado con `fal-ai/nano-banana-2` vía fal.ai (2026-07-19), script de referencia en `SiteWise+/scripts/fal-generate-esteticdent-clinic.mjs` | Sala de tratamiento dental moderna, vacía, luz cálida natural, sillón con tapizado azul navy y panel de acento naranja quemado — coherente con la paleta real de marca de Estetic Dent (navy #122B54 + naranja #F2703C) |

Reemplazó a `hero-1600.webp` (Pexels 30902075), retirada a
`retirados-color-mismatch/hero-1600-original.webp` — esa foto tenía tono azul
frío y sobreexpuesto que desentonaba del resto de la galería incluso después
de aplicar el filtro CSS unificado (regla de profundidad visual #1,
CLAUDE.md); no era un problema de personas/autenticidad como en Odontocrea,
sino de coherencia de color entre fotos de fuentes distintas.

Se intentó primero generar esta imagen con Higgsfield (`soul_location`), pero
la cuenta está en plan gratuito (0 créditos, requiere plan "basic" o
superior) — Leo eligió explícitamente usar fal.ai en su lugar. Costo
aproximado: $0.04.

Cambiar por foto real del consultorio en cuanto el cliente la proporcione, y
antes de cualquier entrega final confirmar con Leo — igual que el resto de
fotos de banco de esta carpeta.

## Foto real — Od. Mishel Chamorro (NO placeholder, NO Pexels)

| Archivo | Origen | Contenido |
|---|---|---|
| `originales/MCHR.jpg` | Pieza promocional real de instagram.com/esteticdent.uio, entregada por Leo el 2026-07-19 como archivo (no como screenshot de chat) | Original sin editar: panel gráfico teal + foto de la Od. Mishel Chamorro sosteniendo un modelo dental. Conservado como fuente/respaldo en `originales/` (no servido como asset de ningún sitio). |
| `mishel-chamorro-hero-ia.webp` | Recorte de `originales/MCHR.jpg` (mismo recorte que la v1) retocado con `fal-ai/nano-banana-2/edit` vía fal.ai (2026-07-19) | Foto real, con nombre, de una de las profesionales de Estetic Dent — usada en el hero de `demo-esteticdent.astro` (componente `HeroSplit`, prop `fotoCredito="Od. Mishel Chamorro"`) |

Esta foto SÍ es una persona real identificada — a diferencia de las fotos
Nivel 2 de arriba, aquí aplica la regla de consentimiento: es contenido
promocional que el propio negocio ya publicó públicamente con su nombre, no
un screenshot capturado sin ese propósito. Ver memoria
`feedback_social_screenshots_not_usable_photos` para el criterio completo.
Confirmar con el cliente antes de usarla en la entrega final (no solo demo de
venta), y no reutilizar en ningún otro cliente.

### Retoque IA 2026-07-19 — reemplazo de `mishel-chamorro-hero.webp` (v1)

⚠️ Feedback directo de Leo: la v1 "se ve como de estudiante" — el recorte
original es un still de video/selfie de Instagram (flash de celular, cámara
de seguridad visible detrás, techo genérico sin nada de clínica). Se retiró a
`retirados-baja-calidad/mishel-chamorro-hero-original.webp` (conservada solo
como respaldo, no se sirve en ningún sitio) y se reemplazó por
`mishel-chamorro-hero-ia.webp`.

**Esto NO es Nivel 2.5 (no es una persona inventada) — es Nivel 1 de
CLAUDE.md: "mejora con IA (color, luz, encuadre, eliminar fondo desordenado)"
sobre una foto real, con la restricción dura de no alterar su identidad.**
Proceso seguido (2 intentos vía `fal-ai/nano-banana-2/edit`, curl directo —
ver limitación de Node abajo):

1. Intento 1: prompt pidiendo relighting + fondo de clínica → el resultado
   cambió el rostro de forma perceptible (peinado, forma de cara) — **se
   descartó por completo**, nunca se guardó como asset ni se sirvió en el
   sitio. Publicar una cara distinta bajo el nombre real de una persona sería
   exactamente el problema de autenticidad que CLAUDE.md prohíbe, solo que
   generado en vez de con foto de banco.
2. Intento 2: mismo pedido pero con instrucción explícita de preservar el
   rostro, peinado, expresión y pose "100% idénticos" y limitar el cambio
   solo a fondo/iluminación → resultado aceptado: mismo rostro, mismo peinado,
   misma sonrisa, misma pose sosteniendo el modelo dental, con el fondo de
   cámara de seguridad reemplazado por un consultorio dental moderno
   desenfocado en tonos cálidos y luz de estudio profesional en vez de flash
   de selfie.

Antes de usar cualquier retoque IA de una persona real identificada en
cualquier cliente futuro, comparar cara a cara contra el original — si el
resultado no es reconociblemente la misma persona, descartarlo (como el
intento 1) y no publicarlo bajo su nombre real.

Nota técnica: `queue.fal.run` se llamó con `curl` directo (no con un script
`.mjs` de Node) porque Node/`fetch` falla en este entorno con
`UNABLE_TO_GET_ISSUER_CERT_LOCALLY` (proxy corporativo) — mismo hallazgo que
con `clinica-ia.webp` más arriba. La imagen de entrada se envió como data URI
base64 en `image_urls` (formato aceptado por `fal-ai/nano-banana-2/edit`),
sin necesidad de subirla primero a almacenamiento externo.

### Revertido 2026-07-19 — foto quitada del hero, archivo sin uso actual

Feedback directo de Leo tras ver el retoque en vivo: el problema real no era
la foto (la retocada sí resolvió el "se ve como de estudiante" de la v1) sino
la **falta de armonía general de estilo/UX del sitio**. Al preguntarle
explícitamente cómo prefería resolver la foto de Mishel en ese contexto,
eligió **quitarla del hero por completo** en vez de seguir iterando sobre su
retoque — coherente con que Estetic Dent se posiciona como equipo de varios
especialistas, no una marca de un solo profesional-estrella.

`demo-esteticdent.astro` volvió al hero default de V3 (`HeroEquipamiento`,
foto de equipo/ambiente sin personas, sin excepción de Capa 1). El archivo
`mishel-chamorro-hero-ia.webp` **se conserva en disco pero no se sirve en
ninguna página actualmente** — no se elimina porque podría reutilizarse en
una futura sección de "equipo" si el cliente confirma specialties y autoriza
su uso explícitamente para ese fin. No reintroducir en el hero sin que Leo lo
pida de nuevo.
