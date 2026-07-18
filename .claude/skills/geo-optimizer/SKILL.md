---
name: geo-optimizer
description: Optimiza el contenido de una web de cliente (restaurante o consultorio) para ser citada por buscadores de IA (ChatGPT, Perplexity, Gemini, Google AI Overviews), no solo para SEO tradicional. Usar cuando Leo pida optimizar para IA, mejorar visibilidad en ChatGPT/IA, o trabajar el GEO de un cliente.
---

# GEO Optimizer (Generative Engine Optimization)

## Qué resuelve este skill

En 2026, una porción creciente de búsquedas ("mejor restaurante italiano en Quito
norte", "dentista cerca de mí que atienda urgencias") pasa por respuestas
generadas por IA (ChatGPT, Perplexity, Gemini, Google AI Overviews), no por una
lista de links azules. GEO es la disciplina de estructurar el contenido para que
la IA cite al negocio del cliente dentro de esa respuesta generada. Es un
complemento al SEO tradicional, no un reemplazo — y hoy prácticamente ningún
competidor local en Ecuador lo está trabajando, lo cual es una ventana de
oportunidad real mientras dure.

Este skill aplica a AMBOS verticales activos (restaurante y consultorio) y es
100% ejecutable con el stack actual (Astro + contenido) — no requiere
infraestructura nueva.

## Cuándo usar

Leo pide algo como: "optimiza el GEO de [negocio]", "mejora la visibilidad en IA
de [negocio]", o lo incluye como parte del servicio de SEO que ya se vende.

## Instrucciones

1. Identifica el negocio, su vertical, y 3-5 preguntas reales que un cliente
   potencial le haría a una IA sobre ese tipo de negocio en esa zona (ej. "mejor
   marisquería en Guayaquil centro", "dentista que atienda urgencias los fines
   de semana en Quito"). Piensa en preguntas fragmentadas y específicas, no solo
   términos genéricos — las IA descomponen la pregunta original en sub-consultas
   más chicas.
2. Para cada pregunta, redacta un "bloque de respuesta directa" en la web: un
   párrafo corto y autocontenido que responda esa pregunta específica de forma
   clara, con datos concretos (nombre, ubicación, especialidad, horario,
   diferenciador) — pensado para que una IA pueda citarlo o resumirlo
   directamente, no para que un humano lo lea navegando.
3. Implementa datos estructurados (schema markup / JSON-LD) en el sitio Astro:
   tipo de negocio, ubicación, horarios, rango de precios, especialidades o
   platos destacados, reseñas — esta es la señal técnica principal que los
   motores generativos usan para entender el contenido.
4. Asegura que el contenido use terminología concreta y verificable (nombre real
   del negocio, zona exacta, especialidad exacta) en vez de frases vagas de
   marketing — las IA priorizan fuentes con datos concretos y verificables sobre
   contenido genérico de venta.
5. Reutiliza (no dupliques) el trabajo del skill `copywriting-negocio` — el GEO
   no reemplaza los textos de la web, añade estos bloques de respuesta directa y
   el schema markup sobre lo ya escrito.

## Qué no hacer

- No sacrifiques la experiencia humana del sitio por optimizar solo para IA — el
  contenido debe seguir siendo natural y útil para una persona que lo lee
  directamente, GEO y buena redacción no son opuestos.
- No inventes datos (reseñas, premios, certificaciones) para hacer el contenido
  más "citable" — los motores generativos y, más importante, el propio negocio,
  se ven perjudicados si luego se descubre información falsa.
- No presentes esto al cliente como algo mágico o garantizado — es una práctica
  emergente de 2026, se posiciona como "estar un paso adelante", no como una
  promesa de resultados exactos.

## Empaquetado comercial

Se ofrece como parte del servicio de SEO local existente ($150-300/mes) o como
diferenciador de venta ("optimizamos su web también para que ChatGPT y Gemini lo
recomienden, no solo Google") — no requiere un precio nuevo separado por ahora,
es un refuerzo del servicio ya existente en la escalera de productos.
