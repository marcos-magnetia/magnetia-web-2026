import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { MeshGradientBg } from '@/components/layout/MeshGradientBg'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.magnetia.io'),

  // SEO Básico
  title: {
    default: 'Magnetia | Agencia Digital de Generación de Clientes B2B',
    template: '%s | Magnetia'
  },
  description: 'Agencia especializada en generación de clientes B2B cualificados. Combinamos estrategia digital, captación de contactos y seguimiento personalizado para conseguirte reuniones con decisores reales.',
  keywords: ['generación de leads', 'leads B2B', 'captación de clientes', 'agencia digital', 'marketing B2B', 'automatización marketing', 'inteligencia artificial', 'prospección comercial', 'contactos cualificados'],

  // Autor y creator
  authors: [{ name: 'Magnetia', url: 'https://www.magnetia.io' }],
  creator: 'Magnetia',
  publisher: 'Magnetia S.L.L.',

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Icons mejorado
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },

  // OpenGraph completo
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.magnetia.io',
    siteName: 'Magnetia',
    title: 'Magnetia | Agencia Digital de Generación de Clientes B2B',
    description: 'Agencia especializada en generación de clientes B2B cualificados. Combinamos estrategia digital, captación de contactos y seguimiento personalizado para conseguirte reuniones con decisores reales.',
    images: [
      {
        url: '/imagenes/logos/magnetia-logo-completo-blanco-fondo-rojo.png',
        width: 1200,
        height: 630,
        alt: 'Magnetia - Agencia de Generación de Clientes',
      }
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Magnetia | Agencia Digital de Generación de Clientes B2B',
    description: 'Agencia especializada en generación de clientes B2B cualificados. Combinamos estrategia digital, captación de contactos y seguimiento personalizado.',
    images: ['/imagenes/logos/magnetia-logo-completo-blanco-fondo-rojo.png'],
  },

  // Categoría
  category: 'business',

  // Theme color
  other: {
    'theme-color': '#E64A58',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <Script id="google-tag-manager" strategy="beforeInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WKMPKX6');`}
      </Script>
      <body className={`${inter.className} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WKMPKX6"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <MeshGradientBg />
        {children}

        {/* Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              '@id': 'https://www.magnetia.io',
              name: 'Magnetia',
              alternateName: 'Magnetia S.L.L.',
              url: 'https://www.magnetia.io',
              logo: 'https://www.magnetia.io/imagenes/logos/magnetia-logo.svg',
              description: 'Agencia especializada en generación de clientes B2B cualificados. Combinamos estrategia digital, captación de contactos y seguimiento personalizado.',
              email: 'hola@magnetia.io',
              areaServed: 'ES',
              knowsLanguage: 'es',
              priceRange: '€€',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                reviewCount: '50',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                email: 'hola@magnetia.io',
                availableLanguage: 'Spanish',
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
