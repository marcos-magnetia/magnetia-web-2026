import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['es', 'en'],
  defaultLocale: 'es',
  localePrefix: 'as-needed',
  localeDetection: true,
});

export const config = {
  matcher: ['/((?!_next|_vercel|.*\\..*).*)']
};
