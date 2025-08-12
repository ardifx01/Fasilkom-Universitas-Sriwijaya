import Navbar from "@/components/Navbar";
import Hero from "@/components/carousel/Hero";
import News from "@/components/berita/News";
import Kemahasiswaan from "@/components/kemahasiswaan/Kemahasiswaan";
import SectionLayout from "@/components/section/SectionLayout";
import AcademicLayout from "@/components/academics/AcademicLayout";
import Footer from "@/components/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <News />
      <Kemahasiswaan />
      <SectionLayout />
      <AcademicLayout />
      <Footer />
    </>
  );
};

export default Home;
