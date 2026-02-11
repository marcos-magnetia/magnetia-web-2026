'use client'

import Script from 'next/script'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function Contacto() {
  return (
    <>
      <Header />

      {/* Hero Section - Calendly */}
      <section className="pt-32 pb-20 px-5 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold text-magnetia-red uppercase tracking-[0.12em] block mb-4">
                Sesión Estratégica
              </span>

              <h1 className="font-bold text-4xl md:text-5xl tracking-tight mb-6">
                Hablemos de tu negocio
              </h1>

              <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
                <p>
                  Agenda una <strong>Sesión Estratégica Gratuita</strong> con nosotros.
                </p>
                <p>
                  En esta llamada, charlaremos sobre tu negocio, conoceremos tus objetivos y tus desafíos actuales. Juntos, identificaremos las mejores oportunidades de marketing digital para tu negocio y esbozaremos un embudo de ventas a medida.
                </p>
                <p>
                  Elige el día y la hora que más te convengan.
                </p>
                <p>
                  Da el primer paso para mejorar tus resultados, impulsar tus ventas y ganar más clientes.
                </p>
                <p className="font-semibold text-magnetia-black">
                  Queremos ayudarte a llevar tu negocio a lo más alto.
                </p>
              </div>
            </div>

            {/* Right Column - Calendly Widget */}
            <div className="relative">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/magnetia/llamada-de-15-minutos-con-magnetia?hide_event_type_details=1&hide_gdpr_banner=1"
                style={{ minWidth: '320px', height: '700px' }}
              />
              <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="afterInteractive"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Direct Section */}
      <section className="py-20 px-5 lg:px-10 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              <span className="text-xs font-semibold text-magnetia-red uppercase tracking-[0.12em] block mb-4">
                Contacto
              </span>

              <h2 className="font-bold text-3xl md:text-4xl tracking-tight mb-6">
                Contacta directamente con nosotros
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Quizás prefieres un contacto más directo, tienes algunas preguntas específicas o simplemente te gustaría hablar de cualquier cosa. ¡No hay problema!<br /><br />
                Estamos aquí para ti, puedes ponerte en contacto con nosotros directamente a través de los siguientes medios:
              </p>

              {/* Contact Links */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a
                  href="mailto:hola@magnetia.io"
                  className="flex items-center gap-4 p-6 bg-white border border-gray-200 hover:border-magnetia-red transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-magnetia-red/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-magnetia-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-medium text-magnetia-black">hola@magnetia.io</span>
                </a>

                <a
                  href="tel:+34634185582"
                  className="flex items-center gap-4 p-6 bg-white border border-gray-200 hover:border-magnetia-red transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-magnetia-red/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-magnetia-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-medium text-magnetia-black">(+34) 634 18 55 82</span>
                </a>

                <a
                  href="https://wa.me/34634185582"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-white border border-gray-200 hover:border-magnetia-red transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-magnetia-red/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-magnetia-red" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <span className="font-medium text-magnetia-black">WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column - Team Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <img
                  src="/imagenes/fotos/profesional-videollamada-sonriendo.jpeg"
                  alt="Profesional en videollamada"
                  className="w-full h-[300px] object-cover shadow-lg"
                />
              </div>
              <div className="col-span-2">
                <img
                  src="/imagenes/fotos/equipo-reunion-tomando-notas.jpeg"
                  alt="Equipo en reunión tomando notas"
                  className="w-full h-[300px] object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer showCta={false} />
    </>
  )
}
