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
  const instagramHref = "https://instagram.com/";
  const emailHref = "mailto:hello@dastrevas.com";

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
              <a href={instagramHref} target="_blank" rel="noreferrer" className="text-white/80 hover:text-[#fdc34d] transition-colors" aria-label="Instagram" title="Instagram">
                <span className="material-symbols-outlined">language</span>
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
