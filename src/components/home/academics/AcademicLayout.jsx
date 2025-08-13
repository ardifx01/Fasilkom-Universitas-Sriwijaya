import Ormawa from "./Ormawa";
import Service from "./Service";
const AcademicLayout = () => {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-2">
      <Ormawa />
      <Service />
    </section>
  );
};

export default AcademicLayout;
