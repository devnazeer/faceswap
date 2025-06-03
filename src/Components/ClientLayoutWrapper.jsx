"use client";

import React, { useEffect, Suspense, memo } from "react";
import { useTranslation } from "react-i18next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { LanguageProvider } from "@/Components/LanguageProvider";
// import Sidebar from "@/Components/Sidebar";
import Loading from "@/app/Loading/Loading";
import theme from "@/theme";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("@/Components/Sidebar"), {
  ssr: false,
  loading: () => (
    <div>
      <Loading />
    </div>
  ), // Optional loading component
});

const ClientLayoutWrapper = memo(({ children, locale }) => {
  // const { i18n } = useTranslation();

  // useEffect(() => {
  //   if (locale && typeof locale === "string" && i18n.language !== locale) {
  //     i18n.changeLanguage(locale);
  //   }
  // }, [locale, i18n]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const perfObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          console.log("[Performance]", entry.name, entry.duration);
        });
      });
      perfObserver.observe({
        entryTypes: ["measure", "resource", "navigation"],
      });
      return () => perfObserver.disconnect();
    }
  }, []);

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
});
export default ClientLayoutWrapper;
