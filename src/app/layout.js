import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import "./globals.css";
import theme from "@/theme";

import { Roboto } from "next/font/google";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Loading from "./Loading/Loading";
import { Suspense } from "react";
// import "../i18n";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata = {
  title: "Free AI Face Swap – Best Face Swapper Online",
  description:
    "Explore the fun of AI Face Swap with our free Face Swapper. Swap faces instantly with friends, celebrities, or anyone! AI makes it easy and fun to create unique, shareable face swaps in seconds.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-arp="">
      <head></head>
      <body className={roboto.variable} inmaintabuse="1">
        <AppRouterCacheProvider options={{ key: "css", enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <Sidebar>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </Sidebar>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
