// BuildingIcon.tsx
// Icono edificio con personas - Dos colores sólidos

'use client'

import { motion } from 'framer-motion'

export default function BuildingIcon() {
  return (
    <svg 
      width="64" 
      height="64" 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Base/suelo - NEGRO */}
      <motion.line
        x1="12"
        y1="54"
        x2="52"
        y2="54"
        stroke="#1A1A1A"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
      />

      {/* EDIFICIO - Contorno CORAL */}
      <motion.path
        d="M 18 22 L 18 54 L 46 54 L 46 22 Z"
        stroke="#E64A58"
        strokeWidth="3"
        fill="none"
        strokeLinejoin="miter"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      />

      {/* PERSONAS (5 personas) - CORAL */}
      
      {/* Persona 1 - Arriba izquierda */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.3, type: "spring", stiffness: 200 }}
      >
        <circle cx="24" cy="28" r="2.5" stroke="#E64A58" strokeWidth="1.5" fill="none" />
        <path d="M 21 32 Q 24 30, 27 32" stroke="#E64A58" strokeWidth="1.5" fill="none" />
      </motion.g>

      {/* Persona 2 - Arriba derecha */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.45, type: "spring", stiffness: 200 }}
      >
        <circle cx="40" cy="28" r="2.5" stroke="#E64A58" strokeWidth="1.5" fill="none" />
        <path d="M 37 32 Q 40 30, 43 32" stroke="#E64A58" strokeWidth="1.5" fill="none" />
      </motion.g>

      {/* Persona 3 - Centro */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.6, type: "spring", stiffness: 200 }}
      >
        <circle cx="32" cy="36" r="2.5" stroke="#E64A58" strokeWidth="1.5" fill="none" />
        <path d="M 29 40 Q 32 38, 35 40" stroke="#E64A58" strokeWidth="1.5" fill="none" />
      </motion.g>

      {/* Persona 4 - Abajo izquierda */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.75, type: "spring", stiffness: 200 }}
      >
        <circle cx="24" cy="44" r="2.5" stroke="#E64A58" strokeWidth="1.5" fill="none" />
        <path d="M 21 48 Q 24 46, 27 48" stroke="#E64A58" strokeWidth="1.5" fill="none" />
      </motion.g>

      {/* Persona 5 - Abajo derecha */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.9, type: "spring", stiffness: 200 }}
      >
        <circle cx="40" cy="44" r="2.5" stroke="#E64A58" strokeWidth="1.5" fill="none" />
        <path d="M 37 48 Q 40 46, 43 48" stroke="#E64A58" strokeWidth="1.5" fill="none" />
      </motion.g>

      {/* Puerta en la base - NEGRO */}
      <motion.rect
        x="28"
        y="46"
        width="8"
        height="8"
        stroke="#1A1A1A"
        strokeWidth="2"
        fill="none"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        style={{ originY: 1 }}
        transition={{ duration: 0.3, delay: 1.1 }}
      />
    </svg>
  )
}
