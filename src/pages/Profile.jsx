import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/profil/Hero";
import Dekan from "@/components/profil/Dekan";
import VisiMisi from "@/components/profil/VisiMisi";
import Prodi from "@/components/profil/Prodi";

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
