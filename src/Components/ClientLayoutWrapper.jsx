"use client";

import React, { memo } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { LanguageProvider } from "@/Components/LanguageProvider";
import theme from "@/theme";
import dynamic from "next/dynamic";
import Loading from "@/app/Loading";
import { CssBaseline } from "@mui/material";

const Sidebar = dynamic(() => import("@/Components/Sidebar"), {
  ssr: false,
  loading: () => (
    <div>
      <Loading />
    </div>
  ),
});

const ClientLayoutWrapper = ({ children }) => {
  return (
    <LanguageProvider>
      <AppRouterCacheProvider options={{ key: "css", enableCssLayer: true }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* {children} */}
          <Sidebar>{children}</Sidebar>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </LanguageProvider>
  );
};
export default ClientLayoutWrapper;
