'use client'

import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'

export function MobileBottomCTA() {
  const t = useTranslations('nav')
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div
      className={`
        fixed bottom-0 left-0 right-0 z-[999]
        md:hidden
        transition-transform duration-300 ease-out
        ${isVisible ? 'translate-y-0' : 'translate-y-full'}
      `}
    >
      {/* Gradient fade effect */}
      <div className="absolute bottom-full left-0 right-0 h-12 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />

      {/* CTA Button Container */}
      <div className="bg-white border-t border-gray-200 px-5 py-4 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
        <Link
          href="/contacto"
          className="
            block w-full
            bg-magnetia-red text-white
            px-6 py-4
            rounded-[12px]
            text-center text-base font-bold
            hover:bg-magnetia-red/90
            active:scale-[0.98]
            transition-all
            shadow-lg shadow-magnetia-red/25
            uppercase
          "
        >
          {t('cta')}
        </Link>
      </div>
    </div>
  )
}
