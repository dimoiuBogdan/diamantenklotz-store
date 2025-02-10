import { Link } from "@/i18n/routing";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { useTranslations } from "next-intl";

type FooterTranslationKey =
  | "company.aboutUs"
  | "company.ourTechnology"
  | "company.sustainability"
  | "company.germanEngineering"
  | "diamonds.labGrownProcess"
  | "diamonds.diamondGuide"
  | "diamonds.certification"
  | "diamonds.compareNaturalVsLab"
  | "support.contactUs"
  | "support.shippingReturns"
  | "support.privacyPolicy"
  | "support.cookiePreferences"
  | "support.faq";

const FOOTER_LINKS = {
  company: [
    { name: "company.aboutUs" as const, href: "/about" },
    { name: "company.ourTechnology" as const, href: "/about" },
    { name: "company.sustainability" as const, href: "/about" },
    { name: "company.germanEngineering" as const, href: "/about" },
  ],
  diamonds: [
    { name: "diamonds.labGrownProcess" as const, href: "/about" },
    { name: "diamonds.diamondGuide" as const, href: "/about" },
    { name: "diamonds.certification" as const, href: "/about" },
    {
      name: "diamonds.compareNaturalVsLab" as const,
      href: "/#comparison-table",
    },
  ],
  support: [
    { name: "support.contactUs" as const, href: "/contact" },
    { name: "support.shippingReturns" as const, href: "/shipping" },
    { name: "support.privacyPolicy" as const, href: "/privacy-policy" },
    { name: "support.cookiePreferences" as const, href: "/cookie-preferences" },
    { name: "support.faq" as const, href: "/#faq" },
  ],
} as const;

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/diamantenklotz",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/diamantenklotz",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/diamantenklotz",
  },
  {
    name: "Youtube",
    icon: Youtube,
    href: "https://youtube.com/diamantenklotz",
  },
];

const Footer = () => {
  const t = useTranslations("common.footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--main-darker)] text-[var(--main-lighter)]">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold">
              DiamantenKlotz
            </Link>
            <p className="text-sm text-[var(--main-light)]">
              {t("description")}
            </p>
            <div className="pt-4">
              <p className="text-sm text-[var(--main-light)]">
                {t("madeInGermany")}
              </p>
              <p className="text-sm text-[var(--main-light)]">
                {t("carbonNeutral")}
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("company.title")}</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--main-light)] transition-colors hover:text-[var(--main-lighter)]"
                  >
                    {t(link.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Diamonds Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              {t("diamonds.title")}
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.diamonds.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--main-light)] transition-colors hover:text-[var(--main-lighter)]"
                  >
                    {t(link.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("support.title")}</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--main-light)] transition-colors hover:text-[var(--main-lighter)]"
                  >
                    {t(link.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-[var(--main-dark)] pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-[var(--main-light)]">
              {t("copyright", { year: currentYear })}
            </p>

            {/* Social Links */}
            {/* <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  prefetch={false}
                  className="text-[var(--main-light)] transition-colors hover:text-[var(--main-lighter)]"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
