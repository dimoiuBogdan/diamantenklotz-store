import { Link } from "@/i18n/routing";
import heroImage from "@/public/images/hero.webp";
import Image from "next/image";

const DIAMOND_CATEGORIES = [
  {
    title: "Engagement Rings",
    description: "Ethically sourced engagement rings for your special moment",
    image: heroImage,
    href: "/shop/lab-grown-engagement-rings",
    alt: "Sustainable lab-grown diamond engagement rings collection",
  },
  {
    title: "Certified Lab. Diamonds",
    description: "IGI-certified laboratory created diamonds",
    image: heroImage,
    href: "/shop/certified-lab-diamonds",
    alt: "IGI-certified lab-grown loose diamonds",
  },
  {
    title: "Lab. Diamond Jewelry",
    description: "Sustainable fine jewelry for every occasion",
    image: heroImage,
    href: "/shop/lab-grown-jewelry",
    alt: "Sustainable lab-created diamond jewelry collection",
  },
  {
    title: "Custom Lab. Diamonds",
    description: "Personalized lab-grown diamond pieces",
    image: heroImage,
    href: "/shop/custom-lab-diamonds",
    alt: "Custom-made lab-grown diamond jewelry",
  },
];

const Discover = () => {
  return (
    <section
      aria-label="Diamond Collections"
      className="container mx-auto px-4"
    >
      <div className="mb-10">
        <h2 className="text-center text-[var(--main-darker)] text-3xl font-semibold mb-2">
          Explore Our Lab-Grown Diamond Collections
        </h2>
        <p className="text-center text-lg text-zinc-600 max-w-2xl mx-auto">
          Discover our curated selection of sustainable, ethically-produced lab
          diamonds. Each piece combines German engineering excellence with
          environmental responsibility.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {DIAMOND_CATEGORIES.map((category) => (
          <Link
            href={category.href}
            key={category.title}
            className="group rounded-md overflow-hidden h-80 shadow-md relative"
          >
            <Image
              height={300}
              width={300}
              src={category.image}
              alt={category.alt}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="p-4 absolute bottom-0 left-0 w-full bg-white/80 backdrop-blur-sm">
              <h3 className="text-lg truncate tracking-wide font-semibold text-[var(--main-darker)]">
                {category.title}
              </h3>
              <p className="text-[var(--main-dark)] text-sm font-medium truncate">
                {category.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Discover;
