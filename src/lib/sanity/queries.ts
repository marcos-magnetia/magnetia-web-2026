/**
 * GROQ Queries for Sanity CMS
 */

export const heroQuery = (locale: string) => `
  *[_type == "hero" && _id == "hero-${locale}"][0] {
    pretitle,
    line1,
    line2,
    line3,
    cta,
    scroll,
    stats[] {
      number,
      label,
      description
    }
  }
`

// Add more queries as needed for other sections
// export const servicesQuery = (locale: string) => `...`
// export const methodQuery = (locale: string) => `...`
