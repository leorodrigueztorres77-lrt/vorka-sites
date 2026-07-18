---
name: reactivation-campaigns
description: Genera campañas de reactivación de clientes/pacientes inactivos vía WhatsApp, con mensaje personalizado basado en su historial (último pedido en restaurantes, última cita/tratamiento pendiente en consultorios). Usar cuando Leo pida generar una campaña de reactivación, recuperar clientes inactivos, o recordar a pacientes su chequeo/tratamiento pendiente.
---

# Reactivation Campaigns

## Qué resuelve este skill

El patrón de innovación más fuerte identificado en ambos verticales (restaurantes
y consultorios) en 2026: usar el historial del propio negocio para identificar
quién dejó de comprar o de asistir, y reactivarlo con un mensaje personalizado
por WhatsApp — no una promoción genérica a toda la lista. El gatillo es dinero
que el negocio YA perdió (un cliente que se fue, un tratamiento sin completar),
no una promesa a futuro — por eso convierte mucho mejor que un descuento
genérico.

Para el vertical restaurante, esto es el cross-sell más natural hacia Ordercash:
se construye directamente sobre el historial de pedidos por WhatsApp que
Ordercash ya captura. Para consultorios, la misma lógica aplica sobre fecha de
última cita o tratamiento pendiente, sin depender de Ordercash.

## Cuándo usar

Leo pide algo como: "genera la campaña de reactivación para [negocio]",
"identifica clientes inactivos de [restaurante]", "recuérdale a los pacientes de
[consultorio] su chequeo pendiente".

## Instrucciones — Restaurante

1. A partir del historial disponible (pedidos por WhatsApp, si el cliente ya usa
   Ordercash, o los datos que Leo/el dueño del negocio puedan proporcionar),
   identifica clientes que no han pedido en un período relevante para ese
   negocio (ajustable — para un restaurante de comida frecuente, 2-3 semanas de
   inactividad ya es una señal; para uno de ocasión especial, el período es más
   largo).
2. Si hay datos de qué solía pedir cada cliente (plato favorito, frecuencia),
   personaliza el mensaje mencionando ese dato específico. Si no hay ese detalle
   disponible, usa un mensaje cálido genérico de "te extrañamos" en vez de
   inventar un dato falso.
3. Redacta el mensaje de WhatsApp: cercano, breve, con una razón concreta para
   volver (descuento puntual, plato nuevo, recordatorio simple) — nunca con tono
   de spam o venta agresiva.
4. Aplica los parámetros de tracking de WhatsApp ya definidos en la Capa 1 (ver
   CLAUDE.md) para poder medir cuántas reactivaciones genera la campaña.

## Instrucciones — Consultorio médico/dental

1. A partir de los datos que el consultorio pueda proporcionar (fecha de última
   cita, tipo de chequeo recomendado, tratamiento aceptado pero no agendado),
   identifica pacientes con seguimiento vencido o próximo a vencer.
2. Redacta el mensaje de WhatsApp: profesional, cálido, que explique brevemente
   por qué es importante retomar el chequeo o completar el tratamiento — sin
   sonar alarmista ni usar tácticas de miedo excesivas.
3. Nunca incluyas en el mensaje detalles clínicos específicos más allá de lo que
   el propio paciente ya conoce (ej. "tu limpieza semestral" es aceptable, un
   diagnóstico detallado no lo es) — ver regla de privacidad abajo.
4. Ofrece agendar directo por WhatsApp, con la misma lógica de tracking que en
   restaurantes.

## Regla de privacidad (obligatoria para el vertical consultorio)

Nunca incluyas en un mensaje de reactivación información médica sensible más
allá de lo estrictamente necesario para el recordatorio (tipo de chequeo,
fecha). No menciones diagnósticos, resultados de exámenes, ni detalles de
tratamiento en el mensaje de WhatsApp — el objetivo es recordar y facilitar el
agendamiento, no comunicar información clínica por un canal no clínico.

## Qué no hacer

- No envíes el mismo mensaje genérico a todos los clientes/pacientes inactivos
  sin al menos personalizar con el dato disponible (nombre, y si existe,
  plato/servicio de preferencia o tipo de chequeo).
- No inventes datos de historial que no existen — si no hay información
  suficiente para personalizar, usa un mensaje cálido genérico en vez de
  fabricar un dato falso.
- No uses un tono de urgencia excesiva o culpabilizante ("¡no has vuelto en
  meses!") — el tono debe sentirse como atención genuina, no como presión.
- Para restaurantes, no dependas exclusivamente de que el negocio ya tenga
  Ordercash — si no lo tiene, la campaña se puede armar igual con los datos que
  el dueño maneje manualmente (lista de clientes frecuentes, por ejemplo).

## Empaquetado comercial

- Restaurante con Ordercash activo: se posiciona como parte natural del cross-sell
  ya documentado en `ordercash-crossell-brief` — la reactivación es un caso de
  uso concreto de por qué automatizar el WhatsApp vale la pena.
- Restaurante sin Ordercash o consultorio: add-on de $20-35/mes sobre el
  mantenimiento, como "campaña mensual de reactivación", generada manualmente
  con los datos que el dueño del negocio proporcione.
