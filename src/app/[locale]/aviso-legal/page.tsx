import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'legalNotice' })

  const baseUrl = 'https://www.magnetia.io'
  const path = locale === 'es' ? '/aviso-legal' : '/en/legal-notice'

  return {
    title: `${t('title')} — Magnetia`,
    description: locale === 'es'
      ? 'Información legal y condiciones de uso del sitio web de Magnetia, S.L.L.'
      : 'Legal information and terms of use of the Magnetia, S.L.L. website.',
    robots: {
      index: true,
      follow: false,
    },
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: {
        'es': `${baseUrl}/aviso-legal`,
        'en': `${baseUrl}/en/legal-notice`,
        'x-default': `${baseUrl}/aviso-legal`,
      },
    },
  }
}

export default async function AvisoLegal({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'legalNotice' })

  return (
    <>
      <Header />
      <main className="pt-32 pb-20 px-5 lg:px-10">
        <div className="max-w-[800px] mx-auto prose prose-gray">
          <h1 className="font-bold text-4xl tracking-tight mb-8 text-magnetia-black">{t('title')}</h1>

          <p className="text-gray-600 mb-8 leading-relaxed">
            {t('lastUpdated')}
          </p>

          {/* Datos Identificativos */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            {t('section1_title')}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section1_intro')}
          </p>
          <ul className="text-gray-600 mb-4 space-y-2">
            <li><strong>{t('section1_holder')}:</strong> {t('section1_holder_value')}</li>
            <li><strong>{t('section1_cif')}:</strong> {t('section1_cif_value')}</li>
            <li><strong>{t('section1_address')}:</strong> {t('section1_address_value')}</li>
            <li><strong>{t('section1_email')}:</strong> <a href="mailto:hola@magnetia.io" className="text-magnetia-red hover:underline">hola@magnetia.io</a></li>
            <li><strong>{t('section1_phone')}:</strong> <a href="tel:+34634185582" className="text-magnetia-red hover:underline">(+34) 634 18 55 82</a></li>
            <li><strong>{t('section1_registry')}:</strong> {t('section1_registry_value')}</li>
          </ul>

          {/* Condiciones de Uso */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            {t('section2_title')}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section2_p1')}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section2_p2')}
          </p>

          {/* Obligaciones del Usuario */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            {t('section3_title')}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section3_intro')}
          </p>
          <ul className="text-gray-600 mb-4 space-y-2 list-disc pl-6">
            <li>{t('section3_item1')}</li>
            <li>{t('section3_item2')}</li>
            <li>{t('section3_item3')}</li>
            <li>{t('section3_item4')}</li>
            <li>{t('section3_item5')}</li>
          </ul>

          {/* Propiedad Intelectual */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            {t('section4_title')}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section4_p1')}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section4_p2')}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section4_p3')}
          </p>

          {/* Enlaces */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            {t('section5_title')}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section5_p1')}
          </p>

          {/* Limitación de Responsabilidad */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            {t('section6_title')}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section6_intro')}
          </p>
          <ul className="text-gray-600 mb-4 space-y-2 list-disc pl-6">
            <li>{t('section6_item1')}</li>
            <li>{t('section6_item2')}</li>
            <li>{t('section6_item3')}</li>
            <li>{t('section6_item4')}</li>
          </ul>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section6_p2')}
          </p>

          {/* Protección de Datos */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            {t('section7_title')}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section7_p1')}{' '}
            <Link href="/politica-de-privacidad" className="text-magnetia-red hover:underline">
              {t('section7_link')}
            </Link>.
          </p>

          {/* Legislación Aplicable */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            {t('section8_title')}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section8_p1')}
          </p>

          {/* Contacto */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            {t('section9_title')}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section9_intro')}
          </p>
          <ul className="text-gray-600 mb-4 space-y-2">
            <li><strong>{t('section1_email')}:</strong> <a href="mailto:hola@magnetia.io" className="text-magnetia-red hover:underline">hola@magnetia.io</a></li>
            <li><strong>{t('section1_phone')}:</strong> <a href="tel:+34634185582" className="text-magnetia-red hover:underline">(+34) 634 18 55 82</a></li>
            <li><strong>{t('section9_address_label')}:</strong> {t('section1_address_value')}</li>
          </ul>
        </div>
      </main>
      <Footer showCta={false} />
    </>
  )
}
