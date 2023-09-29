import "server-only";
import { Locale } from "./i18n-config";

type dictType = Record<string, any>;

const dictionaries = {
  en: () =>
    import("@/i18n/en.json").then(
      (module) => module.default as dictType
    ),
  th: () =>
    import("@/i18n/th.json").then(
      (module) => module.default as dictType
    ),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();