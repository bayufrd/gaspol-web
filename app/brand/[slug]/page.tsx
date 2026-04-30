import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BrandDocPanel, { type BrandDocTopic } from "@/components/BrandDocPanel";
import TopActions from "@/components/TopActions";
import SambelColekSummary from "@/components/brand/SambelColekSummary";
import SambelNyahtiSummary from "@/components/brand/SambelNyahtiSummary";
import GreenBeansSummary from "@/components/brand/GreenBeansSummary";
import JempolanSummary from "@/components/brand/JempolanSummary";
import { getServerLang } from "@/lib/lang.server";

type BrandKey = "sambelcolek" | "sambelenyahti" | "greenbeans" | "jempolan";

const BRAND_BY_SLUG: Record<
  string,
  {
    key: BrandKey;
    name: string;
    tagline: string;
    logo: string;
    heroImage: string;
    sections?: Array<{ title: string; paragraphs: string[] }>;
    docTopics?: BrandDocTopic[];
  }
> = {
  "sambel-colek": {
    key: "sambelcolek",
    name: "Sambel Colek Asli Ngampel City",
    tagline: "Murah, Kenyang, Pedas, Puas",
    logo: "/icon/sambelcolek.png",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJEN8WpwzvzTZSI6KaAbv4nTU37zifwW0rmnPbN5jDvwKtd_GzouUHfA4hnrfX0tUn047hjSgApD0DoOIDBU85x1hQA8Z93zyRcn75CkEXZUJJzTaCqb8FKyFuL2Fv-exKfsD9Y2RYzqLThPHLvgFFTXyksmInEDrO5YK8zeiIWAyq21538Wt-_fQDx-hNoC4EunQroCEaMNdMi2vAFGsngQ9BpSLyBxHortchGqcEwYwv4dUSh2bpaKL09Avx6t6dhGjl-MqVx8o",
    docTopics: [
      {
        key: "filosofi",
        title: "I. Filosofi Rasa Khas Sambel Colek",
        content: [
          "Berawal dari kecintaan terhadap kekayaan kuliner Nusantara, Rumah Makan Sambel Colek hadir sebagai oase bagi para pecinta pedas. Kami percaya bahwa sambal bukan sekadar pelengkap, melainkan jiwa dari setiap hidangan. Dengan semangat menyajikan keaslian rasa tradisional yang dipadukan dengan kenyamanan modern, kami berkomitmen untuk menghadirkan pengalaman bersantap yang tak terlupakan bagi setiap pengunjung."
        ]
      },
      {
        key: "kualitas",
        title: "II. Kualitas yang Tidak Berkompromi",
        content: [
          "Di Sambel Colek, setiap ulekan sambal adalah sebuah dedikasi. Kami hanya menggunakan bahan-bahan segar pilihan untuk memastikan setiap \"colekan\" memberikan ledakan rasa yang pas. Setiap menu yang kami hidangkan diolah dengan standar kebersihan dan kualitas rasa yang tinggi."
        ]
      },
      {
        key: "tempat",
        title: "III. Lebih dari Sekedar Tempat Makan",
        content: [
          "Kami memahami bahwa makan adalah momen untuk berbagi. Itulah mengapa Rumah Makan Sambel Colek dirancang untuk menjadi tempat yang ramah bagi siapa saja, mulai dari mahasiswa yang mencari kenyamanan dan harga terjangkau, hingga keluarga yang ingin menikmati makan siang santai di akhir pekan."
        ]
      },
      {
        key: "visi-misi",
        title: "IV. Visi & Misi Kami",
        content: [
          "Visi:",
          "Menjadi perusahaan bidang F&B yang terus berkembang dan maju, mensejahterakan orang-orang yang mendukung dalam mengembangkan perusahaan, serta dapat memberikan manfaat bagi masyarakat.",
          "Misi:",
          "“A S I K”",
          "▪ Amanah; Dapat dipercaya dan menjunjung tinggi nilai-nilai kepercayaan; *Produk dan Layanannya.",
          "▪ Sistematis dan adaptif; Menjaga sistem operasi kerja yang baik dan jelas, serta siap menghadapi perubahan dengan inovasi; *Sistem operasi kerjanya.",
          "▪ Integritas; Tegas berkarakter, bertanggung jawab, dan menjaga konsistensi; *Sumber Daya Manusianya.",
          "▪ Kolaboratif; Membangun dan menjaga sistem kerja sama yang sinergis. *Pengembangannya."
        ]
      },
      {
        key: "nilai",
        title: "V. Nilai – nilai Perusahaan",
        content: [
          "1. Landasan Dasar Kepribadian Karyawan:",
          "▪ Jujur",
          "▪ Disiplin",
          "▪ Tanggung Jawab",
          "▪ Ikhlas",
          "▪ Taqwa",
          "2. Prinsip Dasar Bekerja Karyawan:",
          "▪ Cepat",
          "▪ Sigap",
          "▪ Cermat",
          "▪ Rapi",
          "▪ Santun",
          "▪ Ceria",
          "VI. Logo Perusahaan"
        ]
      }
    ]
  },
  "sambel-e-nyahti": {
    key: "sambelenyahti",
    name: "Sambel'e Nyah Ti",
    tagline: "JUwara PueDEZnya",
    logo: "/icon/sambelenyahti.png",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDC58i8ukiK23Df18wqvi3zkbDiF2LJz2ISBxnXCHVgStZJK8SvXEZp50IohUBysS5J20ajKdUnzQ0OJl-H4fuJWW-31JzhRk2rCRbNwqZLbA3wJ665Uvb-5PZm3HZ_k7TFSyIXySer9yL8XcJZlTsmAic2i4pqS9JdNQyh_kNpMEkHZw30krSWqUvEhE9NjWfLDmqSGmoXd4-vnzX2fsrgO99o7vj69RAMZZpbK3ChAdEULesw-uo2YaStdMni5PF9_XEFkqhMb-0",
    docTopics: [
      {
        key: "filosofi",
        title: "I. Filosofi Rasa Khas Sambel’e Nyah Ti",
        content: [
          "Berawal dari kecintaan terhadap kekayaan kuliner Nusantara, Rumah Makan Sambel’e Nyah Ti hadir sebagai oase bagi para pecinta pedas. Kami percaya bahwa sambal bukan sekadar pelengkap, melainkan jiwa dari setiap hidangan. Dengan semangat menyajikan keaslian rasa tradisional yang dipadukan dengan kenyamanan modern, kami berkomitmen untuk menghadirkan pengalaman bersantap yang tak terlupakan bagi setiap pengunjung."
        ]
      },
      {
        key: "kualitas",
        title: "II. Kualitas yang Tidak Berkompromi",
        content: [
          "Di Sambel’e Nyah Ti, setiap ulekan sambal adalah sebuah dedikasi. Kami hanya menggunakan bahan-bahan segar pilihan untuk memastikan setiap \"suapan\" memberikan ledakan rasa yang pas. Setiap menu yang kami hidangkan diolah dengan standar kebersihan dan kualitas rasa yang tinggi."
        ]
      },
      {
        key: "tempat",
        title: "III. Lebih dari Sekedar Tempat Makan",
        content: [
          "Kami memahami bahwa makan adalah momen untuk berbagi. Itulah mengapa Rumah Makan Sambel’e Nyah Ti dirancang untuk menjadi tempat yang ramah bagi siapa saja, mulai dari mahasiswa yang mencari kenyamanan dan harga terjangkau, hingga keluarga yang ingin menikmati makan siang santai di akhir pekan."
        ]
      },
      {
        key: "visi-misi",
        title: "IV. Visi & Misi Kami",
        content: [
          "Visi:",
          "Menjadi perusahaan bidang F&B yang terus berkembang dan maju, mensejahterakan orang-orang yang mendukung dalam mengembangkan perusahaan, serta dapat memberikan manfaat bagi masyarakat.",
          "Misi:",
          "“A S I K”",
          "▪ Amanah;",
          "Dapat dipercaya dan menjunjung tinggi nilai-nilai kepercayaan;",
          "*Produk dan Layanannya.",
          "▪ Sistematis dan adaptif;",
          "Menjaga sistem operasi kerja yang baik dan jelas, serta siap menghadapi perubahan dengan inovasi;",
          "*Sistem operasi kerjanya.",
          "▪ Integritas;",
          "Tegas berkarakter, bertanggung jawab, dan menjaga konsistensi;",
          "*Sumber Daya Manusianya.",
          "▪ Kolaboratif;",
          "Membangun dan menjaga sistem kerja sama yang sinergis.",
          "*Pengembangannya."
        ]
      },
      {
        key: "nilai",
        title: "V. Nilai – nilai Perusahaan",
        content: [
          "1. Landasan Dasar Kepribadian Karyawan:",
          "▪ Jujur",
          "▪ Disiplin",
          "▪ Tanggung Jawab",
          "▪ Ikhlas",
          "▪ Taqwa",
          "2. Prinsip Dasar Bekerja Karyawan:",
          "▪ Cepat",
          "▪ Sigap",
          "▪ Cermat",
          "▪ Rapi",
          "▪ Santun",
          "▪ Ceria",
          "VI. Logo Perusahaan"
        ]
      }
    ]
  },
  "green-beans": {
    key: "greenbeans",
    name: "Green Beans",
    tagline: "Sip – Relax - Repeat",
    logo: "/icon/greenbeans.png",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDP1J1i9-X-Eg_UNw10GECXr2XFQRiHNByqTIFyoS8i1W2fFQr8w2-T-FygSmM3-9h_D2d8AflIVnLla300RP8a1CHSw0XkWOmLGm4EhA_6EA3oF-WIpBvMEV1cauoBYx8tsBksje8HW5OCcRFSgu8ra7SG5ua1ozX7X0Y-A3JiD20zzZAp_7UKXTXzEqPQjaWCAJGVqKTGWMzmGntMEyDyg7cdeLBvxEz3M0lJgDXAaBGkSqAgFgoZ9vjH6s4PRvecVDs3RUuyaC0",
    docTopics: [
      {
        key: "tentang",
        title: "I. Tentang Green Beans",
        content: [
          "Lahir dari apresiasi mendalam terhadap budaya kopi yang terus berkembang, Greenbeans hadir sebagai oase bagi para pencinta kopi, pelajar, hingga profesional. Kami memahami bahwa kedai kopi bukan sekadar tempat untuk menikmati minuman, melainkan sebuah ruang komunal di mana ide-ide besar bermula."
        ]
      },
      {
        key: "filosofi",
        title: "II. Filosofi Kami",
        content: [
          "Nama \"Greenbeans\" bukan sekedar identitas, namun merepresentasikan awal dari segala kesempurnaan rasa. Kami berkomitmen untuk menyajikan pengalaman kopi yang autentik melalui pemilihan biji kopi berkualitas tinggi dan teknik penyeduhan yang presisi, demi menghasilkan cita rasa yang konsisten di setiap produk yang kami hidangkan."
        ]
      },
      {
        key: "ruang",
        title: "III. Ruang Tanpa Batas Waktu",
        content: [
          "Green Beans dirancang untuk menjadi ruang komunal yang inklusif. Baik Anda sedang mencari ketenangan untuk menyelesaikan pekerjaan, mengadakan pertemuan bisnis, atau sekedar ingin menghabiskan waktu berkualitas bersama teman dan keluarga, kami menyediakan atmosfer yang mendukung setiap momen berharga Anda."
        ]
      },
      {
        key: "visi-misi",
        title: "IV. Visi & Misi Kami",
        content: [
          "Visi:",
          "Menjadi perusahaan bidang F&B (Coffe Shop) yang terus berkembang dan maju, mensejahterakan orang-orang yang mendukung dalam mengembangkan perusahaan, serta dapat memberikan manfaat bagi masyarakat.",
          "Misi:",
          "“A S I K”",
          "▪ Amanah;",
          "Dapat dipercaya dan menjunjung tinggi nilai-nilai kepercayaan;",
          "*Produk dan Layanannya.",
          "▪ Sistematis dan adaptif;",
          "Menjaga sistem operasi kerja yang baik dan jelas, serta siap menghadapi perubahan dengan inovasi;",
          "*Sistem operasi kerjanya.",
          "▪ Integritas;",
          "Tegas berkarakter, bertanggung jawab, dan menjaga konsistensi;",
          "*Sumber Daya Manusianya.",
          "▪ Kolaboratif;",
          "Membangun dan menjaga sistem kerja sama yang sinergis.",
          "*Pengembangannya."
        ]
      },
      {
        key: "nilai",
        title: "V. Nilai – nilai Perusahaan",
        content: [
          "1. Landasan Dasar Kepribadian Karyawan:",
          "▪ Jujur",
          "▪ Disiplin",
          "▪ Tanggung Jawab",
          "▪ Ikhlas",
          "▪ Taqwa",
          "2. Prinsip Dasar Bekerja Karyawan:",
          "▪ Cepat",
          "▪ Sigap",
          "▪ Cermat",
          "▪ Rapi",
          "▪ Santun",
          "▪ Ceria",
          "VI. Logo Perusahaan"
        ]
      }
    ]
  },
  jempolan: {
    key: "jempolan",
    name: "Jempolan Coffee & Eatery",
    tagline: "Four Senses, One Comfort",
    logo: "/icon/jempolan.png",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClwfpDBjpEoU95xjT55YkiycpfdzCQw98M_dvO-gJnY16aCZVFvsOjyHo9fH9ibDbYn0QsLuUZ7X_O4390U5jrsbEg-V2uvZWrIw3_o48bjY2dKhad-b6jDYjrsyq1H1CwxV6aQOpGr7LDtH4zsNqW9IsrgdUkxSh3S-Z6F4YO9ee88jXqeo7OGcgR_6KygtWZBUlUhdk8ESATvDy3JWFavb1DhczZjSAk2c3vSljCRBsgwNLxx2bK8KNOTXX299qVWcQ2a6yxABA",
    docTopics: [
      {
        key: "rumah-rasa",
        title: "I. Jempolan adalah Rumah Rasa dan Cerita",
        content: [
          "Berawal dari sebuah gairah untuk menghadirkan lebih dari sekedar tempat makan dan minum, Jempolan Coffee & Eatery hadir sebagai destinasi kuliner yang mengutamakan harmoni antara kualitas rasa, kenyamanan suasana, dan ketulusan pelayanan.",
          "Nama \"Jempolan\" bukan sekedar identitas, melainkan janji kami kepada setiap tamu. Kami percaya bahwa setiap hidangan yang disajikan harus memenuhi standar tertinggi, yaitu standar yang membuat siapa pun yang menikmatinya merasa puas dan memberikan apresiasi terbaik."
        ]
      },
      {
        key: "ruang",
        title: "II. Lebih dari Sekedar Coffee Shop",
        content: [
          "Jempolan Coffee & Eatery dirancang untuk menjadi ruang komunal yang inklusif. Baik Anda sedang mencari ketenangan untuk menyelesaikan pekerjaan, mengadakan pertemuan bisnis, atau sekedar ingin menghabiskan waktu berkualitas bersama teman dan keluarga, kami menyediakan atmosfer yang mendukung setiap momen berharga Anda."
        ]
      },
      {
        key: "komitmen",
        title: "III. Komitmen Kami",
        content: [
          "Kami berkomitmen untuk terus berinovasi dalam menu dan layanan, menjaga standar kebersihan dan kerapian (SOP), serta memastikan bahwa setiap kunjungan Anda ke Jempolan Coffee & Eatery selalu meninggalkan kesan yang \"Jempolan\"."
        ]
      },
      {
        key: "visi-misi",
        title: "IV. Visi & Misi Kami",
        content: [
          "Visi:",
          "Menjadi perusahaan bidang F&B (Cafe & Resto) yang terus berkembang dan maju, mensejahterakan orang-orang yang mendukung dalam mengembangkan perusahaan, serta dapat memberikan manfaat bagi masyarakat.",
          "Misi:",
          "“A S I K”",
          "▪ Amanah;",
          "Dapat dipercaya dan menjunjung tinggi nilai-nilai kepercayaan;",
          "*Produk dan Layanannya.",
          "▪ Sistematis dan adaptif;",
          "Menjaga sistem operasi kerja yang baik dan jelas, serta siap menghadapi perubahan dengan inovasi;",
          "*Sistem operasi kerjanya.",
          "▪ Integritas;",
          "Tegas berkarakter, bertanggung jawab, dan menjaga konsistensi;",
          "*Sumber Daya Manusianya.",
          "▪ Kolaboratif;",
          "Membangun dan menjaga sistem kerja sama yang sinergis.",
          "*Pengembangannya."
        ]
      },
      {
        key: "nilai",
        title: "V. Nilai – nilai",
        content: [
          "1. Landasan Dasar Kepribadian Karyawan:",
          "▪ Jujur",
          "▪ Disiplin",
          "▪ Tanggung Jawab",
          "▪ Ikhlas",
          "▪ Taqwa",
          "2. Prinsip Dasar Bekerja Karyawan:",
          "▪ Cepat",
          "▪ Sigap",
          "▪ Cermat",
          "▪ Rapi",
          "▪ Santun",
          "▪ Ceria"
        ]
      }
    ]
  }
};

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = BRAND_BY_SLUG[slug];
  if (!brand) notFound();

  const lang = await getServerLang();
  const ui =
    lang === "en"
      ? { back: "Back", brands: "Brands" }
      : { back: "Kembali", brands: "Brand" };

  const nameByKey: Partial<Record<BrandKey, { id: string; en: string }>> = {
    sambelcolek: { id: "Sambel Colek Asli Ngampel City", en: "Sambel Colek (Ngampel City)" },
    sambelenyahti: { id: "Sambel'e Nyah Ti", en: "Sambel'e Nyah Ti" },
    greenbeans: { id: "Green Beans", en: "Green Beans" },
    jempolan: { id: "Jempolan Coffee & Eatery", en: "Jempolan Coffee & Eatery" }
  };

  const taglineByKey: Partial<Record<BrandKey, { id: string; en: string }>> = {
    sambelcolek: { id: "Murah, Kenyang, Pedas, Puas", en: "Affordable, filling, spicy, satisfying" },
    sambelenyahti: { id: "JUwara PueDEZnya", en: "Champion-level spiciness" },
    greenbeans: { id: "Sip – Relax - Repeat", en: "Sip – Relax - Repeat" },
    jempolan: { id: "Coffee & Eatery", en: "Coffee & Eatery" }
  };

  const brandName = nameByKey[brand.key]?.[lang] ?? brand.name;
  const brandTagline = taglineByKey[brand.key]?.[lang] ?? brand.tagline;

  const isSambelColek = brand.key === "sambelcolek";
  const isSambelNyahti = brand.key === "sambelenyahti";
  const isGreenBeans = brand.key === "greenbeans";
  const isJempolan = brand.key === "jempolan";
  const isSummaryBrand = isSambelColek || isSambelNyahti || isGreenBeans || isJempolan;

  return (
    <>
      <nav className="bg-white/80 dark:bg-[#272626]/80 backdrop-blur-lg fixed top-0 w-full z-50 shadow-sm dark:shadow-none bg-surface-container-low">
        <div className="flex justify-between items-center px-4 sm:px-8 py-4 max-w-full mx-auto">
          <div className="flex items-center gap-3">
            <Link
              href="/#brands"
              className="h-10 w-10 rounded-full grid place-items-center border border-outline-variant/40 bg-white/60 dark:bg-[#272626]/60 backdrop-blur hover:bg-white/80 dark:hover:bg-[#272626]/80 transition-colors"
              aria-label={ui.back}
              title={ui.back}
            >
              <span className="material-symbols-outlined text-on-surface dark:text-white text-[20px]">
                arrow_back
              </span>
            </Link>
            <div className="dark:bg-white dark:rounded-xl dark:px-3 dark:py-2 dark:shadow-sm">
              <Image src="/icon/Gaspoll.png" alt="GASPOLL Logo" width={140} height={32} className="h-8 w-auto" priority />
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/#brands"
              className="text-sm font-headline font-black uppercase tracking-widest text-on-surface-variant dark:text-gray-300 hover:text-on-surface dark:hover:text-white transition-colors"
            >
              {ui.brands}
            </Link>
            <span className="text-on-surface-variant/40">/</span>
            <span className="text-sm font-headline font-black uppercase tracking-widest text-on-surface dark:text-white">
              {brandName}
            </span>
          </div>
          <TopActions />
        </div>
      </nav>

      <main className="pt-28">
        <section className="relative min-h-[520px] sm:min-h-[640px] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image src={brand.heroImage} alt={brandName} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-primary/60 backdrop-multiply"></div>
          </div>
          <div className="relative z-10 w-full px-4 sm:px-8 lg:px-24">
            <div className="max-w-4xl text-white">
              <span className="font-headline font-bold text-secondary-fixed uppercase tracking-[0.35em] text-xs sm:text-sm mb-6 block">
                {lang === "en" ? "Managed Brand" : "Brand Di Bawah Manajemen"}
              </span>
              <div className="flex items-start gap-5">
                <div className="h-16 w-16 rounded-2xl bg-white grid place-items-center border border-white/30 shadow-sm">
                  <Image src={brand.logo} alt={`${brandName} logo`} width={64} height={64} className="h-12 w-12 object-contain" />
                </div>
                <div>
                  <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[1.0]">
                    {brandName}
                  </h1>
                  <div className="mt-4 text-secondary-fixed font-headline font-black tracking-widest uppercase text-xs sm:text-sm">
                    “{brandTagline}”
                  </div>
                </div>
              </div>
              {isSummaryBrand ? (
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur px-5 py-3 rounded-full">
                    <span className="font-headline font-black text-xs tracking-widest uppercase">
                      <span className="material-symbols-outlined text-secondary-fixed mr-2 align-[-0.2em]">
                        {isSambelColek || isSambelNyahti ? "local_fire_department" : "coffee"}
                      </span>
                      {isSambelColek || isSambelNyahti
                        ? lang === "en"
                          ? "Spicy Culinary"
                          : "Kuliner Pedas"
                        : lang === "en"
                          ? "Coffee & Eatery"
                          : "Coffee & Eatery"}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur px-5 py-3 rounded-full">
                    <span className="font-headline font-black text-xs tracking-widest uppercase">
                      <span className="material-symbols-outlined text-secondary-fixed mr-2 align-[-0.2em]">
                        {isSambelColek || isSambelNyahti ? "restaurant_menu" : "groups"}
                      </span>
                      {isSambelColek || isSambelNyahti
                        ? lang === "en"
                          ? "Signature Sambal"
                          : "Sambal Andalan"
                        : lang === "en"
                          ? "Community Space"
                          : "Ruang Komunal"}
                    </span>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-8 lg:px-24 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <div className="bg-surface-container-low dark:bg-[#1c1c1c] border border-outline-variant/30 dark:border-white/10 rounded-3xl p-8">
                <div className="text-xs font-display tracking-widest text-on-surface-variant uppercase">
                  {lang === "en" ? "Brand Profile" : "Profil Brand"}
                </div>
                <div className="font-display text-2xl font-black tracking-tight mt-3">{brandName}</div>
                <div className="text-on-surface-variant dark:text-gray-300 mt-4 leading-relaxed">
                  {lang === "en"
                    ? "A smart summary for landing needs, with lightweight and fast visuals."
                    : "Ringkasan cerdas untuk kebutuhan landing, dengan visualisasi yang ringan dan cepat."}
                </div>
                <div className="mt-8 flex flex-col gap-3">
                  {isSummaryBrand
                    ? [
                        { href: "#overview", label: lang === "en" ? "Overview" : "Gambaran" },
                        { href: "#quality", label: lang === "en" ? "Quality" : "Kualitas" },
                        { href: "#audience", label: lang === "en" ? "Audience" : "Target" },
                        { href: "#asik", label: "ASIK" },
                        { href: "#values", label: lang === "en" ? "Values" : "Nilai" }
                      ].map((x) => (
                        <a
                          key={x.href}
                          href={x.href}
                          className="text-sm font-headline font-black uppercase tracking-widest text-on-surface-variant dark:text-gray-300 hover:text-on-surface dark:hover:text-white transition-colors"
                        >
                          {x.label}
                        </a>
                      ))
                    : (brand.sections ?? []).map((s) => (
                        <a
                          key={s.title}
                          href={`#${encodeURIComponent(s.title)}`}
                          className="text-sm font-headline font-black uppercase tracking-widest text-on-surface-variant dark:text-gray-300 hover:text-on-surface dark:hover:text-white transition-colors"
                        >
                          {s.title}
                        </a>
                      ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              {isSummaryBrand && brand.docTopics?.length ? (
                isSambelColek ? (
                  <SambelColekSummary logoSrc={brand.logo} docTopics={brand.docTopics} />
                ) : isSambelNyahti ? (
                  <SambelNyahtiSummary logoSrc={brand.logo} docTopics={brand.docTopics} />
                ) : isGreenBeans ? (
                  <GreenBeansSummary logoSrc={brand.logo} docTopics={brand.docTopics} />
                ) : (
                  <JempolanSummary logoSrc={brand.logo} docTopics={brand.docTopics} />
                )
              ) : (
                (brand.sections ?? []).map((s) => (
                  <section
                    key={s.title}
                    id={encodeURIComponent(s.title)}
                    className="bg-surface-container-low dark:bg-[#1c1c1c] border border-outline-variant/30 dark:border-white/10 rounded-3xl p-8 sm:p-10"
                  >
                    <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight">{s.title}</h2>
                    <div className="mt-6 space-y-4 text-on-surface-variant dark:text-gray-300 leading-relaxed">
                      {s.paragraphs.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  </section>
                ))
              )}

            </div>
          </div>
        </section>
      </main>
    </>
  );
}
