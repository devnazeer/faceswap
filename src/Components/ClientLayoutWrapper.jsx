"use client";

import React, { Suspense, memo } from "react";
// import { useTranslation } from "react-i18next";
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
