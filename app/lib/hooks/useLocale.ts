import { Locale, locales } from "@/config/i18n.config";
import { useLocale as useNextIntlLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export function useLocale() {
  const locale = useNextIntlLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations();

  const switchLocale = (newLocale: Locale) => {
    // Get the current path without the locale prefix
    const currentPath = pathname.replace(`/${locale}`, "");

    // Construct the new path with the new locale
    const newPath =
      newLocale === "de" ? currentPath : `/${newLocale}${currentPath}`;

    router.push(newPath);
  };

  return {
    locale,
    locales,
    switchLocale,
    t,
  };
}
