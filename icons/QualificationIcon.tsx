// QualificationIcon.tsx
// Icono calendario con checks - 100% cualificación

'use client'

import { motion } from 'framer-motion'

export default function QualificationIcon() {
  return (
    <svg 
      width="64" 
      height="64" 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Marco calendario - NEGRO */}
      <motion.rect
        x="16"
        y="18"
        width="32"
        height="32"
        stroke="#1A1A1A"
        strokeWidth="2.5"
        fill="none"
        rx="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0 }}
      />

      {/* Header del calendario - CORAL */}
      <motion.rect
        x="16"
        y="18"
        width="32"
        height="6"
        fill="#E64A58"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        style={{ originX: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      />

      {/* Grid horizontal - líneas */}
      <motion.line
        x1="16" y1="32" x2="48" y2="32"
        stroke="#1A1A1A"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      />
      <motion.line
        x1="16" y1="40" x2="48" y2="40"
        stroke="#1A1A1A"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 0.7 }}
      />

      {/* Grid vertical - líneas */}
      <motion.line
        x1="26.5" y1="24" x2="26.5" y2="50"
        stroke="#1A1A1A"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 0.8 }}
      />
      <motion.line
        x1="37.5" y1="24" x2="37.5" y2="50"
        stroke="#1A1A1A"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 0.9 }}
      />

      {/* CHECK 1 - Celda arriba izquierda - CORAL */}
      <motion.path
        d="M 19 28 L 22 31 L 25 26"
        stroke="#E64A58"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 1.1 }}
      />

      {/* CHECK 2 - Celda centro - NEGRO */}
      <motion.path
        d="M 29.5 36 L 32.5 39 L 36 34"
        stroke="#1A1A1A"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 1.3 }}
      />

      {/* CHECK 3 - Celda arriba derecha - CORAL */}
      <motion.path
        d="M 40 28 L 43 31 L 46 26"
        stroke="#E64A58"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 1.5 }}
      />

      {/* CHECK 4 - Celda abajo izquierda - NEGRO */}
      <motion.path
        d="M 19 44 L 22 47 L 25 42"
        stroke="#1A1A1A"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 1.7 }}
      />

      {/* CHECK 5 - Celda abajo derecha - CORAL */}
      <motion.path
        d="M 40 44 L 43 47 L 46 42"
        stroke="#E64A58"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 1.9 }}
      />
    </svg>
  )
}
