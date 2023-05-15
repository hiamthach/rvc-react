import { Partner } from '@/config/types/Partner';

import { Carousel } from '@mantine/carousel';

const PartnerItem = ({ data }: { data: Partner }) => {
  return (
    <div className="aspect-square w-fit h-fit bg-white shadow-lg">
      <img src={data.logo} width={400} height={400} alt={data.name} className="object-cover object-center" />
    </div>
  );
};

const HomePartner = ({ partners }: { partners: Partner[] }) => {
  return (
    <section className="w-full text-center py-16 bg-grey">
      <h3 className="home-section-hero uppercase font-bold text-primary mt-0 mb-10">đối tác của chúng tôi</h3>

      <div className="container">
        <Carousel slideGap={'50px'} slideSize={'33.33333%'} loop>
          {partners.map((partner, index) => (
            <Carousel.Slide key={index} className="bg-transparent">
              <PartnerItem data={partner} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default HomePartner;
