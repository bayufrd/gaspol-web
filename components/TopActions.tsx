"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

type Lang = "id" | "en";

export default function TopActions() {
  const [lang, setLang] = useState<Lang>("id");

  useEffect(() => {
    const saved = (localStorage.getItem("lang") as Lang | null) ?? "id";
    setLang(saved === "en" ? "en" : "id");
  }, []);

  const toggleLang = () => {
    setLang((prev) => {
      const next: Lang = prev === "id" ? "en" : "id";
      localStorage.setItem("lang", next);
      return next;
    });
  };

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

