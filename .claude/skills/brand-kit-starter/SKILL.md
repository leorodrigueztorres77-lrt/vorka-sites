---
name: brand-kit-starter
description: Genera un mini kit de identidad de marca (paleta de colores, tipografía, wordmark simple) para un cliente que no tiene logo, colores ni fuentes definidas. Usar cuando Leo indique que un prospecto/cliente no tiene identidad de marca propia y necesita una antes de personalizar su web (Capa 3).
---

# Brand Kit Starter

## Cuándo usar

Durante la intake de un cliente para `demo-personalizer`, si Leo indica que el
negocio NO tiene logo, paleta de colores ni tipografía definida — algo muy
común en negocios informales o recién formalizados. Este skill se ejecuta
ANTES de aplicar Capa 3, para que exista una identidad visual coherente que
personalizar.

## Instrucciones

### 1. Entender el tono deseado

Pregunta a Leo (o infiere de la conversación de venta) 2-3 palabras que
describan la personalidad que el dueño quiere para su negocio — ej. "elegante
y serio", "cálido y familiar", "moderno y directo", "tradicional y confiable".
No avances sin al menos una referencia de tono; nunca asignes un tono al azar.

### 2. Seleccionar paleta de colores — validada por vertical (ver CLAUDE.md)

**Restaurante**, según el tono:
- Cálido/familiar/tradicional: tonos tierra — terracota, ocre, verde oliva,
  marrón cálido (evoca ingredientes naturales, cocina casera).
- Casual/moderno/enérgico: acento naranja o coral sobre neutros claros
  (transmite calidez y apetito sin sentirse anticuado).
- Elegante/alta cocina: paleta oscura y sofisticada (negro/carbón + un acento
  cálido puntual — dorado, vino) — nunca más de 2-3 colores.

**Consultorio médico/dental**, según el tono:
- Confianza clínica/moderna: azul-verde (teal) o azul suave — transmite
  claridad y profesionalismo.
- Bienestar/cercanía: tonos spa suaves — verde salvia, blanco cálido, beige.
- Premium/serio: paleta minimalista blanco/negro + un solo acento (nunca más de
  un color de énfasis) — la opción más segura para transmitir seriedad médica.

**Regla general:** máximo 3 colores totales (1 primario, 1 secundario/acento,
1 neutro para texto) — paletas con más colores compitiendo entre sí se perciben
como menos profesionales, no más.

### 3. Seleccionar tipografía — un par, no más

Un font de titulares (con algo de personalidad, acorde al tono) + un font de
texto (siempre altamente legible, nunca decorativo). Usar fuentes disponibles
en Google Fonts para que carguen rápido y no dependan de licencias pagas. Ej.:
tono elegante → titular con algo de carácter + texto neutro tipo Inter/Lato;
tono cercano/familiar → titular redondeado amigable + texto neutro.

### 4. Wordmark simple (NO logo con ícono/símbolo)

Genera el nombre del negocio tratado tipográficamente con la fuente de
titulares y el color primario elegido — esto es un wordmark, no un logo con
símbolo o ícono. Sé explícito con Leo y con el cliente de que esto es un punto
de partida funcional, no un logo de diseño completo. Si el cliente quiere un
logo con símbolo/ícono diseñado, eso queda fuera de este skill — ver
"Escalamiento" abajo.

### 5. Documentar el mini kit para reutilización consistente

Guarda el resultado (colores en hex, nombres de fuentes, tratamiento del
wordmark) en un archivo de datos simple del cliente (ej.
`data/brandkit.{slug}.ts`) para que `demo-personalizer` y cualquier entrega
futura (mantenimiento, contenido social) lo reutilicen sin tener que
redefinirlo cada vez.

## Escalamiento — cuándo esto no es suficiente

Si el cliente pide explícitamente un logo con símbolo/ícono diseñado (no solo
tipografía), o quiere explorar más de 2-3 opciones de paleta antes de decidir,
eso excede el alcance de este skill — es una conversación de Leo sobre un
servicio de diseño de marca más completo (posible add-on pagado, a definir),
no algo que este skill deba intentar resolver solo.

## Qué no hacer

- No inventes un tono si Leo no lo proporcionó — pregúntalo primero.
- No uses más de 3 colores en el kit resultante.
- No generes un ícono o símbolo gráfico complejo — el wordmark tipográfico es
  el límite de este skill.
- No repitas la paleta "Electric Blue" de Vorka/tech-SaaS en el kit de un
  cliente — esa paleta es específica de la identidad de Vorka como agencia
  (ver CLAUDE.md), no aplica a restaurantes ni consultorios.
