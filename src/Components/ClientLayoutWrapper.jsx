"use client";

import React, { useEffect, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { LanguageProvider } from "@/Components/LanguageProvider";
import Sidebar from "@/Components/Sidebar";
import Loading from "@/app/Loading/Loading";
import theme from "@/theme";

export default function ClientLayoutWrapper({ children, locale }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (locale && typeof locale === "string" && i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);

  return (
    <Suspense fallback={<Loading />}>
      <LanguageProvider>
        <AppRouterCacheProvider options={{ key: "css", enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <Sidebar>{children}</Sidebar>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </LanguageProvider>
    </Suspense>
  );
}
