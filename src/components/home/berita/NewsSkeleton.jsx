// NewsSkeleton.jsx
import { Skeleton } from "@/components/ui/skeleton";

const NewsSkeleton = () => {
  return (
    <section className="pt-6 pb-4 px-6 xl:px-16">
      {/* Title */}
      <div className="flex justify-between px-3">
        <Skeleton className="w-48 h-6" />
        <Skeleton className="w-16 h-5" />
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6 pb-4 border-b-4 lg:border-b-0">
        {/* Card 1 */}
        <div className="order-1 lg:order-1 lg:col-span-6 space-y-3 p-3 rounded-2xl">
          <div className="rounded-3xl overflow-hidden h-40 sm:h-56 md:h-72 lg:h-80">
            <Skeleton className="w-full h-full" />
          </div>
          <Skeleton className="w-3/4 h-8" />
          <Skeleton className="w-full h-16" />
          <Skeleton className="w-40 h-4" />
        </div>

        {/* Card 2 */}
        <div className="grid order-2 gap-3 lg:order-0 lg:col-span-3 p-3 rounded-2xl">
          <div className="lg:order-1 rounded-3xl overflow-hidden h-40 sm:h-56 md:h-48">
            <Skeleton className="w-full h-full" />
          </div>
          <div className="lg:order-0">
            <Skeleton className="w-3/4 h-6" />
          </div>
          <div className="lg:order-2 space-y-2">
            <Skeleton className="w-full h-12" />
            <Skeleton className="w-32 h-4" />
          </div>
        </div>

        {/* Card 3 & 4 */}
        <div className="order-3 lg:order-2 space-y-6 lg:col-span-3">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="space-y-3 p-3 rounded-2xl">
              <Skeleton className="w-3/4 h-6" />
              <Skeleton className="w-full h-10" />
              <Skeleton className="w-32 h-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSkeleton;
