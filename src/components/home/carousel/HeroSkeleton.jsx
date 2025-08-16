// HeroSkeleton.jsx
import { Skeleton } from "@/components/ui/skeleton";

const HeroSkeleton = () => {
  return (
    <section className="pt-8 pb-10 xl:pb-20 sm:pt-10 lg:pt-16 px-6 xl:px-16">
      <div className="lg:grid grid-cols-2 justify-between flex-wrap lg:gap-8">
        {/* Carousel Skeleton */}
        <div>
          <div className="mx-auto lg:max-w-2xl">
            <h1 className="text-lg font-medium md:text-2xl mb-4 lg:hidden">
              <Skeleton className="w-32 h-6" />
            </h1>
            <div className="relative">
              {/* Carousel Image Skeleton */}
              <div className="rounded-2xl relative w-full h-56 sm:h-[420px] overflow-hidden">
                <Skeleton className="w-full h-full" />

                {/* Text overlay skeleton */}
                <div className="absolute left-5 bottom-9 space-y-2">
                  <Skeleton className="w-24 h-5" />
                  <Skeleton className="w-64 h-8" />
                </div>
              </div>

              {/* Dots Skeleton */}
              <div className="absolute right-5 bottom-3 flex justify-center mt-4 gap-2">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton key={i} className="w-3 h-3 rounded-full" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Card List Skeleton */}
        <div className="hidden lg:flex flex-col items-center w-full px-4 ">
          <h1 className="text-lg xl:text-2xl mb-4 font-medium">
            <Skeleton className="w-32 h-6" />
          </h1>
          <div className="space-y-4 w-full">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="relative w-full rounded-2xl overflow-hidden h-28"
              >
                <Skeleton className="w-full h-full" />
                <div className="absolute flex gap-4 items-center inset-0 p-6">
                  <div className="flex flex-col w-max gap-2">
                    <Skeleton className="w-10 h-5" />
                    <Skeleton className="w-12 h-6" />
                  </div>
                  <div className="w-full space-y-2">
                    <Skeleton className="w-40 h-4" />
                    <Skeleton className="w-24 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSkeleton;
