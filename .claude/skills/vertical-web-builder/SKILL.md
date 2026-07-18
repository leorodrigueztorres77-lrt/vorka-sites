---
name: vertical-web-builder
description: Construye la Capa 1 (sistema base, una sola vez para toda la agencia) y la Capa 2 (librería de 5 variantes por vertical — restaurante o consultorio médico/dental, una vez por vertical). NO se usa para generar la web final de un cliente específico — eso es el skill demo-personalizer (Capa 3). Usar cuando Leo pida crear o construir el sistema base o el template maestro de un vertical, no la web de un negocio puntual.
---

# Vertical Web Builder — Capas 1 y 2

## Este skill construye infraestructura reutilizable, no webs de clientes

Este skill es responsable únicamente de las dos primeras capas del modelo de
producción (ver CLAUDE.md, sección "Arquitectura de producción de webs — 3
capas"). Si Leo pide la web de un negocio específico con nombre propio (ej.
"la web de El Sabor Criollo"), ese es el skill `demo-personalizer`, no este.

## Paso 0 — Verificar qué ya existe antes de construir nada

1. Revisa el repo: ¿existe ya un proyecto Astro con la Capa 1 construida?
   Si existe, NO la reconstruyas — pasa directo al paso de Capa 2.
2. Si la Capa 1 existe, revisa cuántas de las 5 variantes de Capa 2 del
   vertical pedido ya existen. Si las 5 ya existen, este skill no tiene
   trabajo que hacer — indícale a Leo que use `demo-personalizer`
   directamente. Si existen menos de 5, completa las faltantes sin tocar
   las que ya existen.

---

## Capa 1 — Sistema base (construir solo si NO existe todavía)

Estructura común a cualquier sitio Vorka, independiente del vertical.

### Componentes obligatorios

- Header sticky con transición transparente → blur al hacer scroll
  (`backdrop-filter: blur(12px)`, fondo semi-opaco, transition 300ms)
- Hero (cada variante lo implementa diferente — ver Capa 2)
- Sección de testimonios / prueba social (posición varía por variante)
- Mapa de ubicación + horarios en el mismo bloque — nunca separados
- Footer oscuro con nombre del negocio prominente
- Botón de WhatsApp flotante persistente en móvil (esquina inferior derecha)
- Formulario de contacto como canal de respaldo — nunca CTA principal

### WhatsApp — CTA principal, regla absoluta

El botón "Pedir por WhatsApp" / "Agendar cita por WhatsApp" es el CTA
principal en Header y Hero, visible sin scroll. Siempre con tracking:
`?utm_source=web&negocio={slug}`. El formulario de contacto va en footer
o sección secundaria — nunca compite en jerarquía visual con WhatsApp.

### Animaciones de entrada — estándar de Capa 1

Todas las secciones usan IntersectionObserver con estos valores:
- `opacity: 0 → 1` + `transform: translateY(24px) → translateY(0)`
- duration: 650ms, cubic-bezier(0.25, 0.1, 0.25, 1)
- threshold: 0.12, triggerOnce: true
- Elementos dentro de una sección: cascada con delay 80ms entre cada uno
- Tarjetas y elementos visuales: añadir `scale(0.97) → scale(1)` además del fade

### Tipografía base — par obligatorio

- Titulares: Cormorant Garamond (elegante, con carácter, serif) — Google Fonts
- Texto: Inter (neutro, legible, sans-serif) — Google Fonts
- Tamaño mínimo cuerpo: 16px — nunca menos
- Line-height cuerpo: 1.7

### Estándares técnicos de rendimiento

- Carga menor a 3 segundos en móvil
- Imágenes en WebP/AVIF con width y height explícitos, loading="lazy"
  (excepto hero — ese es eager)
- Menús y servicios siempre en HTML — nunca PDF
- Botones/elementos táctiles mínimo 44x44px
- Open Graph configurado: og:title, og:description, og:image por página

### Sistema de diseño — grilla de 8 puntos

Todo padding/margin/alto de botón en múltiplos de 8px. Line-height en
múltiplos de 4px. `box-sizing: border-box` global obligatorio — sin esto
un borde de 1px rompe silenciosamente la grilla. Si el proyecto usa
Tailwind CSS (recomendado), la escala base 4px ya cae en múltiplos de 8
con clases estándar (`p-4`=16px, `gap-6`=24px, `mt-8`=32px).

### Formulario de contacto

Datos estructurados exportables por webhook (no solo email): nombre,
teléfono, RUC/cédula (opcional), mensaje. Campo RUC/cédula facilita la
futura integración con Ordercash en el vertical restaurante.

---

## Capa 2 — Librería de 5 variantes por vertical

Cada variante se construye SOBRE la Capa 1. No son distintos "layouts" —
son distintos **modelos de conversión**. Cada una tiene un argumento de
venta principal diferente, lo que define la gramática del hero, la
posición de la señal social, y el formato del menú/servicios.

**Regla de asignación:** Leo elige la variante según el diferenciador
principal del negocio, no por preferencia estética. Ver la guía de
selección al final de esta sección.

**Regla de competidores:** si el prospecto es competidor directo de un
cliente existente en la misma zona, excluir la variante que ya usa ese
cliente de las opciones presentadas a Leo.

---

### VARIANTE 1 — "El producto es la estrella"
**Referencia visual:** Umami (umami-template.framer.website)
**Para:** restaurantes con un plato icónico reconocible — hornado,
ceviche, fritada, pizza especial. El plato hace la venta solo.

#### Hero
- Fondo: foto del local a pantalla completa con overlay oscuro
- Min-height: 100vh
- Estructura central vertical:
  - Badge superior: ciudad + año de fundación, borde fino, border-radius 100px
  - **Titular partido en 3 líneas con fotos de platos intercaladas entre
    las palabras** — el elemento diferenciador de esta variante. Ej:
    Línea 1: "EL SABOR" (texto blanco 110px Cormorant Garamond italic)
    Línea 2: [foto plato 200x140px border-radius 16px] + "QUE" + [foto plato]
    Línea 3: "RECUERDAS" (texto blanco 110px)
  - Subtítulo: tipo de cocina + ubicación, Inter 16px, blanco 75% opacidad
  - Badges de señal social en fila: "⭐ 4.8 Google" · "200+ pedidos/mes"
    fondo blanco 15% opacidad, texto blanco, border-radius 100px
  - CTA: "Pedir por WhatsApp" — color primario oscuro, border-radius 100px,
    padding 16px 40px

#### Señal social
- Posición: dentro del hero, antes del primer scroll (badges)
- Carrusel de testimonios con foto de persona real más adelante en la página
- Nunca testimonios genéricos — nombres ecuatorianos reales o placeholder
  creíble (María Torres, Carlos Benítez, Ana Morales)

#### Menú
- Platos destacados como **tarjetas con foto grande** (240px alto),
  badge de categoría sobre la foto ("Plato estrella", "Más pedido"),
  nombre + descripción + precio + CTA "Pedir este plato →"
- Hover: translateY(-4px) + sombra suave, transition 300ms
- Grid 3 columnas desktop, 1 columna móvil
- Menú completo debajo en formato lista con separadores

#### Galería
- NO como sección independiente — banda de scroll automático horizontal
  (CSS animation infinita, pausa en hover)
- Filtro unificado en todas las fotos:
  `filter: saturate(1.15) brightness(0.95) contrast(1.03) sepia(0.06)`
- Fotos duplicadas para efecto seamless

---

### VARIANTE 2 — "El menú completo es el argumento"
**Referencia visual:** Restroo (restroo.framer.website)
**Para:** restaurantes con variedad amplia donde el cliente llega a
explorar qué pedir antes de decidir. El menú completo navegable es lo
que convence.

#### Hero
- Layout dividido: columna izquierda texto (55%) + columna derecha foto (45%)
- Foto: plato terminado apetitoso, border-radius 16px, sin overlay
- Titular: Cormorant Garamond 80px, oscuro sobre fondo claro
- Subtítulo: descripción del tipo de cocina, Inter 17px
- CTA principal: "Ver el menú completo" → scroll a sección menú
- CTA secundario: "Pedir por WhatsApp"
- Fondo: crema cálido (`#FAF7F2`), sin foto de pantalla completa

#### Señal social
- Rating con estrellas visible por plato individual en el menú
- Sección de testimonios después del menú, formato carrusel horizontal
- Frase del fundador/chef con foto pequeña circular antes del menú completo

#### Menú
- **Tabs filtrables por categoría** (Entradas / Platos Fuertes / Bebidas)
  — el elemento diferenciador de esta variante
- Cada plato: foto cuadrada (120x120px) a la izquierda, nombre bold +
  descripción + precio + rating de estrellas a la derecha
- Botón "Pedir" por ítem, alineado a la derecha
- Load more o paginación si hay más de 8 ítems por categoría
- Cada plato puede tener página individual (si el volumen lo justifica)

#### Fotos
- Integradas dentro del menú — no hay galería separada
- Sección "Sobre nosotros" con dos fotos del local en layout asimétrico

---

### VARIANTE 3 — "La atmósfera y la experiencia"
**Referencia visual:** Qitchen (qitchen-template.framer.website)
**Para:** restaurantes que venden ocasión — cumpleaños, almuerzos de
domingo, cenas especiales. El ambiente es el diferenciador, no el plato.
También aplica a restaurantes con local muy cuidado visualmente.

#### Hero
- **Video de fondo** del local o de la cocina en acción (loop, muted,
  autoplay). Si no hay video: foto del ambiente con parallax suave
- Overlay oscuro 50-60% para legibilidad
- Min-height: 100vh
- Solo dos elementos en el centro: titular muy corto (máx 4 palabras,
  Cormorant Garamond 120px italic, blanco) + CTA "Reservar mesa"
- Sin subtítulo, sin badges, sin señal social en el hero — la atmósfera
  habla sola
- Navegación: solo 3 links (Menú · Nuestra historia · Contacto)

#### Señal social
- NO en el hero
- Una sola cita de reseña larga y específica, bien escrita, con nombre
  y fecha — después de la sección de historia
- Sin carruseles de testimonios — uno solo, bien elegido, es más creíble

#### Menú
- Tipográfico, sin fotos por ítem — el nombre del plato con descripción
  poética es suficiente (estilo fine dining)
- Categorías separadas por espacio generoso, no por líneas
- Precio alineado a la derecha, Inter 15px color primario
- Una sola foto grande del plato estrella, encima del menú completo

#### Ambiente visual
- Al menos una sección con bloque de color sólido oscuro (fondo primario
  oscuro + texto crema) — da peso y sofisticación
- Fotos del local integradas como fondos de sección, no como galería
- Elemento textural sutil: patrón geométrico al 6% opacidad en una sección

---

### VARIANTE 4 — "La prueba social primero"
**Referencia visual:** HeavenPalate (heavenpalate.framer.website)
**Para:** restaurantes nuevos (menos de 1 año), en zonas con mucha
competencia, o que ya tienen muchas reseñas en Google y eso es su
argumento más fuerte. La credibilidad convence antes que el menú.

#### Hero
- Layout: fondo crema o primario claro, foto del local o plato a un lado
- Titular: Cormorant Garamond 88px — orientado a confianza
  ("El restaurante que ya conocen 500 familias de Conocoto")
- **Contador animado visible sin scroll:** "⭐ 4.9 · 312 reseñas en Google"
  — número grande, Inter bold, color primario
- Badge de años de trayectoria si aplica
- CTA: "Pedir por WhatsApp"

#### Señal social — este es el corazón de la variante
- **Testimonios completos ANTES del menú** — 3 tarjetas con foto de
  persona real (o avatar con iniciales), nombre, fuente (Google/Facebook),
  texto de la reseña entrecomillado
- Stats en fila después de los testimonios: "500+ familias" · "4.9 Google"
  · "6 años" — con label Inter 11px uppercase debajo de cada número
- Estos elementos van en el segundo scroll, antes de mostrar el menú

#### Menú
- Categorías como **portadas visuales clickeables** — foto grande de la
  categoría, nombre encima: "Entradas →", "Platos Fuertes →", "Bebidas →"
- Al hacer click, scroll a esa sección del menú
- Dentro de cada categoría: lista con foto pequeña por ítem (80x80px),
  nombre + descripción corta + precio + botón Pedir

#### Fotos
- 3 fotos del local o de momentos con clientes integradas en la sección
  de testimonios como fondo o columna lateral

---

### VARIANTE 5 — "Variedad, comunidad y pedido directo"
**Referencia visual:** Craving (craving-framerwebpro.framer.website)
**Para:** restaurantes con carta amplia (10+ platos), que ya tienen
presencia en redes sociales, y donde el cliente habitual vuelve para
explorar qué hay nuevo. El volumen y la variedad son el argumento.

#### Hero
- Fondo: foto de plato o collage de platos, energético y colorido
- Titular: Inter bold o Cormorant Garamond, directo y apetitoso
- **Contadores animados al cargar** (countUp de 0 al número real):
  número de platos en carta, años abierto, pedidos este mes, rating
  — en fila debajo del titular, números grandes Inter bold, label pequeño
- CTA: "Ver el menú" + "Pedir por WhatsApp" (dos botones, el primario
  y el secundario en la misma fila)

#### Señal social
- Contadores del hero son la señal cuantitativa
- Carrusel de reseñas con rating numérico por estrella (4.9/5) y foto
  de la persona — después de la sección "Sobre nosotros"

#### Menú
- **Filtro por tipo** (Todos / Entradas / Platos Fuertes / Bebidas /
  Postres) con animación de filtrado suave
- Tarjeta por plato: foto cuadrada + badge de tipo (Veg/No-veg o
  Entrada/Fuerte) + nombre + descripción corta + precio
- "Ver más" / Load more — no mostrar todo de golpe si hay más de 9 platos
- Cada plato tiene página propia si el volumen lo justifica

#### Elementos adicionales
- Galería masonry de 6-9 fotos integrada como sección "Nuestra cocina"
  con filtro CSS unificado — no flotante, con título y contexto
- Sección de beneficios numerados: "01. Ingredientes frescos cada día"
  "02. Pedido directo por WhatsApp" "03. Listo en 20 minutos"
- CTA final enérgico: "¿Con hambre? Escríbenos ahora" — fondo primario
  oscuro, texto blanco, botón WhatsApp grande

---

## Guía de selección de variante — para Leo

Preguntarle al prospecto cuál de estas frases describe mejor su negocio:

| Si el dueño dice... | Variante |
|---|---|
| "Mi plato estrella es el hornado / ceviche / fritada" | V1 |
| "Tenemos muchas opciones, de todo un poco" | V2 |
| "El local es muy bonito, la gente viene por la experiencia" | V3 |
| "Ya tenemos muchas reseñas de Google" o negocio nuevo que necesita credibilidad | V4 |
| "Tenemos muchos clientes frecuentes, somos conocidos en el barrio" | V5 |

Si el dueño no sabe responder, usar V1 por defecto — es la variante más
versátil y la que mejor convierte para restaurantes de comida tradicional.

---

## Reglas de profundidad visual — obligatorias en las 5 variantes

Detectado en prueba real (El Fogón Ecuatoriano V1): cumplir las reglas
técnicas no es suficiente — el resultado puede verse "plano". Estas
reglas son obligatorias en cada variante:

1. **Al menos una sección con bloque de color sólido** — fondo primario
   oscuro + texto claro. Un sitio sin ningún bloque de color se siente
   sin peso aunque la tipografía y el espaciado sean correctos.
2. **Fotos integradas al contenido, nunca galería flotante desconectada**
   — ninguno de los templates de referencia tiene una sección "Galería"
   de 4 fotos sin contexto. Las fotos van dentro del menú, como fondo
   de sección, en banda de scroll, o junto a testimonios.
3. **Contraste tipográfico marcado** entre titulares h2 y texto de cuerpo
   — diferencia de peso (bold/regular) Y de tamaño que se sienta
   claramente distinta, no solo sutil.
4. **Tarjetas de menú/servicios con sombra sutil** (`box-shadow: 0 2px
   12px rgba(0,0,0,0.06)`) — nunca solo líneas divisorias planas.
5. **Tratamiento de color unificado en todas las fotos de un sitio** —
   aplicar el mismo filtro CSS a todas para que se lean como del mismo
   lugar, no como collage de stock.
6. **Señal social visible sin hacer scroll** en el hero (V1, V4, V5) o
   integrada al primer bloque de contenido (V2, V3) — nunca ausente.

---

## Variantes para el vertical Consultorio médico/dental

Las mismas 5 variantes aplican, adaptadas al contexto:

**V1 — El profesional es la estrella**
Hero con foto grande del doctor/dentista, nombre, especialidad y
credenciales visibles sin scroll. Para profesionales con postgrado,
especialidad poco común, o años de experiencia. La persona es la marca.
Señal social: badges "⭐ 4.9 Google" + "X años de experiencia" en el hero.

**V2 — Los servicios completos son el argumento**
Tabs filtrables por especialidad (Limpieza / Ortodoncia / Blanqueamiento /
Urgencias). Cada servicio con descripción, duración estimada y precio
"desde $X". Para consultorios con oferta amplia donde el paciente llega
a comparar qué necesita.

**V3 — La modernidad y el equipamiento**
Hero con foto del consultorio moderno, equipos visibles, ambiente limpio.
Para consultorios que han invertido en tecnología reciente y quieren
diferenciarse de los tradicionales. Copy técnico pero accesible.

**V4 — La confianza y los testimonios primero**
Testimonios de pacientes ANTES de listar servicios. Stats: número de
pacientes atendidos, años de experiencia, seguros aceptados. Para
consultorios nuevos o en zonas con mucha competencia donde la credibilidad
es el primer obstáculo.

**V5 — La accesibilidad y la facilidad de agendar**
Hero con titular sobre el proceso ("Agenda tu cita en 2 minutos por
WhatsApp"). Tres pasos visuales: Escríbenos → Confirmamos → Te atendemos.
Seguros aceptados visibles, rango de precio "Desde $X". Para consultorios
que compiten en facilidad y precio accesible.

**Reglas específicas del vertical consultorio:**
- Nunca foto de "doctor genérico" de stock para el perfil profesional
- Nunca revelar información médica en respuestas públicas a reseñas
- El módulo de agendamiento con calendario en vivo NO se construye por
  defecto — solo si Leo confirma que un cliente concreto lo necesita
- Seguros aceptados siempre visibles antes de mostrar precios

---

## Qué no hacer

- No mezcles contenido específico de un cliente en Capa 1 o Capa 2 —
  esas capas deben quedar genéricas y reutilizables.
- No apliques la identidad visual de Vorka ni de Ordercash a estas capas.
- No reconstruyas Capa 1 o Capa 2 si ya existen — confirma primero si en
  realidad hace falta un ajuste a la Capa 2, y eso se coordina con Leo.
- No pongas galería de fotos flotante sin contexto — las fotos siempre
  integradas al contenido según el patrón de cada variante.
- No uses testimonios con nombres genéricos anglosajones (John Smith,
  Mary Johnson) — usar nombres latinoamericanos reales o placeholder
  creíble (María Torres, Carlos Benítez, Ana Morales, Dr. Jiménez).
- No construyas una variante nueva para cada cliente — las 5 variantes
  son fijas, solo la Capa 3 cambia por cliente.