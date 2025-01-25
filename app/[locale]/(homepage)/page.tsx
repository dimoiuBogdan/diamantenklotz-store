import { generatePageMetadata } from "@/app/lib/utils/metadata.utils";
import { Metadata } from "next";
import Discover from "./components/Discover";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import InfoRow from "./components/InfoRow";
import Interaction from "./components/Interaction";
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

const HomePage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex flex-col gap-y-16 pb-16">
        <Hero />
        <Discover />
        <QualitiesRow />
        <InfoRow
          title="The Future of Diamond Creation"
          description="Our lab-grown diamonds represent the perfect fusion of German engineering excellence and environmental responsibility. Using cutting-edge technology, we create stunning diamonds that are physically, chemically, and optically identical to mined diamonds - but with a smaller environmental footprint and better value."
          buttonText="Learn About Our Process"
        />
        <InfoRow
          title="Sustainable Luxury for Modern Times"
          description="Choose lab-grown diamonds for their exceptional quality, ethical sourcing, and environmental benefits. Our diamonds offer the same brilliance and durability as mined diamonds, certified by IGI for absolute peace of mind."
          buttonText="Shop Lab-Grown Diamonds"
          reverse
        />
        <Interaction />
        <FAQ />
      </main>
    </>
  );
};

export default HomePage;
