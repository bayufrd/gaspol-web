export type Lang = "id" | "en";

export const DEFAULT_LANG: Lang = "id";
export const LANG_COOKIE = "lang";

export function normalizeLang(value: unknown, fallback: Lang = DEFAULT_LANG): Lang {
  return value === "en" || value === "id" ? value : fallback;
}

