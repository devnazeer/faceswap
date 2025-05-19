"use client";
import React, { useState, useEffect, createContext, useContext } from "react";
import { usePathname } from "next/navigation";
import i18n from "@/lib/i18n";

import { useTranslation } from "react-i18next";
const LanguageContext = createContext();

export function LanguageProvider({ children, locale }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (locale && i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);
  const pathname = usePathname();

  const getLangFromPath = (path) => {
    const langCode = path.split("/")[1];
    const supported = ["en", "de", "ru", "pt", "es", "id"];
    return supported.includes(langCode) ? langCode : "en";
  };

  const [currentLanguage, setCurrentLanguage] = useState(() =>
    getLangFromPath(
      typeof window !== "undefined" ? window.location.pathname : "/en"
    )
  );

  useEffect(() => {
    const lang = getLangFromPath(pathname);
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
  }, [pathname]);

  const changeLanguage = async (lng) => {
    try {
      await i18n.changeLanguage(lng);
      setCurrentLanguage(lng);
    } catch (error) {
      console.error("Language change failed:", error);
    }
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
