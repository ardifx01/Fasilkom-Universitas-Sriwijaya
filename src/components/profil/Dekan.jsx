import DekanCard from "./DekanCard";
import DekanMessage from "./DekanMessage";

const Dekan = () => {
  return (
    <section className="pt-6 pb-4 px-6 xl:px-16">
      {/* Tittle */}
      <div className="px-3">
        <h1 className="bg-[#FFCC00] py-2 px-3 xl:text-xl w-max">
          Message from The Dean
        </h1>
      </div>
      {/* Content */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-6 place-items-center px-3">
        <DekanCard />
        <DekanMessage />
      </div>
    </section>
  );
};

export default Dekan;
