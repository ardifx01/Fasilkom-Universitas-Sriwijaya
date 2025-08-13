import { getDay } from "@/database/data";
const CarouselCard = ({ berita, api, selectedIndex }) => {
  const { day, date } = getDay(berita.tanggal);
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden h-28 cursor-pointer"
      onClick={() => api.scrollTo(berita.id - 1)}
    >
      <img
        src={berita.cover}
        alt={berita.judul}
        className="w-full h-full object-cover"
      />
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      {/* Card Content */}
      <div className={`absolute flex gap-4 items-center inset-0 p-6 transition-colors duration-400 ${selectedIndex === berita.id -1 ? "text-[#FFCC00]" : "text-white"}`}>
        <div className="flex flex-col w-max">
          <h3 className="text-xl">{day}</h3>
          <h2 className="font-bold text-3xl">{date}</h2>
        </div>
        <div className="w-full text-base">
          <h1>{berita.judul}</h1>
          <p className="text-white text-sm">Posted in {berita.postedBy}</p>
        </div>
      </div>
      
      {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-l from-[#FFCC00]/30 via-[#FFCC00]/5 to-transparent transition-opacity duration-400 ease-in-out ${selectedIndex === berita.id -1 ? "opacity-100" : "opacity-0"}`}></div>
    </div>
  );
};

export default CarouselCard;
