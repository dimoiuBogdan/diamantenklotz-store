import { Facebook, Instagram, TwitterIcon, Youtube } from "lucide-react";
import Link from "next/link";

const FOOTER_LINKS = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "FAQ", href: "/faq" },
  ],
  services: [
    { name: "Consulting", href: "/services/consulting" },
    { name: "Development", href: "/services/development" },
    { name: "Design", href: "/services/design" },
    { name: "Training", href: "/services/training" },
  ],
};

const SOCIAL_LINKS = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "Twitter", icon: TwitterIcon, href: "https://twitter.com" },
  { name: "Youtube", icon: Youtube, href: "https://youtube.com" },
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
              Logo
            </Link>
            <p className="text-sm text-[var(--main-light)]">
              Empowering businesses with innovative solutions and cutting-edge
              technology.
            </p>
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

          {/* Support Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Support</h3>
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

          {/* Services Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.services.map((link) => (
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
              © {currentYear} Your Company. All rights reserved.
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
