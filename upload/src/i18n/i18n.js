import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import ja from "./locales/ja/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ja: { translation: ja },
      en: { translation: en },
    },
    lng: "ja",
    fallbackLng: "ja",
    interpolation: {
      escapeValue: false,
    },
    debug: process.env.NODE_ENV === "development",
  });

export default i18n;
