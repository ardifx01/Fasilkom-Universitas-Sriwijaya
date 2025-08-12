import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Berita, getDay } from "@/database/data";
import CarouselCard from "./CarouselCard";

const Hero = () => {
  const [api, setApi] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slidesCount, setSlidesCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setSlidesCount(api.scrollSnapList().length);
    setSelectedIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const beritaUtama = Berita.filter((berita) => berita.isPriority).slice(0, 3);

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
              <div className="relative cursor-pointer">
                <CarouselContent>
                  {beritaUtama.map((berita) => (
                    <CarouselItem key={berita.id}>
                      <div className="rounded-2xl relative w-full h-56 sm:h-[420px] bg-gray-200 overflow-hidden">
                        <img
                          src={`${berita.cover}`}
                          alt={`Slide ${berita.id}`}
                          className="w-full h-full object-cover"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

                        {/* Teks di atas gradient */}
                        <div className="absolute left-5 bottom-9 text-white">
                          <h2 className="sm:text-lg lg:text-base xl:text-lg">
                            {getDay(berita.tanggal).day}{" "}
                            {getDay(berita.tanggal).date}
                          </h2>
                          <h1 className="text-xs sm:text-sm md:text-lg lg:text-xl font-medium max-w-80 md:max-w-96">
                            {berita.judul}
                          </h1>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* Prev & Next */}
                <CarouselPrevious className="absolute left-6 scale-150 sm:scale-250" />
                <CarouselNext className="absolute right-3 scale-150 sm:scale-250" />
                {/* Dots */}
                <div className="absolute right-5 bottom-3 flex justify-center mt-4 gap-2">
                  {Array.from({ length: slidesCount }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
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
            <CarouselCard
              berita={beritaUtama[0]}
              api={api}
              selectedIndex={selectedIndex}
            />
            <CarouselCard
              berita={beritaUtama[1]}
              api={api}
              selectedIndex={selectedIndex}
            />
            <CarouselCard
              berita={beritaUtama[2]}
              api={api}
              selectedIndex={selectedIndex}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
