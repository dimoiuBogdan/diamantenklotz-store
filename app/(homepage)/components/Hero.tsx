import heroImage from "@/public/images/hero.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-[70vh]">
      <Image
        src={heroImage}
        alt="Hero"
        fill
        className="object-cover brightness-[0.4] absolute top-0 left-0 -z-10"
      />
      <section className="text-white h-full">
        <div className="max-w-3xl container h-full flex flex-col justify-center items-center text-center mx-auto">
          <h1 className="text-6xl mb-5 font-bold tracking-wide">
            Discover the{" "}
            <span className="text-[var(--main-lighter)]">Brilliance</span> of
            Tomorrow
          </h1>
          <h2 className="text-2xl tracking-wide font-semibold text-[var(--main-lighter)] mb-10">
            Experience the future of diamond jewelry with our lab-grown
            diamonds.
          </h2>
          <div className="flex gap-6 justify-center items-center">
            <button className="bg-[var(--main-darker)] text-[var(--main-lighter)] cursor-pointer px-6 font-semibold hover:bg-[var(--main-dark)] transition-colors duration-300 text-lg py-2 rounded-md">
              Shop Now
            </button>
            <button className="bg-[var(--main-lighter)] text-[var(--main-darker)] cursor-pointer px-6 font-semibold text-lg py-2 rounded-md hover:bg-[var(--main-normal)] hover:text-[var(--main-lighter)] transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
