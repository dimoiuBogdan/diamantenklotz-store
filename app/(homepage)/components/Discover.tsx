import heroImage from "@/public/images/hero.jpg";
import Image from "next/image";

const Discover = () => {
  return (
    <section>
      <div className="mb-10">
        <h3 className="text-center text-[var(--main-darker)] text-3xl font-semibold mb-2">
          Find Your Perfect Sparkle
        </h3>
        <p className="text-center text-lg text-zinc-600">
          Explore our curated diamond collections tailored to every style,
          occasion, and dream.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="rounded-md overflow-hidden h-60 shadow-md relative">
          <Image
            height={300}
            width={300}
            src={heroImage}
            alt="Discover"
            className="h-full w-full object-cover"
          />
          <div className="p-2 absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] bg-white/50 backdrop-blur-sm rounded-md">
            <h3 className="text-xl tracking-wide">Clear Diamonds</h3>
            <p className="text-[var(--main-dark)] font-semibold">
              Check out the collection
            </p>
          </div>
        </div>
        <div className="rounded-md overflow-hidden h-60 shadow-md relative">
          <Image
            height={300}
            width={300}
            src={heroImage}
            alt="Discover"
            className="h-full w-full object-cover"
          />
          <div className="p-2 absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] bg-white/50 backdrop-blur-sm rounded-md">
            <h3 className="text-xl tracking-wide">Clear Diamonds</h3>
            <p className="text-[var(--main-dark)] font-semibold">
              Check out the collection
            </p>
          </div>
        </div>
        <div className="rounded-md overflow-hidden h-60 shadow-md relative">
          <Image
            height={300}
            width={300}
            src={heroImage}
            alt="Discover"
            className="h-full w-full object-cover"
          />
          <div className="p-2 absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] bg-white/50 backdrop-blur-sm rounded-md">
            <h3 className="text-xl tracking-wide">Clear Diamonds</h3>
            <p className="text-[var(--main-dark)] font-semibold">
              Check out the collection
            </p>
          </div>
        </div>
        <div className="rounded-md overflow-hidden h-60 shadow-md relative">
          <Image
            height={300}
            width={300}
            src={heroImage}
            alt="Discover"
            className="h-full w-full object-cover"
          />
          <div className="p-2 absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] bg-white/50 backdrop-blur-sm rounded-md">
            <h3 className="text-xl tracking-wide">Clear Diamonds</h3>
            <p className="text-[var(--main-dark)] font-semibold">
              Check out the collection
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
