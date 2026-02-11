// SuccessIcon.tsx
// Check en círculo — compressed to ~0.85s

'use client'

import { motion } from 'framer-motion'

interface Props { startDelay?: number }

export default function SuccessIcon({ startDelay: d = 0 }: Props) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* CÍRCULO - NEGRO */}
      <motion.circle
        cx="32" cy="32" r="18"
        stroke="#1A1A1A" strokeWidth="3" fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: d }}
      />

      {/* CHECK - CORAL */}
      <motion.path
        d="M 22 32 L 28 38 L 42 24"
        stroke="#E64A58" strokeWidth="3.5"
        strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.35, delay: d + 0.5 }}
      />
    </svg>
  )
}
