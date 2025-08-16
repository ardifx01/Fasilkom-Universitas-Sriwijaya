const Statistic = () => {
  return (
    <div className="sm:col-span-2 grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 text-white font-medium mt-4 sm:mt-0 pb-16 lg:pb-24">
      {/* Prodi dan Total Mahasiswa */}
      <div className="space-y-6">
        <div className="w-max space-y-2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl">8</h1>
          <p className="lg:text-base xl:text-lg">Program Studi</p>
        </div>
        <div className="w-max space-y-2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl">2468</h1>
          <p className="lg:max-w-40 lg:text-base xl:text-lg">
            Total Mahasiswa Aktif
          </p>
        </div>
      </div>
      {/* Total Alumni */}
      <div className="mt-6 lg:mt-0">
        <div className="w-max space-y-2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl">6416</h1>
          <p className="lg:text-base xl:text-lg">Total Alumni</p>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
