import {
  Vacancies as VacanciesLocalData,
  Scholarship as ScholarshipLocalData,
  MoreAboutFasilkom as MoreAboutFasilkomLocalData,
} from "@/database/data";
import { getVacancies, getScholarship } from "@/service/api";
import SectionList from "./SectionList";
import MoreAbout from "./MoreAbout";
import SectionLayoutSkeleton from "./SectionListSkeleton";
import { useEffect, useState } from "react";

const SectionLayout = () => {
  const [vacancies, setVacancies] = useState(VacanciesLocalData);
  const [scholarship, setScholarship] = useState(ScholarshipLocalData);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [vacanciesRespone, scholarshipRespone] = await Promise.all([
          getVacancies(),
          getScholarship(),
        ]);
        setVacancies(vacanciesRespone.data);
        setScholarship(scholarshipRespone.data);
      } catch (error) {
        console.error(error, "Server is Offline, using local data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || vacancies.length === 0 || scholarship.length === 0)
    return <SectionLayoutSkeleton />;
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 px-6 xl:px-16">
      <SectionList tittle="Vacancies" berita={vacancies} />
      <SectionList tittle="Scholarship" berita={scholarship} />
      <MoreAbout MoreAboutFasilkom={MoreAboutFasilkomLocalData} />
    </section>
  );
};

export default SectionLayout;
