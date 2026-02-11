'use client'

import { motion } from 'framer-motion'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { ease } from '@/lib/animations'
import { featureFlags } from '@/lib/featureFlags'

/* ═══════════════════════════════════════════
   Timeline — reading rhythm with breathing pauses

   0.0s  Eyebrow fades in
   0.2s  Line 1 letters (51 chars × 0.016s ≈ 0.82s → ends ~1.0s)
                         ── pause 0.35s ──
   1.35s Line 2 "y los encontramos, " (20 chars × 0.02s → ends ~1.75s)
                         ── pause 0.45s ──
   2.2s  "claro" (5 chars × 0.045s → ends ~2.42s) — accent
                         ── pause 0.4s ──
   2.8s  CTA button
                         ── pause 0.4s ──
   3.2s  Stats stagger (4 × 0.15s = done ~3.8s)
                         ── pause 0.7s ──
   4.5s  Scroll invite (imán → texto → flecha)

   NOTE: HeroMetrics (animated SVG icons version) available in
         src/components/ui/icons/HeroMetrics.tsx — disabled for now
   ═══════════════════════════════════════════ */

const HERO_STATS = [
  { number: '+50', label: 'empresas', sub: 'a las que ya hemos ayudado' },
  { number: '+60K', label: 'contactos generados', sub: 'para nuestros clientes' },
  { number: '100%', label: 'leads cualificados', sub: 'en las reuniones agendadas' },
  { number: '60%', label: 'éxito de cierre', sub: 'más de la mitad terminan en venta' },
]
const STAT_BASE_DELAY = 3.2
const STAT_STAGGER = 0.15
const LINE1 = 'Buscamos los clientes que está buscando tu negocio'
const LINE2 = 'y los encontramos, '
const LINE3 = 'claro'

/* ═══════════════════════════════════════════
   Hero Component
   ═══════════════════════════════════════════ */
export function Hero() {
  return (
    <section className="relative overflow-hidden" id="hero">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white" />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(230, 74, 88, 0.04) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(26, 26, 26, 0.02) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(230, 74, 88, 0.02) 0%, transparent 70%)
            `,
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full px-6 md:px-8 lg:px-10 pt-[120px] md:pt-[160px] lg:pt-[180px]">
        {/* Title + CTA */}
        <div className="text-center flex flex-col items-center gap-5 md:gap-6 max-w-[900px] mx-auto">
          {/* Eyebrow */}
          <motion.p
            className="text-[10px] md:text-xs font-medium text-magnetia-red uppercase tracking-[0.1em] md:tracking-[0.12em]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            &bull; Agencia Digital de Generación de Clientes
          </motion.p>

          {/* Title — letter-by-letter with reading rhythm + pauses */}
          <h1 className="font-bold text-[clamp(1.875rem,5vw,4.5rem)] leading-[1.1] tracking-[-0.04em]">
            {/* Line 1 — black, reading pace */}
            {Array.from(LINE1).map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.016, ease }}
              >
                {char}
              </motion.span>
            ))}
            <br />
            {/* ── pause 0.35s ── then line 2 in red */}
            {Array.from(LINE2).map((char, i) => (
              <motion.span
                key={`r-${i}`}
                className="text-magnetia-red"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.35 + i * 0.02, ease }}
              >
                {char}
              </motion.span>
            ))}
            {/* ── pause 0.45s ── then "claro" slower, accent */}
            {Array.from(LINE3).map((char, i) => (
              <motion.span
                key={`c-${i}`}
                className="text-magnetia-red"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 2.2 + i * 0.045, ease }}
              >
                {char}
              </motion.span>
            ))}
          </h1>

          {/* CTA — after title finishes + pause */}
          {featureFlags.ctas.heroCta && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.8, ease }}
            >
              <MagneticButton href="/contacto">
                <span>Vamos a encontrar los tuyos</span>
              </MagneticButton>
            </motion.div>
          )}
        </div>

        {/* Stats — simplified, typography only */}
        <div className="mt-12 md:mt-16 max-w-[1000px] mx-auto w-full">
          {/* Mobile: 2x2 grid */}
          <div className="grid grid-cols-2 gap-y-12 gap-x-6 md:hidden">
            {HERO_STATS.map((stat, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: STAT_BASE_DELAY + i * STAT_STAGGER, ease }}
              >
                <p className="font-bold text-[2rem] tracking-tight leading-none mb-2">{stat.number}</p>
                <p className="text-sm font-semibold leading-tight mb-1">{stat.label}</p>
                <p className="text-xs text-magnetia-black/50 leading-relaxed">{stat.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* Desktop: 4 columns with dividers */}
          <div className="hidden md:grid md:grid-cols-4 md:gap-0">
            {HERO_STATS.map((stat, i) => (
              <motion.div
                key={i}
                className={`px-6 lg:px-8${i > 0 ? ' border-l border-magnetia-black/[0.06]' : ''}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: STAT_BASE_DELAY + i * STAT_STAGGER, ease }}
              >
                <p className="font-bold text-[2rem] lg:text-[2.25rem] tracking-tight leading-none">{stat.number}</p>
                <p className="text-sm font-medium mt-2">{stat.label}</p>
                <p className="text-xs text-magnetia-black/40 mt-0.5 leading-snug">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll invite: imán → texto → flecha ── */}
      <div className="relative z-10 flex flex-col items-center gap-2 pt-12 pb-16">
        {/* 1. Imán — con sutil balanceo lateral */}
        <motion.img
          src="/imagenes/logos/logo solo iman sin fondo.svg"
          alt="Magnetia"
          className="w-8 h-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0, x: [0, 3, -3, 2, 0] }}
          transition={{ duration: 0.6, delay: 4.5, ease, x: { delay: 5.1, duration: 1.2, ease: 'easeInOut' } }}
        />

        {/* 2. Texto */}
        <motion.p
          className="text-xs font-medium text-magnetia-black/40 uppercase tracking-[0.12em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.7, duration: 0.5 }}
        >
          Descubre cómo lo hacemos
        </motion.p>

        {/* 3. Flecha — bounce infinito */}
        <motion.svg
          width="16" height="16" viewBox="0 0 24 24" fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 5, 0] }}
          transition={{ opacity: { delay: 4.9, duration: 0.5 }, y: { delay: 4.9, repeat: Infinity, duration: 1.8, ease: 'easeInOut' } }}
        >
          <path d="M12 5v14M5 12l7 7 7-7" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.25" />
        </motion.svg>
      </div>

      {/* Bottom gradient — eases the transition to the dark Método section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[240px] pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(26, 26, 26, 0.04) 35%, rgba(26, 26, 26, 0.14) 70%, rgba(26, 26, 26, 0.25) 100%)' }}
      />
    </section>
  )
}
