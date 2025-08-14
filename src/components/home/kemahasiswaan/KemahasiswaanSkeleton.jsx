// KemahasiswaanSkeleton.jsx
import { Skeleton } from "@/components/ui/skeleton";

const KemahasiswaanSkeleton = () => {
  return (
    <section className="pt-6 pb-4 px-6 xl:px-16">
      <div className="border-b-4 md:border-b-0 pb-4">
        {/* Title */}
        <div className="flex justify-between px-3">
          <Skeleton className="w-60 h-6" />
          <Skeleton className="w-16 h-5" />
        </div>

        {/* Content Cards */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex gap-4 lg:flex-col p-3 rounded-2xl">
              {/* Image */}
              <Skeleton className="w-16 h-16 sm:w-24 sm:h-24 lg:w-full lg:h-36 xl:h-48 rounded-xl flex-shrink-0" />

              {/* Text */}
              <div className="space-y-2 flex-1">
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-24 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KemahasiswaanSkeleton;
