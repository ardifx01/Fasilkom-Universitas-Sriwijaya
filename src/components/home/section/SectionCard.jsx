const SectionCard = ({ berita }) => {
  return (
    <div className="flex gap-4 cursor-pointer p-3 rounded-2xl hover:bg-gray-100 transition-all duration-300">
      <div className="w-16 h-16 sm:w-24 sm:h-24  flex-shrink-0 rounded-xl overflow-hidden bg-gray-200">
        <img
          src={berita.cover}
          alt="gambar"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-2 flex-1">
        <h2 className="text-sm sm:text-base line-clamp-2">{berita.judul}</h2>
        <p className="text-xs sm:text-sm text-gray-500">
          Posted by {berita.postedBy}
        </p>
      </div>
    </div>
  );
};

export default SectionCard;
