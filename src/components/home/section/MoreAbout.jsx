import MoreAboutCard from "./MoreAboutCard";

const MoreAbout = ({ MoreAboutFasilkom }) => {
  return (
    <section className="pt-6 pb-4">
      <div className="grid grid-cols-1 gap-4 pb-4">
        {/* Tittle */}
        <div className="px-3">
          <h1 className="text-lg font-semibold pb-4 border-b-4">
            More about FASILKOM
          </h1>
        </div>
        {/* Content */}
        <div className="grid grid-cols-1 px-3 -mt-2">
          {MoreAboutFasilkom.map((item, index) => (
            <MoreAboutCard item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreAbout;
