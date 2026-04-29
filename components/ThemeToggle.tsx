"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      className="h-10 w-10 rounded-full grid place-items-center border border-outline-variant/40 bg-white/60 dark:bg-[#272626]/60 backdrop-blur hover:bg-white/80 dark:hover:bg-[#272626]/80 transition-colors"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <span className="material-symbols-outlined text-on-surface dark:text-white text-[20px]">
        {theme === "dark" ? "dark_mode" : "light_mode"}
      </span>
    </button>
  );
}

