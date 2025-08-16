import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import NavList from "./NavList";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State untuk scroll behavior
  const [showFixedNavbar, setShowFixedNavbar] = useState(false);
  const [hasScrolledPast, setHasScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const navbarHeight = 80; // Perkiraan tinggi navbar

      if (currentScrollY > navbarHeight && !hasScrolledPast) {
        // Pertama kali scroll melewati tinggi navbar
        setHasScrolledPast(true);
        // Delay untuk memberikan efek muncul dari atas
        setTimeout(() => {
          setShowFixedNavbar(true);
        }, 150);
      } else if (currentScrollY <= navbarHeight && hasScrolledPast) {
        // Kembali ke atas, reset state
        setHasScrolledPast(false);
        setShowFixedNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolledPast]);

  return (
    <>
      {/* Navbar Original (tidak fixed) */}
      <div className="relative top-0 left-0 right-0 z-50">
        <NavList isActive={isActive} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>

      {/* Fixed Navbar (muncul setelah scroll) */}
      <div
        className={`fixed -mt-1 top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          showFixedNavbar
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <NavList isActive={isActive} isMenuOpen={isMenuOpen}  setIsMenuOpen={setIsMenuOpen} />
      </div>

      {/* Mobile navigation */}
      <div
        className={`w-72 sidebar bg-[#3D3D3D] text-white fixed z-40 bottom-0 top-0 right-0 h-screen pt-36 xl:pt-28 ${
          isMenuOpen ? "sidebar-open" : "sidebar-closed"
        }`}
      >
        <ul className="text-lg flex flex-col gap-4 sm:gap-6 font-medium">
          <li
            className={`px-6 py-2 hover:text-[#FFCC00] ${
              isActive("/") ? "text-[#FFCC00]" : "text-white"
            }`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`px-6 py-2 hover:text-[#FFCC00] ${
              isActive("/profile") ? "text-[#FFCC00]" : "text-white"
            }`}
          >
            <Link to="/profile">Profile</Link>
          </li>
          <li
            className={`px-6 py-2 hover:text-[#FFCC00] ${
              isActive("/prodi") ? "text-[#FFCC00]" : "text-white"
            }`}
          >
            <Link>Program Studi & Unit</Link>
          </li>
          <li
            className={`px-6 py-2 hover:text-[#FFCC00] ${
              isActive("/dosen") ? "text-[#FFCC00]" : "text-white"
            }`}
          >
            <Link>Dosen & Pegawai</Link>
          </li>
          <li
            className={`px-6 py-2 hover:text-[#FFCC00] ${
              isActive("/ppid") ? "text-[#FFCC00]" : "text-white"
            }`}
          >
            <Link>PPID</Link>
          </li>
          <li
            className={`px-6 py-2 hover:text-[#FFCC00] ${
              isActive("/zi") ? "text-[#FFCC00]" : "text-white"
            }`}
          >
            <Link>Zona Integritas</Link>
          </li>
          <li
            className={`px-6 py-2 hover:text-[#FFCC00] ${
              isActive("/eppt") ? "text-[#FFCC00]" : "text-white"
            }`}
          >
            <Link>E-PPT</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
