import { useEffect, useRef } from "react";
import { Route, Routes } from "react-router";
import { getBerita } from "@/service/api";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import { toast } from "react-toastify";

const Routing = () => {
  const hasCheckedRef = useRef(false);

  useEffect(() => {
    if (!hasCheckedRef.current) {
      const checkServer = async () => {
        try {
          await getBerita();
          toast.info("Server is Online");
        } catch (error) {
          toast.info("Server is Offline, Using Local Data");
        }
      };

      checkServer();
      hasCheckedRef.current = true;
    }
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
