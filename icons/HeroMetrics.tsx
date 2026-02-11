// HeroMetrics.tsx
// Métricas del Hero con iconos animados en cascada

'use client'

import { motion } from 'framer-motion'
import BuildingIcon from './BuildingIcon'
import ContactsIcon from './ContactsIcon'
import QualificationIcon from './QualificationIcon'
import SuccessIcon from './SuccessIcon'

interface Metric {
  icon: React.ComponentType
  number: string
  title: string
  subtitle: string
  delay: number
}

const metrics: Metric[] = [
  {
    icon: BuildingIcon,
    number: '+50',
    title: 'empresas',
    subtitle: 'a las que ya hemos ayudado',
    delay: 0
  },
  {
    icon: ContactsIcon,
    number: '+60K',
    title: 'contactos generados',
    subtitle: 'para nuestros clientes',
    delay: 0.5
  },
  {
    icon: QualificationIcon,
    number: '100%',
    title: 'cualificación',
    subtitle: 'en las reuniones agendadas',
    delay: 1.0
  },
  {
    icon: SuccessIcon,
    number: '60%',
    title: 'éxito de cierre',
    subtitle: 'más de la mitad de las reuniones terminan en venta',
    delay: 1.5
  }
]

export default function HeroMetrics() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: metric.delay }}
              className="flex items-start gap-4"
            >
              {/* Icono */}
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <Icon />
              </div>

              {/* Contenido */}
              <div className="flex flex-col">
                {/* Número grande */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: metric.delay + 0.2 }}
                  className="text-4xl font-bold text-[#1A1A1A] leading-none mb-1"
                >
                  {metric.number}
                </motion.div>

                {/* Título */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: metric.delay + 0.4 }}
                  className="text-sm font-semibold text-[#1A1A1A] uppercase tracking-wide mb-1"
                >
                  {metric.title}
                </motion.div>

                {/* Subtítulo */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: metric.delay + 0.5 }}
                  className="text-xs text-gray-500 leading-tight"
                >
                  {metric.subtitle}
                </motion.div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
