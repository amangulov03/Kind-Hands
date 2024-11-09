// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ru from './locales/ru.json';
import ky from './locales/ky.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
    ky: { translation: ky }
  },
  lng: 'ru', // Установите начальный язык
  fallbackLng: 'ru',
  interpolation: { escapeValue: false }
});

export default i18n;
