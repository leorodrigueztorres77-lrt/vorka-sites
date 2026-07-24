# QC — set fotográfico Estetic Dent (Gemini, 2026-07-23)

Modelo: `gemini-2.5-flash-image` · Shot list: `assets/prompts/shots-esteticdent.json`
· Checklist aplicado: (a) manos, (b) dientes, (c) texto fantasma/logos,
(d) objetos imposibles, (e) colorimetría de la guía, (f) el sujeto pedido aparece.

**Incidente previo:** la primera tanda completa salió 1024×1024 — el modelo
ignora la relación de aspecto pedida por texto. Corregido en
`generate-images.mjs` enviando `generationConfig.imageConfig.aspectRatio`
(commit del paso 3); la tanda se regeneró completa con proporciones correctas
(16:9 → 1344×768, 3:2 → 1248×832).

## Ronda 1 (16 pedidas, 15 generadas)

| Imagen | Veredicto | Razón |
|---|---|---|
| hero-consultorio-v1 | FALLA (e) | Foco suave en TODA la imagen incl. el sillón (sujeto); leve look render. Regenerada. |
| hero-consultorio-v2 | FALLA (e) | Mismo foco suave global; además más penumbra que "amplio y luminoso". Regenerada. |
| card-limpieza-v1 | APROBABLE | Paciente nítida y natural, higienista desenfocada al fondo, colorimetría editorial. Emblema mínimo borroso en el uniforme, ilegible e invisible a tamaño de card. |
| card-limpieza-v2 | APROBABLE | Variante con mirada fuera de cámara; anatomía y color correctos. |
| card-diseno-sonrisa-v1 | APROBABLE | Guía de tonos contra la sonrisa, encuadre parcial ✓; manos correctas. Micro-texto ilegible en la guía (los reales también llevan etiquetas), invisible a tamaño de card. |
| card-diseno-sonrisa-v2 | FALLA (a) | Mano izquierda con dedos dudosos + manga blanca inconsistente con el uniforme azul marino. Regenerada. |
| card-urgencias-v1 | APROBABLE | Gesto tranquilizador, luz cálida pedida por la shot, anatomía correcta, cuadro de pared abstracto sin texto. |
| card-urgencias-v2 | APROBABLE | Revisión con gesto contenido; manos y dientes correctos. |
| tec-radiografia-v1 | APROBABLE | Panorámica plausible en monitor de pared, profesional señalando, vista lateral ✓. |
| tec-radiografia-v2 | APROBABLE | Más cerrada; la panorámica es algo estilizada pero pasa a tamaño de card. |
| tec-camara-intraoral-v1 | APROBABLE | Dispositivo tipo lápiz ✓ en mano enguantada ✓ + imagen dental en pantalla ✓ — exactamente el sujeto pedido. |
| tec-camara-intraoral-v2 | FALLA (c) | Texto fantasma ilegible sobreimpreso en el monitor. Regenerada. |
| tec-esterilizacion-v1 | APROBABLE | Fundas selladas sobre bandeja metálica, luz limpia, sillón desenfocado al fondo. |
| tec-esterilizacion-v2 | FALLA (a, c) | Manos al fondo con dedos fusionados + texto garabato impreso en las fundas. Regenerada. |
| ambiente-recepcion-v1 | APROBABLE | Sala cálida, dos sillas, planta, luz de tarde, sin personas ✓. |
| ambiente-recepcion-v2 | NO GENERADA | 503 (alta demanda) tras reintentos. Regenerada en ronda 2. |

## Ronda 2 — regeneraciones (prompt ajustado por defecto detectado, 1 intento)

| Imagen | Veredicto | Razón |
|---|---|---|
| hero-consultorio-v1 (regen) | APROBABLE | Sillón y equipo en foco ✓. Nota: reflejos oscuros veteados en el tapizado del apoyapiernas — plausibles como brillos de cuero, revisar a pantalla completa antes de aprobar. |
| hero-consultorio-v2 (regen) | APROBABLE | La más completa: luz cálida de ventana, sala amplia, foco correcto. Misma nota del tapizado. |
| card-diseno-sonrisa-v3 | APROBABLE | Manos con guantes azules, cinco dedos correctos, guía nítida, paciente sonriendo. |
| tec-camara-intraoral-v3 | APROBABLE | Monitor sin texto ✓, dispositivo nítido, escena con higienista y paciente desenfocados. |
| tec-esterilizacion-v3 | APROBABLE | Sin personas ✓, fundas lisas sin texto ✓. |
| ambiente-recepcion-v2 | APROBABLE | Variante de pasillo/espera con sillas esculturales; algo más "de catálogo" que la v1. |

## Resultado

16 archivos `*.APROBABLE.png` en esta carpeta — todas las shots tienen al
menos una variante aprobable; 6 shots tienen dos para elegir. Costo de la
corrida completa (16 + 1 prueba + 6 regen + 16 de la tanda 1024 descartada):
~39 imágenes ≈ $1.50.

**Pendiente (paso humano de Leo):** revisar y mover a
`assets/generated/approved/` SOLO las elegidas (una por shot). Después correr
`node scripts/optimize-images.mjs` e integrar rutas en
`src/data/consultorio.esteticdent.ts` / `site.esteticdent.ts`.

Recordatorio de reglas: personas sintéticas → SOLO demo de venta (Nivel 2.5,
CLAUDE.md); "Sonrisas reales" mantiene sus placeholders actuales — este set
no incluye (ni debe incluir) resultados clínicos.

---

## Ronda 3 — pares antes/después "Transformaciones que realizamos" (2026-07-23)

Excepción acotada autorizada por Leo para demo-esteticdent (sin cliente real
todavía): antes/después generados con Gemini en 2 pasos (base + edición sobre
la misma imagen, ver `scripts/generate-antes-despues.mjs`). Sección renombrada
a "Transformaciones que realizamos" + badge "Imagen ilustrativa" por card
(A1, ya aplicado en `AntesDespues.astro`). Checklist A4: (a) misma persona en
el par, (b) dientes/manos correctos, (c) sin texto fantasma, (d) colorimetría
alineada al resto del sitio, (e) piel con textura real, (f) el defecto/cambio
dental pedido se lee con claridad al comparar antes vs. después.

| Imagen | Veredicto | Razón |
|---|---|---|
| transformacion-ortodoncia-intento1 | FALLA (f) | Misma persona ✓, anatomía ✓, sin texto ✓, colorimetría ✓ — pero el apiñamiento pedido en "antes" no se lee con claridad; antes/después casi indistinguibles. Regenerada con descripción de defecto más explícita. |
| transformacion-ortodoncia-intento2 | APROBABLE | Misma persona, ropa, fondo y luz ✓. Apiñamiento/rotación del incisivo lateral visible en "antes"; línea de borde pareja y natural en "después". Cambio real pero moderado — consistente con un caso de ortodoncia leve, no exagerado. Dientes/manos correctos, sin texto, colorimetría acorde. **Usar esta versión.** |
| transformacion-blanqueamiento-intento1 | APROBABLE | Misma persona, ropa y fondo ✓. Amarillamiento claro en "antes", blanco notable pero natural en "después" (no porcelana artificial) — el par más convincente de los tres. Nota menor: el fondo desenfocado del "antes" sugiere vagamente equipo de consultorio (contradice "NO sillón dental" de la guía base), pero está fuera de foco y no es identificable como tal — aceptable. Sin texto, anatomía correcta. **Usar esta versión, no requiere reintento.** |
| transformacion-diseno-sonrisa-intento1 | FALLA (f) | Misma persona ✓ — pero la fractura/espacio pedido en "antes" no es visible; par no funciona como transformación. Regenerada con descripción de defecto más explícita. |
| transformacion-diseno-sonrisa-intento2 | APROBABLE | Misma persona, blusa, fondo y peinado ✓. Espacio/fractura entre incisivos centrales claramente visible en "antes"; sonrisa pareja y armónica en "después", tono natural. Dientes/manos correctos, sin texto, colorimetría acorde. **Usar esta versión.** |

### Resultado ronda 3

3 de 3 pares aprobados dentro del límite de reintentos (máx. 3 por par según
A2; ortodoncia y diseño de sonrisa necesitaron 2 intentos, blanqueamiento pasó
al primero). Versiones finales a integrar:

- `transformacion-blanqueamiento-antes-intento1.png` / `-despues-intento1.png`
- `transformacion-ortodoncia-antes-intento2.png` / `-despues-intento2.png`
- `transformacion-diseno-sonrisa-antes-intento2.png` / `-despues-intento2.png`

Los archivos `-intento1` de ortodoncia y diseño de sonrisa (rechazados) se
descartan — no se integran ni se referencian en el sitio.
