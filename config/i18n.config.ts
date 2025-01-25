export const locales = ["de", "en", "ro"] as const;
export const defaultLocale = "de" as const;

export type Locale = (typeof locales)[number];

// Define timeZone for each locale
export const timeZones: Record<Locale, string> = {
  de: "Europe/Berlin",
  en: "Europe/London",
  ro: "Europe/Bucharest",
} as const;

// Define date formats for each locale
export const dateFormats: Record<Locale, Intl.DateTimeFormatOptions> = {
  de: {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  },
  en: {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  },
  ro: {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  },
} as const;

// Define number formats for each locale
export const numberFormats: Record<Locale, Intl.NumberFormatOptions> = {
  de: {
    currency: "EUR",
    style: "currency",
  },
  en: {
    currency: "GBP",
    style: "currency",
  },
  ro: {
    currency: "RON",
    style: "currency",
  },
} as const;
