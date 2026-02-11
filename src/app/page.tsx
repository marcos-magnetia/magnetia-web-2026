import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Metodo } from '@/components/sections/Metodo'
import { Servicios } from '@/components/sections/Servicios'
import { About } from '@/components/sections/About'
import { Testimonios } from '@/components/sections/Testimonios'
import { featureFlags } from '@/lib/featureFlags'

/**
 * Stacking Cards — set to `false` to revert to normal scroll instantly.
 * @see 12_EFECTO_STACKING_CARDS.md
 */
const USE_STACKING = false

export default function Home() {
  /* ── Normal scroll (flag off) ── */
  if (!USE_STACKING) {
    return (
      <>
        <Header />
        <main>
          <Hero />
          <Metodo />
          <Servicios />
          <About variant="I" />
          {featureFlags.sections.testimonios && <Testimonios />}
        </main>
        <Footer />
      </>
    )
  }

  /* ── Stacking Cards (flag on) ── */
  return (
    <>
      <Header />
      <main className="relative">
        {/* z-1  Hero — light */}
        <div className="stacking-section bg-white" style={{ zIndex: 1 }}>
          <Hero />
        </div>

        {/* z-2  Método — dark */}
        <div className="stacking-section bg-magnetia-black" style={{ zIndex: 2 }}>
          <Metodo />
        </div>

        {/* z-3  Servicios — light */}
        <div className="stacking-section bg-white" style={{ zIndex: 3 }}>
          <Servicios />
        </div>

        {/* z-4  About — light */}
        <div className="stacking-section bg-white" style={{ zIndex: 4 }}>
          <About variant="F" />
        </div>

        {/* z-5  Testimonios — light */}
        {featureFlags.sections.testimonios && (
          <div className="stacking-section bg-white" style={{ zIndex: 5 }}>
            <Testimonios />
          </div>
        )}

        {/* z-6  Footer — degradado + dark */}
        <div className="stacking-section bg-white" style={{ zIndex: 6 }}>
          <Footer />
        </div>
      </main>
    </>
  )
}
