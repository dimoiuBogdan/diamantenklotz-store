import type { ProductWithRelations } from "@/app/lib/actions/product.action";
import { formatPrice } from "@/app/lib/utils/utils";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import ProductCardButton from "./ProductCardButton";

type ProductCardProps = {
  product: ProductWithRelations;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { id, name, amt, description, styleCode, ProductImage } = product;
  const mainImage = ProductImage[0]?.imageUrl;

  return (
    <Link
      href={`/products/${id}`}
      className="group relative flex h-[500px] flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        {mainImage ? (
          <Image
            src={mainImage}
            alt={name}
            width={500}
            height={500}
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gray-100">
            <span className="text-gray-400">Product Image</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 text-sm font-medium text-gray-900 line-clamp-1">
          {name}
        </h3>

        <p className="mb-2 text-xs text-gray-500">Style: {styleCode}</p>

        <p className="mb-4 text-sm text-gray-500 line-clamp-2">{description}</p>

        <div className="mt-auto flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-900">
            {formatPrice(amt)}
          </p>
          <ProductCardButton />
        </div>
      </div>
    </Link>
  );
};
