# Scripts de SiteWise

## Pipeline de imágenes IA (Gemini) — generar → QC → aprobación humana → optimizar

Pipeline reutilizable para producir el set fotográfico de cualquier sitio de
cliente con la API de Gemini, con compuerta de aprobación humana obligatoria.

### Piezas

| Pieza | Qué es |
|---|---|
| `assets/prompts/_base-dental.md` | Dirección de arte FIJA del vertical dental — el style guide fotográfico de Vorka para ese vertical, versionado en git. |
| `assets/prompts/shots-<cliente>.json` | Shot list del cliente: `{ base, shots: [{ id, sujeto, aspect, uso, refImage? }] }`. `uso` decide los tamaños de export (`hero`, `card-servicio`, `card-tecnologia`, `reserva`). |
| `scripts/generate-images.mjs` | Genera N variantes por shot a `assets/generated/review/`. |
| `assets/generated/review/` | Salida cruda + `QC-REPORT.md`. NO se versiona (solo el reporte). |
| `assets/generated/approved/` | SOLO lo que Leo aprueba manualmente. Se versiona (masters). |
| `scripts/optimize-images.mjs` | `approved/` → WebP 1x/2x en `public/images/<cliente>/`. |

### Flujo completo

```bash
# 1. Generar (requiere GEMINI_API_KEY en el entorno)
node scripts/generate-images.mjs --shots assets/prompts/shots-esteticdent.json [--only id1,id2] [--variants 2]

# 2. QC asistido (lo hace Claude Code): abre y evalúa cada imagen de review/
#    contra el checklist (manos/dientes correctos, sin texto fantasma, sin
#    objetos fusionados, colorimetría de la guía, el sujeto pedido aparece).
#    Renombra las que pasan a <id>-vN.APROBABLE.png y escribe
#    review/QC-REPORT.md. Regenera 1 vez las que fallen.

# 3. Aprobación HUMANA (Leo): mover de review/ a approved/ lo que va.
#    Este paso nunca se automatiza.

# 4. Optimizar e integrar
node scripts/optimize-images.mjs --shots assets/prompts/shots-esteticdent.json --out public/images/esteticdent
#    → <id>.webp (1x) + <id>@2x.webp (2x), calidad 80.
#    Tamaños por uso: hero 1600/2400w · cards 3:2 800/1200w · tecnología 16:9 900/1400w.
#    Luego: apuntar las rutas en src/data/<cliente>.ts — FotoGaleria acepta
#    `src2x` opcional y los componentes emiten srcset solos. Hero: eager +
#    <link rel="preload" as="image"> en el slot head de la página.
```

### Reglas duras

- **NUNCA resultados clínicos ni antes/después.** `generate-images.mjs`
  rechaza (exit 2) cualquier shot list que lo pida. La sección "Sonrisas
  reales" mantiene sus placeholders.
- **Nivel 2.5 de CLAUDE.md:** todo lo generado es material de demo de venta —
  personas sintéticas, nunca presentarlas como reales en una entrega final
  publicada. El TODO de reemplazo por fotos reales con consentimiento aplica
  siempre.
- **La aprobación humana no se salta:** `optimize-images.mjs` solo procesa lo
  que exista en `approved/`, y ahí solo mueve archivos Leo.

### Requisitos de API

`GEMINI_API_KEY` = key de Google AI Studio, en variable de entorno (scope
User de Windows; nunca en el repo). Modelo por defecto:
`gemini-2.5-flash-image` (override con `--model`).

⚠️ Estado 2026-07-23: la generación de imágenes vía API **no tiene cuota en
el free tier** (todos los modelos de imagen devuelven 429 `limit: 0` — la key
autentica bien, verificado con modelos de texto). Para desbloquear el paso de
generación: habilitar billing en el proyecto de Google Cloud asociado a la
key (aistudio.google.com → el proyecto de la key → Billing), o usar una key
de un proyecto que ya tenga cuota de imagen. Alternativa gratuita sin key ya
validada en el repo: Pollinations.ai/Flux (ver memoria del proyecto y
README de `public/images/esteticdent/`).

### Para un sitio nuevo de otra vertical

1. Duplicar `_base-dental.md` → `_base-<vertical>.md` y ajustar el contexto
   (restaurante, ferretería...) manteniendo la misma estructura: cámara, luz,
   colorimetría, personas, vestuario, fondo, prohibiciones. Ese bloque base es
   el style guide fotográfico de la vertical y se versiona en git.
2. Crear `shots-<cliente>.json` apuntando `base` al nuevo archivo.
3. Correr generate → QC → aprobación humana → optimize (flujo de arriba).

## Otros scripts

- `lighthouse-check.mjs <url> [--mobile|--desktop]` — Lighthouse con el
  Chromium de Playwright.
- `capture-demo-screenshots.mjs <base-url>` — capturas móviles (390px) de los
  demos para el portafolio de /vorka/.
- `verificar-placeholders.mjs` — postbuild: falla si el HTML compilado tiene
  fugas de placeholder visibles.
- `build-frames.mjs` / `fal-generate-vorka-sistema.mjs` — assets scroll-driven
  de /vorka/ (fal.ai + ffmpeg).
