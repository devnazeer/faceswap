"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { LanguageProvider } from "@/Components/LanguageProvider/LanguageProvider";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Loading from "@/app/Loading/Loading";
import theme from "@/theme";
import { Suspense } from "react";

export default function ClientLayoutWrapper({ children, locale }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (locale && i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);

  return (
    <Suspense fallback={<Loading />}>
      <LanguageProvider>
        <AppRouterCacheProvider options={{ key: "css", enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <Sidebar>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </Sidebar>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </LanguageProvider>
    </Suspense>
  );
}
