# Imágenes

Esta carpeta está vacía a propósito: las rutas referenciadas en
`src/data/restaurant.sample.ts` (`placeholder-hero.webp`, `placeholder-plato-*.webp`)
son placeholders de la Capa 2. `demo-personalizer` reemplaza estos archivos con
las fotos reales del cliente en la Capa 3 — no se agregan imágenes de stock aquí
para mantener esta capa neutra y reutilizable.

**Formato obligatorio (estándar de rendimiento, CLAUDE.md): WebP o AVIF,
optimizadas — nunca JPEG/PNG sin comprimir.** Convertir las fotos del cliente
antes de subirlas aquí; esto es parte del checklist de `demo-personalizer`,
no un detalle opcional (afecta directamente el tiempo de carga en móvil, que
debe mantenerse bajo 3 segundos).

**De dónde salen las fotos reales de cada cliente:** ver CLAUDE.md, sección
"Manejo de imágenes" — proceso de 3 niveles (fotos propias del cliente
mejoradas con IA → banco de fotos con licencia marcado explícitamente como
placeholder temporal en comentario interno → sesión profesional pagada). Regla
de autenticidad para este vertical: nunca mostrar comida 100% generada por IA
como si fuera real.
