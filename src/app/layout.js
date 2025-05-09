import { Roboto } from "next/font/google";
import ClientLayoutWrapper from "@/Components/ClientLayoutWrapper/ClientLayoutWrapper";
import "./globals.css";
// import "../lib/i18n";

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
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
