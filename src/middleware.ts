import createMiddleware from 'next-intl/middleware';
import { locales, pathnames } from './i18n/navigation';

export default createMiddleware({
  locales,
  defaultLocale: 'es',
  localePrefix: 'as-needed',
  localeDetection: true,
  pathnames,
});

export const config = {
  matcher: ['/((?!_next|_vercel|.*\\..*).*)']
};
