// ContactsIcon.tsx
// Icono de contactos — compressed to ~0.9s, viewBox 64x64

'use client'

import { motion } from 'framer-motion'

interface Props { startDelay?: number }

export default function ContactsIcon({ startDelay: d = 0 }: Props) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* CONTACTO 1 - NEGRO */}
      <motion.g
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25, delay: d }}
      >
        <motion.circle
          cx="12" cy="14.4" r="3.2"
          stroke="#1A1A1A" strokeWidth="2" fill="none"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2, delay: d + 0.05, type: "spring", stiffness: 250 }}
        />
        <motion.path
          d="M 8 18.4 Q 12 16.8, 16 18.4"
          stroke="#1A1A1A" strokeWidth="2" fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15, delay: d + 0.1 }}
        />
        <motion.line
          x1="22.4" y1="16" x2="56" y2="16"
          stroke="#1A1A1A" strokeWidth="2.8" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, delay: d + 0.05 }}
        />
      </motion.g>

      {/* CONTACTO 2 - CORAL */}
      <motion.g
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25, delay: d + 0.25 }}
      >
        <motion.circle
          cx="12" cy="27.2" r="3.2"
          stroke="#E64A58" strokeWidth="2" fill="none"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2, delay: d + 0.3, type: "spring", stiffness: 250 }}
        />
        <motion.path
          d="M 8 31.2 Q 12 29.6, 16 31.2"
          stroke="#E64A58" strokeWidth="2" fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15, delay: d + 0.35 }}
        />
        <motion.line
          x1="22.4" y1="28.8" x2="56" y2="28.8"
          stroke="#E64A58" strokeWidth="2.8" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, delay: d + 0.3 }}
        />
      </motion.g>

      {/* CONTACTO 3 - NEGRO */}
      <motion.g
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25, delay: d + 0.5 }}
      >
        <motion.circle
          cx="12" cy="40" r="3.2"
          stroke="#1A1A1A" strokeWidth="2" fill="none"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2, delay: d + 0.55, type: "spring", stiffness: 250 }}
        />
        <motion.path
          d="M 8 44 Q 12 42.4, 16 44"
          stroke="#1A1A1A" strokeWidth="2" fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15, delay: d + 0.6 }}
        />
        <motion.line
          x1="22.4" y1="41.6" x2="56" y2="41.6"
          stroke="#1A1A1A" strokeWidth="2.8" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, delay: d + 0.55 }}
        />
      </motion.g>

      {/* CONTACTO 4 - CORAL */}
      <motion.g
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25, delay: d + 0.7 }}
      >
        <motion.circle
          cx="12" cy="52.8" r="3.2"
          stroke="#E64A58" strokeWidth="2" fill="none"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2, delay: d + 0.75, type: "spring", stiffness: 250 }}
        />
        <motion.path
          d="M 8 56.8 Q 12 55.2, 16 56.8"
          stroke="#E64A58" strokeWidth="2" fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15, delay: d + 0.8 }}
        />
        <motion.line
          x1="22.4" y1="54.4" x2="56" y2="54.4"
          stroke="#E64A58" strokeWidth="2.8" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, delay: d + 0.75 }}
        />
      </motion.g>
    </svg>
  )
}
