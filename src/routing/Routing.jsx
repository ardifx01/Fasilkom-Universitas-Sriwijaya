import { useEffect } from "react";
import { Route, Routes } from "react-router";
import { getBerita } from "@/service/api";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import { toast } from "react-toastify";

const Routing = () => {
  useEffect(() => {
    const checkServer = async () => {
      try {
        await getBerita();
        toast.success("Server is Online");
      } catch (error) {
        toast.warning("Server is Offline, Using Local Data");
      }
    };

    checkServer();
  }, []);

  return (
    <section className={`bg-background text-foreground`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </section>
  );
};

export default Routing;
