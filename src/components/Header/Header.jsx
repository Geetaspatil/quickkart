import { useState } from "react";
import useCartStore from "../../store/cartStore";
import { MapPin, Search, ShoppingCart } from "lucide-react";

function Header({ onCartClick, onSearchChange })  {
    const cart = useCartStore((state) => state.cart);

const cartCount = cart.reduce(
  (total, item) => total + item.quantity,
  0
);
const [searchTerm, setSearchTerm] = useState("");
  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-3 sm:px-4">
        <div className="flex h-16 items-center gap-2 sm:gap-4">

          {/* Logo */}
          <div className="shrink-0">
            <h1 className="text-xl font-extrabold text-yellow-600 sm:text-2xl">
              QuickKart
            </h1>

            <p className="hidden text-xs text-gray-500 sm:block">
              Groceries delivered fast
            </p>
          </div>

          {/* Location */}
          <button
            type="button"
            className="hidden shrink-0 items-center gap-2 rounded-lg px-2 py-2 transition hover:bg-gray-100 md:flex"
          >
            <MapPin size={20} className="text-yellow-600" />

            <div className="text-left">
              <p className="text-xs text-gray-500">
                Deliver to
              </p>

              <p className="max-w-32 truncate text-sm font-semibold text-gray-800">
                Pune, Maharashtra
              </p>
            </div>
          </button>

          {/* Search */}
          <div className="relative min-w-0 flex-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

          <input
  type="text"
  value={searchTerm}
  onChange={(e) => {
    setSearchTerm(e.target.value);
    onSearchChange(e.target.value);
  }}
  placeholder="Search products..."
  className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-9 pr-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-yellow-500 focus:bg-white sm:pl-10 sm:text-base"
/>
          </div>

          {/* Cart */}
          <button
            type="button"
            onClick={onCartClick}
            aria-label="Open cart"
            className="relative shrink-0 rounded-xl p-2.5 transition hover:bg-yellow-50 sm:p-3"
          >
            <ShoppingCart
              size={22}
              className="text-gray-800 sm:h-6 sm:w-6"
            />

          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-yellow-600 px-1 text-xs font-bold text-white">
           {cartCount}
           </span>
          </button>

        </div>

        {/* Mobile Location */}
        <div className="flex items-center gap-1 pb-2 text-xs text-gray-500 md:hidden">
          <MapPin size={14} className="text-yellow-600" />

          <span>Delivering to</span>

          <button
            type="button"
            className="font-semibold text-gray-800"
          >
            Pune, Maharashtra
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

