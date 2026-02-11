'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { SPRING_CONFIG } from '@/lib/constants'

interface MagneticButtonProps {
  children: React.ReactNode
  href: string
  className?: string
  size?: 'small' | 'regular' | 'large'
  dark?: boolean
}

export function MagneticButton({ children, href, className = '', size = 'regular', dark = false }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, SPRING_CONFIG)
  const springY = useSpring(y, SPRING_CONFIG)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2
    x.set(offsetX * 0.25)
    y.set(offsetY * 0.4)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const colorClasses = dark
    ? 'bg-magnetia-black text-white'
    : 'bg-magnetia-red text-white'
  const baseClasses = `inline-flex items-center gap-2.5 font-semibold tracking-wide uppercase transition-all cursor-pointer ${colorClasses}`
  const sizeClasses =
    size === 'large' ? 'px-12 py-[22px] text-lg rounded-2xl' :
    size === 'small' ? 'px-6 py-3 text-sm rounded-lg' :
    'px-8 py-[18px] text-base rounded-xl'

  const hoverStyles = dark
    ? {
        scale: 1.04,
        boxShadow: '0 12px 40px rgba(26, 26, 26, 0.3)',
        background: 'linear-gradient(135deg, #1A1A1A 0%, #333333 100%)',
      }
    : {
        scale: 1.04,
        boxShadow: '0 12px 40px rgba(230, 74, 88, 0.4)',
        background: 'linear-gradient(135deg, #E64A58 0%, #FF6B7A 100%)',
      }

  return (
    <motion.a
      ref={ref}
      href={href}
      className={`${baseClasses} ${sizeClasses} ${className}`}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={hoverStyles}
      whileTap={{ scale: 0.95 }}
      transition={SPRING_CONFIG}
    >
      {children}
    </motion.a>
  )
}
