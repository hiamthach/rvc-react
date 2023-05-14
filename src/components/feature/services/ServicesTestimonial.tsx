import { Testimonial } from '@/config/types/Testimonial';

import { Carousel } from '@mantine/carousel';

const ServicesTestimonial = ({ testimonials }: { testimonials: Testimonial[] }) => {
  return (
    <div className="py-12">
      <h3 className="home-section-hero text-center text-primary uppercase font-bold">Cảm nhận của khách hàng</h3>

      <Carousel slideGap={'50px'} slideSize={'33.33333%'} loop>
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
              <p className="m-0 line-clamp-6">{testimonial.testimonial}</p>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default ServicesTestimonial;