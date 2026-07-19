// brand-kit-starter — Estetic Dent (consultorio odontológico, Quito, sector
// Fundeporte). El negocio no expuso una paleta/tipografía propia verificable
// en sus redes (Instagram/Facebook no accesibles con detalle vía fetch
// automatizado) — se infiere el tono de su propio nombre y posicionamiento:
// "estética dental" + 30 años de trayectoria + equipo de especialistas, sin
// un solo profesional como imagen de marca. Tono aplicado: "premium/serio"
// (tabla de CLAUDE.md, Consultorio → Premium/serio → minimalista blanco/negro
// + un solo acento) — coherente con la variante V3 "Vervedent" elegida
// (modernidad, precisión, equipamiento), no con calidez/cercanía.
// CONFIRMAR CON EL CLIENTE antes de publicar: si Estetic Dent ya tiene una
// paleta o logo real, reemplazar este kit por su identidad real (CLAUDE.md,
// demo-personalizer paso 3 — este kit es solo el punto de partida).
export const brandKitEsteticdent = {
  paleta: {
    primario: '#15181B', // grafito casi negro — minimalista, premium
    acento: '#1FAE96', // teal esmeralda clínico — único color de énfasis
    texto: '#2B2F31', // gris oscuro cálido, no negro puro
  },
  tipografia: {
    titulos: "'Manrope', sans-serif",
    texto: "'Inter', sans-serif",
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&family=Inter:wght@400;500;600&display=swap',
  },
  wordmark: {
    tipo: 'tipografico' as const,
    nota: 'Nombre del negocio en Manrope 800, color primario (grafito) — sin ícono/símbolo.',
  },
};
