import useCartStore from "../../store/cartStore";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
function ProductCard({ product }) {
    //   const addToCart = useCartStore((state) => state.addToCart);


    const addToCart = useCartStore((state) => state.addToCart);

    const handleAddToCart = () => {
        addToCart(product);

        toast.success("Added to cart", {
            description: `${product.title} has been added to your cart.`,
        });
    };
    return (
        <article className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-3 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md sm:p-4">

            <div className="flex h-36 items-center justify-center rounded-xl bg-gray-50 p-3 sm:h-44">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain transition duration-200 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-1 flex-col pt-3">

                <h3
                    className="line-clamp-2 min-h-10 text-sm font-semibold leading-5 text-gray-800 sm:text-base"
                    title={product.title}
                >
                    {product.title}
                </h3>

                <p className="mt-2 line-clamp-1 text-xs capitalize text-gray-500">
                    {product.category}
                </p>

                <div className="mt-auto flex items-center justify-between gap-2 pt-4">

                    <p className="text-base font-bold text-gray-900 sm:text-lg">
                        ₹{product.price.toFixed(2)}
                    </p>

                    <Button
                        type="button"
                        onClick={handleAddToCart}
                        className="rounded-lg px-3 py-1.5 text-sm font-bold sm:px-4"
                    >
                        ADD
                    </Button>
                </div>
            </div>
        </article>
    );
}

export default ProductCard;