import { getRequestConfig } from 'next-intl/server';

const locales = ['es', 'en'];

export default getRequestConfig(async ({ requestLocale }) => {
  // In Next.js 15+, use requestLocale instead of locale
  const locale = await requestLocale;

  // Validate that the incoming locale parameter is valid
  if (!locale || !locales.includes(locale)) {
    // Fallback to default locale if invalid
    return {
      locale: 'es',
      messages: (await import(`../messages/es.json`)).default
    };
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
