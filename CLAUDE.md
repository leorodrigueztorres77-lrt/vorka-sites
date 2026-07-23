# Vorka — Contexto del Proyecto

Este archivo lo lee Claude Code automáticamente al abrir esta carpeta. Contiene el
contexto de negocio que todos los skills asumen como conocido — no lo repitas en
cada skill individual.

## Qué es Vorka

Vorka es la casa matriz de dos productos hermanos:

1. **Agencia de webs multi-vertical** (restaurantes + consultorios médicos/dentales)
   — genera caja desde el mes 1, canal de adquisición de bajo CAC.
2. **Ordercash** — SaaS de pedidos, cobro y facturación electrónica SRI vía WhatsApp
   — el activo escalable y defendible.

La agencia es el canal de adquisición de Ordercash, no un negocio aislado. Ambos se
refuerzan, pero Ordercash **solo aplica al vertical restaurante** por ahora.

## Verticales activos

| Vertical | Prioridad | Ordercash |
|---|---|---|
| Restaurantes | Máxima — carrera competitiva contra OlaClick | Sí, prioridad total |
| Consultorios médicos/dentales | Alta — mejor vertical puro de la agencia (ticket $450-750, baja sensibilidad al precio) | No aplica todavía — su flujo es citas, no pedidos |

## Roles (no reasignar sin que Leo lo indique explícitamente)

- **Leo (fundador):** cierre de ventas, decisiones de pricing y alianzas, supervisión
  de calidad, inteligencia competitiva (ej. seguimiento de OlaClick).
- **Claude Code (con estos skills):** producción — código, copy, demos, prospección,
  documentos. Trabaja con instrucciones puras: no hay scripts pre-escritos dentro de
  los skills, Claude genera el código de cada sitio en el momento, adaptado a cada
  cliente.
- **VA externo:** contacto masivo inicial por WhatsApp y filtrado de leads. No cierra
  ventas.

## Stack técnico

- **Framework de las webs de clientes: Astro.** Elegido por velocidad, SEO-friendly
  y porque los sitios de restaurantes/consultorios son mayormente estáticos — no
  necesitan el overhead de Next.js.
- **Next.js está reservado para el panel de Ordercash** (confirmado en su
  documentación fuente) — no se usa para las webs de clientes de la agencia.
- **Hosting: Hostinger** (plan reseller). El deploy final de cada sitio Astro es un
  build estático.
- **Dominios:** se registran a nombre del cliente, pero Vorka los administra
  mientras dure el contrato de mantenimiento.

## Identidad de marca — VORKA (la agencia, para su propia web y materiales)

Usar ÚNICAMENTE en la web propia de Vorka, presentaciones, y contenido de marketing
de la agencia — NUNCA en las webs que se construyen para clientes (esas usan la
identidad del propio negocio del cliente).

- **Colores:** Verde #39D353 (primario), Azul #1DA1F2 (acento), Blanco #FFFFFF,
  gris oscuro para texto secundario.
- **Tipografía:** Poppins (titulares, bold/semibold), Montserrat (texto, regular/light).
- **Tagline:** "Think smart, move fast."
- **Tono:** moderno, confiado, inspirador, directo, cercano y actual.
- **Iconografía:** conceptos de inteligencia, agilidad, innovación, confianza, resultados.

## Identidad de marca — ORDERCASH (producto hermano — usar SOLO en contenido de cross-sell)

Aplica exclusivamente cuando se genera contenido relacionado con Ordercash (ej. el
skill `ordercash-crossell-brief`). Nunca mezclar con la identidad de Vorka ni con la
de un cliente.

- **Colores:** Verde Ordercash #0FB981 (primario), Verde Brillante #22E5A6 (acento),
  Verde Tinta #06231F (texto sobre fondos claros), Lima Eléctrico #B8F84B (énfasis
  mínimo, nunca para texto largo).
- **Tipografía:** Poppins (titulares), Inter (texto/UI).
- **Tagline principal:** "Del chat al cobro. Automático."
- **Promesa de marca:** "Tú vendes. Ordercash factura, cobra y registra."

### Regla de oro de copy para Ordercash (OBLIGATORIA, sin excepciones)

Nunca usar de cara al cliente final las palabras: **"bot", "chatbot", "robot",
"inteligencia artificial", "IA", "LLM", "machine learning"**. Usar en su lugar
**"agente"**, **"asistente"** u **"Ordercash"**. Reforzar siempre que el usuario
mantiene el control: **"tú apruebas / tú confirmas antes de emitir"**. Español
latinoamericano neutro.

## Estado real de Ordercash (para no prometer de más)

- MVP en Sprint 0 al momento de este documento; vendible en ~12 semanas.
- Ingesta de pedidos web por API y "Tienda-link": fase de crecimiento, mes 7-9.
- **Mensaje seguro para usar hoy con clientes de la agencia:** "su web ya queda
  lista para el salto a Ordercash cuando esté disponible" — nunca prometer una
  integración que no existe todavía.

## Pricing vigente

**Agencia de webs:**
- Básica: $350 · Profesional: $500 · Premium: $750+
- Mantenimiento: $40–80/mes — vender siempre como servicio activo (cambios de
  contenido, reportes, soporte), **nunca como "hosting"** (el churn se dispara si el
  cliente lo percibe así).

**Ordercash:**
- Gratis/Trial: $0 · Base: $19–29/mes · Pro (con SRI): $49–59/mes ·
  Full + Web: $79–99/mes

**Add-ons de reputación (aplica a ambos verticales, independiente de Ordercash):**
- Radar de Competencia (reporte único, usado en la venta inicial): **sin costo**,
  es material de cierre — no un producto que se cobra aparte.
- Gestión de reputación recurrente (respuestas a reseñas + solicitud oportuna de
  reseñas nuevas): $25–40/mes add-on sobre el mantenimiento.
- Radar de Competencia recurrente (trimestral, con histórico de evolución):
  $20–30/mes add-on, o incluido de fábrica en el paquete Premium ($750+).

**Add-ons de reactivación de clientes/pacientes (ver skill `reactivation-campaigns`):**
- Restaurante con Ordercash activo: se posiciona como caso de uso del cross-sell
  ya existente hacia Ordercash, no como cobro adicional separado.
- Restaurante sin Ordercash o consultorio médico/dental: $20–35/mes add-on sobre
  el mantenimiento, como campaña mensual de reactivación de clientes/pacientes
  inactivos vía WhatsApp.

**Add-on de fotografía profesional (nuevo, ver sección "Manejo de imágenes" abajo):**
- Sesión de fotos básica coordinada con fotógrafo freelance local: $50–150,
  cobrado como fee de coordinación dentro del paquete Premium ($750+), o como
  línea aparte en Básica/Profesional si el cliente la solicita. Vorka coordina
  el servicio, no toma las fotos directamente.

## Por qué el Radar de Competencia es el gatillo de cierre más fuerte

A diferencia de SEO o WhatsApp automatizado (que venden una ganancia futura y por
lo tanto generan duda), el Radar de Competencia muestra una **pérdida ya
ocurriendo hoy** frente a un competidor con nombre y dirección conocidos — genera
una reacción de urgencia ("no puedo quedarme atrás de mi competencia") mucho más
fuerte que cualquier promesa abstracta de crecimiento. Úsalo como parte del demo
de venta inicial siempre que sea posible, no solo como reporte de mantenimiento.

## Checklist de conversión — obligatorio antes de entregar cualquier demo

Antes de enviarle el link a Leo para que lo muestre a un prospecto, responde
estas preguntas como si fueras el dueño del negocio viéndolo por primera vez.
Si alguna respuesta es "no", el demo no está listo.

### Para restaurante

**¿La foto del hero da hambre?**
La imagen principal debe mostrar un plato terminado, emplatado y apetitoso —
no ingredientes crudos, no salsas en frascos, no el local vacío. Si el cliente
no tiene esa foto, mejora con IA la mejor foto de plato que tenga, o usa banco
de fotos de ese plato específico (hornado real, no "comida genérica"). Esta es
la prueba más importante: si la foto no activa apetito en 3 segundos, el demo
no cierra.

**¿Hay al menos una señal social visible sin hacer scroll?**
El usuario desconoce el restaurante. Necesita ver antes del pliegue que otros
ya confiaron: una reseña real con nombre, un número de pedidos ("más de 200
pedidos este mes"), o una frase de cliente real. Sin esto, el botón de WhatsApp
genera fricción — nadie escribe a un restaurante que no conoce sin una señal
de que vale la pena.

**¿El copy del hero nombra algo específico del negocio?**
"Sabor de siempre, receta de casa" podría ser cualquier restaurante de Ecuador.
El subtítulo debe mencionar algo concreto y propio: el plato estrella, el barrio,
el diferenciador real. Ejemplos que sí funcionan: "El hornado que se acaba antes
del mediodía, en Conocoto" o "Llapingachos como los de tu abuela — desde 1987".
Si el copy puede aplicarse a otro restaurante sin cambiar una palabra, reescribir.

**¿El botón de WhatsApp del hero se ve claramente sobre la foto o el fondo?**
El color del CTA principal debe tener contraste mínimo 4.5:1 contra su fondo.
Un botón dorado/ocre sobre blanco casi desaparece — usar el mismo color oscuro
que funciona en el header. Verificar en pantalla de celular antes de entregar,
no solo en desktop.

**¿El menú muestra precio Y foto en los platos de mayor valor?**
Los platos fuertes (los de $6+) necesitan imagen — el cliente necesita "ver"
lo que va a pedir antes de escribir por WhatsApp. Un menú de solo texto y precio
es funcional pero no convierte tan bien como uno con foto del plato real.

**¿Las fotos de la galería se ven como del mismo restaurante?**
Si las fotos tienen temperaturas de color, iluminación o estilos radicalmente
distintos entre sí, el resultado se lee como collage genérico de internet, no
como fotos reales del negocio. Unificar con filtro de color antes de publicar.

### Para consultorio médico/dental

**¿El profesional aparece con foto real en el primer scroll?**
La confianza en un consultorio se transfiere de persona a persona, no de logo
a persona. Si no hay foto real disponible, mejorar con IA una foto de celular
real — nunca reemplazar con "doctor genérico de stock".

**¿Están visibles las credenciales concretas?**
Universidad, especialidad, años de experiencia, seguros que acepta. El paciente
nuevo necesita estas señales para justificar dar el paso de agendar. Sin ellas,
el sitio se siente igual que cualquier consultorio sin diferenciador.

**¿Hay un testimonio de paciente real (aunque sea uno)?**
Mismo principio que el restaurante: señal social antes de pedir una acción.

### Regla de cierre del checklist

Un demo técnicamente correcto (carga rápido, mobile-first, grilla de 8pt,
CTA en el header) pero que no supera este checklist **no está listo para
mostrarse**. La pregunta que Leo debe poder responder al verlo es: *"¿Le
mandaría este link a un prospecto mañana?"* — si la respuesta es "todavía
no", identificar qué falla de esta lista y corregirlo antes de enviarlo.

## Reglas de diseño técnicas obligatorias en cada web generada

- Formularios con datos estructurados (producto/servicio, cantidad, datos del
  cliente) exportables por webhook — no solo un envío de email. Esto facilita la
  futura integración con Ordercash en el vertical restaurante.
- Campo RUC/cédula opcional en el formulario de contacto.
- Todo botón de WhatsApp lleva parámetros de tracking, ej.:
  `?utm_source=web&negocio={slug}`.
- La identidad visual de cada web (colores, logo, tipografía) es la **del negocio
  del cliente** — nunca la de Vorka ni la de Ordercash.
- Optimización SEO local: meta título y descripción por página.

### Jerarquía de CTA (validado con datos de mercado — ver investigación UX 2026)

El formulario de contacto ("Contáctanos") NUNCA es el CTA principal. Los sitios
de alta conversión priorizan botones de acción directa por encima del pliegue:
"Pedir por WhatsApp" / "Agendar cita por WhatsApp" es el CTA principal en Hero y
Header. El formulario de contacto es un canal de respaldo (footer o sección
secundaria) para consultas que no son un pedido/cita directo — nunca compite en
jerarquía visual con el botón de WhatsApp.

### Estándares de rendimiento (medibles, no solo "mobile-first" genérico)

- Carga menor a 3 segundos en móvil (cada segundo adicional reduce conversión
  ~7% según datos de mercado 2026).
- Texto mínimo 16px — evitar la falla común de fuentes pequeñas que afecta a más
  de la mitad de sitios de restaurantes.
- Botones/elementos táctiles mínimo 44x44 píxeles.
- Imágenes en formato WebP/AVIF, no JPEG/PNG sin optimizar.
- Menús y servicios siempre en HTML — nunca PDF (no indexa en buscadores, mala
  experiencia en móvil).

### Elemento visual de fidelización (conecta con `reactivation-campaigns`)

Incluir en Capa 2 de restaurante (y evaluar para consultorio) un componente
simple y visible en el propio sitio — no solo mensajes de WhatsApp aislados —
que muestre estado de cliente frecuente o progreso hacia una recompensa (ej.
"te faltan 2 pedidos para tu descuento"). Los datos que alimentan este
componente son los mismos que usa `reactivation-campaigns`.

### Sistema de diseño — grilla de 8 puntos (estándar universal, validado con
### Google Material, Apple HIG, IBM Carbon, Ant Design)

Todo espaciado (padding, margin, alto de botón, tamaño de ícono) se define en
múltiplos de 8px (8, 16, 24, 32, 40, 48...). La altura de línea (line-height)
del texto se define en múltiplos de 4px, más fino para ajustar mejor el tipo.
Este es el estándar que hace que un sitio se perciba como profesional y
consistente — un layout sin patrón espacial reconocible se percibe, sin que el
usuario sepa articular por qué, como barato e inconsistente.

- Si el proyecto usa Tailwind CSS (recomendado con Astro), esto queda resuelto
  de forma nativa: la escala de Tailwind es base 4px, así que clases estándar
  (`p-4`=16px, `gap-6`=24px, `mt-8`=32px) ya caen en múltiplos de 8 sin esfuerzo
  adicional.
- **Siempre usar `box-sizing: border-box` en el CSS global.** Sin esto, un
  borde de 1px suma 2px al ancho/alto total de un elemento (1px por lado),
  rompiendo silenciosamente la grilla de 8pt sin que sea obvio por qué "algo se
  ve raro" — es el error técnico más común que arruina este estándar.
- Botones/elementos táctiles: mínimo 44x44px, idealmente ajustado a múltiplos
  de 8 (ej. 48x48px).
- Este sistema de espaciado es la "gramática" subyacente compartida por las 5
  variantes de Capa 2 (ver "Arquitectura de producción de webs") — no reemplaza
  la variación estructural entre variantes ni la identidad visual de Capa 3, es
  lo que hace que cualquiera de las 5 se sienta pulida independientemente de
  qué tan distintas sean entre sí.

### Referencias reales analizadas — qué hace cada categoría que el demo actual no hace

Estos patrones se extrajeron de los sitios de referencia reales (Sweetgreen,
Chipotle, Central Restaurante, Carbon Health, One Medical). No son aspiraciones
de diseño de agencia internacional — son decisiones concretas replicables con
Astro que explican por qué esos sitios convierten y el demo actual no.

**Restaurante casual (Sweetgreen, Chipotle):**
- El hero siempre muestra el producto terminado en primer plano, fotografiado
  con luz cálida y apetitosa — nunca ingredientes crudos, nunca el local vacío.
  Chipotle usa video del proceso de preparación: el pollo en la parrilla, el
  guacamole siendo preparado. El efecto es inmediato: activa hambre antes de
  que el usuario lea una sola palabra.
- El CTA del hero es de una sola acción y muy específico: "Order Now", nunca
  "Contáctanos" ni "Conoce más". La acción es pedir, no explorar.
- Los nombres de los platos en el menú van acompañados de ingredientes reales
  listados ("antibiotic-free roasted chicken, tomatoes, shaved parmesan...") —
  no solo el nombre. Eso elimina la fricción de "¿y eso qué lleva?".
- Hay un programa de fidelización visible en el mismo sitio, no solo en la app.
  Sweetgreen lo muestra como sección con CTA propio. Este es exactamente el
  componente de fidelización que ya está documentado en la Capa 2 de Vorka —
  estos sitios confirman que funciona.

**Restaurante fine dining LATAM (Central Restaurante, Lima):**
- El sitio no muestra platos — muestra territorio, paisaje, filosofía. Pero
  Central tiene 3 Michelin stars; ese es el único contexto donde la abstracción
  vende. Para un restaurante en Conocoto, la abstracción no tiene ese respaldo
  — necesita mostrar el plato. La referencia válida de Central no es su
  estética, es su claridad de propósito: cada elemento del sitio comunica una
  sola idea ("recorrido vertical por el Perú"), no varias a la vez.
- El copy del hero de Central es tipográfico, enorme, pocas palabras. Eso
  funciona cuando la marca ya es conocida. Para un cliente nuevo de Vorka, el
  copy sí necesita ser descriptivo — pero puede ser igualmente limpio y de
  pocas palabras si está bien escrito.

**Consultorio moderno (Carbon Health, One Medical):**
- El hero de Carbon Health dice exactamente lo que el paciente quiere escuchar:
  "This is care as it should be / Easy scheduling. Caring providers." — dos
  líneas, sin tecnicismos médicos. One Medical dice "Comprehensive healthcare
  just got less painful". Ambos hablan del dolor del proceso, no de los
  servicios médicos. El paciente no busca "odontología de calidad" — busca
  "que no sea una tortura agendar".
- El CTA de ambos es agendar, nunca "contáctanos": "Book an Appointment" /
  "Get Started" — equivalente exacto del "Agendar cita por WhatsApp" de Vorka.
- Carbon Health muestra testimonios reales con nombre y ciudad del paciente
  inmediatamente después del hero — antes del listado de servicios. Esa
  secuencia (propuesta → prueba social → servicios) es la que convierte, no
  (servicios → sobre nosotros → contacto).
- One Medical muestra el precio de la membresía en el hero mismo: "$99/year".
  La transparencia de precio genera confianza, no ahuyenta. Para los
  consultorios de Vorka: mostrar el rango de precio de una consulta ("desde
  $X") elimina la fricción de "¿y cuánto cobran?" que impide que el paciente
  llame.

**Lo que NINGUNO de estos sitios hace y que el demo actual sí hace:**
- Ninguno tiene una sección "Galería" de 4 fotos sin contexto en el segundo
  scroll. Las fotos en los sitios de referencia siempre están integradas al
  contenido (dentro de la carta, como fondo del hero, junto a un testimonio)
  — nunca como galería flotante desconectada.
- Ninguno separa "Horarios" y "Ubicación" en dos secciones distintas. Siempre
  van juntos: dirección + horario + mapa en un solo bloque.
- Ninguno tiene un botón de CTA con color que se confunde con el fondo. Todos
  usan su color primario más oscuro para el botón principal, no un acento
  claro.

**Regla operativa derivada de estas referencias:**
Antes de construir cualquier sección nueva, preguntar: *¿Sweetgreen o Carbon
Health tendrían esta sección? ¿En este orden?* Si la respuesta es no, revisar
por qué — probablemente hay una razón de conversión detrás de la decisión que
tomaron ellos.

### Benchmark que respalda estas reglas (referencia corta)

- **Internacional (categoría restaurante/hospitalidad, no "top tráfico"
  genérico):** sitios premiados en Awwwards/Webby/James Beard (Chipotle,
  Sweetgreen, Momofuku, Dishoom) validan que el diseño de alto nivel se mide
  por resultado comercial documentado (ej. Chipotle 60%+ transacciones
  digitales), no por estética pura — y usan stacks headless modernos
  (Next.js/CMS) priorizando velocidad, igual que nuestro Astro.
- **Local (Ecuador):** agencias establecidas (Monkey Plus, Pulpo Creativo,
  ZEWS, Publitek, Pablo Ronquillo) no aparecen en ningún ranking internacional
  de diseño premiado — confirma que el mercado local compite en ejecución y
  servicio, no en diseño de vanguardia. Un diseñador de Guayaquil resume la
  misma filosofía que ya aplicamos: una web "que parece obra de arte" pero no
  genera ventas es un error — la jerarquía de CTA (WhatsApp > estética) ya
  definida en este documento está alineada con el propio consenso del mercado
  ecuatoriano, no es una limitación de presupuesto.
- **Conclusión operativa:** no perseguir el nivel de inversión Awwwards/Michelin
  (tipografía comisionada, fotografía de agencia) — con las reglas ya
  documentadas en este archivo (grilla 8pt, jerarquía de CTA, rendimiento,
  fotografía real con IA) ya se supera el estándar local actual.

### Reglas de profundidad visual — evitar planitud ("backbone with flair")

Detectado en prueba real (El Fogón Ecuatoriano V1): seguir todas las reglas
técnicas de esta sección no es suficiente por sí solo — el resultado puede
cumplir cada regla y aun así sentirse "plano" o genérico. Estas 5 reglas
adicionales son obligatorias en cada variante de Capa 2 para evitar ese
resultado, sin contradecir la jerarquía de CTA ni los estándares de
rendimiento ya definidos:

1. **Tratamiento de color unificado en fotos de un mismo sitio** (ver también
   "Manejo de imágenes", Nivel 2) — nunca mezclar fotos de estilos/iluminación
   muy distintos entre sí en la misma galería.
2. **Al menos una sección con bloque de color sólido**, no solo fondo
   blanco/gris alternado — ej. la sección de testimonios o historia con fondo
   del color primario oscuro y texto claro. Un sitio sin ningún bloque de
   color se siente "sin peso" aunque la tipografía y el espaciado sean
   correctos.
3. **Elementos de contenido repetitivo (menú, servicios) con algo de
   profundidad visual** — tarjetas con sombra sutil (`box-shadow` ligero,
   compatible con la grilla de 8pt), no solo líneas divisorias planas entre
   ítems.
4. **Un elemento textural o decorativo sutil por sitio, coherente con el
   rubro** — ej. un patrón textil andino de fondo al 5-8% de opacidad en una
   sección para restaurante ecuatoriano, o un patrón geométrico suave para
   consultorio — nunca al costo de legibilidad ni de los estándares de
   rendimiento ya definidos.
5. **Contraste tipográfico real entre títulos y texto de cuerpo** — el peso
   (bold/regular) y tamaño entre un `h2` de sección y su texto de apoyo debe
   sentirse marcadamente distinto, no solo ligeramente distinto.

Estas 5 reglas aplican por igual a las 5 variantes de cada vertical — son
parte de la Capa 2, no de la Capa 3, así que se construyen una vez por
variante y no se improvisan por cliente.

## Identidad visual para CLIENTES sin marca definida (ver skill `brand-kit-starter`)

**Importante — no confundir con la identidad de Vorka ni la de Ordercash
(secciones arriba):** esto aplica solo a negocios de clientes (restaurante o
consultorio) que no tienen logo, colores ni tipografía propios todavía. Muchos
negocios informales no tienen ninguna identidad definida — hay que ayudarles a
crear una básica antes de personalizar su web.

### Paletas validadas por vertical y tono (máximo 3 colores por kit)

**Restaurante:**
- Cálido/familiar/tradicional → tonos tierra (terracota, ocre, verde oliva,
  marrón cálido).
- Casual/moderno/enérgico → acento naranja o coral sobre neutros claros.
- Elegante/alta cocina → paleta oscura sofisticada (negro/carbón + un acento
  cálido puntual — dorado o vino).

**Consultorio médico/dental:**
- Confianza clínica/moderna → azul-verde (teal) o azul suave.
- Bienestar/cercanía → tonos spa suaves (verde salvia, blanco cálido, beige).
- Premium/serio → minimalista blanco/negro + un solo acento.

**Regla general:** nunca más de 3 colores totales por kit de cliente — más
colores compitiendo entre sí se percibe como menos profesional, no más.

**Nunca uses la paleta Electric Blue / tech-SaaS de Vorka en el kit de un
cliente** — esa paleta es específica de Vorka como agencia de tecnología, no
tiene sentido en un restaurante o consultorio.

### Tipografía y wordmark

Un par de fuentes por cliente (titular con personalidad + texto legible),
tomadas de Google Fonts. El "logo" generado por defecto es un wordmark
tipográfico (nombre del negocio tratado con la fuente y color elegidos) — NO
un ícono o símbolo diseñado. Si el cliente quiere un logo con símbolo gráfico,
eso es un servicio de diseño de marca más completo, fuera del alcance de
`brand-kit-starter` — se conversa con Leo como posible add-on aparte.

## Manejo de imágenes — de dónde salen las fotos de cada web

Muchos clientes no sabrán cómo conseguir o producir fotos adecuadas. Este es el
proceso de 3 niveles que sigue cualquier skill que trabaje con imágenes
(`demo-personalizer`, `vertical-web-builder`, `maintenance-updates`).

### Nivel 1 — Default, sin costo extra: fotos del cliente + mejora con IA

La mayoría de dueños de negocio tienen fotos en su celular, aunque sean
mediocres. La IA mejora lo real (color, luz, encuadre, eliminar fondo
desordenado, upscaling de resolución) — nunca inventa o reemplaza el contenido
real de la foto. Esta es la vía preferida siempre que el cliente tenga aunque
sea fotos básicas.

### Nivel 2 — Respaldo temporal: banco de fotos con licencia, por vertical

Cuando el cliente no tiene ninguna foto usable, se usa un banco curado de fotos
con licencia de uso comercial (Unsplash, Pexels, librería paga), organizado por
tipo de cocina o especialidad médica, para no dejar espacios vacíos mientras el
cliente consigue fotos reales. **Toda foto de este nivel debe marcarse
explícitamente como placeholder temporal** en un comentario interno del código
(no visible en el sitio publicado) — tanto en el demo de venta como en la
entrega final, hasta que se reemplace por fotos reales.

**Reglas obligatorias adicionales (detectadas en prueba real — El Fogón
Ecuatoriano, ver caso documentado):**

- **Coherencia específica de rubro, no solo "comida" genérica.** Un restaurante
  de comida ecuatoriana necesita fotos que se parezcan a platos ecuatorianos
  reales (hornado, llapingachos, encebollado, ceviche de camarón) — nunca fotos
  de stock de otra gastronomía (tacos, comida asiática genérica) solo porque
  "es comida". El cliente real notaría de inmediato que no es su comida.
- **Tratamiento de color unificado entre todas las fotos de un mismo sitio.**
  Aunque las fotos vengan de fuentes de stock distintas, deben ajustarse a un
  balance de blancos y saturación consistente entre sí — de lo contrario el
  resultado se lee como "collage genérico" en vez de "fotos de un mismo lugar",
  incluso si cada foto individual es de buena calidad.
- **La foto del hero debe coincidir con el tono declarado del negocio.** Si el
  tono es "cálido/familiar/tradicional", la foto no puede ser un ambiente frío
  e industrial (ej. pared de ladrillo expuesto con iluminación de gastrobar
  moderno) — hay que verificar que el *mood* visual de la foto coincida con el
  tono textual antes de darla por buena, no solo que el tema (comida) coincida.

### Nivel 2.5 — Generación IA de plato/escena específica (SOLO demo de venta)

Validado en el caso El Fogón (2026-07): cuando el banco de fotos NO tiene el
plato exacto (ej. no existe foto de hornado con licencia clara), se puede
generar imagen y video del plato específico con IA — Nano Banana 2 para
imagen (~$0.04) y Seedance 2.0 para video (~$1.80 por clip 720p/6s), vía
fal.ai (pago por uso; script reutilizable en
`SiteWise+/scripts/fal-generate-clips.mjs`). Reglas duras:

- **Solo para el demo de venta, NUNCA en la entrega final publicada** — la
  regla de autenticidad del vertical sigue intacta. Marcar siempre
  `PLACEHOLDER IA` en comentario interno + README de origen en la carpeta.
- **Fidelidad a cómo se sirve el plato de verdad, no solo a qué plato es.**
  Hornado ecuatoriano = carne DESMENUZADA (hebras) con trozos de cuero, y
  agrio TRANSLÚCIDO (vinagreta con cebolla) — nunca un bloque entero tipo
  porchetta ni salsa roja en bol. Un local nota el error de servido igual de
  rápido que una gastronomía equivocada. Verificar la forma de servir con el
  dueño o con referencia local ANTES de generar.
- **Assets separados por cliente**: `public/images/<slug>/` y
  `public/videos/<slug>/`, nunca en carpetas compartidas ni reutilizados
  entre clientes o verticales.
- **Coherencia imagen↔video**: generar primero la imagen del plato y usarla
  como start/end frame de los clips, para que todo el sitio muestre el mismo
  plato.

### Nivel 3 — Add-on pagado: sesión de fotos profesional coordinada

Ver pricing — Vorka coordina (no ejecuta) una sesión con fotógrafo freelance
local, ofrecida como parte del paquete Premium o como línea aparte.

### Reglas obligatorias de autenticidad (por vertical)

- **Restaurante:** nunca generar fotos de comida 100% con IA para mostrarlas
  como si fueran reales. Si el plato mostrado no se parece al que el cliente
  final recibe, es publicidad engañosa y el riesgo reputacional recae sobre el
  restaurante y, por extensión, sobre Vorka.
- **Consultorio médico/dental:** nunca usar una foto de "doctor genérico" de
  stock en el perfil profesional — la autenticidad de esa foto es parte del
  producto. Si no hay foto profesional disponible, prioriza mejorar con IA
  (Nivel 1) una foto real de celular antes que reemplazarla con un genérico de
  stock (Nivel 2 no aplica a la foto de perfil del profesional, solo a fotos
  ambientales del consultorio si hiciera falta).

## Arquitectura de producción de webs — 3 capas (NO se reconstruye en cada entrega)

Este es el modelo de producción que todos los skills de construcción de webs deben
respetar. Las capas son acumulativas y cada una se reutiliza en la siguiente — no
se reconstruyen desde cero salvo que se indique explícitamente.

- **Capa 1 — Sistema base (se construye UNA sola vez para TODA la agencia,
  independiente del vertical).** Estructura común a cualquier sitio Vorka:
  header, hero, testimonios, mapa, formulario de contacto con datos estructurados
  y campo RUC/cédula, footer, lógica del botón de WhatsApp con tracking,
  configuración base de SEO/mobile-first, y el pipeline de build/deploy hacia
  Hostinger. Una vez construida, se reutiliza para restaurantes, consultorios y
  cualquier vertical futuro sin tocarla de nuevo.
- **Capa 2 — Librería de 5 variantes por vertical (se construye UNA vez por
  cada vertical, sobre la Capa 1 ya existente).** No es un template único —
  son 5 variantes que comparten los mismos componentes de Capa 1 pero varían
  en estructura (orden de secciones, formato de menú/perfil, peso visual del
  hero), para que dos clientes del mismo vertical no se sientan como copias
  entre sí. Hoy existen dos verticales: Restaurante y Consultorio
  médico/dental, cada uno con sus 5 variantes. Un vertical nuevo (ej.
  farmacias) implicaría construir una nueva librería de 5 variantes,
  reutilizando siempre la Capa 1. Ver skill `vertical-web-builder` para el
  detalle de cada variante y la regla de asignación (competidores directos
  nunca comparten variante — conecta con `reputation-radar`).
- **Capa 3 — Personalización por cliente (esto SÍ cambia en cada entrega, es la
  única capa que se repite por cada compañía).** Logo, colores derivados del
  negocio, fotos, textos específicos (nombre, menú/especialidades reales,
  diferenciadores), datos de contacto. Es lo único que el skill
  `demo-personalizer` y las entregas finales deben tocar — nunca deberían
  necesitar modificar la Capa 1 ni la Capa 2 para atender a un cliente nuevo.

**Regla práctica para cualquier skill:** antes de construir algo, verifica primero
si la Capa 1 ya existe en el repo (revisa si hay un proyecto Astro base). Si
existe, solo verifica cuántas de las 5 variantes de Capa 2 del vertical pedido
ya existen. Si las 5 existen, el trabajo real es 100% Capa 3 — nombre, fotos,
textos del cliente específico, y la selección de cuál de las 5 variantes usar.
Reconstruir Capa 1 o Capa 2 sin necesidad es un error de producción que rompe
la lógica de escala del modelo (de 20-40 horas por web a 1.5-2 horas).

## Lecciones aprendidas — caso El Fogón Ecuatoriano (2026-07), aplican a Capa 1 y Capa 2

Reglas detectadas en producción real. Los skills de construcción
(`vertical-web-builder`, `demo-personalizer`) deben aplicarlas al construir o
tocar cualquier variante:

**Para la Capa 1 (sistema base):**

1. **Cache-busting obligatorio al reemplazar assets.** Si un asset se corrige
   conservando el nombre de archivo, hay que subir la versión (`?v=N`) en
   TODAS sus referencias (hero, cards, posters de video, og:image). Los
   navegadores de los prospectos cachean agresivo: un demo "corregido" que se
   sigue viendo viejo en el celular del dueño mata la venta. Preferir
   filenames versionados o query param — nunca confiar en que "recarguen".
2. **Imágenes auto-hospedadas, nunca hotlink al banco (Pexels/Unsplash) en
   páginas entregables.** Descargar, optimizar a WebP y servir desde
   `public/` (manteniendo el marcado de placeholder). El hotlink es frágil:
   proxies corporativos lo bloquean, el asset puede desaparecer, y viola el
   estándar de rendimiento. (Detectado: las fotos remotas de El Fogón no
   cargaban tras un proxy corporativo mientras las locales sí.)
3. **Patrón validado de sección de video sin costo de rendimiento:**
   `<video muted playsinline preload="none" poster="...">` + IntersectionObserver
   (reproduce UNA vez al ser ≥50% visible) + `prefers-reduced-motion` → se
   queda en el poster. Cero impacto en carga inicial (Lighthouse 100/97 se
   mantuvo con 2 videos de ~5 MB c/u). Candidato a componente reutilizable de
   Capa 1 para cualquier vertical.

**Para la Capa 2 (las 5 variantes de cada vertical):**

4. **Hero con foto protagonista = titular limpio.** Nunca intercalar
   mini-fotos dentro del titular sobre la imagen grande del hero (patrón
   "Umami" original). Regla directa de Leo tras verlo en producción: si el
   fondo ya es una foto potente, el texto va solo. Las mini-fotos en titular
   solo tienen sentido sobre fondos planos/sólidos.
5. **Una sección "producto en movimiento" es un diferenciador de venta
   fuerte** (el plato armándose / el interior revelándose). Al menos una de
   las 5 variantes de restaurante debería incluirla de serie usando el patrón
   del punto 3, con los clips generados según Nivel 2.5 de "Manejo de
   imágenes".

## Lecciones aprendidas — caso Estetic Dent (2026-07), aplican a Capa 1

1. **Header transparente debe ser `position: fixed`, nunca `sticky`, sobre
   un hero a pantalla completa.** Con `sticky` el header sigue reservando su
   alto en el flujo del documento aunque tenga fondo transparente — eso
   empuja el contenido del hero hacia abajo (deja una franja vacía arriba)
   en vez de superponerse limpiamente a la foto/video. `fixed` saca el
   header del flujo por completo, que es el comportamiento correcto para el
   patrón "transparente → blur al hacer scroll" ya documentado arriba.
   (Detectado: Estetic Dent, 2026-07-20 — el hero mostraba un espacio en
   blanco superior hasta corregir esto en `Header.astro`, Capa 1.)
2. **Verificar con `git ls-files <ruta>` que un asset de imagen
   generado/recortado quedó realmente versionado, antes de dar por cerrada
   cualquier tarea de imágenes.** El código (`site.<slug>.ts`,
   `consultorio.<slug>.ts` / `menu.<slug>.ts`) puede referenciar una ruta de
   imagen ya commiteada en un cambio anterior sin que el archivo binario
   correspondiente se haya subido nunca — el sitio se ve bien en local (el
   archivo existe en disco) pero se rompe al clonar el repo desde cero.
   (Detectado: Estetic Dent, 2026-07-21 — `logo-estetic-dent.webp` y otras 3
   imágenes llevaban commits enteros referenciadas en código sin estar en
   git; se corrigieron recién al construir el srcset del logo del header.)

## Roadmap de innovación — features investigados, no todos implementables aún

Estas son iniciativas identificadas por investigación de mercado (regiones fuera
de LATAM) que representan ventajas competitivas reales. Se documentan aquí para
que cualquier skill futuro las tenga en cuenta, aunque no todas sean accionables
hoy con el stack actual.

- **GEO (Generative Engine Optimization) — ACCIONABLE HOY.** Ver skill
  `geo-optimizer`. Optimizar el contenido de cada web para ser citado por
  buscadores de IA (ChatGPT, Perplexity, Gemini, Google AI Overviews), no solo
  para SEO tradicional de Google. Es 100% ejecutable con el stack Astro actual —
  ningún competidor local en Ecuador lo está trabajando todavía.
- **Reactivación de clientes/pacientes inactivos — ACCIONABLE HOY, el gatillo más
  fuerte de los tres.** Ver skill `reactivation-campaigns`. A diferencia del
  Radar de Competencia (que vende "no te quedes atrás") o el GEO (que vende
  "sé más visible"), este feature apunta a dinero que el negocio YA perdió: un
  cliente que dejó de pedir, un paciente con tratamiento sin completar. Datos que
  sostienen esto: clínicas dentales pierden $110,000-240,000/año por ubicación
  en pacientes que no regresan; campañas de reactivación automatizada logran
  15-25% de reactivación vs. 5-8% de las llamadas manuales tradicionales;
  retener un cliente cuesta ~300% menos que conseguir uno nuevo. Para
  restaurantes con Ordercash activo, se construye directamente sobre el
  historial de pedidos por WhatsApp — es el caso de uso de cross-sell más
  concreto que existe hoy.
- **Recepcionista de voz con IA (voice AI) — ROADMAP FUTURO, no accionable hoy.**
  Tendencia fuerte en EE.UU./Europa para restaurantes y clínicas: un agente de
  voz contesta llamadas 24/7, agenda citas, responde preguntas frecuentes.
  Justificación de negocio: 62-80% de llamadas de negocios pequeños quedan sin
  contestar, 85% de quien cae en buzón de voz no vuelve a llamar, cada llamada
  perdida se valora en $100-200. Es el equivalente en el canal de VOZ a lo que
  Ordercash resuelve en el canal de WhatsApp (texto) — mismo problema, canal
  distinto. Requiere infraestructura de telefonía real (Twilio o similar), no es
  un skill de Astro — se evalúa como posible fase 2 de Ordercash (mes 9-12), no
  como parte de la agencia de webs.

## Riesgos activos a tener en cuenta

- OlaClick (competidor pan-LATAM, 40,000+ restaurantes, respaldado por Y Combinator)
  podría integrar facturación SRI en Ecuador en cualquier momento. Meta: 100+
  restaurantes activos en Ordercash antes de 18 meses.
- Mortalidad del sector restaurantes — mitigado con el vertical consultorio en
  paralelo desde el mes 1.
