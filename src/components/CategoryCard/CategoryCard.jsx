function CategoryCard({
  category,
  image,
  isSelected,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex w-28 shrink-0 flex-col items-center rounded-2xl border p-3 transition duration-200 sm:w-32 ${
        isSelected
          ? "border-purple-600 bg-purple-50 shadow-sm"
          : "border-gray-100 bg-white hover:-translate-y-1 hover:border-purple-200 hover:shadow-md"
      }`}
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-gray-50 p-2 sm:h-24 sm:w-24">
        <img
          src={image}
          alt={category}
          className="h-full w-full object-contain transition duration-200 group-hover:scale-105"
        />
      </div>

      <p
        className={`mt-2 line-clamp-2 text-center text-xs font-semibold capitalize sm:text-sm ${
          isSelected ? "text-purple-700" : "text-gray-700"
        }`}
      >
        {category}
      </p>
    </button>
  );
}

export default CategoryCard;