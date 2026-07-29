# Vorka — Backlog

Ítems identificados pero **no ejecutados**, con su motivo de espera. No son bugs
ni deuda que bloquee el switch a producción — son mejoras que dependen de
presupuesto de asset o de contenido del cliente. Registrar aquí en vez de abrir
trabajo fuera de sprint.

## Assets

### v2 del video del sistema — plano-secuencia con morphing continuo
- **Qué:** hoy la secuencia de "El sistema Vorka" (`SistemaVorka.astro`) encadena
  escenas con **cortes** (cubo → teléfono → burbuja → check). La v2 sería un
  **plano-secuencia** con morphing continuo entre escenas, sin cortes.
- **Por qué espera:** es un proyecto de **asset de motion 3D**, no de código —
  requiere presupuesto de generación/producción. El pipeline actual
  (`build-frames.mjs` + `scrollSequence.ts`) ya es agnóstico a la fuente, así que
  solo habría que reemplazar los clips fuente.
- **Nota relacionada:** conecta con la observación de pixelado de las escenas
  actuales (fuente generada a 720p). Cualquier regeneración de la fuente debería
  hacerse ya a ≥1080p y, de paso, evaluar el morphing continuo de la v2 en la
  misma tanda. Decisión de presupuesto de Leo.

## Contenido del cliente

### Sección de testimonios — activar cuando llegue el contenido real
- **Qué:** activar el flag de la sección de testimonios en el sitio de Vorka.
- **Por qué espera:** falta el **contenido real**. El testimonio de Estetic Dent
  está en gestión; en cuanto el dueño lo entregue, se activa. No usar testimonios
  inventados (regla de autenticidad del proyecto).
