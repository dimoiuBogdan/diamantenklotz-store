import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export default async function NotFoundPage() {
  const t = await getTranslations("errors");

  return (
    <main className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-[var(--main-darker)]">
          {t("404")}
        </h1>
        <p className="mb-8 text-lg text-[var(--main-dark)]">
          {t("notFoundMessage")}
        </p>
        <Link
          href="/"
          className="rounded-md bg-[var(--main-normal)] px-4 py-2 text-white transition-colors hover:bg-[var(--main-normal)]/90"
        >
          {t("default")}
        </Link>
      </div>
    </main>
  );
}
