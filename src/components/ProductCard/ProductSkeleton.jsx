import { Skeleton } from "@/components/ui/skeleton";

function ProductSkeleton() {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-3 shadow-sm sm:p-4">
      <Skeleton className="h-36 w-full rounded-xl sm:h-44" />

      <div className="flex flex-1 flex-col pt-3">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="mt-2 h-5 w-3/4" />

        <Skeleton className="mt-3 h-4 w-1/2" />

        <div className="mt-auto flex items-center justify-between gap-2 pt-4">
          <Skeleton className="h-6 w-20" />

          <Skeleton className="h-9 w-16 rounded-lg" />
        </div>
      </div>
    </article>
  );
}

export default ProductSkeleton;