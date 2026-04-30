import Image from "next/image";
import Link from "next/link";

export default function Footer({ lang }: { lang: "id" | "en" }) {
  const year = new Date().getFullYear();
  const powered = lang === "en" ? "Powered by" : "Powered by";
  const rights = lang === "en" ? "All rights reserved." : "All rights reserved.";

  return (
    <footer className="mt-auto border-t border-outline-variant/25 dark:border-white/10 bg-white/60 dark:bg-black/20 backdrop-blur">
      <div className="px-4 sm:px-8 lg:px-24 py-10 flex flex-col sm:flex-row gap-8 sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-white dark:bg-white rounded-2xl px-4 py-2 border border-outline-variant/25 shadow-sm">
            <Image src="/icon/Gaspoll.png" alt="GASPOLL Logo" width={160} height={40} className="h-8 w-auto" />
          </div>
          <div className="text-xs text-on-surface-variant dark:text-gray-300 leading-relaxed">
            <div className="font-headline font-black tracking-widest uppercase text-on-surface dark:text-white">
              GASPOLL MANAGEMENT CENTER
            </div>
            <div>
              © {year} GASPOLL MANAGEMENT CENTER. {rights}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-headline font-black tracking-widest uppercase text-on-surface-variant dark:text-gray-300">
          <Link href="/#brands" className="hover:text-on-surface dark:hover:text-white transition-colors">
            {lang === "en" ? "Brands" : "Brand"}
          </Link>
          <span className="opacity-30">/</span>
          <Link href="/#connect" className="hover:text-on-surface dark:hover:text-white transition-colors">
            {lang === "en" ? "Contact" : "Kontak"}
          </Link>
          <span className="opacity-30">/</span>
          <a
            href="https://dastrevas.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-on-surface dark:hover:text-white transition-colors"
          >
            {powered} Dastrevas.com
          </a>
        </div>
      </div>
    </footer>
  );
}

