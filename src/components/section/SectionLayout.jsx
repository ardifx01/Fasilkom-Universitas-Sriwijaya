import { Vacancies, Scholarship, Achievements } from "@/database/data";
import SectionList from "./SectionList";
const SectionLayout = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-9 gap-4 md:gap-2">
      <SectionList tittle="Vacancies" berita={Vacancies} />
      <SectionList tittle="Scholarship" berita={Scholarship} />
      <SectionList tittle="Student Achievements" berita={Achievements} />
    </section>
  );
};

export default SectionLayout;
