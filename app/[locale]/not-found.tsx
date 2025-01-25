import { generatePageMetadata } from "@/app/lib/utils/metadata.utils";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface NotFoundPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: NotFoundPageProps): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata(locale, {
    title: "404 - Not Found",
    description: "The page you're looking for doesn't exist.",
    noIndex: true, // We don't want search engines to index 404 pages
  });
}

export default function NotFoundPage() {
  const t = useTranslations();

  return (
    <main className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{t("errors.404")}</h1>
        <p className="mb-8 text-lg text-gray-600">
          {t("errors.notFoundMessage")}
        </p>
        <Link
          href="/"
          className="rounded-md bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/90"
        >
          {t("common.actions.back")}
        </Link>
      </div>
    </main>
  );
}
