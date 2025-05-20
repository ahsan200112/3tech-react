import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // auto detect browser language

const savedLang = localStorage.getItem('i18nextLng') || 'ar';

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: {
    en: { translation: require('./locales/en.json') },
    ar: { translation: require('./locales/ar.json') }
  },
  /*lng: 'ar', // Default language
  fallbackLng: 'ar',*/
  lng: savedLang,
  fallbackLng: 'ar',
  interpolation: { escapeValue: false }, // React escape handling
  detection: {
    order: ['localStorage', 'navigator'],
    caches: ['localStorage'], // store in localStorage
  },
});

export default i18n;
