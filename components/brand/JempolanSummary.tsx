"use client";

import Image from "next/image";
import BrandDocPanel, { type BrandDocTopic } from "@/components/BrandDocPanel";
import { useLang } from "@/components/useLang";

export default function JempolanSummary({
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
          quality: "Commitment",
          audience: "Audience",
          asik: "ASIK",
          values: "Values",
          summaryLead: "Four senses, one comfort — taste, ambience, and service in harmony.",
          cardsOverview: [
            { icon: "restaurant", title: "Taste", desc: "Menus designed to feel ‘jempolan’." },
            { icon: "weekend", title: "Comfort", desc: "A warm, inclusive atmosphere." },
            { icon: "sentiment_satisfied", title: "Service", desc: "Sincere hospitality, every visit." }
          ],
          quote: "More than a coffee shop — a home for taste and stories.",
          cardsQuality: [
            { icon: "cleaning_services", title: "SOP", desc: "Cleanliness and neatness standards." },
            { icon: "tips_and_updates", title: "Innovation", desc: "Continuous menu and service improvement." },
            { icon: "star", title: "Consistency", desc: "A memorable, repeatable experience." }
          ],
          cardsAudience: [
            { icon: "laptop_mac", title: "Work & focus", desc: "A calm space to get things done." },
            { icon: "business_center", title: "Meetings", desc: "Comfortable for business meetups." },
            { icon: "diversity_3", title: "Friends & family", desc: "Quality time together." }
          ],
          cardsAsik: [
            { icon: "handshake", title: "Amanah", desc: "Trusted quality and service." },
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
          docTitle: "Brand Profile",
          docDesc: "Open each section to view the official document content."
        }
      : {
          overview: "Gambaran",
          quality: "Komitmen",
          audience: "Target",
          asik: "ASIK",
          values: "Nilai",
          summaryLead: "Four senses, one comfort — rasa, suasana, dan pelayanan yang selaras.",
          cardsOverview: [
            { icon: "restaurant", title: "Rasa", desc: "Menu dirancang dengan standar ‘jempolan’." },
            { icon: "weekend", title: "Nyaman", desc: "Atmosfer hangat dan inklusif." },
            { icon: "sentiment_satisfied", title: "Pelayanan", desc: "Keramahan tulus di setiap kunjungan." }
          ],
          quote: "Lebih dari sekadar coffee shop—rumah untuk rasa dan cerita.",
          cardsQuality: [
            { icon: "cleaning_services", title: "SOP", desc: "Menjaga standar kebersihan dan kerapian." },
            { icon: "tips_and_updates", title: "Inovasi", desc: "Terus berkembang pada menu dan layanan." },
            { icon: "star", title: "Konsisten", desc: "Pengalaman yang berkesan dan stabil." }
          ],
          cardsAudience: [
            { icon: "laptop_mac", title: "Kerja & fokus", desc: "Ruang tenang untuk produktif." },
            { icon: "business_center", title: "Meeting", desc: "Nyaman untuk pertemuan bisnis." },
            { icon: "diversity_3", title: "Teman & keluarga", desc: "Tempat quality time bersama." }
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
          <span className="material-symbols-outlined text-secondary">restaurant</span>
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
            <span className="material-symbols-outlined text-secondary mt-1">format_quote</span>
            <p className="text-on-surface dark:text-white font-display text-xl sm:text-2xl font-black tracking-tight leading-snug">{t.quote}</p>
          </div>
        </div>
      </section>

      <section id="quality" className={sectionClass}>
        <div className="flex items-start justify-between gap-6">
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight">{t.quality}</h2>
          <span className="material-symbols-outlined text-secondary">workspace_premium</span>
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
          <span className="material-symbols-outlined text-secondary">group</span>
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
          <span className="material-symbols-outlined text-secondary">handshake</span>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.cardsAsik.map((x) => (
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

      <section id="values" className={sectionClass}>
        <div className="flex items-start justify-between gap-6">
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight">{t.values}</h2>
          <span className="material-symbols-outlined text-secondary">verified</span>
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
