import { Link } from "@/i18n/routing";
import twoColoredDiamondsImage from "@/public/images/two_colored_diamonds.webp";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

const Hero = async () => {
  const t = await getTranslations("home.hero");

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh]">
      <Image
        src={twoColoredDiamondsImage}
        alt="Ethically created lab-grown diamond rings and jewelry"
        fill
        priority
        sizes="100vw"
        className="object-cover brightness-[0.4] absolute top-0 left-0 -z-10"
      />
      <section
        className="text-white h-full"
        aria-label="Lab-Grown Diamonds Introduction"
      >
        <div className="max-w-3xl container h-full flex flex-col justify-center items-center text-center mx-auto px-4 md:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-5 font-bold tracking-wide">
            {t("title")}{" "}
            <span className="text-[var(--main-lighter)]">
              {t("titleHighlight")}
            </span>
          </h1>
          <h2 className="text-lg md:text-xl tracking-wide font-semibold text-[var(--main-lighter)] mb-6 md:mb-10 max-w-2xl">
            {t("subtitle")}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full sm:w-auto">
            <Link
              href="/about"
              className="bg-[var(--main-lighter)] text-[var(--main-darker)] w-full sm:w-auto cursor-pointer px-6 font-semibold text-base md:text-lg py-3 rounded-md hover:bg-[var(--main-normal)] hover:text-[var(--main-lighter)] transition-colors duration-300"
            >
              {t("cta.learn")}
            </Link>
            <Link
              href="/products"
              className="bg-[var(--main-darker)] text-[var(--main-lighter)] w-full sm:w-auto cursor-pointer px-6 font-semibold hover:bg-[var(--main-dark)] transition-colors duration-300 text-base md:text-lg py-3 rounded-md"
            >
              {t("cta.shop")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
