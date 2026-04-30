"use client";

import Image from "next/image";
import BrandDocPanel, { type BrandDocTopic } from "@/components/BrandDocPanel";
import { useLang } from "@/components/useLang";

export default function SambelColekSummary({
  logoSrc,
  docTopics,
  showDocPanel = true
}: {
  logoSrc: string;
  docTopics: BrandDocTopic[];
  showDocPanel?: boolean;
}) {
  const { lang } = useLang("id");

  const t =
    lang === "en"
      ? {
          overview: "Overview",
          quality: "Quality",
          audience: "Audience",
          asik: "ASIK",
          values: "Values",
          summaryLead: "Smart highlights with lightweight visuals.",
          cardsOverview: [
            { icon: "local_fire_department", title: "Spicy", desc: "Built for spicy food lovers." },
            { icon: "workspace_premium", title: "Signature", desc: "Sambal as the brand identity." },
            { icon: "storefront", title: "Comfort", desc: "Traditional taste with modern comfort." }
          ],
          quote: "Sambal is not just a complement — it is the soul of every dish.",
          cardsQuality: [
            { icon: "eco", title: "Fresh", desc: "Selected ingredients with maintained standards." },
            { icon: "sanitize", title: "Hygienic", desc: "Clean and consistent preparation." },
            { icon: "star", title: "Consistent", desc: "Stable taste and experience." }
          ],
          cardsAudience: [
            { icon: "school", title: "Students", desc: "Comfortable spot with friendly pricing." },
            { icon: "work", title: "Professionals", desc: "Practical meals between activities." },
            { icon: "family_restroom", title: "Families", desc: "Relaxed weekend lunch together." }
          ],
          cardsAsik: [
            { icon: "handshake", title: "Amanah", desc: "Trusted service and quality." },
            { icon: "account_tree", title: "Systematic & adaptive", desc: "Clear operations, ready to evolve." },
            { icon: "verified_user", title: "Integrity", desc: "Responsible and consistent." },
            { icon: "groups", title: "Collaborative", desc: "Synergy across teams." }
          ],
          valuesA: "Character",
          valuesB: "Work Principles",
          listA: ["Honest", "Disciplined", "Responsible", "Sincere", "Devoted"],
          listB: ["Fast", "Alert", "Accurate", "Neat", "Polite", "Cheerful"],
          assets: "Brand Assets",
          logo: "Logo",
          docKicker: "Dokumen GMC",
          docTitle: "Profil Brand",
          docDesc: "Buka setiap bagian untuk melihat sesuai dokumen."
        }
      : {
          overview: "Gambaran",
          quality: "Kualitas",
          audience: "Target",
          asik: "ASIK",
          values: "Nilai",
          summaryLead: "Highlight ringkas dengan visual ringan.",
          cardsOverview: [
            { icon: "local_fire_department", title: "Pedas", desc: "Fokus pada pecinta pedas." },
            { icon: "workspace_premium", title: "Rasa Khas", desc: "Sambal sebagai identitas." },
            { icon: "storefront", title: "Nyaman", desc: "Tradisional bertemu modern." }
          ],
          quote: "Sambal bukan sekadar pelengkap, melainkan jiwa dari setiap hidangan.",
          cardsQuality: [
            { icon: "eco", title: "Bahan Segar", desc: "Bahan pilihan dengan standar terjaga." },
            { icon: "sanitize", title: "Higienis", desc: "Proses olah yang bersih dan rapi." },
            { icon: "star", title: "Konsisten", desc: "Pengalaman rasa yang stabil." }
          ],
          cardsAudience: [
            { icon: "school", title: "Mahasiswa", desc: "Nyaman dan harga terjangkau." },
            { icon: "work", title: "Pekerja", desc: "Praktis di sela aktivitas." },
            { icon: "family_restroom", title: "Keluarga", desc: "Makan santai akhir pekan." }
          ],
          cardsAsik: [
            { icon: "handshake", title: "Amanah", desc: "Dapat dipercaya, menjaga kualitas." },
            { icon: "account_tree", title: "Sistematis & adaptif", desc: "Operasional jelas, siap berubah." },
            { icon: "verified_user", title: "Integritas", desc: "Bertanggung jawab, konsisten." },
            { icon: "groups", title: "Kolaboratif", desc: "Kerja sama sinergis." }
          ],
          valuesA: "Kepribadian",
          valuesB: "Prinsip Kerja",
          listA: ["Jujur", "Disiplin", "Tanggung Jawab", "Ikhlas", "Taqwa"],
          listB: ["Cepat", "Sigap", "Cermat", "Rapi", "Santun", "Ceria"],
          assets: "Aset Brand",
          logo: "Logo",
          docKicker: "Dokumen GMC",
          docTitle: "Profil Brand",
          docDesc: "Buka setiap bagian untuk melihat sesuai dokumen."
        };

  const sectionClass =
    "bg-surface-container-low dark:bg-[#1c1c1c] border border-outline-variant/30 dark:border-white/10 rounded-3xl p-8 sm:p-10";

  return (
    <>
      <section id="overview" className={sectionClass}>
        <div className="flex items-start justify-between gap-6">
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight">{t.overview}</h2>
          <span className="material-symbols-outlined text-secondary">restaurant_menu</span>
        </div>
        <p className="text-on-surface-variant dark:text-gray-300 mt-4 leading-relaxed">{t.summaryLead}</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {t.cardsOverview.map((x) => (
            <div key={x.title} className="rounded-2xl border border-outline-variant/25 dark:border-white/10 bg-white/70 dark:bg-white/5 p-5">
              <div className="flex items-center gap-2 text-on-surface dark:text-white">
                <span className="material-symbols-outlined text-secondary">{x.icon}</span>
                <span className="font-headline font-black text-xs tracking-widest uppercase">{x.title}</span>
              </div>
              <div className="text-on-surface-variant dark:text-gray-300 mt-3 text-sm leading-relaxed">{x.desc}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-3xl border border-outline-variant/25 dark:border-white/10 bg-white/70 dark:bg-white/5 p-8">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-secondary-container via-secondary-fixed-dim to-secondary grid place-items-center text-white">
              <span className="material-symbols-outlined">format_quote</span>
            </div>
            <div className="text-on-surface dark:text-white font-display text-2xl sm:text-3xl font-black tracking-tight leading-snug">
              {t.quote}
            </div>
          </div>
        </div>
      </section>

      <section id="quality" className={sectionClass}>
        <div className="flex items-start justify-between gap-6">
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight">{t.quality}</h2>
          <span className="material-symbols-outlined text-secondary">verified</span>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {t.cardsQuality.map((x) => (
            <div key={x.title} className="rounded-2xl border border-outline-variant/25 dark:border-white/10 bg-white/70 dark:bg-white/5 p-5">
              <div className="flex items-center gap-2 text-on-surface dark:text-white">
                <span className="material-symbols-outlined text-secondary">{x.icon}</span>
                <span className="font-headline font-black text-xs tracking-widest uppercase">{x.title}</span>
              </div>
              <div className="text-on-surface-variant dark:text-gray-300 mt-3 text-sm leading-relaxed">{x.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="audience" className={sectionClass}>
        <div className="flex items-start justify-between gap-6">
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight">{t.audience}</h2>
          <span className="material-symbols-outlined text-secondary">groups</span>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {t.cardsAudience.map((x) => (
            <div key={x.title} className="rounded-2xl border border-outline-variant/25 dark:border-white/10 bg-white/70 dark:bg-white/5 p-5">
              <div className="flex items-center gap-2 text-on-surface dark:text-white">
                <span className="material-symbols-outlined text-secondary">{x.icon}</span>
                <span className="font-headline font-black text-xs tracking-widest uppercase">{x.title}</span>
              </div>
              <div className="text-on-surface-variant dark:text-gray-300 mt-3 text-sm leading-relaxed">{x.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="asik" className={sectionClass}>
        <div className="flex items-start justify-between gap-6">
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight">{t.asik}</h2>
          <span className="material-symbols-outlined text-secondary">account_tree</span>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {t.cardsAsik.map((x) => (
            <div key={x.title} className="rounded-2xl border border-outline-variant/25 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-primary-container via-primary to-secondary grid place-items-center text-white">
                  <span className="material-symbols-outlined">{x.icon}</span>
                </div>
                <div>
                  <div className="font-display text-xl font-black tracking-tight">{x.title}</div>
                  <div className="text-on-surface-variant dark:text-gray-300 mt-1 text-sm leading-relaxed">{x.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="values" className={sectionClass}>
        <div className="flex items-start justify-between gap-6">
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight">{t.values}</h2>
          <span className="material-symbols-outlined text-secondary">checklist</span>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-outline-variant/25 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6">
            <div className="font-headline font-black text-xs tracking-widest uppercase text-on-surface dark:text-white">{t.valuesA}</div>
            <ul className="mt-4 space-y-2 text-on-surface-variant dark:text-gray-300">
              {t.listA.map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px] mt-[2px]">check_circle</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-outline-variant/25 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6">
            <div className="font-headline font-black text-xs tracking-widest uppercase text-on-surface dark:text-white">{t.valuesB}</div>
            <ul className="mt-4 space-y-2 text-on-surface-variant dark:text-gray-300">
              {t.listB.map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px] mt-[2px]">check_circle</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:col-span-2 rounded-2xl border border-outline-variant/25 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 flex items-center justify-between gap-6 flex-col sm:flex-row">
            <div>
              <div className="font-display text-2xl font-black tracking-tight text-on-surface dark:text-white">{t.assets}</div>
              <div className="text-on-surface-variant dark:text-gray-300 mt-2">{t.logo}</div>
            </div>
            <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-5 py-3 border border-outline-variant/25 shadow-sm">
              <Image src={logoSrc} alt="Logo" width={96} height={96} className="h-16 w-16 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {showDocPanel ? (
        <BrandDocPanel kicker={t.docKicker} title={t.docTitle} desc={t.docDesc} topics={docTopics} />
      ) : null}
    </>
  );
}
