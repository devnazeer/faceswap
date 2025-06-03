"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../../public/locales/en/common.json";
import de from "../../public/locales/de/common.json";
import ru from "../../public/locales/ru/common.json";
import pt from "../../public/locales/pt/common.json";
import es from "../../public/locales/es/common.json";
import id from "../../public/locales/id/common.json";

// ✅ Define and export locales as an array
export const locales = ["en", "de", "ru", "pt", "es", "id"];

i18n.use(initReactI18next).init({
  resources: {
    en: { common: en },
    de: { common: de },
    ru: { common: ru },
    pt: { common: pt },
    es: { common: es },
    id: { common: id },
  },
  lng: "en",
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
