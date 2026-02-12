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
  const t = await getTranslations({ locale, namespace: 'privacyPolicy' })

  const baseUrl = 'https://www.magnetia.io'
  const path = locale === 'es' ? '/politica-de-privacidad' : '/en/privacy-policy'

  return {
    title: `${t('title')} — Magnetia`,
    description: locale === 'es'
      ? 'Política de privacidad y protección de datos de Magnetia, S.L.L. conforme al RGPD.'
      : 'Privacy and data protection policy of Magnetia, S.L.L. in accordance with GDPR.',
    robots: {
      index: true,
      follow: false,
    },
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: {
        'es': `${baseUrl}/politica-de-privacidad`,
        'en': `${baseUrl}/en/privacy-policy`,
        'x-default': `${baseUrl}/politica-de-privacidad`,
      },
    },
  }
}

export default async function PoliticaDePrivacidad({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'privacyPolicy' })

  return (
    <>
      <Header />
      <main className="pt-32 pb-20 px-5 lg:px-10">
        <div className="max-w-[800px] mx-auto prose prose-gray">
          <h1 className="font-bold text-4xl tracking-tight mb-8 text-magnetia-black">
            {t('title')}
          </h1>

          <p className="text-gray-600 mb-8 leading-relaxed">
            {t('lastUpdated')}
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('intro')}
          </p>

          {/* Responsable */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            {t('section1_title')}
          </h2>
          <ul className="text-gray-600 mb-4 space-y-2">
            <li>{t('section1_item1')}</li>
            <li>{t('section1_item2')}</li>
            <li>{t('section1_item3')}</li>
            <li><strong>{t('section1_item4')}</strong> <a href="mailto:hola@magnetia.io" className="text-magnetia-red hover:underline">hola@magnetia.io</a></li>
            <li><strong>{t('section1_item5')}</strong> <a href="tel:+34634185582" className="text-magnetia-red hover:underline">(+34) 634 18 55 82</a></li>
          </ul>

          {/* Datos que recopilamos */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            {t('section2_title')}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section2_intro')}
          </p>
          <ul className="text-gray-600 mb-4 space-y-2 list-disc pl-6">
            <li>{t('section2_item1')}</li>
            <li>{t('section2_item2')}</li>
            <li>{t('section2_item3')}</li>
            <li>{t('section2_item4')}</li>
          </ul>

          {/* Finalidad */}
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

          {/* Base Legal */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            {t('section4_title')}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section4_intro')}
          </p>
          <ul className="text-gray-600 mb-4 space-y-2 list-disc pl-6">
            <li>{t('section4_item1')}</li>
            <li>{t('section4_item2')}</li>
            <li>{t('section4_item3')}</li>
            <li>{t('section4_item4')}</li>
          </ul>

          {/* Plazo de Conservación */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            {t('section5_title')}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section5_p1')}
          </p>
          <ul className="text-gray-600 mb-4 space-y-2 list-disc pl-6">
            <li>{t('section5_item1')}</li>
            <li>{t('section5_item2')}</li>
            <li>{t('section5_item3')}</li>
          </ul>

          {/* Destinatarios */}
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
          </ul>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section6_p1')}
          </p>

          {/* Derechos */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            {t('section7_title')}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section7_intro')}
          </p>
          <ul className="text-gray-600 mb-4 space-y-2 list-disc pl-6">
            <li>{t('section7_item1')}</li>
            <li>{t('section7_item2')}</li>
            <li>{t('section7_item3')}</li>
            <li>{t('section7_item4')}</li>
            <li>{t('section7_item5')}</li>
            <li>{t('section7_item6')}</li>
            <li>{t('section7_item7')}</li>
          </ul>

          {/* Ejercicio de Derechos */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            {t('section8_title')}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section8_intro')}
          </p>
          <ul className="text-gray-600 mb-4 space-y-2">
            <li><strong>{t('section8_item1')}</strong> <a href="mailto:hola@magnetia.io" className="text-magnetia-red hover:underline">hola@magnetia.io</a></li>
            <li>{t('section8_item2')}</li>
          </ul>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section8_p1')}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section8_p2')}<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-magnetia-red hover:underline">{t('section8_p2_link')}</a>{t('section8_p2_end')}
          </p>

          {/* Seguridad */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            {t('section9_title')}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section9_p1')}
          </p>

          {/* Menores */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            {t('section10_title')}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section10_p1')}
          </p>

          {/* Cookies */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            {t('section11_title')}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section11_p1')}{' '}
            <Link href="/politica-de-cookies" className="text-magnetia-red hover:underline">
              {t('section11_link')}
            </Link>.
          </p>

          {/* Modificaciones */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            {t('section12_title')}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section12_p1')}
          </p>

          {/* Contacto */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            {t('section13_title')}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section13_intro')}
          </p>
          <ul className="text-gray-600 mb-4 space-y-2">
            <li><strong>{t('section13_item1')}</strong> <a href="mailto:hola@magnetia.io" className="text-magnetia-red hover:underline">hola@magnetia.io</a></li>
            <li><strong>{t('section13_item2')}</strong> <a href="tel:+34634185582" className="text-magnetia-red hover:underline">(+34) 634 18 55 82</a></li>
            <li>{t('section13_item3')}</li>
          </ul>
        </div>
      </main>
      <Footer showCta={false} />
    </>
  )
}
