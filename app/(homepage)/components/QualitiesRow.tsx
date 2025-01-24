import { DiamondPlusIcon } from "lucide-react";

const QualitiesRow = () => {
  return (
    <div className="w-full bg-[var(--main-dark)] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="rounded-md overflow-hidden flex flex-col items-center justify-center gap-2">
          <DiamondPlusIcon className="size-12 text-[var(--main-lighter)]" />
          <p className="text-sm font-medium text-[var(--main-lighter)]">
            HIGHEST QUALITY DIAMONDS
          </p>
        </div>
        <div className="rounded-md overflow-hidden flex flex-col items-center justify-center gap-2">
          <DiamondPlusIcon className="size-12 text-[var(--main-lighter)]" />
          <p className="text-sm font-medium text-[var(--main-lighter)]">
            HIGHEST QUALITY DIAMONDS
          </p>
        </div>
        <div className="rounded-md overflow-hidden flex flex-col items-center justify-center gap-2">
          <DiamondPlusIcon className="size-12 text-[var(--main-lighter)]" />
          <p className="text-sm font-medium text-[var(--main-lighter)]">
            HIGHEST QUALITY DIAMONDS
          </p>
        </div>
        <div className="rounded-md overflow-hidden flex flex-col items-center justify-center gap-2">
          <DiamondPlusIcon className="size-12 text-[var(--main-lighter)]" />
          <p className="text-sm font-medium text-[var(--main-lighter)]">
            HIGHEST QUALITY DIAMONDS
          </p>
        </div>
      </section>
    </div>
  );
};

export default QualitiesRow;
