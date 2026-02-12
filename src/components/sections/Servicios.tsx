'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { ease } from '@/lib/animations'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { TOOLS_LIST } from '@/lib/constants'
import { featureFlags } from '@/lib/featureFlags'

export function Servicios() {
  const t = useTranslations('home.services')

  // Build services array from translations
  const SERVICIOS_LIST = [
    {
      clientType: t('service1_tag'),
      serviceName: t('service1_title'),
      description: t('service1_desc'),
      price: t('service1_price'),
      image: '/imagenes/fotos-servicios/servicio-01-empresas.jpg',
    },
    {
      clientType: t('service2_tag'),
      serviceName: t('service2_title'),
      description: t('service2_desc'),
      price: t('service2_price'),
      image: '/imagenes/fotos-servicios/servicio-02-particulares.jpg',
    },
    {
      clientType: t('service3_tag'),
      serviceName: t('service3_title'),
      description: t('service3_desc'),
      price: t('service3_price'),
      image: '/imagenes/fotos-servicios/servicio-03-digital.jpg',
    },
    {
      clientType: t('service4_tag'),
      serviceName: t('service4_title'),
      description: t('service4_desc'),
      price: t('service4_price'),
      image: '/imagenes/fotos-servicios/servicios-04-procesos-v2.jpg',
    },
    {
      clientType: t('service5_tag'),
      serviceName: t('service5_title'),
      description: t('service5_desc'),
      price: t('service5_price'),
      image: '/imagenes/fotos-servicios/servicio-05-llaveenmani-version-2.jpg',
    },
  ]

  return (
    <section className="relative bg-white" id="servicios">
      {/* ── Top gradient — inverse, eases transition from dark Método ── */}
      <div
        className="absolute top-0 left-0 right-0 h-[160px] pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(26, 26, 26, 0.08) 0%, rgba(26, 26, 26, 0.02) 40%, transparent 100%)' }}
      />

      {/* ── Header — sticky on desktop while scrolling services ── */}
      <div className="md:sticky top-0 z-20 bg-white/95 backdrop-blur-sm px-5 lg:px-10 pt-[100px] md:pt-[130px] pb-0">
        {/* Mobile: stacked */}
        <motion.div
          className="md:hidden pb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          <span className="text-[11px] font-semibold text-magnetia-red uppercase tracking-[0.12em] block mb-4">
            {t('pretitle')}
          </span>
          <h2 className="font-bold text-[2rem] tracking-[-0.04em] leading-[1.1] mb-4">
            {t('title')}
          </h2>
          <p className="text-sm text-magnetia-black/50 leading-relaxed mb-6">
            {t('subtitle')}
          </p>
          {featureFlags.ctas.serviciosHeaderCta && (
            <MagneticButton href="#contacto" size="small" dark>
              <span>Ver todos los servicios</span>
            </MagneticButton>
          )}
        </motion.div>

        {/* Desktop: eyebrow → title → description → CTA (last line) */}
        <motion.div
          className="hidden md:block pb-6 md:pb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          <span className="text-xs font-semibold text-magnetia-red uppercase tracking-[0.12em] block mb-5">
            {t('pretitle')}
          </span>
          <h2 className="font-bold text-[clamp(2.5rem,5vw,4rem)] tracking-[-0.04em] leading-[1.05]">
            {t('title')}
          </h2>
          <div className="flex items-center justify-between gap-8 mt-4">
            <p className="text-base text-magnetia-black/60 leading-[1.6]">
              {t('subtitle')}
            </p>
            {featureFlags.ctas.serviciosHeaderCta && (
              <MagneticButton href="#contacto" size="small" dark className="shrink-0">
                <span>Ver todos los servicios</span>
              </MagneticButton>
            )}
          </div>
        </motion.div>

        {/* ── Coral divider — inside sticky so it stays visible ── */}
        <div className="h-[2px]" style={{ background: 'linear-gradient(to right, rgba(230,74,88,0.3), rgba(230,74,88,0.08))' }} />
      </div>

      {/* ── Service rows ── */}
      {SERVICIOS_LIST.map((service, i) => {
        const num = String(i + 1).padStart(2, '0')
        const hasImage = !!service.image
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease }}
          >
            <div className="border-t border-gray-200" />

            {/* ── Mobile ── */}
            <div className="md:hidden px-5 py-8">
              {/* Image with overlay (if available) */}
              {hasImage && (
                <div className="relative mb-5 overflow-hidden shadow-[0_4px_20px_rgba(230,74,88,0.08)]">
                  <div className="relative w-full h-[200px]">
                    <Image
                      src={service.image!}
                      alt={`Servicio de ${service.serviceName} para ${service.clientType} - Magnetia`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                    />
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Title over image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="block text-[13px] font-bold text-white uppercase tracking-[0.08em] mb-1.5">
                      {service.clientType}
                    </span>
                    <h3 className="text-lg font-semibold leading-tight tracking-tight text-white">
                      {service.serviceName}
                    </h3>
                  </div>
                </div>
              )}

              {/* If no image, show title normally */}
              {!hasImage && (
                <div className="mb-4">
                  <span className="text-[13px] font-bold text-magnetia-black uppercase tracking-[0.04em] block mb-2">
                    {service.clientType}
                  </span>
                  <h3 className="text-lg font-semibold leading-snug tracking-tight text-magnetia-black">
                    {service.serviceName}
                  </h3>
                </div>
              )}

              {/* Description */}
              <p className="text-base text-gray-500 leading-[1.65] mb-4">
                {service.description}
              </p>

              {/* Price */}
              <p className="text-xs text-gray-400 font-medium mb-5">
                {!service.price.toLowerCase().includes('medida') && 'Desde '}
                <span className="text-magnetia-black font-bold text-sm">{service.price}</span>
              </p>

              {/* CTA button — black */}
              {featureFlags.ctas.serviciosCardCta && (
                <MagneticButton href="#" dark size="small">
                  <span>Quiero saber más</span>
                </MagneticButton>
              )}
            </div>

            {/* ── Desktop ── */}
            <div className="hidden md:block group relative">
              {/* Accent bar — coral, appears on hover (Neo-Swiss element) */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-magnetia-red scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />

              <div className="flex items-stretch transition-all duration-300 hover:bg-[rgba(230,74,88,0.02)]">
                {/* Image — visual anchor (only if available) */}
                {hasImage && (
                  <div className="shrink-0 pl-6 lg:pl-12 py-8 lg:py-10 flex items-center">
                    <div className="w-[200px] lg:w-[240px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-shadow duration-500 group-hover:shadow-[0_8px_30px_rgba(230,74,88,0.12)]">
                      <div className="relative w-full h-[140px] lg:h-[160px]">
                        <Image
                          src={service.image!}
                          alt={`Servicio de ${service.serviceName} para ${service.clientType} - Magnetia`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="240px"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Identity block */}
                <div className="flex-1 min-w-0 px-6 lg:px-8 py-8 lg:py-10 flex flex-col justify-center">
                  <h3 className="font-bold text-[clamp(1.2rem,2.2vw,1.5rem)] leading-snug tracking-[-0.01em] text-magnetia-black mb-1.5">
                    {service.clientType}
                  </h3>
                  <p className="text-base lg:text-lg font-semibold text-magnetia-black/80 leading-snug">
                    {service.serviceName}
                  </p>
                  <div className="mt-3 text-xs text-gray-400 font-medium">
                    {!service.price.toLowerCase().includes('medida') && 'Desde '}
                    <span className="text-magnetia-black font-bold text-sm">{service.price}</span>
                  </div>
                </div>

                {/* Description + CTA */}
                <div className="w-[38%] lg:w-[40%] shrink-0 px-5 lg:px-8 py-8 lg:py-10 flex flex-col justify-center">
                  <p className="text-base text-gray-500 leading-[1.65] mb-5">
                    {service.description}
                  </p>
                  {featureFlags.ctas.serviciosCardCta && (
                    <div>
                      <MagneticButton href="#" dark size="small">
                        <span>Quiero saber más</span>
                      </MagneticButton>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
      {featureFlags.sections.serviciosTools && (
        <>
          {/* ── Bottom coral divider — mirrors the top one ── */}
          <div className="px-5 lg:px-10">
            <div className="h-[2px]" style={{ background: 'linear-gradient(to right, rgba(230,74,88,0.3), rgba(230,74,88,0.08))' }} />
          </div>

          {/* ── Herramientas marquee — con degradado coral ── */}
          <div className="relative">
            {/* Gradient that bleeds up into last service row */}
            <div
              className="absolute top-0 left-0 right-0 h-[120px] -translate-y-full pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(230,74,88,0.03) 100%)' }}
            />
            <div
              className="px-5 lg:px-10 py-[80px] md:py-[120px] overflow-hidden"
              style={{ background: 'linear-gradient(to bottom, rgba(230,74,88,0.03) 0%, rgba(230,74,88,0.07) 50%, rgba(230,74,88,0.04) 100%)' }}
            >
              <motion.div
                className="text-center mb-12 md:mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
              >
                <span className="text-sm font-semibold text-magnetia-red uppercase tracking-[0.12em] block mb-4">
                  Nuestra caja de herramientas
                </span>
                <h3 className="font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] tracking-[-0.03em] leading-[1.15] mb-4">
                  Sabemos usar todas
                </h3>
                <p className="text-base text-magnetia-black/50 leading-[1.6] max-w-2xl mx-auto">
                  Pero solo utilizamos las que realmente necesita tu proyecto.<br />
                  Nada de sobrecostes. Nada de herramientas porque sí.
                </p>
              </motion.div>

              <div className="relative">
                {/* Edge fades — adaptados al fondo coral */}
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
                  style={{ background: 'linear-gradient(to right, rgba(230,74,88,0.06) 0%, transparent 100%)' }} />
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
                  style={{ background: 'linear-gradient(to left, rgba(230,74,88,0.06) 0%, transparent 100%)' }} />

                <motion.div
                  className="flex gap-10 md:gap-14 w-max"
                  animate={{ x: ['0%', '-50%'] }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: 'loop',
                      duration: 30,
                      ease: 'linear',
                    },
                  }}
                >
                  {[...TOOLS_LIST, ...TOOLS_LIST].map((tool, i) => (
                    <div key={i} className="flex items-center gap-3 shrink-0">
                      <div className="relative h-7 w-auto">
                        <Image
                          src={tool.logo}
                          alt={tool.name}
                          width={100}
                          height={28}
                          className="h-7 w-auto grayscale opacity-40"
                          loading="lazy"
                          unoptimized={true}
                        />
                      </div>
                      <span className="text-base font-medium text-magnetia-black/40 whitespace-nowrap">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  )
}
