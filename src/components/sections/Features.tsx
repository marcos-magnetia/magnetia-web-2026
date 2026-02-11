'use client'

import { motion } from 'framer-motion'
import { ease } from '@/lib/animations'
import { FEATURES } from '@/lib/constants'
import type { FeatureData } from '@/lib/constants'

/* ── Bicolor SVG icons ── */
const icons: Record<FeatureData['icon'], React.ReactNode> = {
  funnel: (
    <svg width="32" height="32" viewBox="0 0 80 80" fill="none">
      <path d="M16 16h48L48 42v16l-8 8V42L16 16z" stroke="#1A1A1A" strokeWidth="2" strokeLinejoin="round" />
      <path d="M8 24l8-8M8 24h8M72 24l-8-8M72 24h-8" stroke="#E64A58" strokeWidth="2" strokeLinecap="round" />
      <circle cx="40" cy="72" r="3" fill="#E64A58" />
    </svg>
  ),
  calendar: (
    <svg width="32" height="32" viewBox="0 0 80 80" fill="none">
      <rect x="12" y="18" width="56" height="50" rx="4" stroke="#1A1A1A" strokeWidth="2" />
      <path d="M12 32h56" stroke="#1A1A1A" strokeWidth="2" />
      <path d="M28 12v12M52 12v12" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
      <rect x="34" y="50" width="12" height="12" rx="2" fill="#E64A58" opacity="0.2" stroke="#E64A58" strokeWidth="1.5" />
    </svg>
  ),
  automation: (
    <svg width="32" height="32" viewBox="0 0 80 80" fill="none">
      <circle cx="30" cy="36" r="12" stroke="#1A1A1A" strokeWidth="2" />
      <circle cx="30" cy="36" r="4" fill="#1A1A1A" opacity="0.15" />
      <circle cx="54" cy="52" r="9" stroke="#E64A58" strokeWidth="2" />
      <circle cx="54" cy="52" r="3" fill="#E64A58" opacity="0.2" />
    </svg>
  ),
  megaphone: (
    <svg width="32" height="32" viewBox="0 0 80 80" fill="none">
      <path d="M20 32l28-12v40L20 48V32z" stroke="#E64A58" strokeWidth="2" strokeLinejoin="round" />
      <rect x="12" y="32" width="8" height="16" rx="2" stroke="#E64A58" strokeWidth="2" />
      <path d="M54 34c4 2 6 6 6 10s-2 8-6 10" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  envelope: (
    <svg width="32" height="32" viewBox="0 0 80 80" fill="none">
      <rect x="10" y="22" width="60" height="40" rx="4" stroke="#1A1A1A" strokeWidth="2" />
      <path d="M10 26l30 18 30-18" stroke="#E64A58" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  ),
  strategy: (
    <svg width="32" height="32" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="24" stroke="#1A1A1A" strokeWidth="2" />
      <circle cx="40" cy="40" r="14" stroke="#E64A58" strokeWidth="2" opacity="0.4" />
      <circle cx="40" cy="40" r="5" fill="#E64A58" />
      <path d="M40 12v8M40 60v8M12 40h8M60 40h8" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    </svg>
  ),
}

export function Features() {
  return (
    <section className="py-[100px] md:py-[140px] px-5 lg:px-10 bg-gray-50" id="servicios">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          <span className="text-xs font-semibold text-magnetia-red uppercase tracking-[0.12em] block mb-4">
            Servicios
          </span>
          <h2 className="font-bold text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.04em] leading-[1.1]">
            Podemos hacer todo esto
          </h2>
        </motion.div>

        {/* Grid 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl border border-magnetia-black/[0.06] p-7 md:p-8 transition-shadow hover:shadow-[0_8px_30px_rgba(26,26,26,0.06)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
            >
              <div className="mb-5">{icons[feature.icon]}</div>
              <h3 className="font-bold text-lg tracking-tight mb-2">{feature.title}</h3>
              <p className="text-sm text-magnetia-black/50 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
