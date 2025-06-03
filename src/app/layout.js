import ClientLayoutWrapper from "@/Components/ClientLayoutWrapper";
import ClientOnly from "@/Components/ClientOnly";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({ children, params }) {
  // For the root page (/) params will be undefined, so default to 'en'
  const locale = params?.locale || "en";

  return (
    <html lang={locale} data-arp="" className={roboto.className}>
      <body inmaintabuse="1" style={{ margin: "unset", fontFamily: "roboto" }}>
        <ClientOnly>
          <ClientLayoutWrapper locale={locale}>{children}</ClientLayoutWrapper>
        </ClientOnly>
      </body>
    </html>
  );
}
