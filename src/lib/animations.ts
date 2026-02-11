import { type Variants } from 'framer-motion'

/* ── Shared easing — used across all animations ── */
export const ease: [number, number, number, number] = [0.23, 1, 0.32, 1]

/* ── Entrance: fade + slide up (20px) ── */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
}

/* ── Entrance: fade only (no movement) ── */
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease },
  },
}

/* ── Stagger container — wraps children with 0.1s delay between each ── */
export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

/* ── Hero children — same as fadeUp, re-exported for clarity ── */
export const heroChildVariants = fadeUpVariants
