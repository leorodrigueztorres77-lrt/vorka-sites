// Capa 1 — utilidades de motion compartidas por cualquier componente de
// cualquier vertical que necesite (a) revelar una lista con entrada
// escalonada al filtrar/cambiar de tab, o (b) animar un número contador al
// entrar en viewport. Antes de este archivo, MenuFiltrable (V5) y StatsFila
// (V4/V5) reimplementaban cada una su propia versión de estos mismos
// patrones — esto los consolida en una sola fuente para que cualquier
// variante nueva (o V2, que no lo tenía) los reutilice en vez de duplicarlos.
//
// Requiere que los elementos usen la clase .reveal / .reveal--scale de
// global.css (estado oculto + transición) — esto hereda gratis el
// prefers-reduced-motion ya resuelto ahí.

export function revelarEscalonado(elementos: HTMLElement[], delayMs = 60, tope = 6) {
  elementos.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i, tope) * delayMs}ms`;
    requestAnimationFrame(() => el.classList.add('is-visible'));
  });
}

export function ocultarReveal(elementos: HTMLElement[]) {
  elementos.forEach((el) => {
    el.classList.remove('is-visible');
    el.style.transitionDelay = '';
  });
}

function iniciarCountUp(el: HTMLElement) {
  const valorFinal = parseFloat(el.dataset.valor ?? '0');
  const decimales = parseInt(el.dataset.decimales ?? '0', 10);
  const sufijo = el.dataset.sufijo ?? '';
  const duracionMs = 1400;
  const inicio = performance.now();
  const paso = (ahora: number) => {
    const progreso = Math.min((ahora - inicio) / duracionMs, 1);
    el.textContent = `${(valorFinal * progreso).toFixed(decimales)}${sufijo}`;
    if (progreso < 1) requestAnimationFrame(paso);
  };
  requestAnimationFrame(paso);
}

export function observarCountUp(elementos: NodeListOf<HTMLElement> | HTMLElement[]) {
  const lista = Array.from(elementos);
  if (!lista.length) return;

  if (!('IntersectionObserver' in window)) {
    lista.forEach((el) => {
      const valorFinal = parseFloat(el.dataset.valor ?? '0');
      const decimales = parseInt(el.dataset.decimales ?? '0', 10);
      el.textContent = `${valorFinal.toFixed(decimales)}${el.dataset.sufijo ?? ''}`;
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        iniciarCountUp(entry.target as HTMLElement);
      });
    },
    { threshold: 0.4 },
  );
  lista.forEach((el) => observer.observe(el));
}
