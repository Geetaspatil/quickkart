import { X, Plus, Minus, Trash2 } from "lucide-react";
import useCartStore from "../../store/cartStore";
import { toast } from "sonner";


function CartSheet({ isOpen, onClose }) {
  const cart = useCartStore((state) => state.cart);
  const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity
  );
  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  );
  const removeFromCart = useCartStore(
    (state) => state.removeFromCart
  );

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close cart"
        onClick={onClose}
        className="absolute inset-0 h-full w-full bg-black/40"
      />

      {/* Cart Sidebar */}
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-4 py-4 sm:px-5">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              My Cart
            </h2>

            <p className="text-sm text-gray-500">
              {cart.length === 0
                ? "No items"
                : `${cart.length} ${cart.length === 1 ? "item" : "items"
                }`}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
          >
            <X size={22} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-50">
                <span className="text-2xl">🛒</span>
              </div>

              <h3 className="text-base font-semibold text-gray-900">
                Your cart is empty
              </h3>

              <p className="mt-1 max-w-xs text-sm text-gray-500">
                Add some products to your cart and they will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-gray-100 p-3 shadow-sm"
                >
                  <div className="flex gap-3">
                    {/* Product Image */}
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-gray-50 p-2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="min-w-0 flex-1">
                      <h3
                        className="line-clamp-2 text-sm font-semibold leading-5 text-gray-800"
                        title={item.title}
                      >
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm font-bold text-gray-900">
                        ${item.price.toFixed(2)}
                      </p>

                      <div className="mt-3 flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center rounded-lg border border-gray-200">
                          <button
                            type="button"
                            onClick={() => decreaseQuantity(item.id)}
                            aria-label={`Decrease ${item.title} quantity`}
                            className="flex h-8 w-8 items-center justify-center text-gray-600 transition hover:bg-gray-100"
                          >
                            <Minus size={15} />
                          </button>

                          <span className="flex h-8 min-w-8 items-center justify-center border-x border-gray-200 text-sm font-semibold">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() => increaseQuantity(item.id)}
                            aria-label={`Increase ${item.title} quantity`}
                            className="flex h-8 w-8 items-center justify-center text-gray-600 transition hover:bg-gray-100"
                          >
                            <Plus size={15} />
                          </button>
                        </div>

                        {/* Remove */}
                        <button
                          type="button"
                          onClick={() => {
                            removeFromCart(item.id);

                            toast.success("Removed from cart", {
                              description: `${item.title} was removed from your cart.`,
                            });
                          }}
                          aria-label={`Remove ${item.title}`}
                          className="rounded-lg p-2 text-red-500 transition hover:bg-red-50"
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Item Total */}
                  <div className="mt-3 flex items-center justify-between border-t pt-3">
                    <span className="text-xs text-gray-500">
                      Item total
                    </span>

                    <span className="text-sm font-bold text-gray-900">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t bg-white p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-base font-medium text-gray-600">
                Subtotal
              </span>

              <span className="text-xl font-extrabold text-gray-900">
                ₹{subtotal.toFixed(2)}
              </span>
            </div>

            <button
              type="button"
              className="w-full rounded-xl bg-purple-600 py-3 text-sm font-bold text-white transition hover:bg-purple-700 active:scale-[0.98]"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}

export default CartSheet;