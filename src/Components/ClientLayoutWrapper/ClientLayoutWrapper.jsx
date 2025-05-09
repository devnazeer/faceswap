// src/components/ClientLayoutWrapper.jsx
"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { LanguageProvider } from "@/Components/LanguageProvider/LanguageProvider";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Loading from "@/app/Loading/Loading";
import theme from "@/theme";
import { Suspense } from "react";

export default function ClientLayoutWrapper({ children }) {
  return (
    <LanguageProvider>
      <AppRouterCacheProvider options={{ key: "css", enableCssLayer: true }}>
        <ThemeProvider theme={theme}>
          <Sidebar>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </Sidebar>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </LanguageProvider>
  );
}
