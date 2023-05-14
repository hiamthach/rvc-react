import { Content } from '@/config/types/Content';

const AboutUsVision = ({ content }: { content: Content }) => {
  return (
    <section className="w-full h-full py-8 md:py-16 bg-grey">
      <div className="container">
        <h3 className="home-section-hero uppercase mt-0 text-primary font-bold mb-2 md:mb-6">{content.title}</h3>

        <p className="text-sm md:text-base mb-0">{content.description}</p>
      </div>
    </section>
  );
};

export default AboutUsVision;
