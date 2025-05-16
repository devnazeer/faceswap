import ClientLayoutWrapper from "@/Components/ClientLayoutWrapper/ClientLayoutWrapper";
import ClientOnly from "@/Components/ClientOnly";
import theme from "@/theme";
import { ThemeProvider } from "@mui/material";
import { NextIntlClientProvider } from "next-intl";
import { Roboto } from "next/font/google";
import "./globals.css";

// const roboto = Roboto({
//   weight: ["300", "400", "500", "700"],
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-roboto",
// });

// export default function RootLayout({ children, params }) {
//   const { locale } = params;
//   return (
//     <html lang={locale} data-arp="">
//       <body inmaintabuse="1" style={{ margin: "unset " }}>
//         <ClientOnly>
//           <ClientLayoutWrapper locale={locale}>{children}</ClientLayoutWrapper>
//         </ClientOnly>
//       </body>
//     </html>
//   );
// }

// import ClientLayoutWrapper from "@/Components/ClientLayoutWrapper/ClientLayoutWrapper";
// import ClientOnly from "@/Components/ClientOnly";
// import { Roboto } from "next/font/google";
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
    <html lang={locale} data-arp="">
      <body inmaintabuse="1" style={{ margin: "unset" }}>
        <ClientOnly>
          <ClientLayoutWrapper locale={locale}>{children}</ClientLayoutWrapper>
        </ClientOnly>
      </body>
    </html>
  );
}
