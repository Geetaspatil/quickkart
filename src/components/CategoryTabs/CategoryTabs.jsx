import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../../services/productService";
import CategoryCard from "../CategoryCard/CategoryCard";

function CategoryTabs({
  selectedCategory,
  onCategoryChange,
  products,
}) {
  const {
    data: categories = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  if (isLoading) {
    return (
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-3 py-4 sm:px-4">
          <div className="flex gap-3 overflow-hidden">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="h-32 w-28 shrink-0 animate-pulse rounded-2xl bg-gray-100"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <div className="px-4 py-4 text-sm text-red-500">
        Unable to load categories.
      </div>
    );
  }

  const getCategoryImage = (category) => {
    const product = products.find(
      (item) => item.category === category
    );

    return product?.image;
  };

  return (
    <section className="border-b bg-gray-50">
      <div className="mx-auto max-w-7xl px-3 py-4 sm:px-4">
        <div className="scrollbar-hide flex gap-3 overflow-x-auto pb-2">
          {/* All Categories */}
          <button
            type="button"
            onClick={() => onCategoryChange("all")}
            className={`flex w-28 shrink-0 flex-col items-center rounded-2xl border p-3 transition duration-200 sm:w-32 ${
              selectedCategory === "all"
                ? "border-purple-600 bg-purple-50 shadow-sm"
                : "border-gray-100 bg-white hover:-translate-y-1 hover:border-purple-200 hover:shadow-md"
            }`}
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-purple-100 text-3xl sm:h-24 sm:w-24">
              🛍️
            </div>

            <p
              className={`mt-2 text-center text-xs font-semibold sm:text-sm ${
                selectedCategory === "all"
                  ? "text-purple-700"
                  : "text-gray-700"
              }`}
            >
              All Products
            </p>
          </button>

          {categories.map((category) => (
            <CategoryCard
              key={category}
              category={category}
              image={getCategoryImage(category)}
              isSelected={selectedCategory === category}
              onClick={() => onCategoryChange(category)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryTabs;