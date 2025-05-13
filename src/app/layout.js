import ClientOnly from "@/Components/ClientOnly";
import { NextIntlClientProvider } from "next-intl";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({ children, params }) {
  const { locale } = params;
  return (
    <html lang={locale} className={roboto.variable} data-arp="">
      <body inmaintabuse="1">
        <ClientOnly>{children}</ClientOnly>
      </body>
    </html>
  );
}
