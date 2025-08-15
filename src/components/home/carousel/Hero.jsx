import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Berita as beritaLocalData, getDay } from "@/database/data";
import CarouselCard from "./CarouselCard";
import HeroSkeleton from "./HeroSkeleton";
import { getBerita } from "@/service/api";

const Hero = () => {
  const beritaData = beritaLocalData
    .filter((beritaData) => beritaData.is_priority)
    .slice(0, 3);
  const [beritaUtama, setBeritaUtama] = useState(beritaData);
  const [loading, setLoading] = useState(false);
  const [api, setApi] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slidesCount, setSlidesCount] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        setLoading(true);
        const data = await getBerita();
        const beritaUtama = data.berita
          .filter((beritaData) => beritaData.is_priority)
          .slice(0, 3)
          .reverse();
        setBeritaUtama(beritaUtama);
      } catch (error) {
        console.error(error, "Server is Offline, using local data");
      } finally {
        setLoading(false);
      }
    };

    fetchBerita();
  }, []);

  // Auto-play interval
  const AUTOPLAY_INTERVAL = 5000;

  useEffect(() => {
    if (!api) return;
    setSlidesCount(api.scrollSnapList().length);
    setSelectedIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-play effect
  useEffect(() => {
    if (!api || !isAutoPlaying) return;

    const interval = setInterval(() => {
      if (selectedIndex === slidesCount - 1) {
        api.scrollTo(0);
      } else {
        api.scrollTo(selectedIndex + 1);
      }
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [api, selectedIndex, slidesCount, isAutoPlaying]);

  // Pause auto-play saat user hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  // Resume auto-play saat user tidak hover
  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  // Pause auto-play saat user manual navigation
  const handleManualNavigation = (index) => {
    setIsAutoPlaying(false);
    api?.scrollTo(index);

    // Resume auto-play setelah 5 detik
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  };

  if (loading || beritaUtama.length === 0) return <HeroSkeleton />;

  return (
    <section className="pt-36 pb-20 sm:pt-40 px-6 xl:px-16 bg-[url('/assets/background.png')] bg-cover">
      <div className="lg:grid grid-cols-2 justify-between flex-wrap lg:gap-8">
        {/* Carousel */}
        <div>
          <div className="mx-auto lg:max-w-2xl">
            <h1 className="text-lg font-medium md:text-2xl mb-4 lg:hidden">
              Timeline
            </h1>
            <Carousel setApi={setApi} opts={{ loop: true }}>
              <div
                className="relative cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <CarouselContent>
                  {beritaUtama.map((beritaData) => (
                    <CarouselItem key={beritaData.ID}>
                      <div className="rounded-2xl relative w-full h-56 sm:h-[420px] bg-gray-200 overflow-hidden">
                        <img
                          src={`${beritaData.cover}`}
                          alt={`Slide ${beritaData.ID}`}
                          className="w-full h-full object-cover"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

                        {/* Teks di atas gradient */}
                        <div className="absolute left-5 bottom-9 text-white">
                          <h2 className="sm:text-lg lg:text-base xl:text-lg">
                            {getDay(beritaData.tanggal).day}{" "}
                            {getDay(beritaData.tanggal).date}
                          </h2>
                          <h1 className="text-xs sm:text-sm md:text-lg lg:text-xl font-medium max-w-80 md:max-w-96">
                            {beritaData.judul}
                          </h1>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* Prev & Next */}
                <CarouselPrevious
                  className="absolute left-6 scale-150 sm:scale-250"
                  onClick={() =>
                    handleManualNavigation(
                      selectedIndex - 1 < 0
                        ? slidesCount - 1
                        : selectedIndex - 1
                    )
                  }
                />
                <CarouselNext
                  className="absolute right-3 scale-150 sm:scale-250"
                  onClick={() =>
                    handleManualNavigation(
                      selectedIndex + 1 >= slidesCount ? 0 : selectedIndex + 1
                    )
                  }
                />
                {/* Dots */}
                <div className="absolute right-5 bottom-3 flex justify-center mt-4 gap-2">
                  {beritaUtama.map((beritaData, index) => (
                    <button
                      key={beritaData.ID}
                      onClick={() => handleManualNavigation(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === selectedIndex
                          ? "bg-yellow-400"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Carousel>
          </div>
        </div>
        <div className="hidden lg:flex flex-col items-center w-full px-4 ">
          <h1 className="text-lg xl:text-2xl mb-4 font-medium">Timeline</h1>
          <div className="space-y-4 w-full">
            {beritaUtama.map((beritaData, index) => (
              <CarouselCard
                key={beritaData.ID}
                berita={beritaData}
                api={api}
                selectedIndex={selectedIndex}
                index={index} // Tambahkan baris ini
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
