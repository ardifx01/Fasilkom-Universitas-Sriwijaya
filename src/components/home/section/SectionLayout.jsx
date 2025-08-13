import {
  Vacancies as VacanciesLocalData,
  Scholarship as ScholarshipLocalData,
  MoreAboutFasilkom as MoreAboutFasilkomLocalData,
} from "@/database/data";
import SectionList from "./SectionList";
import MoreAbout from "./MoreAbout";

const SectionLayout = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 px-6 xl:px-16">
      <SectionList tittle="Vacancies" berita={VacanciesLocalData} />
      <SectionList tittle="Scholarship" berita={ScholarshipLocalData} />
      <MoreAbout MoreAboutFasilkom={MoreAboutFasilkomLocalData} />
    </section>
  );
};

export default SectionLayout;
