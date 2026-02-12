import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { MeshGradientBg } from '@/components/layout/MeshGradientBg'
import { MobileBottomCTA } from '@/components/ui/MobileBottomCTA'
import '../globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const locales = ['es', 'en']

type Props = {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const isSpanish = locale === 'es';
  const title = isSpanish
    ? 'Magnetia | Agencia Digital de Generación de Clientes B2B'
    : 'Magnetia | Customer Acquisition Agency';
  const description = isSpanish
    ? 'Agencia especializada en generación de clientes B2B cualificados. Combinamos estrategia digital, captación de contactos y seguimiento personalizado para conseguirte reuniones con decisores reales.'
    : 'Agency specialized in qualified B2B client generation. We combine digital strategy, contact prospecting, and personalized follow-up to get you meetings with real decision-makers.';
  const keywords = isSpanish
    ? ['generación de leads', 'leads B2B', 'captación de clientes', 'agencia digital', 'marketing B2B', 'automatización marketing', 'inteligencia artificial', 'prospección comercial', 'contactos cualificados']
    : ['lead generation', 'B2B leads', 'client acquisition', 'digital agency', 'B2B marketing', 'marketing automation', 'artificial intelligence', 'commercial prospecting', 'qualified contacts'];

  return {
    metadataBase: new URL('https://www.magnetia.io'),

    // SEO Básico
    title: {
      default: title,
      template: '%s | Magnetia'
    },
    description,
    keywords,

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
      locale: isSpanish ? 'es_ES' : 'en_US',
      url: isSpanish ? 'https://www.magnetia.io' : 'https://www.magnetia.io/en',
      siteName: 'Magnetia',
      title,
      description,
      images: [
        {
          url: '/imagenes/logos/magnetia-logo-completo-blanco-fondo-rojo.png',
          width: 1200,
          height: 630,
          alt: isSpanish
            ? 'Magnetia - Agencia de Generación de Clientes'
            : 'Magnetia - Client Generation Agency',
        }
      ],
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/imagenes/logos/magnetia-logo-completo-blanco-fondo-rojo.png'],
    },

    // Categoría
    category: 'business',

    // Theme color
    other: {
      'theme-color': '#E64A58',
    },

    // hreflang for SEO
    alternates: {
      canonical: isSpanish ? 'https://www.magnetia.io' : 'https://www.magnetia.io/en',
      languages: {
        'es': 'https://www.magnetia.io',
        'en': 'https://www.magnetia.io/en',
        'x-default': 'https://www.magnetia.io', // Default to Spanish
      },
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  
  if (!locales.includes(locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WKMPKX6');`}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WKMPKX6"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <NextIntlClientProvider messages={messages}>
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
                url: locale === 'es' ? 'https://www.magnetia.io' : 'https://www.magnetia.io/en',
                logo: 'https://www.magnetia.io/imagenes/logos/magnetia-logo.svg',
                description: locale === 'es'
                  ? 'Agencia especializada en generación de clientes B2B cualificados. Combinamos estrategia digital, captación de contactos y seguimiento personalizado.'
                  : 'Agency specialized in qualified B2B client generation. We combine digital strategy, contact prospecting, and personalized follow-up.',
                email: 'hola@magnetia.io',
                areaServed: ['ES', 'EU', 'GB', 'US'],
                knowsLanguage: ['es', 'en'],
                inLanguage: locale === 'es' ? 'es' : 'en',
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
                  availableLanguage: ['Spanish', 'English'],
                },
              }),
            }}
          />

          {/* Mobile Bottom CTA - Only visible on mobile */}
          <MobileBottomCTA />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
