import { Partner } from '@/config/types/Partner';
import useWindowDimensions from '@/hooks/useWindowDimensions';

import { Carousel } from '@mantine/carousel';

const PartnerItem = ({ data }: { data: Partner }) => {
  return (
    <div className="aspect-square w-full h-auto bg-white shadow-lg">
      <img
        src={data.logo}
        width={400}
        height={400}
        alt={data.name}
        className="object-cover object-center w-full h-full"
      />
    </div>
  );
};

const HomePartner = ({ partners }: { partners: Partner[] }) => {
  const dimension = useWindowDimensions();

  return (
    <section className="w-full text-center py-16 bg-grey">
      <h3 className="home-section-hero uppercase font-bold text-primary mt-0 mb-10">
        đối tác của chúng tôi
      </h3>

      <Carousel
        maw={1440}
        slideGap={dimension?.width && dimension.width > 768 ? '100px' : '24px'}
        slideSize={
          dimension?.width && dimension.width > 768 ? '33.33333%' : '100%'
        }
        align={'center'}
        className="mx-auto"
        loop
      >
        {partners.map((partner, index) => (
          <Carousel.Slide key={index} className="bg-transparent">
            <PartnerItem data={partner} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </section>
  );
};

export default HomePartner;
