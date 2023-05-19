import { Testimonial } from '@/config/types/Testimonial';

import { Carousel } from '@mantine/carousel';

import useWindowDimensions from '@/hooks/useWindowDimensions';
import Paragraph from '@/components/shared/Paragraph';

const ServicesTestimonial = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => {
  const dimension = useWindowDimensions();

  return (
    <div className="py-12 text-center">
      <h3 className="home-section-hero text-center text-primary uppercase font-bold">
        Cảm nhận của khách hàng
      </h3>

      <Carousel
        maw={1440}
        slideGap={dimension?.width && dimension.width > 768 ? '50px' : '16px'}
        slideSize={
          dimension?.width && dimension.width > 768 ? '33.33333%' : '100%'
        }
        align={'center'}
        className="mx-auto"
        loop
      >
        {testimonials.map((testimonial, index) => (
          <Carousel.Slide key={index}>
            <div className="text-center mx-12">
              <img
                alt={testimonial.name}
                src={testimonial.avatar}
                width={400}
                height={400}
                className="w-[120px] h-[120px] rounded-full"
              />

              <h6 className="text-lg m-0 my-3">{testimonial.name}</h6>
              <Paragraph
                content={testimonial.testimonial}
                classNames="m-0 line-clamp-6"
              />
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default ServicesTestimonial;
