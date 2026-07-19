// brand-kit-starter — Odontocrea (consultorio odontológico, Quito). Igual que
// Estetic Dent, sin paleta/tipografía propia verificable vía redes. Tono
// inferido de su propio posicionamiento público: ofrece "todas las
// especialidades... con calidez y calidad" y se presenta también como
// "OdontoCrea Spa Clínica Dental" — esto apunta directo a la fila
// "bienestar/cercanía" de la tabla de CLAUDE.md (verde salvia, blanco cálido,
// beige), no a la fila premium/clínica usada en Estetic Dent — deliberadamente
// distinta para que ambos consultorios (competidores directos en la misma
// ciudad) no se lean como el mismo kit reciclado.
// CONFIRMAR CON EL CLIENTE antes de publicar: si Odontocrea ya tiene una
// paleta o logo real, reemplazar este kit por su identidad real.
export const brandKitOdontocrea = {
  paleta: {
    primario: '#5C8D72', // verde salvia — bienestar, cercanía
    acento: '#C98A4B', // beige cálido/terracota suave — contraste cálido para CTA
    texto: '#2B2A25', // marrón oscuro cálido, no negro puro
  },
  tipografia: {
    titulos: "'Quicksand', sans-serif",
    texto: "'Nunito Sans', sans-serif",
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Quicksand:wght@600;700&family=Nunito+Sans:wght@400;500;600;700&display=swap',
  },
  wordmark: {
    tipo: 'tipografico' as const,
    nota: 'Nombre del negocio en Quicksand 700, color primario (verde salvia) — sin ícono/símbolo.',
  },
};
