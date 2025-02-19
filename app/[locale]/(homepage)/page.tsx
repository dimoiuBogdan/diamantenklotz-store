import { generatePageMetadata } from "@/app/lib/utils/metadata.utils";
import manWithDiamondImage from "@/public/images/man_with_diamond.webp";
import sustainableImage from "@/public/images/susteinability.webp";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ComparisonTable from "./components/ComparisonTable";
import Discover from "./components/Discover";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import InfoRow from "./components/InfoRow";
import { default as Interaction } from "./components/Interaction";
import QualitiesRow from "./components/QualitiesRow";
import { jsonLd } from "./schema";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata(locale, {
    alternates: {
      [locale]: locale === "de" ? "/" : `/${locale}`,
    },
  });
}

const HomePage = async () => {
  const t = await getTranslations("home");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex flex-col gap-y-8 md:gap-y-16">
        <Hero />
        <Discover />
        <QualitiesRow />
        <InfoRow
          title={t("future.title")}
          description={t("future.description")}
          buttonText={t("future.buttonText")}
          buttonLink={"/about"}
          image={manWithDiamondImage}
        />
        <InfoRow
          title={t("sustainable.title")}
          description={t("sustainable.description")}
          buttonText={t("sustainable.buttonText")}
          buttonLink={"/products"}
          reverse={true}
          image={sustainableImage}
        />
        <Interaction />
        <ComparisonTable />
        <FAQ />
      </main>
    </>
  );
};

export default HomePage;
