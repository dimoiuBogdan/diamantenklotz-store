"use client";

import { Link } from "@/i18n/routing";
import heroImage from "@/public/images/hero.webp";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Hero = () => {
  const t = useTranslations("home.hero");

  return (
    <div className="relative w-full h-[75vh]">
      <Image
        src={heroImage}
        alt="Ethically created lab-grown diamond rings and jewelry"
        fill
        priority
        className="object-cover brightness-[0.4] absolute top-0 left-0 -z-10"
      />
      <section
        className="text-white h-full"
        aria-label="Lab-Grown Diamonds Introduction"
      >
        <div className="max-w-3xl container h-full flex flex-col justify-center items-center text-center mx-auto">
          <h1 className="text-5xl mb-5 font-bold tracking-wide">
            {t("title")}{" "}
            <span className="text-[var(--main-lighter)]">
              {t("titleHighlight")}
            </span>
          </h1>
          <h2 className="text-xl tracking-wide font-semibold text-[var(--main-lighter)] mb-10">
            {t("subtitle")}
          </h2>
          <div className="flex gap-6 justify-center items-center">
            <Link
              href="/shop/lab-grown-diamonds"
              className="bg-[var(--main-darker)] text-[var(--main-lighter)] cursor-pointer px-6 font-semibold hover:bg-[var(--main-dark)] transition-colors duration-300 text-lg py-2 rounded-md"
            >
              {t("cta.shop")}
            </Link>
            <Link
              href="/about-lab-diamonds"
              className="bg-[var(--main-lighter)] text-[var(--main-darker)] cursor-pointer px-6 font-semibold text-lg py-2 rounded-md hover:bg-[var(--main-normal)] hover:text-[var(--main-lighter)] transition-colors duration-300"
            >
              {t("cta.learn")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
