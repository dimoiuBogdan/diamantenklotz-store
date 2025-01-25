import { Link } from "@/i18n/routing";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const FOOTER_LINKS = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Technology", href: "/technology" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "German Engineering", href: "/engineering" },
  ],
  diamonds: [
    { name: "Lab-Grown Process", href: "/process" },
    { name: "Diamond Guide", href: "/guide" },
    { name: "Certification", href: "/certification" },
    { name: "Compare Natural vs Lab", href: "/compare" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "Shipping & Returns", href: "/shipping" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Cookie Preferences", href: "/cookie-preferences" },
    { name: "FAQ", href: "/faq" },
  ],
};

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/labgrowndiamonds",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/labgrowndiamonds",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/labgrowndiamonds",
  },
  {
    name: "Youtube",
    icon: Youtube,
    href: "https://youtube.com/labgrowndiamonds",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--main-darker)] text-[var(--main-lighter)]">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold">
              Lab-Grown Diamonds
            </Link>
            <p className="text-sm text-[var(--main-light)]">
              Pioneering sustainable luxury with German-engineered lab-grown
              diamonds. Creating exceptional stones that are both ethical and
              environmentally conscious.
            </p>
            <div className="pt-4">
              <p className="text-sm text-[var(--main-light)]">
                Made in Germany 🇩🇪
              </p>
              <p className="text-sm text-[var(--main-light)]">
                100% Carbon Neutral ♻️
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--main-light)] transition-colors hover:text-[var(--main-lighter)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Diamonds Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Diamonds</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.diamonds.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--main-light)] transition-colors hover:text-[var(--main-lighter)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Customer Care</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--main-light)] transition-colors hover:text-[var(--main-lighter)]"
                  >
                    {link.name}
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
              © {currentYear} Lab-Grown Diamonds GmbH. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-[var(--main-light)] transition-colors hover:text-[var(--main-lighter)]"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
