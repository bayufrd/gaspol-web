import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { Inter, Manrope } from "next/font/google";
import { getServerLang } from "@/lib/lang.server";
import Navbar from "@/components/Navbar";
import RouteTransition from "@/components/RouteTransition";
import Footer from "@/components/Footer";

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
      </head>
      <body className={`${inter.variable} ${manrope.variable}`}>
        <Providers>
          <div className="min-h-dvh flex flex-col">
            <Navbar />
            <RouteTransition>
              <main className="pt-24 flex-1">{children}</main>
            </RouteTransition>
            <Footer lang={lang} />
          </div>
        </Providers>
      </body>
    </html>
  );
}
