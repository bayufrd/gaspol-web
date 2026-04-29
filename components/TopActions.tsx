"use client";

import ThemeToggle from "@/components/ThemeToggle";
import { useLang } from "@/components/useLang";

export default function TopActions() {
  const { lang, toggleLang } = useLang("id");

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={toggleLang}
        className="h-10 px-4 rounded-full border border-outline-variant/40 bg-white/60 dark:bg-[#272626]/60 backdrop-blur hover:bg-white/80 dark:hover:bg-[#272626]/80 transition-colors text-xs font-headline font-black tracking-widest"
        aria-label="Toggle language"
        title="Toggle language"
      >
        {lang.toUpperCase()}
      </button>
      <ThemeToggle />
    </div>
  );
}
