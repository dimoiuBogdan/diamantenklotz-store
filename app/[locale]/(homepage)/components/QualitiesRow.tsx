import {
  DiamondIcon,
  LeafIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

const QualitiesRow = async () => {
  const t = await getTranslations("home.qualities");

  const DIAMOND_QUALITIES = [
    {
      icon: DiamondIcon,

      title: t("items.premium.title"),
      description: t("items.premium.description"),
    },
    {
      icon: LeafIcon,
      title: t("items.sustainable.title"),
      description: t("items.sustainable.description"),
    },
    {
      icon: SparklesIcon,
      title: t("items.engineering.title"),
      description: t("items.engineering.description"),
    },
    {
      icon: ShieldCheckIcon,
      title: t("items.certified.title"),
      description: t("items.certified.description"),
    },
  ];

  return (
    <section
      aria-label="Lab-Grown Diamond Benefits"
      className="w-full rounded-md bg-[var(--main-dark)] mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="sr-only">{t("title")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {DIAMOND_QUALITIES.map((quality) => (
            <div
              key={quality.title}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-[var(--main-darker)]/10"
            >
              <quality.icon className="size-12 text-[var(--main-lighter)] mb-4" />
              <h3 className="text-[var(--main-lighter)] font-semibold mb-2">
                {quality.title}
              </h3>
              <p className="text-[var(--main-lighter)]/80 text-sm">
                {quality.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualitiesRow;
