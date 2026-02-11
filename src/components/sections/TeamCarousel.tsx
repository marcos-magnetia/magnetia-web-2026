'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { RevealOnScroll } from '@/components/ui/RevealOnScroll'
import { TEAM_PHOTOS } from '@/lib/constants'

export function TeamCarousel() {
  const duplicated = [...TEAM_PHOTOS, ...TEAM_PHOTOS]

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 mb-14 md:mb-16">
        <RevealOnScroll className="text-center">
          <span className="text-xs font-semibold text-magnetia-red uppercase tracking-widest block mb-4">
            Quiénes somos
          </span>
          <h2 className="font-bold text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.04em] leading-[1.1] mb-4">
            El equipo detrás de los números
          </h2>
          <p className="text-base md:text-lg text-magnetia-black/60 max-w-2xl mx-auto leading-relaxed">
            No somos una herramienta. Somos personas que entienden tu negocio
            y buscan a las personas que necesitan lo que vendes.
          </p>
        </RevealOnScroll>
      </div>

      {/* Infinite carousel */}
      <motion.div
        className="flex gap-6"
        animate={{ x: [0, -2400] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 25,
            ease: 'linear',
          },
        }}
      >
        {duplicated.map((photo, i) => (
          <div key={i} className="flex-shrink-0 w-[280px] md:w-[320px]">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src={photo}
                alt="Equipo Magnetia"
                fill
                className="object-cover team-photo"
                sizes="320px"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
