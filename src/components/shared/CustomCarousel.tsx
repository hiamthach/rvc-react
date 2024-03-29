import { Slide } from '@/config/types/Slide';

import { Carousel } from '@mantine/carousel';
import { Button, createStyles, getStylesRef } from '@mantine/core';
import clsx from 'clsx';

import leftIcon from '@/assets/icons/left.png';
import rightIcon from '@/assets/icons/right.png';
import Paragraph from './Paragraph';

const useStyles = createStyles(() => ({
  controls: {
    ref: getStylesRef('controls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  root: {
    'width': '100%',
    'height': '100vh',
    '&:hover': {
      [`& .${getStylesRef('controls')}`]: {
        opacity: 1,
      },
    },

    [`& .${getStylesRef('controls')}`]: {
      button: {
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none',
        color: 'white',
      },
    },
  },
}));

const BannerItem = ({ slide }: { slide: Slide }) => {
  return (
    <div
      className="relative w-full h-full flex items-center"
      style={{
        background: `url(${slide.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="overlay"></div>
      <div className="text-white relative z-20 px-6 md:px-16">
        <h4 className="text-xl md:text-3xl m-0 font-medium">
          {slide.subtitle}
        </h4>
        <h2 className="text-3xl md:text-5xl leading-1 m-0">{slide.title}</h2>
        <Paragraph
          content={slide.description}
          classNames="w-full md:w-2/3 lg:w-1/2 my-3 md:my-10 line-clamp-[10]"
        />
        <Button
          size="lg"
          radius={10}
          component="a"
          href={slide.link}
          target="_blank"
          className={clsx(!slide.link && 'pointer-events-none')}
        >
          Tìm hiểu thêm
        </Button>
      </div>
    </div>
  );
};

const CustomCarousel = ({ slides }: { slides: Slide[] }) => {
  const { classes } = useStyles();

  return (
    <Carousel
      withIndicators
      loop
      classNames={classes}
      previousControlIcon={
        <img src={leftIcon} alt="left" className="h-12 w-auto" />
      }
      nextControlIcon={
        <img src={rightIcon} alt="right" className="h-12 w-auto" />
      }
    >
      {slides.map((slide, index) => (
        <Carousel.Slide key={index} className="h-screen w-full">
          <BannerItem slide={slide} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
