'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ease } from '@/lib/animations'
import { MagneticButton } from '@/components/ui/MagneticButton'

export function Metodo() {
  const t = useTranslations('home.method')

  // Build steps array from translations
  const METODO_STEPS = [
    {
      num: t('step1_number'),
      title: t('step1_title'),
      desc: t('step1_text'),
    },
    {
      num: t('step2_number'),
      title: t('step2_title'),
      desc: t('step2_text'),
    },
    {
      num: t('step3_number'),
      title: t('step3_title'),
      desc: t('step3_text'),
    },
    {
      num: t('step4_number'),
      title: t('step4_title'),
      desc: t('step4_text'),
    },
  ]

  return (
    <section
      className="bg-magnetia-black noise-overlay relative"
      id="metodo"
    >
      <div className="relative z-10">
        {/* ── Mobile: stacked layout ── */}
        <div className="md:hidden px-5 py-[80px]">
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            <h2 className="text-white font-bold text-[clamp(2rem,4vw,3rem)] tracking-[-0.04em] leading-[1.1] uppercase">
              {t('title')}
            </h2>
          </motion.div>

          <div className="flex flex-col">
            {METODO_STEPS.map((step, i) => (
              <motion.div
                key={i}
                className="py-8 border-t border-white/[0.06] flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
              >
                <span className="shrink-0 text-[48px] font-bold leading-none tracking-tight w-[56px] text-magnetia-red">
                  {step.num}
                </span>
                <div className="min-w-0">
                  <h3 className="text-white font-bold text-lg uppercase tracking-wide mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-[1.65] whitespace-pre-line">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile CTA */}
          <motion.div
            className="mt-12 pt-10 border-t border-white/[0.06] text-center flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            <p className="text-white/70 text-base leading-relaxed mb-1">
              {t('cta_title')}
            </p>
            <p className="text-white font-bold text-lg mb-1">
              {t('cta_subtitle')}
            </p>
            <p className="text-white/50 text-sm mb-6">
              {t('cta_desc')}
            </p>
            <MagneticButton href="/contacto" >
              {t('cta_button')}
            </MagneticButton>
          </motion.div>
        </div>

        {/* ── Desktop: full-width, left sticky title + CTA, right scrolling steps ── */}
        <div className="hidden md:grid md:grid-cols-[1fr_2fr]">
          {/* Left — sticky title + CTA */}
          <div className="relative border-r border-white/[0.06]">
            <div className="sticky top-0 h-screen flex flex-col justify-center">
              <motion.div
                className="px-10 lg:px-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
              >
                <h2 className="text-white font-bold text-[clamp(2rem,4vw,3rem)] tracking-[-0.04em] leading-[1.1] uppercase">
                  {t('title')}
                </h2>
                <div className="w-12 h-0.5 bg-magnetia-red/30 mt-8 mb-10" />

                <p className="text-white/70 text-base leading-relaxed mb-1">
                  {t('cta_title')}
                </p>
                <p className="text-white font-bold text-lg mb-1">
                  {t('cta_subtitle')}
                </p>
                <p className="text-white/40 text-sm leading-relaxed mb-6">
                  {t('cta_desc')}
                </p>
                <MagneticButton href="/contacto" >
                  {t('cta_button')}
                </MagneticButton>
              </motion.div>
            </div>
          </div>

          {/* Right — steps scroll */}
          <div className="flex flex-col">
            {METODO_STEPS.map((step, i) => (
              <div key={i} className="border-b border-white/[0.06]">
                <motion.div
                  className="px-10 lg:px-10 py-12 lg:py-16 flex items-start gap-6 lg:gap-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease }}
                >
                  {/* Number */}
                  <span
                    className="shrink-0 text-[64px] lg:text-[80px] font-bold leading-none tracking-tighter w-[80px] lg:w-[100px] text-magnetia-red"
                  >
                    {step.num}
                  </span>

                  {/* Content */}
                  <div className="min-w-0 pt-1">
                    <h3 className="text-white font-bold text-xl lg:text-2xl uppercase tracking-wide mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-sm lg:text-base leading-relaxed whitespace-pre-line">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
