---
name: demo-personalizer
description: Construye la Capa 3 (personalización por cliente) tomando la Capa 1 + Capa 2 ya existentes y aplicando nombre, logo, fotos, textos y datos reales de un negocio puntual. Es la única capa que cambia en cada entrega. Usar cuando Leo pida generar, personalizar o crear la web de un negocio específico con nombre propio (prospecto o cliente).
---

# Demo Personalizer — Capa 3

## Esta es la capa que cambia en cada cliente — las capas 1 y 2 NO se tocan aquí

Este skill asume que la Capa 1 (sistema base) y la Capa 2 (las 5 variantes del
vertical correspondiente) ya existen en el repo, construidas por el skill
`vertical-web-builder`. Si alguna de las dos no existe todavía, avisa a Leo para
que primero se ejecute `vertical-web-builder` — no las construyas tú mismo desde
aquí ni las dupliques.

## Cuándo usar

Leo (o el VA a través de Leo) tiene un prospecto o cliente identificado, con
nombre propio, y quiere su web personalizada — ya sea como demo de venta o como
entrega final tras el pago.

## Instrucciones

1. Confirma el vertical del negocio (restaurante | consultorio) para saber sobre
   qué Capa 2 trabajar.

2. **Presenta las 5 variantes a Leo y espera que ÉL elija — esta selección NUNCA
   es automática por defecto.** Describe brevemente cada una de las 5 (ej. "V1:
   hero de foto grande + menú en grid", "V2: hero dividido + menú en
   acordeón"...) y pregunta cuál quiere usar para este cliente. Excepción — solo
   restringe automáticamente las opciones (no elijas tú mismo, solo acota la
   lista) si detectas que el prospecto/cliente es competidor directo de un
   cliente existente en la misma zona (mismo dato de `reputation-radar`, o
   consulta el registro de variantes ya asignadas de `vertical-web-builder`):
   en ese caso, excluye de las opciones presentadas la variante que ya usa su
   competidor, pero la decisión final entre las restantes sigue siendo de Leo.

3. **Determina si el negocio tiene identidad de marca propia (logo, colores,
   tipografía) o no:**
   - Si SÍ tiene: usa esos elementos reales como identidad visual de Capa 3.
   - Si NO tiene: ejecuta primero el skill `brand-kit-starter` para generar
     paleta de colores, tipografía y un wordmark simple antes de continuar con
     los pasos siguientes. No avances con una identidad visual improvisada por
     tu cuenta — o viene del cliente, o viene de `brand-kit-starter`.

4. Toma los datos disponibles del negocio: nombre, menú o especialidades,
   teléfono, dirección, y las fotos que el cliente pueda proporcionar.

5. Para las imágenes, sigue el proceso de 3 niveles definido en CLAUDE.md
   (sección "Manejo de imágenes"):
   - **Nivel 1 (preferido):** si el cliente tiene fotos propias (aunque sean de
     celular y de calidad mediocre), mejóralas con IA — color, luz, encuadre,
     fondo, resolución. Nunca reemplaces el contenido real de la foto.
   - **Nivel 2 (respaldo temporal):** si no hay fotos utilizables, usa banco de
     fotos con licencia comercial apropiado al rubro ESPECÍFICO (ej. comida
     ecuatoriana real — hornado, llapingachos, ceviche — nunca "comida" genérica
     de otra gastronomía), y márcalas EXPLÍCITAMENTE como placeholder temporal
     en un comentario interno del código. Aplica además un tratamiento de color
     unificado (mismo balance de blancos/saturación) entre todas las fotos del
     mismo sitio, aunque vengan de fuentes de stock distintas — evita el efecto
     "collage genérico" (ver caso documentado en CLAUDE.md: El Fogón
     Ecuatoriano V1). La foto del hero en particular debe coincidir con el tono
     declarado del negocio (ej. tono cálido/familiar nunca lleva una foto de
     ambiente frío/industrial).
   - **Nivel 3 (add-on pagado, fuera del alcance de este skill):** si Leo
     decidió coordinar una sesión de fotos profesional, este skill solo integra
     el resultado final una vez entregado — no lo gestiona.
   - **Restaurante:** nunca generar fotos de comida 100% con IA para mostrarlas
     como reales — solo mejorar fotos reales o usar banco de fotos marcado como
     placeholder.
   - **Consultorio:** nunca usar una foto de "doctor genérico" de stock para el
     perfil profesional — si no hay foto real disponible, priorizar mejorar con
     IA una foto de celular real antes que un genérico de stock.

6. Si faltan otros datos (no solo fotos), no bloquees el trabajo — usa contenido
   de relleno razonable y coherente con el rubro, y márcalo también como
   placeholder en un comentario interno.

7. Aplica ÚNICAMENTE cambios de Capa 3 sobre la variante ya seleccionada por
   Leo: identidad visual del negocio (nunca la de Vorka ni la de Ordercash),
   textos (usa el skill `copywriting-negocio` si hace falta redactarlos), datos
   de contacto.

8. Publica el resultado en una ruta o subdominio identificable (ej.
   `demo-[slug-del-negocio]` para prospección, o el dominio final si ya es
   cliente pagante).

9. Entrega a Leo el link listo para enviar por WhatsApp, junto con un resumen de
   2-3 líneas de qué datos son reales y cuáles son placeholder (si aplica), qué
   variante se usó, y si se generó un mini kit de marca nuevo.

## Tiempo objetivo

Como solo se toca Capa 3, este trabajo debe tomar minutos u horas, no días —
si sientes que necesitas modificar la estructura base o el template del
vertical para atender a este cliente, detente: eso es señal de que en realidad
hace falta un ajuste a la Capa 2, y eso se coordina con Leo antes de tocar
`vertical-web-builder`, no se improvisa aquí.
