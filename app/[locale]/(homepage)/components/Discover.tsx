import multipleColoredDiamondsImage from "@/public/images/multiple_colored_diamonds.webp";
import ringOnCertificateImage from "@/public/images/ring_on_certificate.webp";
import ringsImage from "@/public/images/rings.webp";
import shinySingleDiamondImage from "@/public/images/shiny_single_diamond.webp";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

const Discover = async () => {
  const t = await getTranslations("home.discover");

  const DIAMOND_CATEGORIES = [
    {
      title: t("categories.engagement.title"),
      description: t("categories.engagement.description"),
      image: ringsImage,
      alt: "Sustainable lab-grown diamond engagement rings collection",
    },
    {
      title: t("categories.jewelry.title"),
      description: t("categories.jewelry.description"),
      image: shinySingleDiamondImage,
      alt: "Sustainable lab-created diamond jewelry collection",
    },
    {
      title: t("categories.certified.title"),
      description: t("categories.certified.description"),
      image: ringOnCertificateImage,
      alt: "IGI-certified lab-grown loose diamonds",
    },
    {
      title: t("categories.custom.title"),
      description: t("categories.custom.description"),
      image: multipleColoredDiamondsImage,
      alt: "Custom-made lab-grown diamond jewelry",
    },
  ];

  return (
    <section aria-label="Diamond Collections" className="container mx-auto">
      <div className="mb-8 md:mb-10 px-4 md:px-6">
        <h2 className="text-center text-[var(--main-darker)] text-2xl md:text-3xl font-semibold mb-2 md:mb-3">
          {t("title")}
        </h2>
        <p className="text-center text-base md:text-lg text-zinc-600 max-w-2xl mx-auto">
          {t("description")}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-6">
        {DIAMOND_CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="group rounded-lg overflow-hidden h-64 sm:h-72 md:h-80 shadow-md relative hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={category.image}
              alt={category.alt}
              className="h-full w-full object-cover object-bottom transition-transform duration-300 group-hover:scale-105"
              priority
            />

            <div className="p-3 md:p-4 absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm">
              <h3 className="text-base md:text-lg truncate tracking-wide font-semibold text-[var(--main-darker)]">
                {category.title}
              </h3>
              <p className="text-[var(--main-dark)] text-sm md:text-base font-medium line-clamp-2 h-11">
                {category.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Discover;
