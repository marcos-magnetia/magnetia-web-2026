import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.magnetia.io'
  const lastModified = new Date()

  // Páginas principales en ambos idiomas
  const routes: MetadataRoute.Sitemap = [
    // Home - Español
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          es: baseUrl,
          en: `${baseUrl}/en`,
        },
      },
    },
    // Home - English
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          es: baseUrl,
          en: `${baseUrl}/en`,
        },
      },
    },
    // Contacto - Español
    {
      url: `${baseUrl}/contacto`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          es: `${baseUrl}/contacto`,
          en: `${baseUrl}/en/contact`,
        },
      },
    },
    // Contact - English
    {
      url: `${baseUrl}/en/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          es: `${baseUrl}/contacto`,
          en: `${baseUrl}/en/contact`,
        },
      },
    },
    // Aviso Legal - Español
    {
      url: `${baseUrl}/aviso-legal`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: {
        languages: {
          es: `${baseUrl}/aviso-legal`,
          en: `${baseUrl}/en/legal-notice`,
        },
      },
    },
    // Legal Notice - English
    {
      url: `${baseUrl}/en/legal-notice`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: {
        languages: {
          es: `${baseUrl}/aviso-legal`,
          en: `${baseUrl}/en/legal-notice`,
        },
      },
    },
    // Política de Privacidad - Español
    {
      url: `${baseUrl}/politica-de-privacidad`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: {
        languages: {
          es: `${baseUrl}/politica-de-privacidad`,
          en: `${baseUrl}/en/privacy-policy`,
        },
      },
    },
    // Privacy Policy - English
    {
      url: `${baseUrl}/en/privacy-policy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: {
        languages: {
          es: `${baseUrl}/politica-de-privacidad`,
          en: `${baseUrl}/en/privacy-policy`,
        },
      },
    },
    // Política de Cookies - Español
    {
      url: `${baseUrl}/politica-de-cookies`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: {
        languages: {
          es: `${baseUrl}/politica-de-cookies`,
          en: `${baseUrl}/en/cookie-policy`,
        },
      },
    },
    // Cookie Policy - English
    {
      url: `${baseUrl}/en/cookie-policy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: {
        languages: {
          es: `${baseUrl}/politica-de-cookies`,
          en: `${baseUrl}/en/cookie-policy`,
        },
      },
    },
  ]

  return routes
}
