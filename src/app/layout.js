import ClientLayoutWrapper from "@/Components/ClientLayoutWrapper";
import { Roboto } from "next/font/google";
import "./globals.css";
import Sidebar from "@/Components/Sidebar";
import { Suspense } from "react";
import Loading from "./Loading";

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
          <ClientLayoutWrapper>
            {/* <Sidebar> */}
            {children}
            {/* </Sidebar> */}
          </ClientLayoutWrapper>
        </Suspense>
      </body>
    </html>
  );
}
