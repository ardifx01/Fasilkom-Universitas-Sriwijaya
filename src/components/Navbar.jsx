import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Search } from "lucide-react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-30">
        <nav className="bg-[#3D3D3D] px-6 py-4 text-white flex items-center justify-between -mt-0.5">
          {/* Fasilkom icon */}
          <div className="flex items-center gap-2">
            <div className="w-12 sm:w-14 h-max">
              <img
                src="/assets/unsri.png"
                alt="Logo Unsri"
                className="w-full object-cover"
              />
            </div>
            <div className="mt-1 text-[13px] sm:text-base">
              <p className="font-bold">Faculty of Computer Science</p>
              <p className="-mt-1">Universitas Sriwijaya</p>
            </div>
          </div>
          {/* Navigation */}
          <ul className="text-md 2xl:text-lg hidden xl:flex gap-8">
            <li
              className={`after:content-[''] after:block after:border after:border-[#FFCC00] after:transition-all after:duration-200 ${
                isActive("/")
                  ? "text-[#FFCC00] after:scale-x-105"
                  : "hover:text-[#FFCC00] hover:after:scale-x-105"
              }`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`after:content-[''] after:block after:border after:border-[#FFCC00] after:transition-all after:duration-200 after:scale-x-0 ${
                isActive("/profil")
                  ? "text-[#FFCC00] after:scale-x-105"
                  : "hover:text-[#FFCC00] hover:after:scale-x-105"
              }`}
            >
              <Link>Profil</Link>
            </li>
            <li
              className={`after:content-[''] after:block after:border after:border-[#FFCC00] after:transition-all after:duration-200 after:scale-x-0 ${
                isActive("/prodi")
                  ? "text-[#FFCC00] after:scale-x-105"
                  : "hover:text-[#FFCC00] hover:after:scale-x-105"
              }`}
            >
              <Link>Program Studi & Unit</Link>
            </li>
            <li
              className={`after:content-[''] after:block after:border after:border-[#FFCC00] after:transition-all after:duration-200 after:scale-x-0 ${
                isActive("/dosen")
                  ? "text-[#FFCC00] after:scale-x-105"
                  : "hover:text-[#FFCC00] hover:after:scale-x-105"
              }`}
            >
              <Link>Dosen & Pegawai</Link>
            </li>
            <li
              className={`after:content-[''] after:block after:border after:border-[#FFCC00] after:transition-all after:duration-200 after:scale-x-0 ${
                isActive("/ppid")
                  ? "text-[#FFCC00] after:scale-x-105"
                  : "hover:text-[#FFCC00] hover:after:scale-x-105"
              }`}
            >
              <Link>PPID</Link>
            </li>
            <li
              className={`after:content-[''] after:block after:border after:border-[#FFCC00] after:transition-all after:duration-200 after:scale-x-0 ${
                isActive("/zi")
                  ? "text-[#FFCC00] after:scale-x-105"
                  : "hover:text-[#FFCC00] hover:after:scale-x-105"
              }`}
            >
              <Link>Zona Integritas</Link>
            </li>
            <li
              className={`after:content-[''] after:block after:border after:border-[#FFCC00] after:transition-all after:duration-200 after:scale-x-0 ${
                isActive("/eppt")
                  ? "text-[#FFCC00] after:scale-x-105"
                  : "hover:text-[#FFCC00] hover:after:scale-x-105"
              }`}
            >
              <Link>E-PPT</Link>
            </li>
          </ul>
          {/* Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => setIsOpenSearch(!isOpenSearch)}
              className="bg-[#FFCC00] p-2.5 rounded-full hidden md:flex items-center justify-center cursor-pointer hover-scale"
            >
              <Search className="w-3 h-3 sm:w-5 sm:h-5" strokeWidth={3} />
            </button>
            <div className="hidden md:block w-8 h-8 sm:w-10 sm:h-10 cursor-pointer hover-scale">
              <img
                src="/assets/indonesia.png"
                className="w-full object-cover"
                alt="Indonesia"
              />
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden hover:text-[#FFCC00] cursor-pointer"
            >
              {!isMenuOpen ? (
                <Menu className="w-6 h-6 sm:w-8 sm:h-8" />
              ) : (
                <X className="w-6 h-6 sm:w-8 sm:h-8" />
              )}
            </button>
          </div>
        </nav>
        {/* Search bar */}
        <div
          className={`bg-[#3D3D3D] shadow-md px-6 text-white flex items-center justify-center search-container -mt-0.5 ${
            isOpenSearch ? "open" : "closed"
          }`}
        >
          <div
            className={`bg-[#262626] px-4 py-2 flex items-center gap-2 p-2 rounded-full w-full max-w-xl search-input-wrapper ${
              isOpenSearch ? "open" : "closed"
            }`}
          >
            <Search
              className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-[#FFCC00]"
              strokeWidth={3}
            />
            <input
              className="bg-transparent outline-none w-full text-xs sm:text-base"
              placeholder="Cari"
            />
          </div>
        </div>
      </div>
{/* Mobile navigation */}
<div
  className={`w-72 sidebar bg-[#3D3D3D] text-white fixed z-20 bottom-0 top-0 right-0 h-screen pt-36 xl:pt-28 ${
    isMenuOpen ? "sidebar-open" : "sidebar-closed"
  }`}
>
  <ul className="text-lg flex flex-col gap-4 sm:gap-6 font-medium">
    <li
      className={`px-6 py-2 hover:text-[#FFCC00] ${
        isActive("/") 
          ? "text-[#FFCC00]" 
          : "text-white"
      }`}
    >
      <Link href="">Home</Link>
    </li>
    <li
      className={`px-6 py-2 hover:text-[#FFCC00] ${
        isActive("/profil") 
          ? "bg-[#262626]" 
          : "text-white"
      }`}
    >
      <Link href="">Profil</Link>
    </li>
    <li
      className={`px-6 py-2 hover:text-[#FFCC00] ${
        isActive("/prodi") 
          ? "bg-[#262626]" 
          : "text-white"
      }`}
    >
      <Link href="">Program Studi & Unit</Link>
    </li>
    <li
      className={`px-6 py-2 hover:text-[#FFCC00] ${
        isActive("/dosen") 
          ? "bg-[#262626]" 
          : "text-white"
      }`}
    >
      <Link href="">Dosen & Pegawai</Link>
    </li>
    <li
      className={`px-6 py-2 hover:text-[#FFCC00] ${
        isActive("/ppid") 
          ? "bg-[#262626]" 
          : "text-white"
      }`}
    >
      <Link href="">PPID</Link>
    </li>
    <li
      className={`px-6 py-2 hover:text-[#FFCC00] ${
        isActive("/zi") 
          ? "bg-[#262626]" 
          : "text-white"
      }`}
    >
      <Link href="">Zona Integritas</Link>
    </li>
    <li
      className={`px-6 py-2 hover:text-[#FFCC00] ${
        isActive("/eppt") 
          ? "bg-[#262626]" 
          : "text-white"
      }`}
    >
      <Link href="">E-PPT</Link>
    </li>
  </ul>
</div>
    </>
  );
};

export default Navbar;
