import { Berita } from "@/database/data";
const News = () => {
  const beritaCommon = Berita.filter((berita) => !berita.isPriority).slice(
    0,
    4
  );

  return (
    <section className="pt-6 pb-4 px-6 xl:px-16">
      {/* Tittle */}
      <div className="flex justify-between">
        <h2>News & Information</h2>
        <a className="font-semibold hover:text-[#FFCC00] transition-all duration-300">
          More
        </a>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-8 gap-6 pb-4 border-b-4 md:border-b-0">
        {/* Card 1 */}
        <div className="order-1 md:order-1 md:col-span-4 space-y-3 cursor-pointer">
          <div className="rounded-3xl overflow-hidden h-40 sm:h-56 md:h-72 lg:h-80">
            <img
              className="w-full h-full object-cover"
              src={beritaCommon[0].cover}
              alt={beritaCommon[0].judul}
            />
          </div>
          <h3 className="text-lg md:text-2xl xl:text-5xl xl:max-w-md font-semibold">
            {beritaCommon[0].judul}
          </h3>
          <p className="text-sm md:text-base line-clamp-5">
            {beritaCommon[0].content}
          </p>
          <p className="text-xs md:text-sm md:text-right text-gray-500">
            Posted by admin web in {beritaCommon[0].postedBy}
          </p>
        </div>

        {/* Card 2 */}
        <div className="grid order-2 gap-3 md:order-0 md:col-span-2 cursor-pointer">
          <div className="md:order-1 rounded-3xl overflow-hidden h-40 sm:h-56 md:h-48">
            <img
              className="w-full h-full object-cover"
              src={beritaCommon[1].cover}
              alt={beritaCommon[1].judul}
            />
          </div>
          <div className="md:order-0">
            <h3 className="text-lg xl:text-xl 2xl:text-2xl font-semibold">{beritaCommon[1].judul}</h3>
          </div>
          <div className="md:order-2">
            <p className="text-sm line-clamp-4 md:line-clamp-6">
              {beritaCommon[1].content}
            </p>
            <p className="text-xs md:text-right text-gray-500 mt-3">
              Posted by admin web in {beritaCommon[1].postedBy}
            </p>
          </div>
        </div>

        {/* Card 3 & 4 */}
        <div className="order-3 md:order-2 space-y-6 md:col-span-2 cursor-pointer">
          <div className="space-y-3">
            <h3 className="text-lg xl:text-xl 2xl:text-2xl font-semibold">{beritaCommon[2].judul}</h3>
            <p className="text-sm line-clamp-4">{beritaCommon[2].content}</p>
            <p className="text-xs md:text-right text-gray-500">
              Posted by admin web in {beritaCommon[2].postedBy}
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg xl:text-xl 2xl:text-2xl font-semibold">{beritaCommon[3].judul}</h3>
            <p className="text-sm line-clamp-4">{beritaCommon[3].content}</p>
            <p className="text-xs md:text-right text-gray-500">
              Posted by admin web in {beritaCommon[3].postedBy}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
