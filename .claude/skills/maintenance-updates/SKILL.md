---
name: maintenance-updates
description: Procesa solicitudes mensuales de cambio de contenido de clientes en mantenimiento (nuevo menú, precios, fotos, información) y genera el reporte mensual de desempeño con la lógica correcta de qué métrica priorizar y cómo presentarla. Usar cuando Leo pida actualizar el contenido de una web existente o generar el reporte mensual de un cliente.
---

# Maintenance Updates

## Cuándo usar

Un cliente en plan de mantenimiento mensual envía cambios (por WhatsApp,
típicamente reenviados por Leo) o se acerca la fecha de generar su reporte
mensual.

## Instrucciones — actualización de contenido

1. Ubica el proyecto Astro existente de ese cliente — este trabajo es 100% Capa 3
   (ver CLAUDE.md, sección "Arquitectura de producción de webs"). No toques la
   Capa 1 (sistema base) ni la Capa 2 (template del vertical) de ese cliente —
   edita únicamente el contenido puntual solicitado.
2. Aplica los cambios pedidos (nuevo menú, precios, fotos, texto), reutilizando el
   skill `copywriting-negocio` si hace falta redactar texto nuevo, manteniendo el
   tono ya establecido para ese cliente en entregas anteriores.

## Instrucciones — reporte mensual de desempeño (regla obligatoria de priorización)

El reporte es lo que justifica el cobro de mantenimiento como servicio activo.
Nunca lo enmarques como "mantenimiento de hosting" (ver CLAUDE.md, riesgo de
churn) — y nunca entregues un número aislado sin contexto. La forma en que se
presenta la métrica es tan importante como la métrica misma.

### Jerarquía de métricas — de más a menos relevante para el cliente

1. **Contactos por WhatsApp generados desde la web** (usando los parámetros de
   tracking `?utm_source=web&negocio={slug}` ya integrados desde la Capa 1). Esta
   es la métrica principal del reporte — es una acción de negocio concreta
   ("12 personas te escribieron"), no un número abstracto.
2. **Cambios/actualizaciones aplicadas ese mes** — evidencia tangible de que el
   servicio está activo (nuevo menú, fotos, precios actualizados).
3. **Visitas totales a la web** — se menciona como dato de contexto, NUNCA como
   titular del reporte. Las visitas por sí solas son una métrica de vanidad que
   no le dice al cliente si su negocio se benefició.

### Estructura obligatoria de cada reporte

Todo reporte debe tener estas tres partes, en este orden — nunca entregues solo
la primera:

1. **El dato:** contactos por WhatsApp del mes (+ visitas como contexto secundario).
2. **La interpretación:** qué significa ese número para su negocio, en lenguaje
   simple y sin tecnicismos.
3. **El próximo paso recomendado:** una acción concreta y accionable, que casi
   siempre conecta con un servicio adicional ya existente en la escalera de
   productos de Vorka (SEO local, Google Ads, WhatsApp automatizado). Un reporte
   con números bajos es una oportunidad de upsell, no un problema a esconder.

### Ejemplo de tono correcto (adaptar cifras y vertical según el cliente real)

"Este mes tu web tuvo 8 contactos por WhatsApp de personas interesadas en tus
platos. Es un buen inicio — para subir ese número, el siguiente paso natural es
optimizar tu perfil de Google Maps y activar SEO local, que es exactamente donde
la mayoría de tus clientes te están buscando ahora mismo."

### Qué evitar siempre

- Nunca ocultes o maquilles un número bajo — la confianza del cliente ecuatoriano
  de negocio pequeño se rompe de forma más grave por sospecha de datos escondidos
  que por un número bajo bien explicado.
- Nunca entregues "150 visitas" como único contenido del reporte, sin
  interpretación ni recomendación — eso invita al cliente a sacar sus propias
  conclusiones, casi siempre negativas.
- Nunca prometas en el reporte resultados que dependen de servicios que el
  cliente no ha contratado (ej. no le atribuyas a la web sola un crecimiento que
  en realidad requeriría SEO o publicidad paga).
