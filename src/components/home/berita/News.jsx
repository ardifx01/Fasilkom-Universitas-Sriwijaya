import { Berita as beritaLocalData } from "@/database/data";
import { getBerita } from "@/service/api";
import { useEffect, useState } from "react";
import NewsSkeleton from "./NewsSkeleton";
const News = () => {
  const beritaData = beritaLocalData
    .filter((berita) => !berita.is_priority)
    .slice(0, 4);
  const [beritaCommon, setBerita] = useState(beritaData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        setLoading(true);
        const data = await getBerita();
        const beritaCommon = data.berita
          .filter((beritaData) => !beritaData.is_priority)
          .slice(0, 4);
        setBerita(beritaCommon);
      } catch (error) {
        console.error(error, "Server is Offline, using local data");
      } finally {
        setLoading(false);
      }
    };

    fetchBerita();
  }, []);

  if (loading || beritaCommon.length === 0) return <NewsSkeleton />;

  return (
    <section className="pt-6 xl:pt-12 pb-4 px-6 xl:px-16">
      {/* Tittle */}
      <div className="flex justify-between px-3">
        <h2>News & Information</h2>
        <a className="font-semibold hover:text-[#FFCC00] hover:underline transition-all duration-300 cursor-pointer">
          More
        </a>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6 pb-4 border-b-4 lg:border-b-0">
        {/* Card 1 */}
        <div className="order-1 lg:order-1 lg:col-span-6 space-y-3 cursor-pointer p-3 rounded-2xl hover:bg-gray-100 transition-all duration-300">
          <div className="rounded-3xl overflow-hidden h-40 sm:h-56 md:h-72 lg:h-80">
            <img
              className="w-full h-full object-cover"
              src={`${beritaCommon[0].cover}`}
              alt={beritaCommon[0].judul}
            />
          </div>
          <h3 className="text-lg lg:text-5xl xl:max-w-md font-semibold">
            {beritaCommon[0].judul}
          </h3>
          <p className="text-sm md:text-base line-clamp-5">
            {beritaCommon[0].content}
          </p>
          <p className="text-xs md:text-sm md:text-right text-gray-500">
            Posted by admin web in {beritaCommon[0].posted_by}
          </p>
        </div>

        {/* Card 2 */}
        <div className="grid order-2 gap-3 lg:order-0 lg:col-span-3 cursor-pointer p-3 rounded-2xl hover:bg-gray-100 transition-all duration-300">
          <div className="lg:order-1 rounded-3xl overflow-hidden h-40 sm:h-56 md:h-48">
            <img
              className="w-full h-full object-cover"
              src={`${beritaCommon[1].cover}`}
              alt={beritaCommon[1].judul}
            />
          </div>
          <div className="lg:order-0">
            <h3 className="text-lg xl:text-xl 2xl:text-2xl font-semibold">
              {beritaCommon[1].judul}
            </h3>
          </div>
          <div className="lg:order-2">
            <p className="text-sm line-clamp-4 md:line-clamp-6">
              {beritaCommon[1].content}
            </p>
            <p className="text-xs lg:text-right text-gray-500 mt-3">
              Posted by admin web in {beritaCommon[1].posted_by}
            </p>
          </div>
        </div>

        {/* Card 3 & 4 */}
        <div className="order-3 lg:order-2 space-y-6 lg:col-span-3 cursor-pointer">
          <div className="space-y-3 p-3 rounded-2xl hover:bg-gray-100 transition-all duration-300">
            <h3 className="text-lg xl:text-xl 2xl:text-2xl font-semibold">
              {beritaCommon[2].judul}
            </h3>
            <p className="text-sm line-clamp-4">{beritaCommon[2].content}</p>
            <p className="text-xs lg:text-right text-gray-500">
              Posted by admin web in {beritaCommon[2].posted_by}
            </p>
          </div>
          <div className="space-y-3 p-3 rounded-2xl hover:bg-gray-100 transition-all duration-300">
            <h3 className="text-lg xl:text-xl 2xl:text-2xl font-semibold">
              {beritaCommon[3].judul}
            </h3>
            <p className="text-sm line-clamp-4">{beritaCommon[3].content}</p>
            <p className="text-xs lg:text-right text-gray-500">
              Posted by admin web in {beritaCommon[3].posted_by}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
