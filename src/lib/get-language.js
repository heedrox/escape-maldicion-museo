const getLanguage = () =>
  window.location.href.toLowerCase().indexOf('lang=en') >= 0 ? 'en' : 'es';

export {
  getLanguage,
};
