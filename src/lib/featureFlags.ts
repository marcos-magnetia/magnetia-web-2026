// /src/lib/featureFlags.ts
// Sistema centralizado de feature flags para controlar visibilidad de elementos

export const featureFlags = {
  // ── Sections ──
  sections: {
    hero: true,
    metodo: true,
    servicios: true,
    serviciosTools: false,       // Herramientas/Tools marquee
    about: true,
    testimonios: false,          // Oculto temporalmente
    queHacemos: false,           // No implementada aún
  },

  // ── CTAs ──
  ctas: {
    heroCta: false,              // "Vamos a encontrar los tuyos"
    metodoCta: true,             // "Agendar sesión" ✅
    serviciosHeaderCta: false,   // "Ver todos los servicios"
    serviciosCardCta: false,     // "Quiero saber más"
    aboutCta: false,             // "Conoce nuestra historia completa"
    headerCta: true,             // "Hablemos" ✅
    footerCta: true,             // "Ver cómo conseguir clientes" ✅
  },

  // ── Navigation Links ──
  navigation: {
    queHacemos: false,  // Ocultar hasta que exista la sección
    metodo: true,
    servicios: true,
    contacto: true,
  },
} as const

// Helper para verificar flags
export const isEnabled = (category: keyof typeof featureFlags, key: string): boolean => {
  return (featureFlags[category] as any)[key] ?? false
}
