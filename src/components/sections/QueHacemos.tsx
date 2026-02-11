'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { ease } from '@/lib/animations'
import { QUE_HACEMOS_BLOCKS } from '@/lib/constants'

/* ── MOCKUP 1: Búsqueda de empresas ── */
function BusinessSearchMockup() {
  const companies = [
    { name: 'Fisioterapia San Blas', location: 'Madrid', employees: 12, contact: 'Juan Martínez - Director', highlighted: true },
    { name: 'Centro Rehab Norte', location: 'Madrid', employees: 8, contact: 'Ana Sánchez - CEO', highlighted: false },
    { name: 'Clínica Movimiento', location: 'Madrid', employees: 15, contact: 'Carlos López - Gerente', highlighted: false },
  ]

  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 p-6">
      <div className="mb-6 px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-sm text-gray-600">Clínicas fisioterapia Madrid &gt;5 empleados</p>
      </div>
      <div className="space-y-3 mb-4">
        {companies.map((company, i) => (
          <div
            key={i}
            className={`p-4 rounded-lg border-2 transition-colors ${
              company.highlighted ? 'border-[#E64A58] bg-[#E64A58] bg-opacity-[0.03]' : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className={`w-5 h-5 mt-0.5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                company.highlighted ? 'border-[#E64A58] bg-[#E64A58]' : 'border-gray-300'
              }`}>
                {company.highlighted && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-1">{company.name}</h4>
                <p className="text-sm text-gray-600 mb-1">{company.location} · {company.employees} empleados</p>
                <p className="text-sm font-medium text-gray-700">{company.contact}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-right">
        <p className="text-sm font-medium text-[#E64A58]">47 resultados encontrados</p>
      </div>
    </div>
  )
}

/* ── MOCKUP 2: Perfiles de decisores ── */
function DecisionMakersMockup() {
  const profiles = [
    { initials: 'JM', name: 'Juan Martínez', position: 'Director Comercial', company: 'Fisioterapia San Blas', experience: '8 años experiencia' },
    { initials: 'AS', name: 'Ana Sánchez', position: 'CEO', company: 'Centro Rehab Norte', experience: '12 años experiencia' },
    { initials: 'CL', name: 'Carlos López', position: 'Gerente', company: 'Clínica Movimiento', experience: '15 años experiencia' },
  ]

  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-2xl font-bold mb-6">
        Decisores identificados: <span className="text-[#E64A58]">156</span>
      </h3>
      <div className="space-y-4 mb-4">
        {profiles.map((profile, i) => (
          <div
            key={i}
            className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">{profile.initials}</span>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-base mb-1">{profile.name}</h4>
              <p className="text-sm text-gray-800 mb-0.5">{profile.position}</p>
              <p className="text-sm text-gray-600 mb-0.5">{profile.company}</p>
              <p className="text-xs text-gray-500">{profile.experience}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-right">
        <p className="text-sm font-medium text-[#E64A58]">23 coinciden con criterios ideales</p>
      </div>
    </div>
  )
}

/* ── MOCKUP 3: Comparación emails ── */
function EmailComparisonMockup() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
      {/* Generic */}
      <div className="bg-red-50 bg-opacity-30 rounded-xl border-2 border-red-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">&#10060;</span>
          <h4 className="font-bold text-sm uppercase tracking-wide text-red-700">Genérico</h4>
        </div>
        <div className="space-y-3">
          <div>
            <p className="text-xs text-gray-600 mb-1">Asunto:</p>
            <p className="font-bold text-sm">Propuesta de colaboración</p>
          </div>
          <div className="pt-3 border-t border-red-200">
            <pre className="text-sm leading-relaxed whitespace-pre-wrap font-sans text-gray-700">{`Hola,

Somos Magnetia, agencia de
marketing digital especializada...

¿Te interesa una llamada?

Saludos,
Equipo Magnetia`}</pre>
          </div>
        </div>
      </div>

      {/* Personalized */}
      <div className="bg-green-50 bg-opacity-30 rounded-xl border-2 border-green-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">&#9989;</span>
          <h4 className="font-bold text-sm uppercase tracking-wide text-green-700">Personalizado</h4>
        </div>
        <div className="space-y-3">
          <div>
            <p className="text-xs text-gray-600 mb-1">Asunto:</p>
            <p className="font-bold text-sm">Re: Expansión San Blas</p>
          </div>
          <div className="pt-3 border-t border-green-200">
            <pre className="text-sm leading-relaxed whitespace-pre-wrap font-sans text-gray-700">{`Hola Juan,

Vi que Fisioterapia San Blas
acaba de abrir nueva sala.

Ayudamos a clínicas a llenar
agenda en nuevas ubicaciones.
Últimos 3 meses: +40 pacientes/mes

¿10 min esta semana?

Marcos - Magnetia`}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── MOCKUP 4: Dashboard resultados ── */
function ResultsDashboardMockup() {
  const stats = [
    { number: 47, label: 'empresas identificadas' },
    { number: 156, label: 'decisores contactados' },
    { number: 23, label: 'respuestas positivas' },
    { number: 12, label: 'reuniones agendadas' },
  ]

  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 p-10">
      <p className="text-sm text-gray-600 mb-12">Esta semana</p>
      <div className="space-y-16">
        {stats.map((stat, i) => (
          <div key={i}>
            <div className="text-5xl md:text-7xl font-bold text-[#1A1A1A] leading-none mb-2">
              {stat.number}
            </div>
            <p className="text-base text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 pt-6 border-t-2 border-[#E64A58]">
        <p className="text-sm font-medium text-[#E64A58]">Tasa conversión: 26%</p>
      </div>
    </div>
  )
}

/* ── Mockups array ── */
const mockups = [
  <BusinessSearchMockup key="mockup-0" />,
  <DecisionMakersMockup key="mockup-1" />,
  <EmailComparisonMockup key="mockup-2" />,
  <ResultsDashboardMockup key="mockup-3" />
]

export function QueHacemos() {
  return (
    <section id="que-hacemos">
      {/* Sticky header interno — backdrop blur */}
      <div className="sticky top-0 z-10 py-5 md:py-6 backdrop-blur-md bg-white/90 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 flex items-center gap-4">
          <span className="text-magnetia-red text-sm font-semibold uppercase tracking-wider">02</span>
          <h2 className="font-bold text-xl md:text-2xl tracking-tight">Qué hacemos</h2>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 md:py-24 px-5 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20 md:mb-28">
            <h3 className="font-bold text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.04em] leading-[1.1] mb-5">
              Somos Magnetia
            </h3>
            <p className="text-base md:text-lg text-magnetia-black/60 max-w-xl mx-auto leading-relaxed">
              No hacemos campañas masivas esperando a que alguien llegue.<br />
              Buscamos activamente.
            </p>
          </div>

          <div className="flex flex-col gap-24 md:gap-32">
            {QUE_HACEMOS_BLOCKS.map((block, i) => {
              const isReversed = i % 2 === 1
              return (
                <motion.div
                  key={i}
                  className={`grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-center ${isReversed ? 'lg:[direction:rtl]' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, ease }}
                >
                  {/* Text */}
                  <div className={isReversed ? 'lg:[direction:ltr]' : ''}>
                    <h3 className="font-bold text-2xl md:text-[2rem] tracking-tight leading-[1.2] mb-6">
                      {block.title}
                    </h3>
                    <div className="flex flex-col gap-4">
                      {block.paragraphs.map((p, j) => (
                        <p key={j} className="text-base md:text-lg text-magnetia-black/60 leading-relaxed">{p}</p>
                      ))}
                    </div>
                  </div>

                  {/* Mockup */}
                  <div className={isReversed ? 'lg:[direction:ltr]' : ''}>
                    {mockups[i]}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
