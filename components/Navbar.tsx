"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import TopActions from "@/components/TopActions";
import { useLang } from "@/components/useLang";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang } = useLang("id");

  const isBrand = pathname?.startsWith("/brand/");
  const links = useMemo(
    () => [
      { href: isBrand ? "/#brands" : "#brands", label: lang === "en" ? "Brands" : "Brand" },
      { href: isBrand ? "/#about" : "#about", label: lang === "en" ? "About" : "Tentang" },
      { href: isBrand ? "/#vision" : "#vision", label: lang === "en" ? "Vision" : "Visi & Misi" },
      { href: isBrand ? "/#connect" : "#connect", label: lang === "en" ? "Contact" : "Kontak" }
    ],
    [isBrand, lang]
  );

  return (
    <nav className="bg-white/80 dark:bg-[#272626]/80 backdrop-blur-lg fixed top-0 w-full z-50 shadow-sm dark:shadow-none bg-surface-container-low">
      <div className="flex justify-between items-center px-4 sm:px-8 py-4 max-w-full mx-auto">
        <div className="flex items-center gap-3">
          <Link
            href={isBrand ? "/#brands" : "/"}
            className="dark:bg-white dark:rounded-xl dark:px-3 dark:py-2 dark:shadow-sm"
            aria-label="Home"
            title="Home"
          >
            <Image src="/icon/Gaspoll.png" alt="GASPOLL Logo" width={140} height={32} className="h-8 w-auto" priority />
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-10 text-sm font-headline uppercase tracking-tight">
          {links.map((x) => (
            <a
              key={x.href}
              href={x.href}
              className="text-on-surface-variant dark:text-gray-300 hover:text-on-surface dark:hover:text-white transition-colors"
            >
              {x.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden h-10 w-10 rounded-full grid place-items-center border border-outline-variant/40 bg-white/60 dark:bg-[#272626]/60 backdrop-blur hover:bg-white/80 dark:hover:bg-[#272626]/80 transition-colors"
            aria-label="Toggle menu"
            title="Menu"
          >
            <span className="material-symbols-outlined text-on-surface dark:text-white text-[20px]">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
          <TopActions />
        </div>
      </div>

      {mobileOpen ? (
        <div className="lg:hidden px-4 sm:px-8 pb-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="bg-white/90 dark:bg-[#1c1c1c]/90 backdrop-blur rounded-2xl border border-outline-variant/25 dark:border-white/10 p-4">
            {links.map((x) => (
              <a
                key={x.href}
                href={x.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-3 text-sm font-headline font-black uppercase tracking-widest text-on-surface dark:text-white"
              >
                <span>{x.label}</span>
                <span className="material-symbols-outlined text-secondary">arrow_outward</span>
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}

