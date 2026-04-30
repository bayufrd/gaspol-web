import { cookies } from "next/headers";
import { DEFAULT_LANG, LANG_COOKIE, normalizeLang, type Lang } from "./lang";

export async function getServerLang(fallback: Lang = DEFAULT_LANG): Promise<Lang> {
  const store = await cookies();
  const value = store.get(LANG_COOKIE)?.value;
  return normalizeLang(value, fallback);
}
