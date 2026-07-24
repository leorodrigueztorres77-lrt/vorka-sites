// Capa 1 — formato de precio para mostrar en pantalla (nunca para JSON-LD,
// que usa el número crudo). Sin decimales ".00" y miles con punto, ej.
// $30, $180, $1.500 (CLAUDE.md, estándar de pricing display; spec "CIERRE
// demo-esteticdent" 2026-07-23, ítem B2).

export function formatearPrecio(valor: number): string {
  return `$${Math.round(valor).toLocaleString('es-EC')}`;
}
