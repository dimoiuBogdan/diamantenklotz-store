"use client";

import { useLocale } from "@/app/lib/hooks/useLocale";
import { cn } from "@/app/lib/utils/utils";
import { Locale } from "@/config/i18n.config";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ShadCN/CNDropdown";

import GermanyFlagImage from "@/public/images/languages/germany_flag.webp";
import RomaniaFlagImage from "@/public/images/languages/romania_flag.webp";
import UnitedKingdomFlagImage from "@/public/images/languages/usa_flag.webp";
import Image from "next/image";

const localeNames: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
  ro: "Română",
};

export default function LanguageSwitcher() {
  const { locale: currentLocale, locales, switchLocale } = useLocale();

  const getFlagImage = (locale: Locale) => {
    switch (locale) {
      case "de":
        return GermanyFlagImage;
      case "en":
        return UnitedKingdomFlagImage;
      case "ro":
        return RomaniaFlagImage;
      default:
        return RomaniaFlagImage;
    }
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Image
          src={getFlagImage(currentLocale as Locale)}
          alt={localeNames[currentLocale as Locale]}
          className="cursor-pointer h-4 w-6 aspect-auto"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => {
              switchLocale(loc);
            }}
            className={cn(
              "cursor-pointer flex items-center gap-2",
              loc === currentLocale && "font-medium bg-accent"
            )}
          >
            <Image
              src={getFlagImage(loc)}
              alt={localeNames[loc]}
              width={20}
              height={12}
              className="h-3 w-5"
            />
            {localeNames[loc]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
