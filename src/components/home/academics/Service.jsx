import { AcademicService } from "@/database/data";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <section className="text-white bg-[#3D3D3D] pt-6 pb-10 xl:pb-16 lg:pt-10 px-9 xl:px-16">
      {/* Tittle */}
      <div className="flex justify-between xl:border-b-1 xl:pb-3">
        <h2 className="text-[#FFCC00] md:text-xl lg:text-2xl xl:text-4xl font-medium">
          Academic Service
        </h2>
        <a className="font-semibold hover:text-[#FFCC00] hover:underline transition-all duration-300 cursor-pointer">
          More
        </a>
      </div>
      {/* Content */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1  gap-6">
        {AcademicService.map((berita) => (
          <ServiceCard berita={berita} key={berita.ID} />
        ))}
      </div>
    </section>
  );
};

export default Service;
