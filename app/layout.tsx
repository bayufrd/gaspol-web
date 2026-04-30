import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { Inter, Manrope } from "next/font/google";
import { getServerLang } from "@/lib/lang.server";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "GASPOLL MANAGEMENT CENTER",
  icons: {
    icon: "/icon/favicon.ico",
    apple: "/icon/apple-touch-icon.png"
  }
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = await getServerLang();
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${manrope.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
