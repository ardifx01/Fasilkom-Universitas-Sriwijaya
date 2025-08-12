const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] pt-9 pb-10 xl:pb-16 lg:pt-10 px-6 xl:px-16 -mt-0.5 text-white">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-9">
        {/* Email */}
        <div className="md:col-span-2">
          <h1 className="font-semibold text-2xl lg:text-3xl">Email</h1>
          <p className="text-sm mt-4 cursor-pointer">humas@ilkom.unsri.ac.id</p>
          <div>
            {/* Icon */}
            <div className="flex gap-2 mt-4">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src="/assets/facebook.png"
                  alt="Facebook"
                  className="w-full h-full object-cover cursor-pointer"
                />
              </div>
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src="/assets/instagram.png"
                  alt="Instagram"
                  className="w-full h-full object-cover cursor-pointer"
                />
              </div>
            </div>
            <p className="text-sm mt-4">Humas Fasilkom Unsri</p>
          </div>
        </div>
        {/* Kampus */}
        <div className="space-y-10 md:col-span-3">
          {/* Kampus Utama */}
          <div className="space-y-4">
            <h1 className="font-semibold text-2xl lg:text-3xl">Kampus Utama</h1>
            <p className="text-sm max-w-64 sm:max-w-full">
              Jl. Palembang - Prabumulih KM.32 Kabupaten Ogan Ilir, Sumatera
              Selatan, Indonesia
            </p>
            <p className="cursor-pointer">Telp. (0711) 379249</p>
          </div>
          {/* Kampus Palembang */}
          <div className="space-y-4">
            <h1 className="font-semibold text-2xl lg:text-3xl">
              Kampus Palembang
            </h1>
            <p className="text-sm max-w-64">
              Jl. Srijaya Negara Bukit Besar Palembang 30139
            </p>
            <p className="cursor-pointer">Telp. (0711) 379249</p>
          </div>
        </div>

        {/* Internal Link */}
        <div className="space-y-4 md:col-span-4">
          <h1 className="font-semibold text-2xl lg:text-3xl">Internal Link</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <p className="cursor-pointer">Single Sign On Fasilkom UNSRI</p>
            <p className="cursor-pointer">Blog</p>
            <p className="cursor-pointer">BEM KM Fasilkom</p>
            <p className="cursor-pointer">Streaming</p>
            <p className="cursor-pointer">Alumni</p>
            <p className="cursor-pointer">WiFi</p>
            <p className="cursor-pointer">Himasisko</p>
            <p className="cursor-pointer">HMIF</p>
            <p className="cursor-pointer">NAC</p>
            <p className="cursor-pointer">MAC</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
