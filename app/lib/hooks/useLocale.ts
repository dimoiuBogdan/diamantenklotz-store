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

    router.replace(`/${newLocale}${currentPath}`);
  };

  return {
    locale,
    locales,
    switchLocale,
    t,
  };
}
