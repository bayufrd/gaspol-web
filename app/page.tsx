"use client";

import Image from "next/image";
import InfoModal from "@/components/InfoModal";
import { useEffect, useMemo, useState } from "react";

type Lang = "id" | "en";

const copy = {
  id: {
    nav: { brands: "Brand", about: "Tentang", vision: "Visi & Misi", connect: "Kontak" },
    ctaTop: "Kolaborasi",
    badge: "Manajemen Brand Strategis",
    heroTitle1: "Gaspoll Menuju Sukses!",
    heroTitle2: "GASPOLL",
    heroTitle3: "Management Center",
    heroDesc:
      "PT Gaspoll Management Center (GMC) adalah perusahaan bidang manajemen bisnis F&B yang berkomitmen membangun sistem kerja yang jelas, adaptif, dan kolaboratif.",
    heroPrimary: "Lihat Brand",
    heroSecondary: "Hubungi Kantor",
    portfolioKicker: "Portofolio",
    portfolioTitle: "Brand di Bawah Manajemen",
    portfolioDesc:
      "Kumpulan brand yang dikelola dengan standar operasional yang jelas, kualitas konsisten, dan pengembangan berkelanjutan.",
    cardBtn: "Lihat Brand",
    aboutKicker: "Tentang GMC",
    aboutTitle: "Amanah. Sistematis. Berintegritas.",
    aboutDesc:
      "GMC berawal dari usaha rumah makan prasmanan/penyetan, berkembang melalui ekspansi outlet, pembentukan organisasi manajemen (±2018), lalu resmi berbadan hukum dan diperkenalkan sebagai “Gaspoll Management Center” pada 30 Januari 2023.",
    stats: [
      { k: "Peresmian badan hukum", v: "30 Jan 2023" },
      { k: "Fokus", v: "Manajemen bisnis F&B" },
      { k: "Kantor pusat", v: "Sleman, DIY" },
      { k: "Tim inti", v: "14 orang" }
    ],
    moreKicker: "Dokumen GMC",
    moreTitle: "Profil Perusahaan",
    moreDesc:
      "Buka setiap bagian untuk melihat isi sesuai dokumen.",
    moreBtn: "Buka Detail",
    topics: [
      {
        key: "informasi-dasar",
        title: "I. Informasi Dasar Perusahaan",
        content: [
          "1) Nama Resmi Perusahaan: PT Gaspoll Management Center",
          "2) Tanggal Pendirian: 30 Januari 2023 (Peresmian Badan Hukum)",
          "3) Lokasi Kantor Pusat: Jl. Perumnas Mundusaren, Caturtunggal, Depok, Sleman, DIY",
          "4) Jenis Badan Hukum: Perseroan Terbatas (PT)",
          "5) Bidang Usaha Utama: Manajemen Bisnis F&B",
          "6) Visi: Menjadi perusahaan bidang Manajemen Bisnis yang terus berkembang dan maju, mensejahterakan orang-orang yang mendukung dalam mengembangkan perusahaan, serta dapat memberikan manfaat bagi masyarakat.",
          "7) Misi: “ASIK”",
          "▪ Amanah; Dapat dipercaya dan menjunjung tinggi nilai-nilai kepercayaan; *Produk dan Layanannya.",
          "▪ Sistematis dan adaptif; Menjaga sistem operasi kerja yang baik dan jelas, serta siap menghadapi perubahan dengan inovasi; *Sistem operasi kerjanya.",
          "▪ Integritas; Tegas berkarakter, bertanggung jawab, dan menjaga konsistensi; *Sumber Daya Manusianya.",
          "▪ Kolaboratif; Membangun dan menjaga sistem kerja sama yang sinergis. *Pengembangannya.",
          "8) Nilai - nilai Dasar Perusahaan:",
          "▪ Landasan Dasar Kepribadian Karyawan: Jujur, Disiplin, Tanggung Jawab, Ikhlas, Taqwa",
          "▪ Prinsip Dasar Bekerja Karyawan: Cepat, Sigap, Cermat, Rapi, Santun, Ceria"
        ]
      },
      {
        key: "sejarah",
        title: "II. Sejarah dan Perkembangan Perusahaan",
        content: [
          "1) Awal Mula Usaha: Rumah Makan Prasmanan dan Sejenis Penyetan",
          "Perjalanan Gaspoll Management Center dimulai dari sebuah rumah makan sederhana yang didirikan oleh Bapak Andi. Beliau memfokuskan usahanya pada hidangan prasmanan dan penyetan, dengan terjun langsung sebagai pemimpin sekaligus pemilik. Semangat dan kerja keras Bapak Andi menjadi fondasi awal bagi perkembangan bisnis ini.",
          "2) Pengembangan Struktur Awal: Penanggung Jawab Outlet",
          "Seiring dengan meningkatnya popularitas rumah makan, Bapak Andi mulai mempercayakan pengelolaan operasional kepada beberapa karyawan dengan menunjuk mereka sebagai penanggung jawab outlet. Langkah ini merupakan bentuk delegasi tugas yang efektif, memungkinkan Bapak Andi untuk lebih fokus pada pengembangan bisnis secara keseluruhan.",
          "3) Ekspansi Usaha: Pembukaan Cabang",
          "Keberhasilan pengelolaan outlet-outlet awal mendorong Bapak Andi untuk melakukan ekspansi usaha. Beberapa cabang rumah makan dibuka, menandai pertumbuhan bisnis ini. Setiap cabang tetap mempertahankan kualitas dan cita rasa yang menjadi ciri khas rumah makan Bapak Andi.",
          "4) Pembentukan Organisasi Manajemen: Rekrutmen Staf Administrasi Keuangan (2018)",
          "Kurang lebih pada tahun 2018, Bapak Andi menyadari perlunya struktur manajemen yang lebih terorganisir. Beliau mulai membentuk sebuah organisasi manajemen dengan merekrut staf administrasi keuangan. Langkah ini diambil untuk mengefektifkan sistem pengelolaan keuangan dan administrasi, yang menjadi semakin kompleks seiring dengan pertumbuhan bisnis.",
          "5) Pengembangan Sumber Daya Manusia: Pengangkatan Staf Manajemen Berbasis Kompetensi",
          "Bapak Andi terus mengembangkan organisasi manajemen dengan mengangkat beberapa karyawan yang sebelumnya menjabat sebagai penanggung jawab outlet. Pengangkatan ini didasarkan pada kompetensi dan pengalaman masing-masing karyawan, sehingga mereka dapat berkontribusi secara maksimal di posisi manajemen yang baru.",
          "6) Legalisasi Organisasi: Pendirian Badan Hukum (Januari 2023)",
          "Setelah organisasi manajemen berjalan dengan baik, Bapak Andi mengambil langkah penting untuk melegalkan bisnisnya. Pada Januari 2023, organisasi tersebut didaftarkan secara resmi dan berbadan hukum, menandakan komitmen Bapak Andi terhadap profesionalisme dan keberlanjutan bisnis.",
          "7) Peresmian dan Pengenalan Gaspoll Management Center (30 Januari 2023)",
          "Pada tanggal 30 Januari 2023, organisasi manajemen yang telah berbadan hukum tersebut diresmikan dan diperkenalkan kepada seluruh karyawan dengan nama \"Gaspoll Management Center\". Peresmian ini menjadi tonggak sejarah penting, menandai transformasi dari bisnis keluarga menjadi perusahaan yang lebih profesional dan terstruktur. Gaspoll Management Center terus berkembang dan beroperasi dengan baik hingga saat ini."
        ]
      },
      {
        key: "layanan",
        title: "III. Produk atau Jasa yang Ditawarkan",
        content: [
          "1) Pengelolaan dan Pengembangan bisnis F&B",
          "2) Keunggulan;",
          "✓ Produk dan Layanan yang Amanah dengan selalu memberikan yang terbaik;",
          "✓ Sistem operasi kerja yang Sistematis dan Adaptif, sehingga tetap eksis dan sesuai dengan perkembangan jaman;",
          "✓ Sumber Daya Manusia yang berintegritas, yang bertanggung jawab dan mampu menjaga konsistensi;",
          "✓ Sistem kerja sama yang sinergis untuk memastikan semua berjalan baik dari berbagai sektor.",
          "3) Target pasar, berbagai kelompok usia, pekerjaan, dan minat.",
          "4) Inovasi, perusahaan selalu melakukan research and development untuk menciptakan produk baru atau produk yang lebih baik."
        ]
      },
      {
        key: "organisasi",
        title: "IV. Struktur Organisasi dan Manajemen",
        content: [
          "1) Perusahaan memiliki struktur organisasi kolaboratif.",
          "2) Tim manajemen terdiri dari berbagai divisi (Keuangan, SDM, Pengadaan, Operasional, dan Maintenance), serta Manajer umum dan Direktur.",
          "3) Jumlah tim manajemen inti (termasuk direktur) saat ini adalah 14 orang.",
          "4) Budaya perusahaan yang diterapkan adalah budaya kerja yang dinamis, inovatif, dan berorientasi pada hasil."
        ]
      },
      {
        key: "keuangan",
        title: "V. Kinerja Keuangan",
        content: ["1) Perusahaan memiliki neraca keuangan yang sehat dan stabil.", "2) Perusahaan selalu melakukan audit keuangan secara berkala."]
      },
      {
        key: "csr",
        title: "VI. Tanggung Jawab Sosial Perusahaan (CSR)",
        content: [
          "1) Menciptakan produk dan layanan yang berkualitas untuk konsumen",
          "2) Memberikan fasilitas kepada karyawan sesuai dengan perjanjian awal",
          "3) Mendukung kelestarian lingkungan, seperti menjaga kebersihan lingkungan, mengelola limbah dengan baik dan tidak mencemari lingkungan."
        ]
      },
      {
        key: "prospek",
        title: "VII. Prospek Masa Depan",
        content: ["Perusahaan berencana untuk memperluas pasar dengan menambah outlet di berbagai titik dengan skala nasional."]
      },
    ],
    vmKicker: "Visi & Misi",
    vmTitle: "Standar kerja “ASIK”.",
    vmDesc:
      "Amanah, Sistematis & adaptif, Integritas, Kolaboratif — pedoman untuk produk & layanan, sistem kerja, SDM, dan pengembangan.",
    vmCards: [
      { t: "Amanah", d: "Dapat dipercaya dan selalu memberi yang terbaik pada produk & layanan." },
      { t: "Sistematis & adaptif", d: "Sistem operasi kerja yang jelas, siap menghadapi perubahan dengan inovasi." },
      { t: "Integritas", d: "Tegas berkarakter, bertanggung jawab, dan konsisten." },
      { t: "Kolaboratif", d: "Membangun kerja sama yang sinergis lintas divisi dan mitra." }
    ],
    connectTitle: "Siap berkembang bersama?",
    connectDesc:
      "Mari diskusikan pengelolaan, pengembangan, dan ekspansi brand dengan standar operasional yang kuat.",
    connectPrimary: "Kolaborasi",
    connectSecondary: "Kontak Kantor",
    officeKicker: "Kantor Pusat",
    officeAddress: "Jl. Perumnas Mundusaren, Caturtunggal, Depok, Sleman, DIY",
    officeNote: "Kunjungi kantor pusat GMC atau hubungi kami untuk kerja sama.",
    mapsOpen: "Buka di Google Maps",
    footerTagline:
      "Manajemen bisnis F&B yang berorientasi pada kualitas, sistem kerja, dan pengembangan berkelanjutan.",
    footerCorporate: "Menu",
    footerConnect: "Koneksi",
    footerLinksCorporate: ["Brand", "Tentang", "Visi & Misi", "Kontak"],
    copyright: "© 2026 GASPOLL MANAGEMENT CENTER. All rights reserved.",
    langLabel: "ID"
  },
  en: {
    nav: { brands: "Brands", about: "About", vision: "Vision", connect: "Connect" },
    ctaTop: "Partner With Us",
    badge: "Strategic Brand Management",
    heroTitle1: "Gaspoll Towards Success!",
    heroTitle2: "GASPOLL",
    heroTitle3: "Management Center",
    heroDesc:
      "PT Gaspoll Management Center (GMC) focuses on managing and growing F&B businesses through clear governance, adaptive operations, and strong collaboration.",
    heroPrimary: "Explore Brands",
    heroSecondary: "Contact Office",
    portfolioKicker: "Portfolio",
    portfolioTitle: "Brands Under Management",
    portfolioDesc:
      "A curated selection of concepts governed by one standard: consistency, quality, and sustainable growth.",
    cardBtn: "View Brand",
    aboutKicker: "About GMC",
    aboutTitle: "Structured. Adaptive. Accountable.",
    aboutDesc:
      "GMC is a management organization that evolved into a legal entity on Jan 30, 2023, guided by the “ASIK” mission.",
    stats: [
      { k: "Founded", v: "30 Jan 2023" },
      { k: "Core focus", v: "F&B Business Management" },
      { k: "HQ", v: "Sleman, DIY" },
      { k: "Core team", v: "14 people" }
    ],
    moreKicker: "GMC Document",
    moreTitle: "Company Document",
    moreDesc: "Open each section to view the content as in the document.",
    moreBtn: "Open Details",
    topics: [
      {
        key: "history",
        title: "History & Growth",
        content: [
          "Origin: buffet/penyetan restaurant founded by Mr. Andi.",
          "Delegation: outlet PICs.",
          "Expansion: multiple branches.",
          "2018: recruited finance admin staff; more structured management.",
          "People development: competency-based management roles.",
          "Jan 2023: legal incorporation.",
          "Jan 30, 2023: official launch as “Gaspoll Management Center”."
        ]
      },
      { key: "service", title: "Service", content: ["F&B business management and development."] },
      {
        key: "advantages",
        title: "Advantages",
        content: [
          "Amanah: trusted products & services.",
          "Systematic & adaptive operations.",
          "Integrity-driven people & consistency.",
          "Collaborative partnerships across sectors."
        ]
      },
      {
        key: "market",
        title: "Market & Innovation",
        content: ["Broad target market across ages/jobs/interests.", "Continuous R&D for new or improved products."]
      },
      {
        key: "org",
        title: "Organization & Management",
        content: [
          "Collaborative structure.",
          "Divisions: Finance, HR, Procurement, Operations, Maintenance + GM + Director.",
          "Core management team: 14 people.",
          "Culture: dynamic, innovative, results-oriented."
        ]
      },
      { key: "finance", title: "Financial Performance", content: ["Healthy and stable balance sheet.", "Regular audits."] },
      {
        key: "csr",
        title: "CSR",
        content: ["Quality products & services.", "Employee facilities as agreed.", "Environmental care & waste management."]
      },
      { key: "future", title: "Future Outlook", content: ["National-scale expansion by adding outlets across multiple locations."] },
      {
        key: "values",
        title: "Core Values",
        content: [
          "Personality: Honest, disciplined, responsible, sincere, devoted.",
          "Work principles: fast, alert, accurate, neat, polite, cheerful."
        ]
      }
    ],
    vmKicker: "Vision & Mission",
    vmTitle: "“ASIK” as a standard.",
    vmDesc:
      "Amanah, Systematic & adaptive, Integrity, Collaborative — principles for service, operations, people, and growth.",
    vmCards: [
      { t: "Amanah", d: "Trusted products and services with consistent quality." },
      { t: "Systematic & adaptive", d: "Clear operating systems built for change." },
      { t: "Integrity", d: "Responsible teams with strong accountability." },
      { t: "Collaborative", d: "Synergic cooperation across divisions and partners." }
    ],
    connectTitle: "Ready to grow together?",
    connectDesc:
      "Let’s discuss brand management, development, and expansion with strong operational standards.",
    connectPrimary: "Partner With Us",
    connectSecondary: "Contact Office",
    officeKicker: "Head Office",
    officeAddress: "Jl. Perumnas Mundusaren, Caturtunggal, Depok, Sleman, DIY",
    officeNote: "Visit GMC head office or contact us for partnership.",
    mapsOpen: "Open in Google Maps",
    footerTagline:
      "F&B business management focused on quality, operating systems, and sustainable development.",
    footerCorporate: "Menu",
    footerConnect: "Connect",
    footerLinksCorporate: ["Brands", "About", "Vision", "Connect"],
    copyright: "© 2026 GASPOLL MANAGEMENT CENTER. All rights reserved.",
    langLabel: "EN"
  }
} satisfies Record<Lang, any>;

const brandsByLang: Record<
  Lang,
  Array<{ slug: string; name: string; tagline: string; desc: string; icon: string; meta: string }>
> = {
  id: [
    {
      slug: "sambel-colek",
      name: "Sambel Colek Asli Ngampel City",
      tagline: "Murah, Kenyang, Pedas, Puas",
      desc: "Rumah makan pecinta pedas: sambal sebagai “jiwa” hidangan, bahan segar pilihan, proses bersih, dan pengalaman makan yang ramah untuk mahasiswa hingga keluarga.",
      icon: "/icon/sambelcolek.png",
      meta: "Kuliner Pedas"
    },
    {
      slug: "sambel-e-nyahti",
      name: "Sambel'e Nyah Ti",
      tagline: "JUwara PueDEZnya",
      desc: "Rumah makan pecinta pedas: tradisional + modern, kualitas rasa konsisten, dan pelayanan ramah.",
      icon: "/icon/sambelenyahti.png",
      meta: "Kuliner"
    },
    {
      slug: "jempolan",
      name: "Jempolan Coffee & Eatery",
      tagline: "Coffee & Eatery",
      desc: "Coffee & eatery di bawah GMC (ringkasan detail menyusul mengikuti dokumen resmi Jempolan).",
      icon: "/icon/jempolan.png",
      meta: "Coffee & Eatery"
    },
    {
      slug: "green-beans",
      name: "Green Beans",
      tagline: "Sip – Relax - Repeat",
      desc: "Coffee shop & ruang komunal: biji berkualitas, seduh presisi, dan atmosfer untuk kerja/komunitas.",
      icon: "/icon/greenbeans.png",
      meta: "Coffee Shop"
    }
  ],
  en: [
    {
      slug: "sambel-colek",
      name: "Sambel Colek Asli Ngampel City",
      tagline: "Affordable, Filling, Spicy, Satisfying",
      desc: "Spicy dining concept where sambal is the “soul” of every dish, built on fresh ingredients, strong hygiene, and a friendly dining space for everyone.",
      icon: "/icon/sambelcolek.png",
      meta: "Culinary"
    },
    {
      slug: "sambel-e-nyahti",
      name: "Sambel'e Nyah Ti",
      tagline: "Champion of Bold Spicy Taste",
      desc: "Spicy dining concept combining tradition and modern comfort with consistent quality.",
      icon: "/icon/sambelenyahti.png",
      meta: "Culinary"
    },
    {
      slug: "jempolan",
      name: "Jempolan Coffee & Eatery",
      tagline: "Coffee & Eatery",
      desc: "A GMC-managed coffee & eatery (full details will follow the official Jempolan document).",
      icon: "/icon/jempolan.png",
      meta: "Coffee & Eatery"
    },
    {
      slug: "green-beans",
      name: "Green Beans",
      tagline: "Sip – Relax - Repeat",
      desc: "Coffee shop and community space with consistent craft and experience.",
      icon: "/icon/greenbeans.png",
      meta: "Coffee"
    }
  ]
};

export default function Page() {
  const [lang, setLang] = useState<Lang>("id");
  useEffect(() => {
    const saved = (localStorage.getItem("lang") as Lang | null) ?? "id";
    const next = saved === "en" ? "en" : "id";
    setLang(next);
    document.cookie = `lang=${next}; Path=/; Max-Age=31536000; SameSite=Lax`;
  }, []);
  const t = useMemo(() => copy[lang], [lang]);
  const brands = useMemo(() => brandsByLang[lang], [lang]);
  const [topicKey, setTopicKey] = useState<string | null>(null);
  const activeTopic = useMemo(() => t.topics.find((x: any) => x.key === topicKey) ?? null, [t, topicKey]);
  const officeLat = -7.772171;
  const officeLng = 110.405041;
  const mapsQuery = encodeURIComponent(`${officeLat},${officeLng}`);
  const mapsEmbedSrc = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
  const mapsOpenHref = "https://maps.app.goo.gl/wHth93J14wEcUyQt5";

  return (
    <>
      <InfoModal
        open={Boolean(activeTopic)}
        title={activeTopic?.title ?? ""}
        onClose={() => setTopicKey(null)}
      >
        <ul className="list-disc pl-5 space-y-2 text-on-surface-variant dark:text-gray-300">
          {(activeTopic?.content ?? []).map((line: string) => (
            <li key={line} className="leading-relaxed">
              {line}
            </li>
          ))}
        </ul>
      </InfoModal>

      <main>
        <section className="px-4 sm:px-8 lg:px-24 py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/40">
                <span className="material-symbols-outlined text-secondary text-base">workspace_premium</span>
                <span className="text-xs tracking-widest uppercase text-on-surface-variant font-headline">
                  {t.badge}
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter mt-8 leading-[1.0] sm:leading-[0.95]">
                {t.heroTitle1}
                <br />
                <span className="bg-gradient-to-r from-secondary-container via-secondary to-primary-container bg-clip-text text-transparent">
                  {t.heroTitle2}
                </span>{" "}
                <span className="bg-gradient-to-r from-on-surface via-on-surface to-on-surface-variant dark:from-white dark:via-white dark:to-gray-300 bg-clip-text text-transparent">
                  {t.heroTitle3}
                </span>
              </h1>
              <p className="text-on-surface-variant dark:text-gray-300 text-lg leading-relaxed mt-8 max-w-xl">
                {t.heroDesc}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="#brands"
                  className="bg-gradient-to-r from-primary-container via-primary to-secondary px-10 py-5 rounded-full font-headline font-black text-sm uppercase tracking-wider hover:opacity-95 transition-opacity text-center text-white shadow-sm"
                >
                  {t.heroPrimary}
                </a>
                <a
                  href="#connect"
                  className="bg-gradient-to-r from-surface-container-low to-surface-container-high border border-outline-variant/60 text-on-surface px-10 py-5 rounded-full font-headline font-black text-sm uppercase tracking-wider hover:opacity-95 transition-opacity text-center"
                >
                  {t.heroSecondary}
                </a>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden bg-surface-container">
              <div className="absolute inset-0 opacity-60">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP1J1i9-X-Eg_UNw10GECXr2XFQRiHNByqTIFyoS8i1W2fFQr8w2-T-FygSmM3-9h_D2d8AflIVnLla300RP8a1CHSw0XkWOmLGm4EhA_6EA3oF-WIpBvMEV1cauoBYx8tsBksje8HW5OCcRFSgu8ra7SG5ua1ozX7X0Y-A3JiD20zzZAp_7UKXTXzEqPQjaWCAJGVqKTGWMzmGntMEyDyg7cdeLBvxEz3M0lJgDXAaBGkSqAgFgoZ9vjH6s4PRvecVDs3RUuyaC0"
                  alt="Global Network Map"
                  fill
                  className="object-cover grayscale"
                  priority
                />
              </div>
              <div className="relative p-10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-2xl border border-secondary/20">
                    <div className="text-secondary font-bold text-xl">Yogyakarta</div>
                    <div className="text-xs font-display tracking-widest text-on-surface-variant uppercase">
                      Strategic Hub
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-2xl border border-primary/20 justify-self-end">
                    <div className="text-primary font-bold text-xl">Gaspoll</div>
                    <div className="text-xs font-display tracking-widest text-on-surface-variant uppercase">
                      Financial Core
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface"></div>
            </div>
          </div>
        </section>

        <section id="brands" className="px-4 sm:px-8 lg:px-24 py-20 sm:py-24">
          <div className="flex items-end justify-between gap-8 mb-12">
            <div>
              <div className="text-xs font-display tracking-widest text-on-surface-variant uppercase">
                {t.portfolioKicker}
              </div>
              <h2 className="font-display text-5xl font-black tracking-tighter mt-3">
                {t.portfolioTitle}
              </h2>
            </div>
            <div className="hidden md:block text-on-surface-variant dark:text-gray-300 max-w-md">
              {t.portfolioDesc}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {brands.map((b) => (
              <div
                key={b.name}
                className="bg-surface-container-low dark:bg-[#1c1c1c] border border-outline-variant/30 dark:border-white/10 rounded-3xl p-8 hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <div className="h-14 w-14 rounded-2xl bg-white border border-outline-variant/25 grid place-items-center overflow-hidden">
                    <Image
                      src={b.icon}
                      alt={`${b.name} logo`}
                      width={56}
                      height={56}
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-on-surface-variant dark:text-gray-300 font-headline">
                    {b.meta}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-black tracking-tight mt-6 leading-tight break-words min-h-[3.25rem]">
                  {b.name}
                </h3>
                <div className="text-xs tracking-widest uppercase text-on-surface-variant dark:text-gray-300 font-headline mt-2">
                  “{b.tagline}”
                </div>
                <p className="text-on-surface-variant dark:text-gray-300 text-sm leading-relaxed mt-3 flex-1">
                  {b.desc}
                </p>
                <a
                  href={`/brand/${b.slug}`}
                  className="mt-8 w-full bg-gradient-to-r from-white to-surface-container-low dark:from-white/10 dark:to-white/5 text-on-surface dark:text-white px-6 py-4 rounded-full font-headline font-black text-xs uppercase tracking-widest hover:opacity-95 transition-opacity border border-outline-variant/30 dark:border-white/10 mt-auto text-center"
                >
                  {t.cardBtn}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="px-4 sm:px-8 lg:px-24 py-20 sm:py-24">
          <div className="bg-surface-container-low dark:bg-[#1c1c1c] rounded-3xl p-12 lg:p-16 border border-outline-variant/30 dark:border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="text-xs font-display tracking-widest text-on-surface-variant uppercase">
                  {t.aboutKicker}
                </div>
                <h2 className="font-display text-5xl font-black tracking-tighter mt-4">
                  {t.aboutTitle}
                </h2>
                <p className="text-on-surface-variant dark:text-gray-300 text-base leading-relaxed mt-6">
                  {t.aboutDesc}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {t.stats.map((x: { k: string; v: string }) => (
                  <div
                    key={x.k}
                    className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-outline-variant/25 dark:border-white/10"
                  >
                    <div className="text-xs uppercase tracking-widest text-on-surface-variant font-headline">
                      {x.k}
                    </div>
                    <div className="text-xl font-display font-black tracking-tight mt-2">{x.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-8 lg:px-24 -mt-10 pb-20 sm:pb-24">
          <div className="bg-surface-container-low dark:bg-[#1c1c1c] border border-outline-variant/30 dark:border-white/10 rounded-3xl p-8 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-4">
                <div className="text-xs font-display tracking-widest text-on-surface-variant uppercase">
                  {t.moreKicker}
                </div>
                <h3 className="font-display text-3xl sm:text-4xl font-black tracking-tight mt-3">
                  {t.moreTitle}
                </h3>
                <p className="text-on-surface-variant dark:text-gray-300 mt-5 leading-relaxed">{t.moreDesc}</p>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.topics.map((topic: any) => (
                  <button
                    key={topic.key}
                    type="button"
                    onClick={() => setTopicKey(topic.key)}
                    className="text-left bg-white/80 dark:bg-white/5 border border-outline-variant/25 dark:border-white/10 rounded-2xl p-5 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="font-display text-xl font-black tracking-tight">{topic.title}</div>
                        <div className="text-xs tracking-widest uppercase text-on-surface-variant dark:text-gray-300 font-headline mt-2">
                          {t.moreBtn}
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-secondary">arrow_outward</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="vision" className="px-4 sm:px-8 lg:px-24 py-20 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <div className="text-xs font-display tracking-widest text-on-surface-variant uppercase">
                {t.vmKicker}
              </div>
              <h2 className="font-display text-5xl font-black tracking-tighter mt-4">
                {t.vmTitle}
              </h2>
              <p className="text-on-surface-variant dark:text-gray-300 mt-6 leading-relaxed">
                {t.vmDesc}
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.vmCards.map((x: { t: string; d: string }) => (
                <div
                  key={x.t}
                  className="bg-surface-container-low dark:bg-[#1c1c1c] border border-outline-variant/30 dark:border-white/10 rounded-3xl p-8"
                >
                  <div className="font-display text-2xl font-black tracking-tight">{x.t}</div>
                  <div className="text-on-surface-variant dark:text-gray-300 text-sm leading-relaxed mt-3">{x.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-32 px-4 sm:px-8 lg:px-24" id="connect">
          <div className="bg-tertiary text-on-tertiary rounded-3xl p-16 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-20 blur-[100px] -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary opacity-20 blur-[100px] -ml-48 -mb-48"></div>
            <div className="relative z-10 max-w-xl">
              <h2 className="font-display text-5xl font-black mb-6 tracking-tighter">
                {t.connectTitle}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {t.connectDesc}
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button className="bg-gradient-to-r from-secondary-container via-secondary-fixed-dim to-secondary px-12 py-6 rounded-full font-headline font-black text-lg uppercase tracking-wider hover:opacity-95 transition-opacity text-white shadow-sm">
                {t.connectPrimary}
              </button>
              <button className="bg-gradient-to-r from-white/5 to-white/10 border border-outline-variant/30 text-white px-12 py-6 rounded-full font-headline font-black text-lg uppercase tracking-wider hover:opacity-95 transition-opacity">
                {t.connectSecondary}
              </button>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-8 lg:px-24 pb-20 sm:pb-28 -mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-surface-container-low dark:bg-[#1c1c1c] border border-outline-variant/30 dark:border-white/10 rounded-3xl p-8 sm:p-10">
            <div className="lg:col-span-5">
              <div className="text-xs font-display tracking-widest text-on-surface-variant uppercase">
                {t.officeKicker}
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-black tracking-tight mt-3">
                PT Gaspoll Management Center
              </h3>
              <p className="text-on-surface-variant dark:text-gray-300 mt-5 leading-relaxed">{t.officeAddress}</p>
              <p className="text-on-surface-variant dark:text-gray-300 mt-4 leading-relaxed">{t.officeNote}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  className="bg-gradient-to-r from-primary-container via-primary to-secondary px-8 py-4 rounded-full font-headline font-black text-xs uppercase tracking-wider hover:opacity-95 transition-opacity text-center text-white shadow-sm"
                  href={mapsOpenHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.mapsOpen}
                </a>
                <a
                  className="bg-gradient-to-r from-surface-container-low to-surface-container-high dark:from-white/5 dark:to-white/10 border border-outline-variant/60 dark:border-white/10 text-on-surface dark:text-white px-8 py-4 rounded-full font-headline font-black text-xs uppercase tracking-wider hover:opacity-95 transition-opacity text-center"
                  href="#"
                >
                  {t.connectSecondary}
                </a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="w-full aspect-[16/10] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-outline-variant/30">
                <iframe
                  title="GMC Head Office Map"
                  src={mapsEmbedSrc}
                  loading="lazy"
                  className="w-full h-full"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#272626] dark:bg-black w-full relative bottom-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-12 py-14 sm:py-16 w-full">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-5 py-3 border border-outline-variant/25 shadow-sm">
              <Image src="/icon/Gaspoll.png" alt="GASPOLL Logo" width={220} height={56} className="h-14 w-auto" />
            </div>
            <div className="text-lg font-bold text-white uppercase tracking-tighter">PT. GASPOLL MANAGEMENT CENTER</div>
            <p className="text-xs tracking-wide text-gray-400 max-w-xs">
              {t.footerTagline}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white font-bold text-sm uppercase tracking-widest mb-2">{t.footerCorporate}</span>
            <a className="text-gray-500 hover:text-[#fdc34d] transition-colors text-xs hover:translate-x-1 transition-transform" href="#brands">
              {t.footerLinksCorporate[0]}
            </a>
            <a className="text-gray-500 hover:text-[#fdc34d] transition-colors text-xs hover:translate-x-1 transition-transform" href="#about">
              {t.footerLinksCorporate[1]}
            </a>
            <a className="text-gray-500 hover:text-[#fdc34d] transition-colors text-xs hover:translate-x-1 transition-transform" href="#vision">
              {t.footerLinksCorporate[2]}
            </a>
            <a className="text-gray-500 hover:text-[#fdc34d] transition-colors text-xs hover:translate-x-1 transition-transform" href="#connect">
              {t.footerLinksCorporate[3]}
            </a>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-white font-bold text-sm uppercase tracking-widest mb-2">{t.footerConnect}</span>
            <p className="text-xs tracking-wide text-gray-400">{t.officeAddress}</p>
            <a
              className="text-gray-500 hover:text-[#fdc34d] transition-colors text-xs hover:translate-x-1 transition-transform"
              href={mapsOpenHref}
              target="_blank"
              rel="noreferrer"
            >
              {t.mapsOpen}
            </a>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-white hover:text-[#fdc34d] cursor-pointer">language</span>
              <span className="material-symbols-outlined text-white hover:text-[#fdc34d] cursor-pointer">mail</span>
              <span className="material-symbols-outlined text-white hover:text-[#fdc34d] cursor-pointer">map</span>
            </div>
            <div className="mt-4">
              <p className="text-xs tracking-wide text-gray-400">{t.copyright}</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
