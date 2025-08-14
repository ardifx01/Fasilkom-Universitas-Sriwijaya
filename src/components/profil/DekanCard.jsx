const DekanCard = () => {
  return (
    <div className="sm:order-1 sm:col-span-2 flex flex-col justify-center items-center">
      <div className="max-w-48 sm:max-w-56 xl:max-w-60 flex-shrink-0">
        <img
          src="/assets/erwin.png"
          alt="Prof. DR. Erwin, S.Si., M.Si"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="py-3 px-6 md:px-9 bg-[#FFCC00] -space-y-1 text-sm w-max">
        <h1 className="font-semibold ">Prof. DR. Erwin, S.Si., M.Si</h1>
        <h2>Dekan Fakultas Ilmu Komputer</h2>
        <h3>Universitas Sriwijaya</h3>
      </div>
    </div>
  );
};

export default DekanCard;
