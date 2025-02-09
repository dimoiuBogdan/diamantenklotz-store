import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  reverse?: boolean;
  image: StaticImageData;
};

const InfoRow = ({
  title,
  description,
  buttonText,
  buttonLink,
  reverse,
  image,
}: Props) => {
  return (
    <section className="container mx-auto px-4 md:px-6">
      <div
        className={`flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="w-full md:w-1/2 h-[300px] md:h-[450px]">
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-lg shadow-md"
            sizes="(max-width: 768px) 100vw, 50vw"
            width={800}
            height={800}
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-lg">
            <h3 className="text-xl md:text-2xl font-bold text-[var(--main-darker)]">
              {title}
            </h3>
            <p className="my-3 md:my-4 text-base md:text-lg text-zinc-700">
              {description}
            </p>
            <button
              type="button"
              className="w-full md:w-auto bg-[var(--main-dark)] hover:bg-[var(--main-darker)] cursor-pointer transition-all duration-300 text-[var(--main-lighter)] px-6 md:px-8 py-3 rounded-md text-base md:text-lg font-medium"
            >
              <Link prefetch={false} href={buttonLink}>
                {buttonText}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoRow;
