import { CONTACT } from "@/app/common/constants";
import { generatePageMetadata } from "@/app/lib/utils/metadata.utils";
import { Link } from "@/i18n/routing";
import { DownloadIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Metadata, type NextPage } from "next";
import { getTranslations } from "next-intl/server";
import PDFFrame from "./components/PDFFrame";
import { jsonLd } from "./schema";

interface ProductsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ProductsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return generatePageMetadata(locale, {
    title: t("products.meta.title"),
    description: t("products.meta.description"),
    alternates: {
      en: "/en/products",
      de: "/de/products",
      ro: "/ro/products",
    },
    productSchema: jsonLd,
  });
}

const ProductsPage: NextPage = async () => {
  const t = await getTranslations("products");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="container mx-auto px-4 py-8" role="main">
        <div className="space-y-12">
          {/* Header Section */}
          <header
            className="text-center space-y-6 max-w-4xl mx-auto"
            aria-labelledby="main-heading"
          >
            <h1 id="main-heading" className="text-4xl font-bold text-gray-900">
              {t("header.title")}
            </h1>
            <div className="space-y-4">
              <p className="text-xl text-gray-600 leading-relaxed">
                {t("header.mainDescription")}
              </p>
            </div>
          </header>

          {/* Key Benefits Section */}
          <section
            className="bg-gradient-to-br from-[var(--main-lightest)] to-[var(--main-lighter)] rounded-xl p-8 shadow-sm"
            aria-labelledby="benefits-heading"
          >
            <h2
              id="benefits-heading"
              className="text-2xl font-semibold text-gray-900 mb-6"
            >
              {t("benefits.title")}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <article className="space-y-2">
                <h3 className="font-medium text-gray-900">
                  {t("benefits.quality.title")}
                </h3>
                <p className="text-gray-600">
                  {t("benefits.quality.description")}
                </p>
              </article>
              <article className="space-y-2">
                <h3 className="font-medium text-gray-900">
                  {t("benefits.sustainable.title")}
                </h3>
                <p className="text-gray-600">
                  {t("benefits.sustainable.description")}
                </p>
              </article>
              <article className="space-y-2">
                <h3 className="font-medium text-gray-900">
                  {t("benefits.value.title")}
                </h3>
                <p className="text-gray-600">
                  {t("benefits.value.description")}
                </p>
              </article>
            </div>
          </section>

          {/* Contact Information Section */}
          <section
            className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
            aria-labelledby="contact-heading"
          >
            <h2
              id="contact-heading"
              className="text-2xl font-semibold text-gray-900 mb-4"
            >
              {t("contact.title")}
            </h2>
            <p className="text-gray-600 mb-6">{t("contact.description")}</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-medium text-gray-900">
                  {t("contact.options.title")}:
                </h3>
                <ul className="space-y-3" role="list">
                  <li className="flex items-center text-gray-700">
                    <MailIcon
                      className="w-5 h-5 mr-3 text-[var(--main-normal)]"
                      aria-hidden="true"
                    />
                    <span>
                      {t("contact.options.email")}:{" "}
                      <Link
                        href={`mailto:${CONTACT.EMAIL}`}
                        className="text-[var(--main-normal)] hover:underline"
                        rel="nofollow"
                      >
                        {CONTACT.EMAIL}
                      </Link>
                    </span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <PhoneIcon
                      className="w-5 h-5 mr-3 text-[var(--main-normal)]"
                      aria-hidden="true"
                    />
                    <span>
                      {t("contact.options.phone")}:{" "}
                      <Link
                        href={`tel:${CONTACT.PHONE}`}
                        className="text-[var(--main-normal)] hover:underline"
                        rel="nofollow"
                      >
                        {CONTACT.PHONE}
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-gray-900">
                  {t("contact.actions.title")}:
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-center gap-4">
                    <Link
                      href={`tel:${CONTACT.PHONE}`}
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[var(--main-normal)] hover:bg-[var(--main-darker)] w-full transition-colors"
                      rel="nofollow"
                    >
                      {t("contact.actions.schedule")}
                    </Link>
                    <Link
                      href="/contact#form"
                      className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 w-full transition-colors"
                    >
                      {t("contact.actions.request")}
                    </Link>
                  </div>
                  <Link
                    href="https://73bfl9rv91.ufs.sh/f/73SeL1XmOVTgCIUrfRYXp3aiVuh5Mdn1v0IeG8rEWLc6mySk"
                    target="_blank"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[var(--main-dark)] hover:bg-[var(--main-darker)] w-full transition-colors"
                    rel="nofollow"
                  >
                    <DownloadIcon className="w-4 h-4 mr-2" />
                    {t("contact.actions.download")}
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Documentation Section */}
          <section
            id="documentation"
            className="space-y-6"
            aria-labelledby="catalog-heading"
          >
            <h2
              id="catalog-heading"
              className="text-2xl font-semibold text-gray-900"
            >
              {t("catalog.title")}
            </h2>
            <p className="text-gray-600 mb-4">{t("catalog.description")}</p>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <PDFFrame />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default ProductsPage;
