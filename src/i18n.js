import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: require('./locales/en.json') },
    ar: { translation: require('./locales/ar.json') }
  },
  lng: 'en', // Default language
  fallbackLng: 'en',
  interpolation: { escapeValue: false } // React escape handling
});

export default i18n;
