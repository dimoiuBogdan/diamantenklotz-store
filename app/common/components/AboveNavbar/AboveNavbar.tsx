import { getTranslations } from "next-intl/server";

const AboveNavbar = async () => {
  const t = await getTranslations("common");

  return (
    <div className="w-full py-1.5 text-center text-sm bg-[var(--main-darker)] text-[var(--main-lighter)] font-medium tracking-wide">
      {t("aboveNavbar")}
    </div>
  );
};

export default AboveNavbar;
