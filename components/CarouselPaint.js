import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";

const images = [
  {
    id: 1,
    imageUrl: "/marcas-parceiras/suvinil1.png",
  },
  {
    id: 2,
    imageUrl: "/marcas-parceiras/coral1.png",
  },
  {
    id: 3,
    imageUrl: "/marcas-parceiras/eucatex1.png",
  },
  {
    id: 4,
    imageUrl: "/marcas-parceiras/hydronorth1.png",
  },
  {
    id: 5,
    imageUrl: "/marcas-parceiras/osmocolor1.png",
  },
];

export function CarouselPaint() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  return (
    <div className="flex embla max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl h-full">
      <div className="flex embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container  flex">
          {images.map((image) => (
            <div
              key={image.id}
              className="embla__slide flex justify-center flex-[0_0_100%]"
            >
              <img
                src={image.imageUrl}
                className="object-cover w-auto h-auto max-w-full max-h-full rounded-xl "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
