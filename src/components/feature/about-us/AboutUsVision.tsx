import { Content } from '@/config/types/Content';

const AboutUsVision = ({ contents }: { contents: Content[] }) => {
  return (
    <section className="w-full h-full py-8 md:py-16 bg-grey">
      <div className="container">
        <h3 className="home-section-hero uppercase mt-0 text-primary font-bold mb-2 md:mb-6">
          {contents[0].title}
        </h3>

        <p className="text-sm md:text-base mb-0">{contents[0].description}</p>
      </div>

      <div className="container mt-6">
        <h3 className="home-section-hero uppercase mt-0 text-primary font-bold mb-2 md:mb-6">
          {contents[1].title}
        </h3>

        <p className="text-sm md:text-base mb-0">{contents[1].description}</p>
      </div>
    </section>
  );
};

export default AboutUsVision;
