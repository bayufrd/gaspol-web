"use client";

import { useMemo, useState } from "react";
import InfoModal from "@/components/InfoModal";

export type BrandDocTopic = {
  key: string;
  title: string;
  content: string[];
};

export default function BrandDocPanel({
  kicker = "Dokumen GMC",
  title = "Profil Brand",
  desc = "Buka setiap bagian untuk melihat sesuai dokumen.",
  topics
}: {
  kicker?: string;
  title?: string;
  desc?: string;
  topics: BrandDocTopic[];
}) {
  const [topicKey, setTopicKey] = useState<string | null>(null);
  const activeTopic = useMemo(() => topics.find((t) => t.key === topicKey) ?? null, [topics, topicKey]);

  return (
    <>
      <InfoModal open={Boolean(activeTopic)} title={activeTopic?.title ?? ""} onClose={() => setTopicKey(null)}>
        <ul className="list-disc pl-5 space-y-2 text-on-surface-variant dark:text-gray-300">
          {(activeTopic?.content ?? []).map((line) => (
            <li key={line} className="leading-relaxed">
              {line}
            </li>
          ))}
        </ul>
      </InfoModal>

      <section className="px-4 sm:px-8 lg:px-24 pb-20 sm:pb-28">
        <div className="bg-surface-container-low dark:bg-[#1c1c1c] border border-outline-variant/30 dark:border-white/10 rounded-3xl p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <div className="text-xs font-display tracking-widest text-on-surface-variant uppercase">{kicker}</div>
              <h3 className="font-display text-3xl sm:text-4xl font-black tracking-tight mt-3">{title}</h3>
              <p className="text-on-surface-variant dark:text-gray-300 mt-5 leading-relaxed">{desc}</p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {topics.map((topic) => (
                <button
                  key={topic.key}
                  type="button"
                  onClick={() => setTopicKey(topic.key)}
                  className="text-left bg-white/80 dark:bg-white/5 border border-outline-variant/25 dark:border-white/10 rounded-2xl p-5 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="font-display text-xl font-black tracking-tight">{topic.title}</div>
                    <span className="material-symbols-outlined text-secondary">arrow_outward</span>
                  </div>
                  <div className="text-xs tracking-widest uppercase text-on-surface-variant dark:text-gray-300 font-headline mt-2">
                    Buka Detail
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

