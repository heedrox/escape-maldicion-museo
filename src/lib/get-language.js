const isLang = x => window.location.href.toLowerCase().indexOf(`lang=${x}`) >= 0

const SUPPORTED_LOCALES = ['en', 'de', 'es'];
const FALLBACK_LOCALE = 'es';

const getLanguage = () =>
  SUPPORTED_LOCALES.find(isLang) ? SUPPORTED_LOCALES.find(isLang) : FALLBACK_LOCALE;

export {
  getLanguage,
};
