'use client'

import { motion } from 'framer-motion'
import { ease } from '@/lib/animations'
import { STORY_BLOCKS } from '@/lib/constants'

export function Story() {
  return (
    <section className="py-[100px] md:py-[140px] px-5 lg:px-10" id="que-hacemos">
      <div className="max-w-[1100px] mx-auto flex flex-col gap-24 md:gap-32">
        {STORY_BLOCKS.map((block, i) => {
          const isReversed = i % 2 === 1

          return (
            <motion.div
              key={i}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                isReversed ? 'lg:[direction:rtl]' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease }}
            >
              {/* Text */}
              <div className={isReversed ? 'lg:[direction:ltr]' : ''}>
                <span className="text-xs font-semibold text-magnetia-red uppercase tracking-[0.12em] block mb-4">
                  {block.eyebrow}
                </span>
                <h3 className="font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] tracking-[-0.03em] leading-[1.15] mb-6">
                  {block.title}
                </h3>
                <div className="flex flex-col gap-4">
                  {block.paragraphs.map((p, j) => (
                    <p
                      key={j}
                      className="text-base md:text-lg text-magnetia-black/60 leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              {/* Visual placeholder — rounded card with subtle pattern */}
              <div className={isReversed ? 'lg:[direction:ltr]' : ''}>
                <div
                  className="aspect-[4/3] rounded-2xl border border-magnetia-black/[0.06] overflow-hidden relative"
                  style={{
                    background: i === 0
                      ? 'linear-gradient(135deg, #F9FAFB 0%, #EFEFEF 100%)'
                      : 'linear-gradient(135deg, rgba(230, 74, 88, 0.04) 0%, rgba(230, 74, 88, 0.01) 100%)',
                  }}
                >
                  {/* Decorative number */}
                  <span
                    className="absolute top-6 left-7 text-[80px] md:text-[100px] font-bold leading-none select-none"
                    style={{ color: i === 0 ? 'rgba(26, 26, 26, 0.04)' : 'rgba(230, 74, 88, 0.06)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Icon cluster */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {i === 0 ? (
                      /* Problem — scattered question marks */
                      <div className="flex gap-4 opacity-10">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.5">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M9 9a3 3 0 015.12 2.13c0 1.37-2.12 1.87-2.12 3.37M12 17h.01" strokeLinecap="round" />
                        </svg>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.5" className="mt-8">
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM15 9l-6 6M9 9l6 6" strokeLinecap="round" />
                        </svg>
                      </div>
                    ) : (
                      /* Solution — target/checkmark */
                      <div className="flex gap-4 opacity-10">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E64A58" strokeWidth="1.5">
                          <circle cx="12" cy="12" r="10" />
                          <circle cx="12" cy="12" r="6" />
                          <circle cx="12" cy="12" r="2" fill="#E64A58" />
                        </svg>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E64A58" strokeWidth="1.5" className="mt-8">
                          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
