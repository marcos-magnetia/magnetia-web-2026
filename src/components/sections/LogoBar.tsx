'use client'

import { motion } from 'framer-motion'
import { ease } from '@/lib/animations'
import { CLIENT_LOGOS } from '@/lib/constants'

export function LogoBar() {
  return (
    <section className="py-14 md:py-16 px-5 lg:px-10 border-y border-magnetia-black/[0.04]">
      <div className="max-w-[1100px] mx-auto">
        <motion.p
          className="text-xs text-magnetia-black/40 text-center uppercase tracking-[0.12em] font-medium mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          Empresas que ya confían en nosotros
        </motion.p>

        <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 flex-wrap">
          {CLIENT_LOGOS.map((name, i) => (
            <motion.div
              key={name}
              className="text-magnetia-black/20 font-bold text-lg md:text-xl tracking-tight select-none"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
