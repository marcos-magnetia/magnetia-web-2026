// ContactsIcon.tsx
// Icono de contactos - Lista con dos colores

'use client'

import { motion } from 'framer-motion'

export default function ContactsIcon() {
  return (
    <svg 
      width="64" 
      height="64" 
      viewBox="0 0 80 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* CONTACTO 1 - NEGRO */}
      <motion.g
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <motion.circle 
          cx="15" 
          cy="18" 
          r="4" 
          stroke="#1A1A1A" 
          strokeWidth="2.5" 
          fill="none"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3, type: "spring", stiffness: 200 }}
        />
        <motion.path 
          d="M 10 23 Q 15 21, 20 23" 
          stroke="#1A1A1A" 
          strokeWidth="2.5" 
          fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.5 }}
        />
        <motion.line
          x1="28"
          y1="20"
          x2="70"
          y2="20"
          stroke="#1A1A1A"
          strokeWidth="3.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
      </motion.g>

      {/* CONTACTO 2 - CORAL */}
      <motion.g
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <motion.circle 
          cx="15" 
          cy="34" 
          r="4" 
          stroke="#E64A58" 
          strokeWidth="2.5" 
          fill="none"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.7, type: "spring", stiffness: 200 }}
        />
        <motion.path 
          d="M 10 39 Q 15 37, 20 39" 
          stroke="#E64A58" 
          strokeWidth="2.5" 
          fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.9 }}
        />
        <motion.line
          x1="28"
          y1="36"
          x2="70"
          y2="36"
          stroke="#E64A58"
          strokeWidth="3.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />
      </motion.g>

      {/* CONTACTO 3 - NEGRO */}
      <motion.g
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 1.0 }}
      >
        <motion.circle 
          cx="15" 
          cy="50" 
          r="4" 
          stroke="#1A1A1A" 
          strokeWidth="2.5" 
          fill="none"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.1, type: "spring", stiffness: 200 }}
        />
        <motion.path 
          d="M 10 55 Q 15 53, 20 55" 
          stroke="#1A1A1A" 
          strokeWidth="2.5" 
          fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 1.3 }}
        />
        <motion.line
          x1="28"
          y1="52"
          x2="70"
          y2="52"
          stroke="#1A1A1A"
          strokeWidth="3.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
      </motion.g>

      {/* CONTACTO 4 - CORAL */}
      <motion.g
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 1.4 }}
      >
        <motion.circle 
          cx="15" 
          cy="66" 
          r="4" 
          stroke="#E64A58" 
          strokeWidth="2.5" 
          fill="none"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.5, type: "spring", stiffness: 200 }}
        />
        <motion.path 
          d="M 10 71 Q 15 69, 20 71" 
          stroke="#E64A58" 
          strokeWidth="2.5" 
          fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 1.7 }}
        />
        <motion.line
          x1="28"
          y1="68"
          x2="70"
          y2="68"
          stroke="#E64A58"
          strokeWidth="3.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        />
      </motion.g>
    </svg>
  )
}
