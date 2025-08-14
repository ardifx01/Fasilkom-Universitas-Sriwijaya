import { Route, Routes } from "react-router";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";

const Routing = () => {
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
