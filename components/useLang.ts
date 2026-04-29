"use client";

import { useEffect, useState } from "react";

export type Lang = "id" | "en";

export function useLang(defaultLang: Lang = "id") {
  const [lang, setLang] = useState<Lang>(defaultLang);

  useEffect(() => {
    const saved = (localStorage.getItem("lang") as Lang | null) ?? defaultLang;
    setLang(saved === "en" ? "en" : "id");

    const onStorage = (e: StorageEvent) => {
      if (e.key !== "lang") return;
      const next = (e.newValue as Lang | null) ?? defaultLang;
      setLang(next === "en" ? "en" : "id");
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [defaultLang]);

  const setAndPersist = (next: Lang) => {
    setLang(next);
    localStorage.setItem("lang", next);
  };

  const toggle = () => setAndPersist(lang === "id" ? "en" : "id");

  return { lang, setLang: setAndPersist, toggleLang: toggle };
}

