# Assets — Estetic Dent (SOLO este cliente, vertical consultorio)

⚠️ **PLACEHOLDER Nivel 2 (CLAUDE.md, "Manejo de imágenes")** — banco de fotos
con licencia comercial (Pexels), usadas porque no fue posible obtener fotos
reales de la clínica ni de un profesional específico vía Instagram/Facebook
(ambos bloquean scraping no autenticado). Descargadas y convertidas a WebP
localmente (`sharp`) el 2026-07-18 — nunca hotlinked al CDN de Pexels.

| Archivo | Origen (Pexels photo ID) | Contenido |
|---|---|---|
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

## Foto generada con IA — `equipo-destacado-ia.webp` (Nivel 2.5, CLAUDE.md)

⚠️ **PLACEHOLDER Nivel 2.5 — SOLO demo de venta, NUNCA entrega final.**

Reemplazó a `equipo-destacado.webp` (Pexels 35438269), retirada a
`retirados-genericos/equipo-destacado-pexels-original.webp`. Motivo: feedback
directo de Leo cuestionando el texto "Sillón dental y equipo de última
generación" que acompañaba esa foto — la foto de banco mostraba un sillón
genérico, sobreexpuesto, sin ningún elemento visiblemente moderno (marca
"Recor/SAEVO" visible, sin pantalla digital ni acabados premium). Afirmar
"última generación" sobre esa imagen era una reclamación no verificada con el
cliente real, el mismo tipo de riesgo que inventar una credencial.

Generada con `fal-ai/nano-banana-2` vía fal.ai (2026-07-21, texto a imagen,
`aspect_ratio: "16:9"`), paleta de marca real de Estetic Dent (navy `#122B54`
+ acento naranja `#F2703C`), con instrucción explícita de **no incluir texto,
logos ni marcas legibles** sobre el equipo — el primer intento generó un
sillón con un logo ficticio "DentaFlow" grabado en el respaldo, descartado
por completo antes de guardarse (mismo criterio que descartar un retoque que
altera identidad: contenido inventado que podría confundirse con una marca
real). El segundo intento, sin ningún texto/logo visible, sí se aprobó.
Redimensionada con `sharp` a 1800×1000 y convertida a WebP (calidad 85,
~93 KB).

El `alt`/`figcaption` (`nombreEquipoDestacado` en
`src/data/consultorio.esteticdent.ts`) se corrigió a "Sillón dental de diseño
moderno en Estetic Dent" — se quitó el superlativo "de última generación"
porque sigue siendo una foto de banco (ahora generada, no Pexels) y no una
foto real del equipo del cliente; no corresponde afirmar un nivel tecnológico
específico sin que el cliente lo confirme.

Reemplazar por foto real del consultorio en cuanto el cliente la proporcione,
igual que el resto de fotos Nivel 2/2.5 de esta carpeta.

### Reemplazo 2026-07-21 — v2, formato horizontal (corrección de recorte)

⚠️ Feedback directo de Leo: "la imagen de hero de estetic dent es muy pobre,
cámbiala". Diagnóstico: el problema no era la calidad de la foto v1 en sí,
sino que se generó/recortó en formato **vertical (900×1350)** y
`HeroEquipamiento.astro` la usa como fondo `background-size: cover` a pantalla
completa (`min-height: 100vh`) con animación Ken Burns — esa combinación
recorta agresivamente cualquier imagen que no sea horizontal, cortando gran
parte de la composición y dejando visible solo una franja central ampliada.

Regenerada con el mismo modelo (`fal-ai/nano-banana-2` vía fal.ai, API
síncrona `https://fal.run/fal-ai/nano-banana-2`), esta vez pidiendo
explícitamente `aspect_ratio: "16:9"` y una composición de gran angular que
llene el cuadro horizontal completo (sillón dental tapizado azul navy,
panel de acento naranja quemado detrás, mismo tono cálido y misma paleta de
marca que la v1). Generada a 2752×1536, redimensionada con `sharp` a
1920×1080 y convertida a WebP (calidad 82, ~153 KB) — mismo nombre de
archivo (`clinica-ia.webp`), por lo que toda referencia en código usa
cache-busting `?v=2` (ver `src/data/consultorio.esteticdent.ts`).

La v1 (900×1350, vertical) se archivó sin eliminar en
`retirados-recorte-vertical/clinica-ia-v1-vertical.webp`, siguiendo la misma
convención de auditoría que `retirados-color-mismatch/` arriba.

Sigue siendo Nivel 2.5: **SOLO demo de venta, NUNCA entrega final** —
reemplazar por foto real del consultorio en cuanto el cliente la
proporcione, igual que el resto de fotos de banco de esta carpeta.

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

## Foto real — Dra. Rosa Reascos (NO placeholder, NO Pexels)

| Archivo | Origen | Contenido |
|---|---|---|
| `originales/Rosa Reascos.jpg` | Pieza promocional real de Instagram, entregada por Leo como archivo el 2026-07-21 (505×732, JPEG). Es un recorte de un carrusel promocional con overlay de diseño baked-in (barra divisoria blanca + bloque de color diagonal magenta/morado/azul + texto "Limpieza"). | Original sin editar, conservado como fuente/respaldo en `originales/` (no servido como asset de ningún sitio). |
| `rosa-reascos.webp` | 1) Recorte manual (`sharp`, sin IA) a `left:0, top:40, width:505, height:394` para eliminar por completo el overlay de diseño antes de cualquier edición — necesario porque el overlay cubre ~40% del encuadre original y no era removible sin invención de contenido. 2) Retoque de luz/color con `fal-ai/nano-banana-2/edit` vía fal.ai (2026-07-21), prompt con instrucción explícita de preservar rostro/pose/expresión/identidad al 100%. 3) Redimensionado a 900px de ancho y convertido a WebP (`sharp`, calidad 85). | Foto real, con nombre, de una de las profesionales de Estetic Dent realizando una limpieza dental — usada en `TeamSection` (`profesionalesEsteticdent`, `src/data/consultorio.esteticdent.ts`). |

Mismo criterio de consentimiento que la foto de la Od. Mishel Chamorro arriba
(contenido promocional ya publicado públicamente por el propio negocio con su
nombre) — confirmar con el cliente antes de usarla en la entrega final, no
solo en el demo de venta.

**Título profesional:** `tituloProfesional: 'Odontóloga'` es el único dato
verificable a partir de la foto (realiza una limpieza dental con equipo
completo) — sin `especialidad`, ya que el cliente no ha confirmado un área
específica todavía. Confirmar con Leo/el cliente antes de la entrega final
por si corresponde un título o especialidad distinta.

## Logo real — `logo-estetic-dent.webp` (NO placeholder, NO IA generativa)

| Archivo | Origen | Contenido |
|---|---|---|
| `originales/Logo.jpg` | Logo real entregado por Leo como archivo el 2026-07-21 (165×181, JPEG) | Insignia circular navy con wordmark blanco "Estetic Dent" y subtítulo "Su clínica dental", línea divisoria naranja — coincide con los valores ya usados en `brandkit.esteticdent.ts` (primario `#122B54`, acento `#F2703C`), sin necesidad de ajustar esos hex. |
| `logo-estetic-dent.webp` | Recorte circular (máscara SVG, `sharp`, sin IA) + upscale tradicional 4x con kernel Lanczos3 (`sharp`), exportado con canal alfa (660×724, ~31 KB) | Insignia lista para usarse como logo real en `Header`/`Footer` (`site.logoUrl`, `src/data/site.esteticdent.ts`) |

**Decisión: NO se usó fal.ai para este archivo**, a pesar de que el pedido
original de Leo fue "ajustarlos con fal ia" para ambos adjuntos. Un logo es
texto/wordmark exacto de marca — cualquier modelo generativo corre riesgo de
distorsionar letras o proporciones al hacer upscaling de una imagen tan
pequeña (165×181px), lo cual sería inaceptable en un asset de marca (a
diferencia de una fotografía, donde una reinterpretación menor de piel/fondo
es de bajo riesgo). Se usó en su lugar upscaling tradicional (Lanczos3, sin
IA) que preserva el texto exacto pixel a pixel. Confirmar con Leo si prefiere
de todos modos un pase por fal.ai (ej. para suavizar el halo JPEG alrededor
del círculo) — no se hizo por precaución de marca, no por imposibilidad
técnica.

Nota técnica: `queue.fal.run` se llamó con `curl` directo (no con un script
`.mjs` de Node) porque Node/`fetch` falla en este entorno con
`UNABLE_TO_GET_ISSUER_CERT_LOCALLY` (proxy corporativo) — mismo hallazgo que
con `clinica-ia.webp` más arriba. La imagen de entrada se envió como data URI
base64 en `image_urls` (formato aceptado por `fal-ai/nano-banana-2/edit`),
sin necesidad de subirla primero a almacenamiento externo.

### Derivados 2026-07-21 — `logo-estetic-dent-80.webp` y `-160.webp` (srcset del header)

| Archivo | Origen | Contenido |
|---|---|---|
| `logo-estetic-dent-80.webp` | Downscale de `logo-estetic-dent.webp` (`sharp`, `fit: contain`, fondo transparente, calidad 90) | 80×80px, ~2.1 KB — rendition @2x |
| `logo-estetic-dent-160.webp` | Mismo proceso, 160×160px, ~4.9 KB | Rendition @4x |

Motivo: el símbolo circular del header se redujo a 40px (spec Leo, lockup de
marca), y servir el maestro de 660×724 para ese render es innecesario —
ambos archivos se usan como `srcset` (`site.logoSrcset` en
`src/data/site.esteticdent.ts`, consumido por `Header.astro`). Son
downscales del maestro ya aprobado (no un nuevo upscale), así que no aplica
el riesgo de distorsión de wordmark que motivó evitar IA generativa arriba.

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
`mishel-chamorro-hero-ia.webp` quedó en disco sin usarse en ninguna página en
ese momento — no se eliminó porque podría reutilizarse en una futura sección
de "equipo". No reintroducir en el HERO sin que Leo lo pida de nuevo.

### Reincorporada 2026-07-21 — en TeamSection, no en el hero

Feedback directo de Leo tras ver el hero ya corregido (foto horizontal, ver
sección de arriba): el sitio completo se sentía frío — ninguna sección tenía
personas ni doctores, solo ambientes y equipo. Se evaluó cambiar de variante
de Capa 2 por completo (V1/V4, ver CLAUDE.md) vs. mantener V3 e inyectar
calidez puntual; Leo eligió la segunda opción.

`mishel-chamorro-hero-ia.webp` se reincorpora como `foto` del perfil de la
Dra. Chamorro en `TeamSection` (`src/data/consultorio.esteticdent.ts`) — una
tarjeta de equipo de tamaño estándar (avatar circular 120px), no dominando el
hero como en el intento del 2026-07-19. Esto no repite el problema de
"armonía" que motivó sacarla del hero: ese feedback era sobre su tamaño y
protagonismo en esa posición específica, no sobre la foto en sí ni sobre
consentimiento/autenticidad. `TeamSection` también se subió de posición en la
página (ahora justo después de Testimonials) para que haya una cara humana
antes del segundo scroll.

## Fotos nuevas 2026-07-22 — spec de densidad visual (cards ancla + "Sonrisas reales")

⚠️ **PLACEHOLDER Nivel 2 — Pexels, SOLO demo de venta.** Descargadas y
convertidas a WebP con `sharp` (recorte `attention`, calidad 78). Los
originales JPG están en `originales/pexels-<id>.jpg`. Casi todas pertenecen a
la MISMA serie fotográfica (misma clínica, mismos modelos, fotógrafo Gustavo
Fring en Pexels) para cumplir el tratamiento de color unificado (regla de
profundidad visual #1, CLAUDE.md).

**Cabeceras 3:2 de las cards ancla de servicios:**

| Archivo | Origen (Pexels ID) | Contenido |
|---|---|---|
| `servicio-limpieza.webp` | 3845653 | Paciente sonriendo durante su limpieza, con espejo dental |
| `servicio-diseno-sonrisa.webp` | 3762398 | Sonrisa luminosa en primer plano (fondo azul) |
| `servicio-urgencias.webp` | 3845746 | Odontóloga atendiendo con microscopio clínico |

**Pares antes/después de la sección "Sonrisas reales" (1:1):**

| Archivo | Origen (Pexels ID) | Contenido |
|---|---|---|
| `sonrisa-ortodoncia-antes.webp` | 3845678 | Paciente (sonrisa cerrada) revisando alineador |
| `sonrisa-ortodoncia-despues.webp` | 3845757 | La misma paciente riendo con la odontóloga |
| `sonrisa-blanqueamiento-antes.webp` | 3845548 | Guía de tonos VITA contra la sonrisa de la paciente |
| `sonrisa-blanqueamiento-despues.webp` | 3845625 | La misma paciente con sonrisa abierta en el sillón |
| `sonrisa-diseno-antes.webp` | 3845735 | Paciente (hombre) durante tratamiento |
| `sonrisa-diseno-despues.webp` | 3845810 | El mismo paciente sonriendo en el sillón |

Cada par antes/después usa la **misma persona** (dos momentos de la misma
sesión de fotos) para que el par sea plausible en el demo — pero **NO son
casos clínicos reales**. Regla dura para la entrega final: o se reemplazan
por casos reales del propio consultorio **con consentimiento escrito del
paciente**, o la sección "Sonrisas reales" se retira completa (pasar array
vacío a `AntesDespues.astro` — la sección se omite sola). Publicar resultados
de banco como si fueran propios es publicidad engañosa (CLAUDE.md, regla de
autenticidad del vertical).

## Cabeceras regeneradas con IA gratuita 2026-07-22 (Nivel 2.5 — SOLO demo de venta)

⚠️ **PLACEHOLDER Nivel 2.5 — personas SINTÉTICAS, generadas con IA.**
Pedido explícito de Leo: regenerar las cabeceras de cards con una IA
gratuita (en vez de fal.ai de pago) manteniendo el hero intacto. Generadas
con **Pollinations.ai** (modelo Flux, gratuito, sin API key), curadas
manualmente entre varias semillas (se descartaron resultados con artefactos:
instrumental deforme, texto ilegible en uniformes, pantallas con bocas
irreales). JPG fuente en `originales/pollinations-flux-*-seed<N>.jpg` — el
seed del nombre + el prompt permiten regenerar variantes coherentes.

| Archivo | Seed | Contenido (sintético) |
|---|---|---|
| `servicio-limpieza-ia.webp` | 11 | Paciente sonriendo en sillón, clínica navy/naranja |
| `servicio-diseno-sonrisa-ia.webp` | 7 | Retrato de sonrisa luminosa |
| `servicio-urgencias-ia.webp` | 23 | Odontóloga con mascarilla atendiendo a paciente |
| `tecnologia-rayosx-ia.webp` | 32 | Odontóloga señalando radiografía panorámica en monitor |
| `tecnologia-camara-ia.webp` | 45 | Odontóloga y paciente mirando pantalla junto al sillón |
| `tecnologia-esterilizacion-ia.webp` | 52 | Instrumental sellado en funda de esterilización |

Ventaja sobre el stock retirado: las 6 comparten la paleta real de la marca
(navy #122B54 + naranja #F2703C) — coherencia imposible con banco de fotos.
Las 3 cabeceras de stock reemplazadas quedaron en `retirados-stock-cards/`
(sus originales Pexels siguen en `originales/`).

**Los pares antes/después de "Sonrisas reales" NO se regeneraron**: se
intentó Flux Kontext (edición imagen-a-imagen) en Pollinations para producir
pares de la misma persona sintética, pero no está disponible en el tier
anónimo gratuito. Siguen siendo los pares de stock Pexels (misma persona
real por par) documentados arriba — misma regla dura para la entrega final.

Regla intacta: personas sintéticas presentadas como pacientes/equipo real en
la ENTREGA FINAL publicada = prohibido (CLAUDE.md). Todo esto es material de
demo de venta y debe reemplazarse por fotos reales con consentimiento.

## Set 2026-07-23 — pipeline de Gemini (reemplaza las cabeceras Pollinations)

⚠️ **PLACEHOLDER Nivel 2.5 — personas sintéticas, SOLO demo de venta.**
Generado con el pipeline oficial (`scripts/generate-images.mjs`,
`gemini-2.5-flash-image`, shot list `assets/prompts/shots-esteticdent.json`),
QC documentado en `assets/generated/review/QC-REPORT.md`, aprobación humana
de Leo 2026-07-23, masters versionados en `assets/generated/approved/`.
Archivos: `card-limpieza`, `card-diseno-sonrisa`, `card-urgencias` (3:2),
`tec-radiografia`, `tec-camara-intraoral`, `tec-esterilizacion` (16:9),
`hero-consultorio` y `ambiente-recepcion` (reserva) — cada uno con rendition
`@2x`. Los WebP de Pollinations que reemplazan quedaron en
`retirados-pollinations/` (sus fuentes siguen en `originales/`).
`hero-consultorio` NO está integrado: Leo pidió mantener el hero actual
(`clinica-ia.webp`); queda optimizado y listo por si decide cambiarlo.

## Re-grade 2026-07-23 v3 — pares antes/después de "Sonrisas reales"

⚠️ **Sigue siendo Nivel 2 (stock Pexels), NO se regeneró con IA** — la regla
dura del pipeline prohíbe fabricar antes/después clínicos (ver
`scripts/generate-images.mjs`, `PATRONES_PROHIBIDOS`).

Feedback de Leo tras integrar el set Gemini: los 6 pares de stock seguían
desentonando ("siguen siendo no coherentes"). Un primer ajuste de
saturación/brillo (`-v2.webp`, descartado, nunca commiteado) resultó
insuficiente porque el problema real no era saturación sino **balance de
blancos**: las fotos de stock están iluminadas con flash frío/azulado,
mientras el set Gemini tiene luz ambiental cálida. `-v3.webp` corrige
temperatura de color primero (`sharp .linear([1.08, 1.0, 0.86], [-6, 0, 4])`
para subir rojo/bajar azul) y después aplica la reducción de
saturación/gamma (`modulate({ saturation: 0.62, brightness: 1.02 }).gamma(1.06)`).

Regrades desde los originales `sonrisa-*.webp` (no desde el intento
descartado), archivos: `sonrisa-ortodoncia-antes-v3.webp`,
`sonrisa-ortodoncia-despues-v3.webp`, `sonrisa-blanqueamiento-antes-v3.webp`,
`sonrisa-blanqueamiento-despues-v3.webp`, `sonrisa-diseno-antes-v3.webp`,
`sonrisa-diseno-despues-v3.webp`. Los `sonrisa-*.webp` sin sufijo se
conservan como fuente/respaldo para futuros regrades. Filename nuevo =
cache-busting (lección El Fogón).

Regla intacta: reemplazar por casos reales del propio consultorio con
consentimiento escrito del paciente antes de la entrega final, o retirar la
sección completa si el cliente no los tiene.
