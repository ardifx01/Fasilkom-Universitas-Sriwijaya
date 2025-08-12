import SectionCard from "./SectionCard";

const SectionList = ({ tittle, berita }) => {
  return (
    <section className="col-span-3 pt-6 pb-4 px-6 xl:px-16">
      <div className="grid grid-cols-1 gap-4 border-b-4 md:border-b-0 pb-4">
        {/* Tittle */}
        <div className="flex justify-between">
          <h2 className="bg-[#FFCC00] py-0.5 px-2">{tittle}</h2>
          <a className="font-semibold hover:text-[#FFCC00] transition-all duration-300 cursor-pointer">
            More
          </a>
        </div>
        {/* Content */}
        <div className="mt-4 grid grid-cols-1 gap-4">
          {berita.map((berita) => (
            <SectionCard berita={berita} key={berita.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionList;
