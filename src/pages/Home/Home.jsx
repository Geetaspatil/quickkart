import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Header from "../../components/Header/Header";
import CategoryTabs from "../../components/CategoryTabs/CategoryTabs";
import { fetchProducts } from "../../services/productService";
import ProductCard from "../../components/ProductCard/ProductCard";
import CartSheet from "../../components/CartSheet/CartSheet";
import ProductSkeleton from "@/components/ProductCard/ProductSkeleton";

function Home() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [isCartOpen, setIsCartOpen] = useState(false);
    const {
        data: products = [],
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
    });
    const [searchTerm, setSearchTerm] = useState("");
    const filteredProducts = products.filter((product) => {
        const matchesCategory =
            selectedCategory === "all" ||
            product.category === selectedCategory;

        const matchesSearch =
            product.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Header
                    onCartClick={() => setIsCartOpen(true)}
                    onSearchChange={setSearchTerm}
                />

                <main className="mx-auto max-w-7xl px-3 py-6 sm:px-4">
                    <h2 className="mb-5 text-xl font-bold text-gray-900 sm:text-2xl">
                        Products
                    </h2>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <ProductSkeleton key={index} />
                        ))}
                    </div>
                </main>
            </div>
        );
    }

    if (isError) {
        return <p>Failed to load products.</p>;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Header
                onCartClick={() => setIsCartOpen(true)}
                onSearchChange={setSearchTerm}
            />

            <CategoryTabs
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                products={products}
            />

            <main className="mx-auto max-w-7xl px-3 py-6 sm:px-4">
                <h2 className="mb-5 text-xl font-bold text-gray-900 sm:text-2xl">
                    Products
                </h2>

                {filteredProducts.length === 0 ? (
                    <div className="flex min-h-60 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-white px-4 text-center">
                        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-purple-50">
                            <span className="text-2xl">🔍</span>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900">
                            No products found
                        </h3>

                        <p className="mt-1 max-w-md text-sm text-gray-500">
                            Try searching for a different product or select another category.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                )}

            </main>
            <CartSheet
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
            />
        </div>
    );
}

export default Home;