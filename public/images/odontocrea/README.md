# Assets — Odontocrea (SOLO este cliente, vertical consultorio)

⚠️ **PLACEHOLDER Nivel 2 (CLAUDE.md, "Manejo de imágenes")** — banco de fotos
con licencia comercial (Pexels), usadas porque no fue posible obtener fotos
reales de la clínica vía Instagram/Facebook (ambos bloquean scraping no
autenticado). Descargadas y convertidas a WebP localmente (`sharp`) —
nunca hotlinked al CDN de Pexels.

| Archivo | Origen (Pexels photo ID) | Contenido |
|---|---|---|
| `hero-1600.webp` | 6812479 | Sillón y equipo dental moderno, consultorio vacío |
| `historia.webp` | 4687905 | Modelo anatómico de implante dental sobre mesa |
| `equipo-diagnostico.webp` | 305567 | Equipo de diagnóstico dental de cerca, sin personas |
| `instrumental.webp` | 6528776 | Instrumental de extracción esterilizado + modelos de ortodoncia sobre mesón azul de clínica |

Ninguna de estas fotos muestra personas — ni "doctor genérico" ni "paciente"
posando (regla de autenticidad de CLAUDE.md). Son ambientales/equipo/modelo,
igual que el criterio ya aplicado en Estetic Dent.

**Reemplazar por fotos reales del consultorio en cuanto el cliente las
proporcione** — no publicar la entrega final con estas fotos de banco sin que
Leo lo confirme explícitamente.

No mover estos archivos a carpetas compartidas ni reutilizarlos en otros
clientes (incluyendo Estetic Dent, competidor directo en la misma ciudad).

## Fotos retiradas (2026-07-19) — ver `retirados-fake-personas/`

Las fotos originales (`hero-1600.webp` → Pexels 5622014, `historia.webp` →
Pexels 6627424) fueron retiradas: ambas mostraban personas posando como
"doctor/paciente" genéricos de banco (una paciente adulta mayor + asistente en
silla verde; un "dentista" calvo examinando a un paciente en primer plano) —
exactamente la violación de autenticidad que CLAUDE.md prohíbe para la foto de
perfil profesional, y que aquí aparecía además en fotos ambientales, agravando
el problema. Detectado tras feedback directo de Leo sobre calidad de imagen
(mismo patrón ya corregido antes en El Fogón Ecuatoriano). Conservadas en
`retirados-fake-personas/` solo como respaldo — no se sirven en ningún sitio.

## Intento de reemplazo del hero revertido (2026-07-20, spec SALUD)

El spec SALUD pide que el hero nunca muestre una silla vacía. Se probó
reemplazar `hero-1600.webp` por una foto de banco con una odontóloga
atendiendo a un paciente (Pexels 8413334) + una foto de apoyo de un
odontólogo explicando un tratamiento (Pexels 6627325). Al revisar el
historial de esta misma carpeta se confirmó que Leo ya había rechazado
exactamente ese patrón para este cliente (ver sección anterior) — se revirtió
antes de publicar nada. Backup de la versión intentada en
`retirados-sin-personas/hero-1600-v2-silla-vacia.webp` (duplicado del archivo
en uso; conservado por convención de archivado no destructivo). Los dos
archivos fuente descartados (`originales/pexels-6627325.jpg`,
`originales/pexels-8413334.jpg`) fueron eliminados.

Para llegar al mínimo de 4 imágenes que exige la validación de build sin
volver a violar la regla de "sin personas posando", se añadieron
`equipo-diagnostico.webp` (Pexels 305567) e `instrumental.webp` (Pexels
6528776) — ambas ambientales/equipo, sin personas ni marcas visibles de
terceros. Se descartó además, sin llegar a usarse, una foto de recepción
(Pexels 6809645) que mostraba el logo real de otra clínica ("Deko+") en la
pared — nunca convertida ni referenciada por código, por el riesgo de
publicar la marca de un competidor en el sitio de Odontocrea.
