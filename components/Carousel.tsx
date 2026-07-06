"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback } from "react";

const slides = [
  { src: "/sample_images/sample1.jpg", alt: "Slide 1" },
  { src: "/sample_images/sample2.jpg", alt: "Slide 2" },
  { src: "/sample_images/sample3.jpg", alt: "Slide 3" },
];

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [
    Autoplay({ delay: 3000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] h-135 bg-gray-100"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 text-white p-2 text-2xl "
      >
        ‹
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-white p-2 text-2xl  "
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
