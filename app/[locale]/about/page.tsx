import { generatePageMetadata } from "@/app/lib/utils/metadata.utils";
import diamondsPileImage from "@/public/images/diamonds_pile.webp";
import { Metadata, type NextPage } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { jsonLd } from "./schema";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return generatePageMetadata(locale, {
    title: t("about.title"),
    description: t("about.meta.description"),
    keywords: t("about.meta.keywords"),
    alternates: {
      [locale]: locale === "de" ? "/about" : `/${locale}/about`,
    },
    ogImage: "/images/about-hero.webp",
  });
}

const AboutPage: NextPage = async () => {
  const t = await getTranslations("about");

  const VALUES = [
    {
      title: t("values.items.sustainability.title"),
      description: t("values.items.sustainability.description"),
    },
    {
      title: t("values.items.innovation.title"),
      description: t("values.items.innovation.description"),
    },
    {
      title: t("values.items.quality.title"),
      description: t("values.items.quality.description"),
    },
    {
      title: t("values.items.transparency.title"),
      description: t("values.items.transparency.description"),
    },
    {
      title: t("values.items.accessibility.title"),
      description: t("values.items.accessibility.description"),
    },
    {
      title: t("values.items.ethics.title"),
      description: t("values.items.ethics.description"),
    },
  ];

  const MORE_ABOUT_US = [
    {
      title: t("moreAboutUs.items.selection.title"),
      description: t("moreAboutUs.items.selection.description"),
    },
    {
      title: t("moreAboutUs.items.synthesis.title"),
      description: t("moreAboutUs.items.synthesis.description"),
    },
    {
      title: t("moreAboutUs.items.cvd.title"),
      description: t("moreAboutUs.items.cvd.description"),
    },
    {
      title: t("moreAboutUs.items.hpht.title"),
      description: t("moreAboutUs.items.hpht.description"),
    },
    {
      title: t("moreAboutUs.items.development.title"),
      description: t("moreAboutUs.items.development.description"),
    },
    {
      title: t("moreAboutUs.items.certification.title"),
      description: t("moreAboutUs.items.certification.description"),
    },
    {
      title: t("moreAboutUs.items.sustainability.title"),
      description: t("moreAboutUs.items.sustainability.description"),
    },
    {
      title: t("moreAboutUs.items.colored.title"),
      description: t("moreAboutUs.items.colored.description"),
    },
  ];

  const STATS = [
    {
      number: t("stats.items.years.number"),
      label: t("stats.items.years.label"),
    },
    {
      number: t("stats.items.diamonds.number"),
      label: t("stats.items.diamonds.label"),
    },
    {
      number: t("stats.items.carbon.number"),
      label: t("stats.items.carbon.label"),
    },
    {
      number: t("stats.items.experts.number"),
      label: t("stats.items.experts.label"),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="mx-auto px-4 md:px-6 py-16">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[var(--main-darker)] sm:text-5xl">
            {t("hero.title")}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-[var(--main-dark)]">
            {t("hero.description")}
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src={diamondsPileImage}
                alt="Lab-grown diamond creation process"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[var(--main-darker)]">
                {t("mission.title")}
              </h2>
              <p className="text-[var(--main-dark)]">
                {t("mission.description")}
              </p>
              <ul className="space-y-4 text-[var(--main-dark)]">
                <li className="flex items-center">
                  <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--main-lighter)] text-[var(--main-darker)]">
                    1
                  </span>
                  {t("mission.goals.1")}
                </li>
                <li className="flex items-center">
                  <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--main-lighter)] text-[var(--main-darker)]">
                    2
                  </span>
                  {t("mission.goals.2")}
                </li>
                <li className="flex items-center">
                  <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--main-lighter)] text-[var(--main-darker)]">
                    3
                  </span>
                  {t("mission.goals.3")}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-[var(--main-darker)]">
            {t("values.title")}
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="mb-3 text-xl font-semibold text-[var(--main-darker)]">
                  {value.title}
                </h3>
                <p className="text-[var(--main-dark)]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20 rounded-lg bg-[var(--main-darker)] px-8 py-12 text-white">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold">{stat.number}</div>
                <div className="text-[var(--main-lighter)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* More About Us Section */}
        <div className="mb-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-[var(--main-darker)]">
            {t("moreAboutUs.title")}
          </h2>
          <div className="grid gap-8 text-justify sm:grid-cols-2">
            {MORE_ABOUT_US.map((value) => (
              <div
                key={value.title}
                className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="mb-3 text-xl font-semibold text-[var(--main-darker)]">
                  {value.title}
                </h3>
                {value.description.split("\n").map((line, index) => (
                  <p key={index} className="mb-4">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
