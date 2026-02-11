// HeroMetrics.tsx
// Métricas del Hero — cascada secuencial: icono 1 → flecha → icono 2 → ...

'use client'

import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { ease } from '@/lib/animations'
import BuildingIcon from './BuildingIcon'
import ContactsIcon from './ContactsIcon'
import QualificationIcon from './QualificationIcon'
import SuccessIcon from './SuccessIcon'

interface Metric {
  icon: React.ComponentType<{ startDelay?: number }>
  number: string
  title: string
  subtitle: string
}

const metrics: Metric[] = [
  {
    icon: BuildingIcon,
    number: '+50',
    title: 'empresas',
    subtitle: 'a las que ya hemos ayudado',
  },
  {
    icon: ContactsIcon,
    number: '+60K',
    title: 'contactos generados',
    subtitle: 'para nuestros clientes',
  },
  {
    icon: QualificationIcon,
    number: '100%',
    title: 'cualificación',
    subtitle: 'en las reuniones agendadas',
  },
  {
    icon: SuccessIcon,
    number: '60%',
    title: 'éxito de cierre',
    subtitle: 'más de la mitad de las reuniones terminan en venta',
  },
]

/*
 * Sequential timeline — each icon completes before the next starts
 *
 * Metric 1: 3.2s  → icon ~1.0s  → done ~4.2s
 * Arrow 1:  4.0s  (starts slightly before icon finishes)
 * Metric 2: 4.2s  → icon ~0.9s  → done ~5.1s
 * Arrow 2:  5.0s
 * Metric 3: 5.2s  → icon ~1.0s  → done ~6.2s
 * Arrow 3:  6.0s
 * Metric 4: 6.2s  → icon ~0.85s → done ~7.05s
 * Scroll invite: 7.2s (updated in Hero.tsx)
 */
const STAT_DELAYS = [3.2, 4.2, 5.2, 6.2]
const ARROW_DELAYS = [4.0, 5.0, 6.0]

export default function HeroMetrics() {
  return (
    <div className="w-full max-w-[1100px] mx-auto">
      {/* Mobile: 2x2 grid — sequential too */}
      <div className="grid grid-cols-2 gap-6 md:hidden">
        {metrics.map((metric, i) => {
          const Icon = metric.icon
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: STAT_DELAYS[i], ease }}
            >
              <div className="w-12 h-12 mb-2">
                <Icon startDelay={STAT_DELAYS[i]} />
              </div>
              <p className="font-bold text-[1.75rem] tracking-tight leading-none">{metric.number}</p>
              <p className="text-sm font-medium mt-1">{metric.title}</p>
              <p className="text-xs text-magnetia-black/50 mt-0.5 leading-snug">{metric.subtitle}</p>
            </motion.div>
          )
        })}
      </div>

      {/* Desktop: row with arrows — sequential cascade */}
      <div className="hidden md:flex items-start justify-between">
        {metrics.map((metric, i) => {
          const Icon = metric.icon
          return (
            <Fragment key={i}>
              {/* Arrow → connector between stats — wider, closer to stats */}
              {i > 0 && (
                <motion.div
                  className="flex items-center shrink-0 pt-3 px-1"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  style={{ originX: 0 }}
                  transition={{ duration: 0.4, delay: ARROW_DELAYS[i - 1], ease }}
                >
                  <svg width="48" height="16" viewBox="0 0 48 16" fill="none">
                    <line x1="0" y1="8" x2="40" y2="8" stroke="#1A1A1A" strokeWidth="1.5" opacity="0.15" />
                    <path d="M40 4l4 4-4 4" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.15" />
                  </svg>
                </motion.div>
              )}

              {/* Stat block with icon */}
              <motion.div
                className="flex-1 min-w-0 flex items-start gap-3"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: STAT_DELAYS[i], ease }}
              >
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                  <Icon startDelay={STAT_DELAYS[i]} />
                </div>
                <div>
                  <p className="font-bold text-[2rem] lg:text-[2.25rem] tracking-tight leading-none">{metric.number}</p>
                  <p className="text-sm font-medium mt-1.5">{metric.title}</p>
                  <p className="text-xs text-magnetia-black/50 mt-0.5 leading-snug">{metric.subtitle}</p>
                </div>
              </motion.div>
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}
