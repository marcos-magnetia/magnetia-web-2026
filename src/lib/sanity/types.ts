/**
 * TypeScript types for Sanity documents
 */

export interface Stat {
  number: string
  label: string
  description: string
}

export interface Hero {
  pretitle: string
  line1: string
  line2: string
  line3: string
  cta: string
  scroll: string
  stats: Stat[]
}

// Add more types as needed for other sections
// export interface Service { ... }
// export interface Method { ... }
