'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ease } from '@/lib/animations'
import Image from 'next/image'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { featureFlags } from '@/lib/featureFlags'

interface AboutProps {
  variant?: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I'
}

/* ── Helper to split text into paragraphs by sentences ── */
function splitTextIntoParagraphs(text: string) {
  // Split by periods followed by space and capital letter
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text]

  // First sentence is intro
  const intro = sentences[0]?.trim() || ''

  // Middle sentences become paragraph1
  const midPoint = Math.ceil(sentences.length / 2)
  const paragraph1 = sentences.slice(1, midPoint).join(' ').trim()

  // Remaining sentences become paragraph2
  const paragraph2 = sentences.slice(midPoint).join(' ').trim()

  return { intro, paragraph1, paragraph2 }
}

/* ── Photo Arrays ── */
const photos = {
  variantA: [
    '/imagenes/fotos/equipo-fundadores-sofa-relajados-riendo.jpeg'
  ],
  variantB: [
    '/imagenes/fotos/equipo-fundadores-vista-cenital-oficina.jpeg',
    '/imagenes/fotos/equipo-conversacion-oficina-cercano.jpeg',
    '/imagenes/fotos/detalle-trabajo-macbook-analytics-datos.jpeg'
  ],
  variantC: [
    '/imagenes/fotos/equipo-fundadores-sofa-relajados-riendo.jpeg',
    '/imagenes/fotos/equipo-fundadores-vista-cenital-oficina.jpeg',
    '/imagenes/fotos/equipo-reunion-oficina-sonriendo.jpeg',
    '/imagenes/fotos/equipo-conversacion-oficina-cercano.jpeg',
    '/imagenes/fotos/equipo-fundadores-escalera-riendo.jpeg',
    '/imagenes/fotos/equipo-tres-personas-conversando-oficina.jpeg'
  ],
  variantD: [
    '/imagenes/fotos/equipo-fundadores-sofa-relajados-riendo.jpeg',
    '/imagenes/fotos/equipo-conversacion-oficina-cercano.jpeg',
    '/imagenes/fotos/equipo-reunion-oficina-sonriendo.jpeg',
    '/imagenes/fotos/detalle-trabajo-macbook-analytics-datos.jpeg',
    '/imagenes/fotos/consulta-cliente-escribiendo-notas.jpeg'
  ]
}

/* ── Main Component ── */
export function About({ variant = 'I' }: AboutProps) {
  const t = useTranslations('home.about')

  // Build content from translations
  const fullText = t('text')
  const { intro, paragraph1, paragraph2 } = splitTextIntoParagraphs(fullText)

  const content = {
    eyebrow: t('pretitle'),
    title: t('title'),
    paragraphs: [
      intro,
      paragraph1,
      paragraph2
    ]
  }

  const contentE = {
    eyebrow: t('pretitle'),
    title: t('title'),
    intro,
    paragraph1,
    paragraph2,
    cta: 'Conoce nuestra historia completa' // Keep hardcoded for now as no translation exists
  }

  return (
    <section
      className="relative py-[100px] md:py-[140px]"
      id="sobre-nosotros"
      style={{ background: 'linear-gradient(to bottom, rgba(230,74,88,0.025) 0%, rgba(230,74,88,0.04) 100%)' }}
    >
      {/* Top gradient — eases transition from white Servicios */}
      <div
        className="absolute top-0 left-0 right-0 h-[160px] pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 30%, transparent 100%)' }}
      />

      {/* Bottom gradient — eases transition to white next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[160px] pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.6) 70%, rgba(255,255,255,1) 100%)' }}
      />

      <div className="relative z-10 px-5 lg:px-10">
        {variant === 'A' && <VariantA content={content} photos={photos.variantA} />}
        {variant === 'B' && <VariantB content={content} photos={photos.variantB} />}
        {variant === 'C' && <VariantC content={content} photos={photos.variantC} />}
        {variant === 'D' && <VariantD content={content} photos={photos.variantD} />}
        {variant === 'E' && <VariantE contentE={contentE} />}
        {variant === 'F' && <VariantF contentE={contentE} />}
        {variant === 'G' && <VariantG contentE={contentE} />}
        {variant === 'H' && <VariantH contentE={contentE} />}
        {variant === 'I' && <VariantI contentE={contentE} />}
      </div>
    </section>
  )
}

/* ── Variant A: Single Hero Photo ── */
interface ContentType {
  eyebrow: string
  title: string
  paragraphs: string[]
}

interface VariantProps {
  content: ContentType
  photos: string[]
}

function VariantA({ content, photos }: VariantProps) {
  return (
    <div className="flex flex-col items-center gap-12 lg:gap-16">
      {/* Text centered */}
      <motion.div
        className="text-center max-w-[800px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease }}
      >
        <span className="text-xs font-semibold text-magnetia-red uppercase tracking-[0.12em] block mb-4">
          {content.eyebrow}
        </span>
        <h2 className="font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] tracking-[-0.03em] leading-[1.15] mb-6">
          {content.title}
        </h2>
        <div className="flex flex-col gap-4">
          {content.paragraphs.map((p, i) => (
            <p key={i} className="text-base md:text-lg text-magnetia-black/60 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </motion.div>

      {/* Hero photo */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, delay: 0.1, ease }}
      >
        <div className="team-photo aspect-[4/3] rounded-2xl overflow-hidden relative">
          <Image
            src={photos[0]}
            alt="Equipo Magnetia"
            fill
            className="object-cover"
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </div>
      </motion.div>
    </div>
  )
}

/* ── Variant B: Alternating 2-3 Photos ── */
function VariantB({ content, photos }: VariantProps) {
  return (
    <div className="flex flex-col gap-24 md:gap-32">
      {/* Row 1: Text + Photo */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease }}
      >
        <div>
          <span className="text-xs font-semibold text-magnetia-red uppercase tracking-[0.12em] block mb-4">
            {content.eyebrow}
          </span>
          <h2 className="font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] tracking-[-0.03em] leading-[1.15] mb-6">
            {content.title}
          </h2>
          <p className="text-base md:text-lg text-magnetia-black/60 leading-relaxed">
            {content.paragraphs[0]}
          </p>
        </div>

        <div className="team-photo aspect-[4/3] rounded-2xl overflow-hidden relative">
          <Image
            src={photos[0]}
            alt="Equipo Magnetia"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </motion.div>

      {/* Row 2: Photo + Text (reversed) */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center lg:[direction:rtl]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, delay: 0.1, ease }}
      >
        <div className="team-photo aspect-[4/3] rounded-2xl overflow-hidden relative lg:[direction:ltr]">
          <Image
            src={photos[1]}
            alt="Equipo Magnetia colaborando"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="lg:[direction:ltr]">
          <p className="text-base md:text-lg text-magnetia-black/60 leading-relaxed mb-4">
            {content.paragraphs[1]}
          </p>
          <p className="text-base md:text-lg text-magnetia-black/60 leading-relaxed">
            {content.paragraphs[2]}
          </p>
        </div>
      </motion.div>

      {/* Optional Row 3: Small detail photo */}
      {photos[2] && (
        <motion.div
          className="max-w-[600px] mx-auto w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
        >
          <div className="team-photo aspect-[16/9] rounded-2xl overflow-hidden relative">
            <Image
              src={photos[2]}
              alt="Detalle trabajo Magnetia"
              fill
              className="object-cover"
              sizes="600px"
            />
          </div>
        </motion.div>
      )}
    </div>
  )
}

/* ── Variant C: Grid Mosaic 4-6 Photos ── */
function VariantC({ content, photos }: VariantProps) {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      {/* Text centered */}
      <motion.div
        className="text-center max-w-[800px] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease }}
      >
        <span className="text-xs font-semibold text-magnetia-red uppercase tracking-[0.12em] block mb-4">
          {content.eyebrow}
        </span>
        <h2 className="font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] tracking-[-0.03em] leading-[1.15] mb-6">
          {content.title}
        </h2>
        <div className="flex flex-col gap-4">
          {content.paragraphs.map((p, i) => (
            <p key={i} className="text-base md:text-lg text-magnetia-black/60 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </motion.div>

      {/* Photo grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease }}
          >
            <div className="team-photo aspect-[4/3] rounded-2xl overflow-hidden relative">
              <Image
                src={photo}
                alt={`Equipo Magnetia ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/* ── Variant D: Hero + Small Grid ── */
function VariantD({ content, photos }: VariantProps) {
  const heroPhoto = photos[0]
  const gridPhotos = photos.slice(1, 5)

  return (
    <div className="flex flex-col gap-12 md:gap-16">
      {/* Text */}
      <motion.div
        className="max-w-[800px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease }}
      >
        <span className="text-xs font-semibold text-magnetia-red uppercase tracking-[0.12em] block mb-4">
          {content.eyebrow}
        </span>
        <h2 className="font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] tracking-[-0.03em] leading-[1.15] mb-6">
          {content.title}
        </h2>
        <div className="flex flex-col gap-4">
          {content.paragraphs.map((p, i) => (
            <p key={i} className="text-base md:text-lg text-magnetia-black/60 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </motion.div>

      {/* Hero photo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, delay: 0.1, ease }}
      >
        <div className="team-photo aspect-[16/9] rounded-2xl overflow-hidden relative">
          <Image
            src={heroPhoto}
            alt="Equipo Magnetia"
            fill
            className="object-cover"
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </div>
      </motion.div>

      {/* Small grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gridPhotos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.15 + (i * 0.1), ease }}
          >
            <div className="team-photo aspect-square rounded-2xl overflow-hidden relative">
              <Image
                src={photo}
                alt={`Magnetia ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/* ── Variant E: Compact Hero (Photo + Text Side by Side) ── */
interface VariantEProps {
  contentE: {
    eyebrow: string
    title: string
    intro: string
    paragraph1: string
    paragraph2: string
    cta: string
  }
}

function VariantE({ contentE }: VariantEProps) {
  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease }}
    >
      {/* Left: Photo */}
      <div className="team-photo aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden relative">
        <Image
          src="/imagenes/fotos/equipo-fundadores-sofa-relajados-riendo.jpeg"
          alt="Marcos y Jorge, fundadores de Magnetia"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 45vw"
          priority
        />
      </div>

      {/* Right: Content */}
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-xs font-semibold text-magnetia-red uppercase tracking-[0.12em] block mb-3">
            {contentE.eyebrow}
          </span>
          <h2 className="font-bold text-[clamp(2rem,4vw,3rem)] tracking-[-0.04em] leading-[1.1] mb-2">
            {contentE.title}
          </h2>
          <p className="text-lg md:text-xl font-medium text-magnetia-black/80 leading-snug">
            {contentE.intro}
          </p>
        </div>

        <div className="h-[2px] w-12 bg-magnetia-red/30" />

        <div className="flex flex-col gap-4">
          <p className="text-base md:text-lg text-magnetia-black/60 leading-relaxed">
            {contentE.intro}
          </p>
          <p className="text-base md:text-lg text-magnetia-black/60 leading-relaxed">
            {contentE.paragraph2}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-4">
          <a
            href="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3 bg-magnetia-red text-white font-semibold text-sm rounded-lg hover:bg-magnetia-red/90 transition-colors duration-300"
          >
            {contentE.cta}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Variant F: Grid 2x2 + Text Side-by-Side (Neo-Suizo) ── */
function VariantF({ contentE }: VariantEProps) {
  const photos = [
    '/imagenes/fotos/equipo-fundadores-sofa-relajados-riendo.jpeg',
    '/imagenes/fotos/equipo-fundadores-vista-cenital-oficina.jpeg',
    '/imagenes/fotos/equipo-conversacion-oficina-cercano.jpeg',
    '/imagenes/fotos/equipo-reunion-oficina-sonriendo.jpeg'
  ]

  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-12 lg:gap-20 items-start"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease }}
    >
      {/* Left: Text */}
      <div className="flex flex-col gap-6">
        <span className="text-xs font-semibold text-magnetia-red uppercase tracking-[0.12em] block mb-3">
          {contentE.eyebrow}
        </span>
        <h2 className="font-bold text-[clamp(2rem,4vw,3rem)] tracking-[-0.04em] leading-[1.1] mb-2">
          {contentE.title}
        </h2>
        <p className="text-lg md:text-xl font-medium text-magnetia-black/80 leading-snug mb-4">
          {contentE.intro}
        </p>

        <div className="h-[2px] w-12 bg-magnetia-red/30 mb-2" />

        <div className="flex flex-col gap-4">
          <p className="text-base md:text-lg text-magnetia-black/60 leading-relaxed">
            {contentE.intro}
          </p>
          <p className="text-base md:text-lg text-magnetia-black/60 leading-relaxed">
            {contentE.paragraph2}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-4">
          <a
            href="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3 bg-magnetia-red text-white font-semibold text-sm rounded-lg hover:bg-magnetia-red/90 transition-colors duration-300"
          >
            {contentE.cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Right: 2x2 Grid Photos */}
      <div className="grid grid-cols-2 gap-4 md:gap-5">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 + (i * 0.08), ease }}
          >
            <div className="team-photo aspect-[4/3] rounded-2xl overflow-hidden relative">
              <Image
                src={photo}
                alt={`Equipo Magnetia ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 30vw"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

/* ── Variant G: Grid 3x2 + Text Side-by-Side (Neo-Suizo) ── */
function VariantG({ contentE }: VariantEProps) {
  const photos = [
    '/imagenes/fotos/equipo-fundadores-sofa-relajados-riendo.jpeg',
    '/imagenes/fotos/equipo-fundadores-vista-cenital-oficina.jpeg',
    '/imagenes/fotos/equipo-conversacion-oficina-cercano.jpeg',
    '/imagenes/fotos/equipo-reunion-oficina-sonriendo.jpeg',
    '/imagenes/fotos/equipo-fundadores-escalera-riendo.jpeg',
    '/imagenes/fotos/equipo-tres-personas-conversando-oficina.jpeg'
  ]

  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease }}
    >
      {/* Left: Text */}
      <div className="flex flex-col gap-6">
        <span className="text-xs font-semibold text-magnetia-red uppercase tracking-[0.12em] block mb-3">
          {contentE.eyebrow}
        </span>
        <h2 className="font-bold text-[clamp(2rem,4vw,3rem)] tracking-[-0.04em] leading-[1.1] mb-2">
          {contentE.title}
        </h2>
        <p className="text-lg md:text-xl font-medium text-magnetia-black/80 leading-snug mb-4">
          {contentE.intro}
        </p>

        <div className="h-[2px] w-12 bg-magnetia-red/30 mb-2" />

        <div className="flex flex-col gap-4">
          <p className="text-base md:text-lg text-magnetia-black/60 leading-relaxed">
            {contentE.intro}
          </p>
          <p className="text-base md:text-lg text-magnetia-black/60 leading-relaxed">
            {contentE.paragraph2}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-4">
          <a
            href="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3 bg-magnetia-red text-white font-semibold text-sm rounded-lg hover:bg-magnetia-red/90 transition-colors duration-300"
          >
            {contentE.cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Right: 3x2 Grid Photos */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 + (i * 0.08), ease }}
          >
            <div className="team-photo aspect-[4/3] rounded-2xl overflow-hidden relative">
              <Image
                src={photo}
                alt={`Equipo Magnetia ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

/* ── Variant H: Centered Text + Large Grid (Neo-Suizo) ── */
function VariantH({ contentE }: VariantEProps) {
  const photos = [
    '/imagenes/fotos/equipo-fundadores-sofa-relajados-riendo.jpeg',
    '/imagenes/fotos/equipo-fundadores-vista-cenital-oficina.jpeg',
    '/imagenes/fotos/equipo-conversacion-oficina-cercano.jpeg',
    '/imagenes/fotos/equipo-reunion-oficina-sonriendo.jpeg',
    '/imagenes/fotos/equipo-fundadores-escalera-riendo.jpeg',
    '/imagenes/fotos/equipo-tres-personas-conversando-oficina.jpeg'
  ]

  return (
    <div className="flex flex-col gap-12 md:gap-16">
      {/* Top: Centered Text */}
      <motion.div
        className="text-center max-w-[800px] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease }}
      >
        <span className="text-xs font-semibold text-magnetia-red uppercase tracking-[0.12em] block mb-3">
          {contentE.eyebrow}
        </span>
        <h2 className="font-bold text-[clamp(2rem,4vw,3rem)] tracking-[-0.04em] leading-[1.1] mb-2">
          {contentE.title}
        </h2>
        <p className="text-lg md:text-xl font-medium text-magnetia-black/80 leading-snug mb-4">
          {contentE.intro}
        </p>

        <div className="h-[2px] w-12 bg-magnetia-red/30 mx-auto mb-4" />

        <div className="flex flex-col gap-4">
          <p className="text-base md:text-lg text-magnetia-black/60 leading-relaxed">
            {contentE.intro}
          </p>
          <p className="text-base md:text-lg text-magnetia-black/60 leading-relaxed">
            {contentE.paragraph2}
          </p>
        </div>

        {/* CTA Centered */}
        <div className="mt-6 flex justify-center">
          <a
            href="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3 bg-magnetia-red text-white font-semibold text-sm rounded-lg hover:bg-magnetia-red/90 transition-colors duration-300"
          >
            {contentE.cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </motion.div>

      {/* Bottom: Large Grid 3x2 */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 + (i * 0.08), ease }}
          >
            <div className="team-photo aspect-[4/3] rounded-2xl overflow-hidden relative">
              <Image
                src={photo}
                alt={`Equipo Magnetia ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/* ── Variant I: Editorial Magazine Style (2-Column Text + Mixed Photo Gallery) ── */
function VariantI({ contentE }: VariantEProps) {
  const photos = [
    '/imagenes/fotos/equipo-fundadores-oficina-sonriendo.jpeg',
    '/imagenes/fotos/reunion-cliente-laptop-equipo-riendo.jpeg',
    '/imagenes/fotos/equipo-fundadores-vista-cenital-oficina.jpeg'
  ]

  return (
    <div className="flex flex-col gap-12 lg:gap-16">
      {/* Top: Editorial 2-Column Text Layout */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease }}
      >
        {/* Left Column */}
        <div className="flex flex-col">
          {/* Header Block */}
          <div>
            <span className="text-[11px] md:text-xs font-semibold text-magnetia-red uppercase tracking-[0.12em] block mb-4 md:mb-5">
              {contentE.eyebrow}
            </span>
            <h2 className="font-bold text-[2rem] md:text-[clamp(2.5rem,5vw,4rem)] tracking-[-0.04em] leading-[1.1] md:leading-[1.05] mb-4">
              {contentE.title}
            </h2>
            <p className="text-base md:text-xl lg:text-[1.375rem] font-medium text-magnetia-black/80 leading-[1.5] md:leading-[1.35]">
              {contentE.intro}
            </p>

            <div className="h-[2px] w-12 bg-magnetia-red/30 my-5 md:my-6" />
          </div>

          {/* Paragraph - baseline aligned */}
          <p className="text-sm md:text-base lg:text-lg text-magnetia-black/60 leading-[1.7] md:leading-[1.65]">
            {contentE.paragraph1}
          </p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-end">
          {/* Paragraph - baseline aligned with left paragraph */}
          <p className="text-sm md:text-base lg:text-lg text-magnetia-black/60 leading-[1.7] md:leading-[1.65]">
            {contentE.paragraph2}
          </p>
        </div>
      </motion.div>

      {/* Bottom: Single Row Photo Gallery - Editorial Style */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            className={i === 2 ? 'hidden lg:block' : ''}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 + (i * 0.08), ease }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={photo}
                alt={`Equipo Magnetia ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
