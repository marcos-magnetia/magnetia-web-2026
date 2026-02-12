'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ease } from '@/lib/animations'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { Link } from '@/i18n/navigation'
import { featureFlags } from '@/lib/featureFlags'

interface FooterProps {
  showCta?: boolean
}

export function Footer({ showCta = true }: FooterProps) {
  const t = useTranslations('home.finalCta')
  const tFooter = useTranslations('footer')
  
  return (
    <footer id="contacto">
      {/* CTA Section — only on home */}
      {showCta && (
        <section
          className="py-[120px] md:py-[160px] px-5 lg:px-10"
          style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(230, 74, 88, 0.08) 100%)',
          }}
        >
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              className="flex flex-col items-center text-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              <h2 className="font-bold text-[1.875rem] md:text-[clamp(2.25rem,5vw,4rem)] tracking-[-0.04em] leading-[1.15] md:leading-[1.1] max-w-4xl px-4">
                {t('title')}
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-magnetia-black/60 max-w-2xl leading-[1.65] md:leading-[1.6] px-4">
                {t('text')}
              </p>
              <div className="mt-4">
                <MagneticButton href="/contacto" size="large">
                  {t('button')}
                </MagneticButton>
              </div>
              <p className="text-xs md:text-sm text-gray-400">{t('sub')}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Footer links — dark */}
      <div className="bg-magnetia-black text-white py-16 md:py-20 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16 text-center">
            {/* Brand */}
            <div className="flex flex-col items-center">
              <Image
                src="/imagenes/logos/magnetia-logo-horizontal-blanco-transparente.png"
                alt="Magnetia - Agencia Digital de Generación de Clientes B2B"
                width={200}
                height={46}
                className="h-10 w-auto opacity-90 mb-4"
              />
              <p className="text-sm text-white/50">{tFooter('tagline')}</p>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-2.5 items-center">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-1">{tFooter('contact_title')}</h4>
              <a href="mailto:hola@magnetia.io" className="text-sm text-white/70 hover:text-white transition-colors">hola@magnetia.io</a>
              <a href="tel:+34634185582" className="text-sm text-white/70 hover:text-white transition-colors">+34 634 185 582</a>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-2.5 items-center">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-1">{tFooter('legal_title')}</h4>
              <Link href="/aviso-legal" className="text-sm text-white/70 hover:text-white transition-colors">{tFooter('legal_notice')}</Link>
              <Link href="/politica-de-privacidad" className="text-sm text-white/70 hover:text-white transition-colors">{tFooter('privacy')}</Link>
              <Link href="/politica-de-cookies" className="text-sm text-white/70 hover:text-white transition-colors">{tFooter('cookies')}</Link>
            </div>
          </div>

          <div className="border-t border-white/[0.08] pt-6 text-center">
            <p className="text-xs text-white/35">{tFooter('copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
