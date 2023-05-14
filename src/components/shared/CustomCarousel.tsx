import { Slide } from '@/config/types/Slide';

import { Carousel } from '@mantine/carousel';
import { Button } from '@mantine/core';

const BannerItem = ({ slide }: { slide: Slide }) => {
  return (
    <div
      className="relative w-full h-full flex items-center"
      style={{
        background: `url(${slide.img}) no-repeat center center`,
      }}
    >
      <div className="overlay"></div>
      <div className="text-white relative z-20 px-6 md:px-16">
        <h4 className="text-xl md:text-3xl m-0 font-medium">{slide.subtitle}</h4>
        <h2 className="text-3xl md:text-5xl leading-1 m-0">{slide.title}</h2>
        <p className="w-full md:w-2/3 lg:w-1/2 text-sm md:text-base my-3 md:my-10 line-clamp-[10]">
          {slide.description}
        </p>
        <Button size="lg" radius={10}>
          Tìm hiểu thêm
        </Button>
      </div>
    </div>
  );
};

const CustomCarousel = ({ slides }: { slides: Slide[] }) => {
  return (
    <Carousel withIndicators className="w-full h-screen" loop>
      {slides.map((slide, index) => (
        <Carousel.Slide key={index} className="h-screen w-full">
          <BannerItem slide={slide} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
