import Navbar from "@/components/Navbar";
import Hero from "@/components/home/carousel/Hero";
import News from "@/components/home/berita/News";
import Kemahasiswaan from "@/components/home/kemahasiswaan/Kemahasiswaan";
import SectionLayout from "@/components/home/section/SectionLayout";
import AcademicLayout from "@/components/home/academics/AcademicLayout";
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
