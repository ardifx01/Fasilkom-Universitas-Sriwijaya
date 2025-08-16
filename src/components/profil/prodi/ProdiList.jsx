const ProdiCard = ({ prodiData }) => {
  return (
    <div className="space-y-6 w-full">
      <div className="border-b-2 border-[#FFCC00]">
        <h1 className="text-[#FFCC00] pb-2 w-full lg:w-min lg:text-xl">
          {prodiData.kategori}
        </h1>
      </div>
      <div className="text-white space-y-4">
        {prodiData.prodi.map((prodi) => (
          <p className="text-sm w-max lg:max-w-40">{prodi}</p>
        ))}
      </div>
    </div>
  );
};

const ProdiList = ({ prodi }) => {
  return (
    <div className="sm:col-span-3 grid grid-cols-2 lg:grid-cols-3 gap-8 xl:max-w-2xl">
      {prodi.map((prodiData) => (
        <ProdiCard key={prodiData.id} prodiData={prodiData} />
      ))}
    </div>
  );
};

export default ProdiList;
