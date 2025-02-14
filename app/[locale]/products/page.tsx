import { Button } from "@/app/common/components/ShadCN/CNButton";
import {
  getProductCategories,
  getProducts,
} from "@/app/lib/actions/product.action";
import { cn } from "@/app/lib/utils/utils";
import { Link } from "@/i18n/routing";
import { ProductCard } from "./components/ProductCard";

const PRICE_RANGES = [
  {
    name: "All",
    value: "all",
  },
  {
    name: "$1 - $500",
    value: "1-500",
  },

  {
    name: "$500 - $1000",
    value: "500-1000",
  },

  {
    name: "$1000 - $2000",
    value: "1000-2000",
  },
  {
    name: "More than $2000",
    value: "2000-",
  },
];

const ProductsPage = async (props: {
  searchParams: Promise<{
    query?: string;
    category?: number;
    page?: number;
    price?: string;
  }>;
}) => {
  const { query, category, page = 1, price = "all" } = await props.searchParams;

  const categoryId = category ? Number(category) : undefined;

  const { data: products, success: productsSuccess } = await getProducts({
    category: categoryId,
    price,
    page: Number(page),
  });

  if (!productsSuccess) {
    return <div>Error loading products</div>;
  }

  const { data: categories, success: categoriesSuccess } =
    await getProductCategories();

  if (!categoriesSuccess) {
    return <div>Error loading categories</div>;
  }

  const hasAppliedFilters = !!categoryId || price !== "all" || !!query;

  const getFilterUrl = (categoryId?: number, price?: string, page?: number) => {
    const params = {
      query: query || "",
      category: categoryId,
      page: page || "1",
      price: price || "",
    };

    let url = "/products?";

    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        url += `${key}=${value}&`;
      }
    });

    return url;
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-5 md:gap-5">
        <div>
          <div className="text-xl mb-2 mt-3">Category</div>

          <div className="space-y-1 flex flex-col">
            <Link
              href={getFilterUrl(undefined, price, page)}
              className={cn(
                "hover:text-primary transition-colors duration-300",
                !categoryId ? "font-medium" : ""
              )}
            >
              All
            </Link>
            {categories?.map(({ name: c, id: cId }) => (
              <Link
                href={getFilterUrl(cId, price, page)}
                key={cId}
                className={cn(
                  "hover:text-primary transition-colors duration-300",
                  cId === categoryId ? "font-medium" : ""
                )}
              >
                {c}
              </Link>
            ))}
          </div>
          <div className="text-xl mb-2 mt-3">Price</div>
          <div className="space-y-1 flex flex-col">
            {PRICE_RANGES.map(({ name, value }) => (
              <Link
                href={getFilterUrl(categoryId, value, page)}
                key={value}
                className={cn(
                  "hover:text-primary transition-colors duration-300",
                  value === price ? "font-medium" : ""
                )}
              >
                {name}
              </Link>
            ))}
          </div>
          {hasAppliedFilters && (
            <Button variant="secondary" className="w-full mt-4" asChild>
              <Link href="/products">Clear filters</Link>
            </Button>
          )}
        </div>
        <div className="md:col-span-4 space-y-4">
          <div className="flex-between flex-col md:flex-row my-4">
            <div className="flex items-center justify-between w-full">
              <div>
                {query ? `Search results for "${query}"` : "All products"} (
                {products?.length})
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {products?.length ? (
              products?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center">No products found</div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
