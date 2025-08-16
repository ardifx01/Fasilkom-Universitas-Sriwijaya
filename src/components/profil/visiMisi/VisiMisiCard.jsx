const VisiMisiCard = () => {
  return (
    <div className="mt-4 space-y-4">
      {/* Visi */}
      <div className="space-y-4">
        <h1 className="text-sm sm:text-base xl:text-2xl font-semibold">
          Visi FASILKOM UNSRI
        </h1>
        <p className="text-[13px] sm:text-sm">
          Pada tahun 2025 menjadi institusi yang unggul di bidang ICT,
          berintegritas dan berjiwa technopreunership
        </p>
      </div>
      {/* Misi */}
      <div>
        <div className="space-y-4">
          <h1 className="text-sm sm:text-base xl:text-2xl font-semibold">
            Misi FASILKOM UNSRI
          </h1>
          <ol className="list-decimal ml-3 text-[13px] sm:text-sm">
            <li>
              Menyelenggarakan dan mengembangkan pendidikan tinggi dalam upaya
              menghasilkan manusia terdidik yang dapat menerapkan dan
              mengembangkan ilmu pengetahuan bidang informasi, komunikasi dan
              teknologi.
            </li>
            <li>
              Menyelenggarakan dan mengembangkan penelitian dalam  rangka
              meningkatkan kualitas pembelajaran, ilmu pengetahuan bidang
              informasi, komunikasi dan teknologi yang memiliki nilai aplikasi
              dalam pembangunan.
            </li>
            <li>
              Menyelenggarakan dan mengembangkan pengabdian kepada masyarakat
              dengan menerapkan ilmu pengetahuan  bidang informasi, komunikasi
              dan teknologi untuk mewujudkan kesejahteraan dan kemajuan
              masyarakat
            </li>
            <li>
              Menyelenggarakan pembinaan dan pengembangan bakat, minat,
              penalaran, dan kesejahteraan mahasiswa.
            </li>
            <li>
              Melaksanakan kerjasama (MOA) dengan lembaga lain, baik nasional
              maupun internasional.
            </li>
            <li>
              Melaksanakan Manajemen administrasi yang modern profesional,
              efektif, efesien dan akuntabel.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default VisiMisiCard;
