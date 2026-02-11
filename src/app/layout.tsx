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
  title: 'Magnetia | Agencia Digital de Generación de Clientes',
  description: 'Agencia especializada en generación de clientes B2B cualificados. Combinamos estrategia digital, captación de contactos y seguimiento personalizado para conseguirte reuniones con decisores reales.',
  icons: { icon: '/favicon.png' },
  openGraph: {
    images: ['/imagenes/logos/magnetia-logo-completo-blanco-fondo-rojo.png'],
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
      </body>
    </html>
  )
}
