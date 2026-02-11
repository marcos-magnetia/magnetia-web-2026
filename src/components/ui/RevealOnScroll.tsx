'use client'

import { motion } from 'framer-motion'
import { ease } from '@/lib/animations'

interface RevealOnScrollProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function RevealOnScroll({ children, className, delay = 0 }: RevealOnScrollProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease }}
    >
      {children}
    </motion.div>
  )
}
