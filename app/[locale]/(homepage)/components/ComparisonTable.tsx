import { getTranslations } from "next-intl/server";

const ComparisonTable = async () => {
  const t = await getTranslations("home.comparison");

  const items = [
    "chemicalComposition",
    "crystallineStructure",
    "refractiveIndex",
    "dispersion",
    "hardness",
    "density",
    "thermalConditions",
    "intrinsicPurity",
    "unitOfMeasurement",
    "blueFlorescence",
    "phosphorescence",
    "isItDiamond",
    "isItSynthetic",
    "isItFake",
    "isItEthical",
    "isItEcoConscious",
    "isItArtificial",
    "isItAffordable",
    "lifeExpectancy",
    "isItCertified",
  ] as const;

  return (
    <section id="comparison-table">
      {/* Comparison Section */}
      <h2 className="mb-12 text-center text-3xl font-bold text-[var(--main-darker)]">
        {t("title")}
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b border-gray-400/30 p-4 text-left font-semibold text-[var(--main-darker)]">
                {t("properties")}
              </th>
              <th className="border-b border-gray-400/30 p-4 text-center font-semibold text-[var(--main-darker)] bg-amber-800/40">
                {t("earthMined")}
              </th>
              <th className="border-b border-gray-400/30 p-4 text-center font-semibold text-[var(--main-darker)] bg-[var(--main-lighter)]">
                {t("labGrown")}
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item}>
                <td className="border-b border-gray-400/30 p-4 font-medium">
                  {t(`items.${item}.label` as const)}
                </td>
                <td className="border-b border-gray-400/30 p-4 text-center">
                  {t(`items.${item}.earthMined` as const)}
                </td>
                <td className="border-b border-gray-400/30 p-4 text-center">
                  {t(`items.${item}.labGrown` as const)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonTable;
