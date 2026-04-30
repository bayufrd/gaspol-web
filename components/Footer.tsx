import Image from "next/image";
import Link from "next/link";

export default function Footer({ lang }: { lang: "id" | "en" }) {
  const year = new Date().getFullYear();
  const t =
    lang === "en"
      ? {
          company: "GASPOLL MANAGEMENT CENTER",
          tagline:
            "Strategic F&B brand management with clear operations, consistent quality, and sustainable growth.",
          corporate: "Corporate",
          links: { brands: "Brands", about: "About", vision: "Vision", contact: "Contact" },
          connect: "Connect",
          address:
            "Jl. Perumnas Mundusaren, Caturtunggal, Depok, Sleman, DIY, Indonesia",
          openMaps: "Open in Maps",
          rights: "All rights reserved.",
          powered: "Powered by"
        }
      : {
          company: "GASPOLL MANAGEMENT CENTER",
          tagline:
            "Manajemen brand F&B strategis dengan sistem kerja jelas, kualitas konsisten, dan pengembangan berkelanjutan.",
          corporate: "Perusahaan",
          links: { brands: "Brand", about: "Tentang", vision: "Visi & Misi", contact: "Kontak" },
          connect: "Kontak",
          address:
            "Jl. Perumnas Mundusaren, Caturtunggal, Depok, Sleman, DIY, Indonesia",
          openMaps: "Buka Maps",
          rights: "All rights reserved.",
          powered: "Powered by"
        };

  const mapsHref = "https://maps.app.goo.gl/wHth93J14wEcUyQt5";
  const instagramHref = "https://instagram.com/gaspoll.group";
  const emailHref = "mailto:gaspollmanagementcenter@gmail.com";
  const whatsappHref = "https://wa.me/6282177177767";

  return (
    <footer className="mt-auto border-t border-outline-variant/25 dark:border-white/10 bg-[#272626] dark:bg-black text-white">
      <div className="px-4 sm:px-8 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-5 py-3 border border-outline-variant/25 shadow-sm w-fit">
              <Image src="/icon/Gaspoll.png" alt="GASPOLL Logo" width={220} height={56} className="h-12 w-auto" />
            </div>
            <div className="text-lg font-bold uppercase tracking-tighter">{t.company}</div>
            <p className="text-xs tracking-wide text-white/60 max-w-sm">{t.tagline}</p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-white font-bold text-sm uppercase tracking-widest mb-2">{t.corporate}</span>
            <Link className="text-white/60 hover:text-[#fdc34d] transition-colors text-xs hover:translate-x-1 transition-transform" href="/#brands">
              {t.links.brands}
            </Link>
            <div className="pl-4 -mt-2 flex flex-col gap-2">
              {[
                { href: "/brand/sambel-colek", label: "Sambel Colek" },
                { href: "/brand/sambel-e-nyahti", label: "Sambel'e Nyah Ti" },
                { href: "/brand/jempolan", label: "Jempolan" },
                { href: "/brand/green-beans", label: "Green Beans" }
              ].map((x) => (
                <Link
                  key={x.href}
                  className="text-white/45 hover:text-[#fdc34d] transition-colors text-[11px] tracking-widest uppercase hover:translate-x-1 transition-transform"
                  href={x.href}
                >
                  {x.label}
                </Link>
              ))}
            </div>
            <Link className="text-white/60 hover:text-[#fdc34d] transition-colors text-xs hover:translate-x-1 transition-transform" href="/#about">
              {t.links.about}
            </Link>
            <Link className="text-white/60 hover:text-[#fdc34d] transition-colors text-xs hover:translate-x-1 transition-transform" href="/#vision">
              {t.links.vision}
            </Link>
            <Link className="text-white/60 hover:text-[#fdc34d] transition-colors text-xs hover:translate-x-1 transition-transform" href="/#connect">
              {t.links.contact}
            </Link>
          </div>

          <div className="flex flex-col gap-5">
            <span className="text-white font-bold text-sm uppercase tracking-widest mb-2">{t.connect}</span>
            <p className="text-xs tracking-wide text-white/60">{t.address}</p>
            <a
              className="text-white/60 hover:text-[#fdc34d] transition-colors text-xs hover:translate-x-1 transition-transform"
              href={mapsHref}
              target="_blank"
              rel="noreferrer"
            >
              {t.openMaps}
            </a>
            <div className="flex gap-4">
              <a
                href={instagramHref}
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-[#fdc34d] transition-colors"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Z" />
                  <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
                  <path d="M17.75 6.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
                </svg>
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-[#fdc34d] transition-colors"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a9.93 9.93 0 0 0-8.62 14.9L2 22l5.26-1.38A9.94 9.94 0 0 0 22 12 10 10 0 0 0 12 2Zm0 18a7.98 7.98 0 0 1-4.07-1.12l-.29-.17-3.12.82.83-3.04-.19-.31A8 8 0 1 1 12 20Z" />
                  <path d="M16.62 13.87c-.2-.1-1.18-.58-1.36-.64s-.32-.1-.46.1-.53.64-.65.77-.24.15-.44.05a6.56 6.56 0 0 1-1.93-1.19 7.24 7.24 0 0 1-1.33-1.66c-.14-.24 0-.36.1-.46.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42s-.46-1.1-.64-1.5c-.17-.41-.35-.35-.48-.36h-.41c-.14 0-.36.05-.55.24s-.72.7-.72 1.7.74 1.98.84 2.12c.1.14 1.46 2.24 3.54 3.14.5.22.89.35 1.2.45.5.16.96.14 1.32.08.4-.06 1.18-.48 1.34-.95.16-.46.16-.86.11-.95-.05-.09-.18-.14-.38-.24Z" />
                </svg>
              </a>
              <a href={emailHref} className="text-white/80 hover:text-[#fdc34d] transition-colors" aria-label="Email" title="Email">
                <span className="material-symbols-outlined">mail</span>
              </a>
              <a href={mapsHref} target="_blank" rel="noreferrer" className="text-white/80 hover:text-[#fdc34d] transition-colors" aria-label="Maps" title="Maps">
                <span className="material-symbols-outlined">map</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-white/60">
          <div>
            © {year} {t.company}. {t.rights}
          </div>
          <a
            href="https://dastrevas.com"
            target="_blank"
            rel="noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            {t.powered} Dastrevas.com
          </a>
        </div>
      </div>
    </footer>
  );
}
