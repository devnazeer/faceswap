import { Roboto } from "next/font/google";
import Sidebar from "@/Components/Sidebar";
import { Suspense } from "react";
import Loading from "./Loading";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { LanguageProvider } from "@/Components/LanguageProvider";
import theme from "@/theme";
import { CssBaseline } from "@mui/material";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({ children, params }) {
  const locale = params?.locale || "en";

  return (
    <html lang={locale} data-arp="" className={roboto.className}>
      <body inmaintabuse="1" style={{ margin: "unset", fontFamily: "roboto" }}>
        <Suspense fallback={<Loading />}>
          <LanguageProvider>
            <AppRouterCacheProvider
              options={{ key: "css", enableCssLayer: true }}
            >
              <ThemeProvider theme={theme}>
                <CssBaseline />
                {/* {children} */}
                <Sidebar>{children}</Sidebar>
              </ThemeProvider>
            </AppRouterCacheProvider>
          </LanguageProvider>
        </Suspense>
      </body>
    </html>
  );
}
