// SectionLayoutSkeleton.jsx
import { Skeleton } from "@/components/ui/skeleton";

const SectionCardSkeleton = () => (
  <div className="flex gap-4 p-3 rounded-2xl">
    {/* Image */}
    <Skeleton className="w-16 h-16 sm:w-24 sm:h-24 rounded-xl flex-shrink-0" />
    {/* Text */}
    <div className="space-y-2 flex-1">
      <Skeleton className="w-full h-4" />
      <Skeleton className="w-24 h-3" />
    </div>
  </div>
);

const SectionListSkeleton = () => (
  <section className="pt-6 pb-4">
    <div className="grid grid-cols-1 gap-4 border-b-4 md:border-b-0 pb-4">
      {/* Title */}
      <div className="flex justify-between px-3">
        <Skeleton className="w-32 h-6" />
        <Skeleton className="w-16 h-5" />
      </div>
      {/* Content */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <SectionCardSkeleton key={i} />
        ))}
      </div>
    </div>
  </section>
);

const MoreAboutCardSkeleton = () => (
  <div className="flex items-center justify-between py-4 border-b-4">
    <Skeleton className="w-3/4 h-5" />
    <Skeleton className="w-5 h-5 rounded-full" />
  </div>
);

const MoreAboutSkeleton = () => (
  <section className="pt-6 pb-4">
    <div className="grid grid-cols-1 gap-4 pb-4">
      {/* Title */}
      <div className="px-3">
        <Skeleton className="w-48 h-6 mb-4" />
      </div>
      {/* Content */}
      <div className="grid grid-cols-1 px-3 -mt-2">
        {Array.from({ length: 9 }).map((_, i) => (
          <MoreAboutCardSkeleton key={i} />
        ))}
      </div>
    </div>
  </section>
);

const SectionLayoutSkeleton = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 px-6 xl:px-16">
      <SectionListSkeleton />
      <SectionListSkeleton />
      <MoreAboutSkeleton />
    </section>
  );
};

export default SectionLayoutSkeleton;
