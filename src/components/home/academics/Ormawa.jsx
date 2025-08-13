import { OrmawaLogo } from "@/database/data";
const Ormawa = () => {
  return (
    <section className="pb-6 px-9 xl:px-16 lg:pt-8 xl:bg-[url('/assets/background.png')] xl:bg-cover">
      {/* Tittle */}
      <h2 className="text-[#FFCC00] font-medium bg-[#3D3D3D] w-max py-2 px-4 sm:text-lg md:text-xl lg:text-3xl 2xl:text-4xl">
        Social Media ORMAWA Fasilkom
      </h2>
      {/* Content */}
      <div className="mt-4">
        <p className="text-sm">
          Temukan informasi terbaru, pengumuman, dan dokumentasi kegiatan
          melalui media sosial organisasi mahasiswa Fasilkom Unsri.
        </p>
        {/* Logo ORMAWA */}
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
          {OrmawaLogo.map((logo) => (
            <div
              key={logo.id}
              className="flex flex-col justify-center items-center cursor-pointer"
            >
              {/* Logo */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 xl:w-20 xl:h-20 flex-shrink-0 rounded-full overflow-hidden">
                <img
                  src={logo.cover}
                  alt={logo.judul}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Tittle */}
              <p className="text-sm mt-2 text-center">{logo.judul}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ormawa;
