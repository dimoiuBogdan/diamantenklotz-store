"use client";

import { useLocale } from "@/app/lib/hooks/useLocale";
import { cn } from "@/app/lib/utils/utils";
import { Locale } from "@/config/i18n.config";

import { Globe } from "lucide-react";
import { Button } from "../ShadCN/CNButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ShadCN/CNDropdown";

const localeNames: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
  ro: "Română",
};

export default function LanguageSwitcher() {
  const { locale, locales, switchLocale } = useLocale();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex cursor-pointer items-center gap-2 bg-background"
        >
          <Globe className="h-4 w-4" />
          <span>{localeNames[locale as Locale]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => {
              console.log("clicked", loc);

              switchLocale(loc);
            }}
            className={cn(
              "cursor-pointer",
              loc === locale && "font-medium bg-accent"
            )}
          >
            {localeNames[loc]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
