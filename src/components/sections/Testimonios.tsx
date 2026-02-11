'use client'

import { motion } from 'framer-motion'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { RevealOnScroll } from '@/components/ui/RevealOnScroll'
import { TESTIMONIALS } from '@/lib/constants'

export function Testimonios() {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <section className="py-[120px] md:py-[160px] overflow-hidden">
      <RevealOnScroll className="text-center mb-14 px-5">
        <span className="text-xs font-semibold text-magnetia-red uppercase tracking-[0.12em] block mb-4">
          Testimonios
        </span>
        <h2 className="font-bold text-[clamp(2rem,4vw,3rem)] tracking-[-0.04em] leading-[1.1]">
          Lo que dicen nuestros clientes
        </h2>
      </RevealOnScroll>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-5 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 40,
              ease: 'linear',
            },
          }}
        >
          {doubled.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
