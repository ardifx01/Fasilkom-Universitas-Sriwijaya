import Tujuan from "./Tujuan";
import VisiMisiCard from "./VisiMisiCard";

const VisiMisi = () => {
  return (
    <section className="pt-6 pb-4 px-6 xl:px-16">
      {/* Tittle */}
      <div className="px-3">
        <h1 className="bg-[#FFCC00] py-2 px-3 xl:text-xl w-max">
          Visi Misi
        </h1>
      </div>
      {/* Content */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center px-3">
        <VisiMisiCard />
        <Tujuan/>
      </div>
    </section>
  );
};

export default VisiMisi;
