"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import TopActions from "@/components/TopActions";
import { useLang } from "@/components/useLang";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const { lang } = useLang("id");

  const isBrand = pathname?.startsWith("/brand/");
  const brandsBtnRef = useRef<HTMLButtonElement | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setBrandsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setBrandsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const sectionLinks = useMemo(
    () => [
      { href: isBrand ? "/#about" : "#about", label: lang === "en" ? "About" : "Tentang" },
      { href: isBrand ? "/#vision" : "#vision", label: lang === "en" ? "Vision" : "Visi & Misi" },
      { href: isBrand ? "/#connect" : "#connect", label: lang === "en" ? "Contact" : "Kontak" }
    ],
    [isBrand, lang]
  );

  const brandItems = useMemo(
    () => [
      {
        slug: "sambel-colek",
        name: lang === "en" ? "Sambel Colek" : "Sambel Colek"
      },
      {
        slug: "sambel-e-nyahti",
        name: lang === "en" ? "Sambel'e Nyah Ti" : "Sambel'e Nyah Ti"
      },
      {
        slug: "jempolan",
        name: lang === "en" ? "Jempolan" : "Jempolan"
      },
      {
        slug: "green-beans",
        name: lang === "en" ? "Green Beans" : "Green Beans"
      }
    ],
    [lang]
  );

  const openBrands = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    setBrandsOpen(true);
  };
  const scheduleCloseBrands = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => setBrandsOpen(false), 140);
  };

  const goToBrandsSection = () => {
    if (pathname === "/") {
      const el = document.getElementById("brands");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    router.push("/#brands");
  };

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
          <div
            className="relative"
            onMouseEnter={openBrands}
            onMouseLeave={scheduleCloseBrands}
          >
            <button
              ref={brandsBtnRef}
              type="button"
              onClick={goToBrandsSection}
              className="text-on-surface-variant dark:text-gray-300 hover:text-on-surface dark:hover:text-white transition-colors inline-flex items-center gap-2"
              aria-expanded={brandsOpen}
              aria-haspopup="menu"
            >
              <span>{lang === "en" ? "Brands" : "Brand"}</span>
              <span className="material-symbols-outlined text-[18px] opacity-70">expand_more</span>
            </button>

            {brandsOpen ? (
              <div
                className="absolute left-1/2 top-full mt-3 -translate-x-1/2 w-[min(360px,calc(100vw-2rem))] rounded-2xl border border-outline-variant/25 dark:border-white/10 bg-white/90 dark:bg-[#1c1c1c]/90 backdrop-blur shadow-xl overflow-hidden"
                role="menu"
                aria-label="Brands"
                onMouseEnter={openBrands}
                onMouseLeave={scheduleCloseBrands}
              >
                <div className="p-2">
                  {brandItems.map((b) => (
                    <Link
                      key={b.slug}
                      href={`/brand/${b.slug}`}
                      className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-on-surface dark:text-white"
                      role="menuitem"
                      onClick={() => setBrandsOpen(false)}
                    >
                      <span className="font-headline font-black text-xs tracking-widest uppercase">{b.name}</span>
                      <span className="material-symbols-outlined text-secondary text-[18px]">arrow_outward</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {sectionLinks.map((x) => (
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
            <button
              type="button"
              onClick={() => {
                setBrandsOpen((v) => !v);
                goToBrandsSection();
              }}
              className="w-full flex items-center justify-between py-3 text-sm font-headline font-black uppercase tracking-widest text-on-surface dark:text-white"
              aria-expanded={brandsOpen}
              aria-haspopup="menu"
            >
              <span>{lang === "en" ? "Brands" : "Brand"}</span>
              <span className="material-symbols-outlined text-secondary">{brandsOpen ? "expand_less" : "expand_more"}</span>
            </button>

            {brandsOpen ? (
              <div className="pb-2" role="menu" aria-label="Brands">
                {brandItems.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/brand/${b.slug}`}
                    onClick={() => {
                      setBrandsOpen(false);
                      setMobileOpen(false);
                    }}
                    className="flex items-center justify-between py-3 pl-4 pr-2 text-sm font-headline font-black uppercase tracking-widest text-on-surface-variant dark:text-gray-300"
                    role="menuitem"
                  >
                    <span>{b.name}</span>
                    <span className="material-symbols-outlined text-secondary">arrow_outward</span>
                  </Link>
                ))}
                <div className="h-px bg-outline-variant/25 dark:bg-white/10 my-2" />
              </div>
            ) : null}

            {sectionLinks.map((x) => (
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
