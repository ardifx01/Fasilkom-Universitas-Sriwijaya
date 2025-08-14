import { KemahasiswaanKerjasama as KemahasiswaanKerjasamaLocalData } from "@/database/data";
import KemahasiswaanCard from "./KemahasiswaanCard";
import { useEffect, useState } from "react";
import { getKemahasiswaanKerjasama } from "@/service/api";
import KemahasiswaanSkeleton from "./KemahasiswaanSkeleton";

const Kemahasiswaan = () => {
  const [KemahasiswaanKerjasama, setKemahasiswaanKerjasama] = useState(
    KemahasiswaanKerjasamaLocalData
  );
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchKemahasiswaanKerjasama = async () => {
      try {
        setLoading(true);
        const data = await getKemahasiswaanKerjasama();
        setKemahasiswaanKerjasama(data.Kemahasiswaan);
      } catch (error) {
        console.error(error, "Server is Offline, using local data");
      } finally {
        setLoading(false);
      }
    };

    fetchKemahasiswaanKerjasama();
  }, []);

  if (loading || KemahasiswaanKerjasama.length === 0)
    return <KemahasiswaanSkeleton />;

  return (
    <section className="pt-6 pb-4 px-6 xl:px-16">
      <div className="border-b-4 md:border-b-0 pb-4">
        {/* Tittle */}
        <div className="flex justify-between px-3">
          <h2 className="bg-[#FFCC00] py-0.5 px-2 xl:text-xl">
            Kemahasiswaan & Kerjasama
          </h2>
          <a className="font-semibold hover:text-[#FFCC00] hover:underline transition-all duration-300 cursor-pointer">
            More
          </a>
        </div>
        {/* Content */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {KemahasiswaanKerjasama.map((berita) => (
            <KemahasiswaanCard berita={berita} key={berita.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Kemahasiswaan;
