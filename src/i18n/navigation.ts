import { createNavigation } from 'next-intl/navigation';

export const locales = ['es', 'en'] as const;

export type Locale = (typeof locales)[number];

// Define pathnames for localized routes
export const pathnames = {
  '/': '/',
  '/contacto': {
    es: '/contacto',
    en: '/contact',
  },
  '/aviso-legal': {
    es: '/aviso-legal',
    en: '/legal-notice',
  },
  '/politica-de-privacidad': {
    es: '/politica-de-privacidad',
    en: '/privacy-policy',
  },
  '/politica-de-cookies': {
    es: '/politica-de-cookies',
    en: '/cookie-policy',
  },
} as const;

export const { Link, redirect, usePathname, useRouter } =
  createNavigation({ locales, pathnames });
