const Hero = () => {
  return (
    <section className="relative mt-32 md:mt-20 h-44 sm:h-56 lg:h-72 xl:h-80 bg-[url('/assets/fasilkom-mobile.png')] md:bg-[url('/assets/fasilkom.png')] bg-cover">
      <div className="absolute inset-0 z-20 text-white flex flex-col justify-end items-center pb-6">
        <div className="w-32 sm:w-40 md:w-44 lg:w-52 xl:w-64 mb-2">
          <img
            src="/assets/icon-fasilkom.png"
            alt="Icon Fasilkom"
            className="w-full"
          />
        </div>
        <h1 className="text-lg sm:text-2xl font-semibold md:text-3xl lg:text-4xl">
          FAKULTAS ILMU KOMPUTER
        </h1>
        <h2 className="text-sm sm:text-lg lg:text-2xl xl:text-3xl">
          UNIVERSITAS SRIWIJAYA
        </h2>
      </div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
    </section>
  );
};

export default Hero;
