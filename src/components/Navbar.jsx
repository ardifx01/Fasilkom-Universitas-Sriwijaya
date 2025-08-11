import { useState } from "react";
import { Search } from "lucide-react";
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';

const Navbar = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  return (
    <>
      <nav className="bg-[#3D3D3D] px-6 py-4 text-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-12 sm:w-14 h-max">
            <img src="/assets/unsri.png" alt="Logo Unsri" className="w-full object-cover" />
          </div>
          <div className="mt-1 text-[13px] sm:text-base">
            <p className="font-bold">Faculty of Computer Science</p>
            <p className="-mt-1">Universitas Sriwijaya</p>
          </div>
        </div>
        <ul className="hidden xl:flex gap-8 text-lg">
          <li className="hover:text-[#FFCC00]">
            <a href="#Home">Home</a>
          </li>
          <li className="hover:text-[#FFCC00]">
            <a href="#Profil">Profil</a>
          </li>
          <li className="hover:text-[#FFCC00]">
            <a href="#Prodi">Program Studi & Unit</a>
          </li>
          <li className="hover:text-[#FFCC00]">
            <a href="#Dosen">Dosen & Pegawai</a>
          </li>
          <li className="hover:text-[#FFCC00]">
            <a href="#PPID">PPID</a>
          </li>
          <li className="hover:text-[#FFCC00]">
            <a href="#ZI">Zona Integritas</a>
          </li>
          <li className="hover:text-[#FFCC00]">
            <a href="#E-PPT">E-PPT</a>
          </li>
        </ul>
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => setIsOpenSearch(!isOpenSearch)}
            className="bg-[#FFCC00] p-2.5 rounded-full flex items-center justify-center cursor-pointer hover-scale"
          >
            <Search className="w-3 h-3 sm:w-5 sm:h-5" strokeWidth={3} />
          </button>
          <div className="hidden lg:block w-8 h-8 sm:w-10 sm:h-10 cursor-pointer hover-scale">
            <img
              src="/assets/indonesia.png"
              className="w-full object-cover"
              alt="Indonesia"
            />
          </div>
          <div className="xl:hidden hover:text-[#FFCC00] cursor-pointer">
            <Menu className="w-6 h-6 sm:w-8 sm:h-8"/>
          </div>
        </div>
      </nav>

      {/* Search bar */}
      <div
        className={`bg-[#3D3D3D] px-6 text-white flex items-center justify-center search-container -mt-1 ${
          isOpenSearch ? "open" : "closed"
        }`}
      >
        <div
          className={`bg-[#262626] px-4 py-2 flex items-center gap-2 p-2 rounded-full w-full max-w-xl search-input-wrapper ${
            isOpenSearch ? "open" : "closed"
          }`}
        >
          <Search className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-[#FFCC00]" strokeWidth={3} />
          <input
            className="bg-transparent outline-none w-full text-xs sm:text-base"
            placeholder="Search"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
