import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      navigation: {
        home: 'Home',
        photos: 'Photos',
        prices: 'Prices',
        where: 'Location',
        services: 'Services',
        menuButton: 'Menu',
      },
      header: { logoSubtitle: 'Learn English with fun!' },
    },
  },
  de: {
    translation: {
      navigation: {
        home: 'Startseite',
        photos: 'Fotos',
        prices: 'Preise',
        where: 'Standort',
        services: 'Leistungen',
        menuButton: 'Menü',
      },
      header: { logoSubtitle: 'English lernen mit Spaß!' },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'de',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
