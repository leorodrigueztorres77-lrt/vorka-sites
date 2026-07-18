---
name: prospector-google-maps
description: Busca negocios de un nicho (restaurantes o consultorios médicos/dentales) y ciudad específicos que no tienen página web o la tienen deficiente, y arma una lista estructurada de prospectos. Usar cuando Leo pida prospectar, buscar o armar una lista de negocios de un nicho y zona.
---

# Prospector Google Maps

## Cuándo usar

Leo pide algo como: "prospecta restaurantes en Quito norte sin web" o "arma la
lista de consultorios dentales en Guayaquil".

## Instrucciones

1. Identifica el nicho (restaurante | consultorio médico/dental) y la zona/ciudad
   pedida.
2. Busca negocios de ese nicho en esa zona y para cada uno intenta determinar:
   nombre, teléfono, dirección, si tiene página web (y si la tiene, evalúa
   brevemente si es deficiente: sin actualizar, solo una red social, etc.), fotos
   disponibles, valoración/reseñas.
3. Prioriza los negocios sin web o con web deficiente — son el objetivo real de
   la prospección.
4. Entrega el resultado como una tabla o archivo estructurado (nombre, teléfono,
   dirección, estado de su web actual, notas), listo para pasarle al VA para el
   primer contacto o para alimentar el skill `demo-personalizer` en lote.
5. Si el volumen de resultados es alto, prioriza primero los que tengan más
   reseñas o mejor valoración — son negocios más establecidos y con mayor
   probabilidad de tener presupuesto disponible.

## Nota

Ejecuta este skill para ambos nichos activos (restaurante y consultorio) de forma
independiente cuando Leo lo pida para "ambos" o para el proyecto en general — no
asumas que un pedido genérico de prospección es solo sobre restaurantes.
