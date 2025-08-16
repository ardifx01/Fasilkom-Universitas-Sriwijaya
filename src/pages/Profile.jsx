import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/profil/hero/Hero";
import Dekan from "@/components/profil/dekan/Dekan";
import VisiMisi from "@/components/profil/visiMisi/VisiMisi";
import Prodi from "@/components/profil/prodi/Prodi";

const Profile = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Dekan />
      <VisiMisi />
      <Prodi />
      <Footer />
    </>
  );
};

export default Profile;
