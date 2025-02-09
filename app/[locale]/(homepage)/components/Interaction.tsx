import { getTranslations } from "next-intl/server";
import Link from "next/link";

const Interaction = async () => {
  const t = await getTranslations("home.interaction");

  return (
    <section
      aria-label="Lab-Grown Diamond Experience"
      className="container mx-auto flex flex-col md:flex-row px-4 sm:px-6 lg:px-8 py-8 md:py-12 items-center justify-center gap-8 md:gap-12 rounded-lg bg-[var(--main-dark)] text-white"
    >
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="uppercase font-bold text-sm text-[var(--main-lighter)] tracking-widest">
          {t("subtitle")}
        </p>
        <h3 className="text-2xl md:text-4xl font-semibold mt-2 mb-4 md:mb-6 tracking-wider">
          {t("title")}
        </h3>
        <p className="text-base md:text-lg text-[var(--main-lighter)] max-w-xl mx-auto md:mx-0">
          {t("description")}
        </p>
      </div>
      <div className="w-full md:w-1/2 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        <Link
          href="/contact"
          className="w-full sm:w-auto cursor-pointer bg-[var(--main-normal)] border-2 border-[var(--main-normal)] text-white hover:text-[var(--main-dark)] text-base md:text-lg transition-all duration-300 font-medium px-6 md:px-8 py-3 rounded-md"
        >
          {t("cta.try")}
        </Link>
        <Link
          href="/about"
          className="w-full sm:w-auto cursor-pointer border-2 border-[var(--main-normal)] text-white hover:bg-[var(--main-light)] hover:text-[var(--main-dark)] text-base md:text-lg transition-all duration-300 font-medium px-6 md:px-8 py-3 rounded-md"
        >
          {t("cta.learn")}
        </Link>
      </div>
    </section>
  );
};

export default Interaction;
