'use client'

import { motion } from 'framer-motion'
import { ease } from '@/lib/animations'
import { RevealOnScroll } from '@/components/ui/RevealOnScroll'
import { CASES } from '@/lib/constants'

export function CasosExito() {
  return (
    <section className="py-[120px] md:py-[160px] px-5 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <RevealOnScroll className="text-center mb-16 md:mb-20">
          <span className="text-xs font-semibold text-magnetia-red uppercase tracking-widest block mb-4">
            Resultados reales
          </span>
          <h2 className="font-bold text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.04em] leading-[1.1]">
            Casos de éxito
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {CASES.map((c, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl border border-magnetia-black/[0.06] p-7 md:p-8 flex flex-col"
              style={{ boxShadow: '0 4px 20px rgba(26, 26, 26, 0.06)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              whileHover={{ y: -4 }}
            >
              {/* Sector badge */}
              <span className="text-xs font-semibold uppercase tracking-wider text-magnetia-red mb-4">
                {c.sector}
              </span>

              {/* Objective */}
              <p className="text-sm text-magnetia-black/50 mb-6">{c.objective}</p>

              {/* Highlight metric */}
              <div className="text-center py-6 mb-6 border-y border-magnetia-black/[0.06]">
                <p className="font-bold text-4xl md:text-5xl tracking-tight text-magnetia-black">{c.highlightValue}</p>
                <p className="text-sm text-magnetia-black/50 mt-1">{c.highlight}</p>
              </div>

              {/* Before / After */}
              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-magnetia-black/30 mb-2">Antes</p>
                  {c.before.map((b, j) => (
                    <p key={j} className="text-sm text-magnetia-black/50 leading-relaxed">{b}</p>
                  ))}
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-magnetia-red mb-2">Después</p>
                  {c.after.map((a, j) => (
                    <p key={j} className="text-sm text-magnetia-black font-medium leading-relaxed">{a}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
