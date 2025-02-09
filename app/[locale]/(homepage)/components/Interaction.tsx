import { getTranslations } from "next-intl/server";

const Interaction = async () => {
  const t = await getTranslations("home.interaction");

  return (
    <section
      aria-label="Lab-Grown Diamond Experience"
      className="flex px-4 sm:px-6 lg:px-8 py-12 items-center justify-center rounded-md bg-[var(--main-dark)] text-white"
    >
      <div className="w-1/2">
        <p className="uppercase font-bold text-sm text-[var(--main-lighter)] tracking-widest">
          {t("subtitle")}
        </p>
        <h3 className="text-4xl font-semibold mt-2 mb-6 tracking-wider">
          {t("title")}
        </h3>
        <p className="text-[var(--main-lighter)]">{t("description")}</p>
      </div>
      <div className="w-1/2 flex items-center justify-center gap-x-6">
        <button className="cursor-pointer bg-[var(--main-normal)] border-2 border-[var(--main-normal)] text-white hover:text-[var(--main-dark)] text-lg transition-all duration-300 font-medium px-8 py-3 rounded-md">
          {t("cta.try")}
        </button>
        <button className="cursor-pointer border-2 border-[var(--main-normal)] text-white hover:bg-[var(--main-light)] hover:text-[var(--main-dark)] text-lg transition-all duration-300 font-medium px-8 py-3 rounded-md">
          {t("cta.learn")}
        </button>
      </div>
    </section>
  );
};

export default Interaction;
