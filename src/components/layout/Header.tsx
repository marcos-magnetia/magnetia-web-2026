'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300
        ${scrolled
          ? 'bg-white/85 backdrop-blur-[16px] shadow-[0_1px_0_rgba(0,0,0,0.06)] py-3.5 px-5 md:px-10'
          : 'py-5 px-5 md:px-10'
        }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo - Clickable to go home */}
        <a href="/" className="flex-shrink-0">
          <Image
            src="/imagenes/logos/magnetia-logo.svg"
            alt="Magnetia - Agencia Digital de Generación de Clientes B2B"
            width={180}
            height={56}
            className="h-14 w-auto"
            priority={true}
            unoptimized={true}
          />
        </a>

        {/* CTA Button - Visible on all screen sizes */}
        <a
          href="/contacto"
          className="bg-magnetia-red text-white px-4 py-2 md:px-6 md:py-2.5 rounded-[10px] text-xs md:text-sm font-semibold hover:-translate-y-0.5 hover:shadow-lg transition-all uppercase"
        >
          Hablemos
        </a>
      </div>
    </header>
  )
}
