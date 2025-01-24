import heroImage from "@/public/images/hero.jpg";
import type { Metadata } from "next";
import Image from "next/image";
import { jsonLd } from "./schema";

const SITE_URL = "https://www.lab-grown-diamonds.com";

export const metadata: Metadata = {
  title: "About Us - Pioneering Lab-Grown Diamonds with German Engineering",
  description:
    "Discover how we're revolutionizing the diamond industry with sustainable, lab-grown diamonds. Learn about our German engineering process, commitment to sustainability, and ethical practices.",
  keywords: [
    "about lab-grown diamonds",
    "German diamond engineering",
    "sustainable diamond production",
    "ethical diamond manufacturing",
    "diamond technology",
    "eco-friendly diamonds",
    "diamond innovation",
    "German craftsmanship",
  ],
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Us - Pioneering Lab-Grown Diamonds with German Engineering",
    description:
      "Discover how we're revolutionizing the diamond industry with sustainable, lab-grown diamonds. Learn about our German engineering process and commitment to sustainability.",
    url: `${SITE_URL}/about`,
    type: "website",
    images: [
      {
        url: "/images/about-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Lab-Grown Diamonds Manufacturing Process",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Pioneering Lab-Grown Diamonds with German Engineering",
    description:
      "Discover how we're revolutionizing the diamond industry with sustainable, lab-grown diamonds. Learn about our German engineering process.",
    images: ["/images/about-hero.jpg"],
  },
};

const AboutPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[var(--main-darker)] sm:text-5xl">
            Pioneering the Future of Diamonds
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-[var(--main-dark)]">
            We're revolutionizing the diamond industry with sustainable,
            ethically created lab-grown diamonds that match the beauty and
            quality of natural stones.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src={heroImage}
                alt="Lab-grown diamond creation process"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[var(--main-darker)]">
                Our Mission
              </h2>
              <p className="text-[var(--main-dark)]">
                We're dedicated to making exceptional diamonds accessible while
                promoting environmental sustainability and ethical practices.
                Our German-engineered lab-grown diamonds represent the perfect
                fusion of technology and luxury.
              </p>
              <ul className="space-y-4 text-[var(--main-dark)]">
                <li className="flex items-center">
                  <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--main-lighter)] text-[var(--main-darker)]">
                    1
                  </span>
                  Creating sustainable, conflict-free diamonds
                </li>
                <li className="flex items-center">
                  <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--main-lighter)] text-[var(--main-darker)]">
                    2
                  </span>
                  Advancing diamond technology through German engineering
                </li>
                <li className="flex items-center">
                  <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--main-lighter)] text-[var(--main-darker)]">
                    3
                  </span>
                  Making luxury accessible without compromising quality
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-[var(--main-darker)]">
            Our Values
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Sustainability",
                description:
                  "Creating beautiful diamonds with minimal environmental impact through advanced eco-friendly processes.",
              },
              {
                title: "Innovation",
                description:
                  "Pushing the boundaries of diamond technology with state-of-the-art German engineering and research.",
              },
              {
                title: "Quality",
                description:
                  "Producing diamonds that meet or exceed the highest standards of cut, clarity, color, and carat weight.",
              },
              {
                title: "Transparency",
                description:
                  "Providing complete clarity about our creation process and diamond certification.",
              },
              {
                title: "Accessibility",
                description:
                  "Making exceptional diamonds available at fair prices without compromising on quality.",
              },
              {
                title: "Ethics",
                description:
                  "Ensuring our diamonds are created responsibly, with respect for both people and planet.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="mb-3 text-xl font-semibold text-[var(--main-darker)]">
                  {value.title}
                </h3>
                <p className="text-[var(--main-dark)]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="rounded-lg bg-[var(--main-darker)] px-8 py-12 text-white">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "5+", label: "Years of Innovation" },
              { number: "10K+", label: "Diamonds Created" },
              { number: "100%", label: "Carbon Neutral" },
              { number: "30+", label: "Expert Craftsmen" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold">{stat.number}</div>
                <div className="text-[var(--main-lighter)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
