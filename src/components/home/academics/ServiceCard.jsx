const ServiceCard = ({ berita }) => {
  return (
    <div className="flex gap-4 cursor-pointer">
      <div className="w-16 h-16 sm:w-24 sm:h-24 xl:w-16 xl:h-16  flex-shrink-0 rounded-xl overflow-hidden bg-gray-200">
        <img
          src={berita.cover}
          alt="gambar"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-2 flex-1">
        <h2 className="text-sm sm:text-base line-clamp-2">{berita.judul}</h2>
        <p className="text-xs sm:text-sm text-gray-400">
          Posted by {berita.postedBy}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
