import { ProgramStudi as ProgramStudiLocalData } from "@/database/data";
import ProdiList from "./ProdiList";
import Statistic from "./Statistic";
const Prodi = () => {
  return (
    <section className="pt-6 pb-4 px-6 xl:px-16 bg-[url('/assets/overlay-fasilkom.png')] bg-cover bg-[#3a3a3a]">
      {/* Tittle */}
      <div className="px-3">
        <h1 className="bg-[#FFCC00] py-2 px-3 xl:text-xl w-max">
          Program Studi
        </h1>
      </div>
      {/* Content */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-5 gap-10 px-3">
        <ProdiList prodi={ProgramStudiLocalData} />
        <Statistic />
      </div>
    </section>
  );
};

export default Prodi;
