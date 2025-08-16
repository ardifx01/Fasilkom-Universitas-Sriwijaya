import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const DekanMessage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="sm:order-0 sm:col-span-3 p-4 text-[13px] lg:text-sm space-y-4 rounded-lg bg-gray-100 relative">
      <p className="text-gray-800">
        Assalamu'alaikum warahmatullahi wabarakatuh.
      </p>

      <div className="space-y-3">
        <p className="text-gray-700">
          Selamat datang di website resmi Fakultas Ilmu Komputer Universitas
          Sriwijaya.
        </p>

        <div
          className={`transition-all duration-300 overflow-hidden ${
            isExpanded || isLargeScreen ? "max-h-none" : "max-h-0"
          }`}
        >
          <p className="text-gray-700">
            Fakultas ini hadir sebagai wadah bagi generasi muda untuk
            mengembangkan pengetahuan, keterampilan, dan inovasi di bidang
            teknologi informasi. Kami berkomitmen mencetak lulusan yang tidak
            hanya unggul secara akademik, tetapi juga memiliki integritas,
            kreativitas, dan kepedulian terhadap masyarakat.
          </p>
          <p className="text-gray-700 mt-3">
            Melalui website ini, kami berharap dapat memberikan informasi yang
            bermanfaat serta menjadi jembatan komunikasi antara fakultas,
            mahasiswa, alumni, dan masyarakat luas. Mari bersama kita wujudkan
            visi membangun masa depan teknologi yang lebih baik.
          </p>
        </div>
      </div>

      {!isLargeScreen && (
        <button
          onClick={toggleExpand}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-white  transition-shadow duration-200 absolute top-3 right-3"
          aria-label={isExpanded ? "Tutup pesan" : "Lihat pesan lengkap"}
        >
          {isExpanded ? (
            <ChevronUp size={16} className="text-gray-600" />
          ) : (
            <ChevronDown size={16} className="text-gray-600" />
          )}
        </button>
      )}

      <p className="text-gray-800">
        Wassalamu'alaikum warahmatullahi wabarakatuh.
      </p>

      <div className="border-t pt-4 mt-4">
        <h1 className="font-semibold text-gray-900">
          Prof. DR. Erwin, S.Si., M.Si
        </h1>
        <h2 className="text-gray-700">Dekan Fakultas Ilmu Komputer</h2>
        <h3 className="text-gray-700">Universitas Sriwijaya</h3>
      </div>
    </div>
  );
};

export default DekanMessage;
