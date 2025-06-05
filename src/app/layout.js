import { Roboto } from "next/font/google";
import { Suspense } from "react";
import Loading from "./Loading";
import "./globals.css";
import ClientOnly from "@/Components/ClientOnly";
import ClientLayoutWrapper from "@/Components/ClientLayoutWrapper";
import Head from "next/head";

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
      <Head>
        <link rel="preload" as="image" href="/1.webp" type="image/webp" />
      </Head>
      <body inmaintabuse="1" style={{ margin: "unset" }}>
        <Suspense fallback={<Loading />}>
          <ClientOnly>
            <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
          </ClientOnly>
        </Suspense>
      </body>
    </html>
  );
}
