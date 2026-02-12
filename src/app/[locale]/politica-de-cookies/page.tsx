import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'cookiePolicy' })

  const baseUrl = 'https://www.magnetia.io'
  const path = locale === 'es' ? '/politica-de-cookies' : '/en/cookie-policy'

  return {
    title: `${t('title')} — Magnetia`,
    description: locale === 'es'
      ? 'Información sobre el uso de cookies en el sitio web de Magnetia, S.L.L.'
      : 'Information about cookie usage on the Magnetia, S.L.L. website.',
    robots: {
      index: true,
      follow: false,
    },
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: {
        'es': `${baseUrl}/politica-de-cookies`,
        'en': `${baseUrl}/en/cookie-policy`,
        'x-default': `${baseUrl}/politica-de-cookies`,
      },
    },
  }
}

export default async function PoliticaDeCookies({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'cookiePolicy' })

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

          {/* Qué son las cookies */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            {t('section1_title')}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section1_p1')}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section1_p2')}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section1_p3')}
          </p>

          {/* Tipos de cookies */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            {t('section2_title')}
          </h2>

          <h3 className="font-semibold text-xl mt-8 mb-3 text-magnetia-black">
            {t('section2_subtitle1')}
          </h3>
          <ul className="text-gray-600 mb-4 space-y-2 list-disc pl-6">
            <li>{t('section2_s1_item1')}</li>
            <li>{t('section2_s1_item2')}</li>
          </ul>

          <h3 className="font-semibold text-xl mt-8 mb-3 text-magnetia-black">
            {t('section2_subtitle2')}
          </h3>
          <ul className="text-gray-600 mb-4 space-y-2 list-disc pl-6">
            <li>{t('section2_s2_item1')}</li>
            <li>{t('section2_s2_item2')}</li>
          </ul>

          <h3 className="font-semibold text-xl mt-8 mb-3 text-magnetia-black">
            {t('section2_subtitle3')}
          </h3>
          <ul className="text-gray-600 mb-4 space-y-2 list-disc pl-6">
            <li>{t('section2_s3_item1')}</li>
            <li>{t('section2_s3_item2')}</li>
            <li>{t('section2_s3_item3')}</li>
            <li>{t('section2_s3_item4')}</li>
          </ul>

          {/* Cookies utilizadas */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            {t('section3_title')}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section3_intro')}
          </p>

          <h3 className="font-semibold text-xl mt-8 mb-3 text-magnetia-black">
            {t('section3_google_analytics_title')}
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section3_google_analytics_p1')}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section3_google_analytics_p2')}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section3_google_analytics_p3')}
          </p>
          <ul className="text-gray-600 mb-4 space-y-1">
            <li><strong>{t('section3_google_analytics_cookie')}</strong> _ga, _gid, _gat</li>
            <li><strong>{t('section3_google_analytics_type')}</strong> {t('section3_google_analytics_type_value')}</li>
            <li><strong>{t('section3_google_analytics_duration')}</strong> {t('section3_google_analytics_duration_value')}</li>
            <li><strong>{t('section3_google_analytics_purpose')}</strong> {t('section3_google_analytics_purpose_value')}</li>
          </ul>

          <h3 className="font-semibold text-xl mt-8 mb-3 text-magnetia-black">
            {t('section3_google_adsense_title')}
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section3_google_adsense_p1')}
          </p>
          <ul className="text-gray-600 mb-4 space-y-1">
            <li><strong>{t('section3_google_adsense_cookie')}</strong> IDE, DSID, FLC</li>
            <li><strong>{t('section3_google_adsense_type')}</strong> {t('section3_google_adsense_type_value')}</li>
            <li><strong>{t('section3_google_adsense_duration')}</strong> {t('section3_google_adsense_duration_value')}</li>
            <li><strong>{t('section3_google_adsense_purpose')}</strong> {t('section3_google_adsense_purpose_value')}</li>
          </ul>

          <h3 className="font-semibold text-xl mt-8 mb-3 text-magnetia-black">
            {t('section3_doubleclick_title')}
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section3_doubleclick_p1')}
          </p>
          <ul className="text-gray-600 mb-4 space-y-1">
            <li><strong>{t('section3_doubleclick_cookie')}</strong> id, test_cookie</li>
            <li><strong>{t('section3_doubleclick_type')}</strong> {t('section3_doubleclick_type_value')}</li>
            <li><strong>{t('section3_doubleclick_duration')}</strong> {t('section3_doubleclick_duration_value')}</li>
            <li><strong>{t('section3_doubleclick_purpose')}</strong> {t('section3_doubleclick_purpose_value')}</li>
          </ul>

          {/* Control de cookies */}
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

          <h3 className="font-semibold text-xl mt-8 mb-3 text-magnetia-black">
            {t('section4_chrome_title')}
          </h3>
          <ol className="text-gray-600 mb-4 space-y-2 list-decimal pl-6">
            <li>{t('section4_chrome_step1')}</li>
            <li>{t('section4_chrome_step2')}</li>
            <li>{t('section4_chrome_step3')}</li>
            <li>{t('section4_chrome_step4')}</li>
            <li>{t('section4_chrome_step5')}</li>
          </ol>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section4_chrome_more')} <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-magnetia-red hover:underline">https://support.google.com/chrome/answer/95647</a>
          </p>

          <h3 className="font-semibold text-xl mt-8 mb-3 text-magnetia-black">
            {t('section4_firefox_title')}
          </h3>
          <ol className="text-gray-600 mb-4 space-y-2 list-decimal pl-6">
            <li>{t('section4_firefox_step1')}</li>
            <li>{t('section4_firefox_step2')}</li>
            <li>{t('section4_firefox_step3')}</li>
            <li>{t('section4_firefox_step4')}</li>
          </ol>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section4_firefox_more')} <a href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-" target="_blank" rel="noopener noreferrer" className="text-magnetia-red hover:underline">https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-</a>
          </p>

          <h3 className="font-semibold text-xl mt-8 mb-3 text-magnetia-black">
            {t('section4_safari_title')}
          </h3>
          <ol className="text-gray-600 mb-4 space-y-2 list-decimal pl-6">
            <li>{t('section4_safari_step1')}</li>
            <li>{t('section4_safari_step2')}</li>
            <li>{t('section4_safari_step3')}</li>
            <li>{t('section4_safari_step4')}</li>
          </ol>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section4_safari_more')} <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-magnetia-red hover:underline">https://support.apple.com/es-es/guide/safari/sfri11471/mac</a>
          </p>

          <h3 className="font-semibold text-xl mt-8 mb-3 text-magnetia-black">
            {t('section4_edge_title')}
          </h3>
          <ol className="text-gray-600 mb-4 space-y-2 list-decimal pl-6">
            <li>{t('section4_edge_step1')}</li>
            <li>{t('section4_edge_step2')}</li>
            <li>{t('section4_edge_step3')}</li>
            <li>{t('section4_edge_step4')}</li>
            <li>{t('section4_edge_step5')}</li>
          </ol>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section4_edge_more')} <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-magnetia-red hover:underline">https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge</a>
          </p>

          <h3 className="font-semibold text-xl mt-8 mb-3 text-magnetia-black">
            {t('section4_opera_title')}
          </h3>
          <ol className="text-gray-600 mb-4 space-y-2 list-decimal pl-6">
            <li>{t('section4_opera_step1')}</li>
            <li>{t('section4_opera_step2')}</li>
            <li>{t('section4_opera_step3')}</li>
            <li>{t('section4_opera_step4')}</li>
          </ol>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section4_opera_more')} <a href="https://help.opera.com/en/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer" className="text-magnetia-red hover:underline">https://help.opera.com/en/latest/web-preferences/#cookies</a>
          </p>

          {/* Google Analytics Opt-out */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            {t('section5_title')}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section5_p1')}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-magnetia-red hover:underline">
              https://tools.google.com/dlpage/gaoptout
            </a>
          </p>

          {/* Consecuencias */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            {t('section6_title')}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section6_p1')}
          </p>

          {/* Actualizaciones */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            {t('section7_title')}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section7_p1')}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section7_p2')}
          </p>

          {/* Contacto */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            {t('section8_title')}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t('section8_intro')}
          </p>
          <ul className="text-gray-600 mb-4 space-y-2">
            <li><strong>{t('section8_item1')}</strong> <a href="mailto:hola@magnetia.io" className="text-magnetia-red hover:underline">hola@magnetia.io</a></li>
            <li><strong>{t('section8_item2')}</strong> <a href="tel:+34634185582" className="text-magnetia-red hover:underline">(+34) 634 18 55 82</a></li>
            <li>{t('section8_item3')}</li>
          </ul>
        </div>
      </main>
      <Footer showCta={false} />
    </>
  )
}
