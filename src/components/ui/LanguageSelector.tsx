'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { useTransition } from 'react'

export function LanguageSelector() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const handleLanguageChange = (newLocale: 'es' | 'en') => {
    startTransition(() => {
      // Using locale-aware router that automatically handles pathnames translation
      router.push(pathname, { locale: newLocale })
    })
  }

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <button
        onClick={() => handleLanguageChange('es')}
        className={`px-2 py-1 rounded transition-colors cursor-pointer ${
          locale === 'es'
            ? 'text-magnetia-red font-bold'
            : 'text-magnetia-black/40 hover:text-magnetia-black/70'
        }`}
        disabled={isPending}
      >
        ES
      </button>
      <span className="text-magnetia-black/20">|</span>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-2 py-1 rounded transition-colors cursor-pointer ${
          locale === 'en'
            ? 'text-magnetia-red font-bold'
            : 'text-magnetia-black/40 hover:text-magnetia-black/70'
        }`}
        disabled={isPending}
      >
        EN
      </button>
    </div>
  )
}
