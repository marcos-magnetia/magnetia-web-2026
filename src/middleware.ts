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
  // Exclude /studio (Sanity CMS), /api, /_next, /_vercel, and files with extensions
  matcher: ['/((?!api|studio|_next|_vercel|.*\\..*).*)']
};
