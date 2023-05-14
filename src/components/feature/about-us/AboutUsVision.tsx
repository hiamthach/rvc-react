import { Content } from '@/config/types/Content';

const AboutUsVision = ({ content }: { content: Content }) => {
  return (
    <section className="w-full h-full py-16 bg-grey">
      <div className="container">
        <h3 className="home-section-hero uppercase mt-0 text-primary font-bold mb-6">{content.title}</h3>

        <p className="text-base mb-0">{content.description}</p>
      </div>
    </section>
  );
};

export default AboutUsVision;
