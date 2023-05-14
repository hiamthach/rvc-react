import { Content } from '@/config/types/Content';

const AboutUsValues = ({ content }: { content: Content }) => {
  return (
    <section className="w-full -h-full py-8 md:py-16 bg-primary">
      <div className="container text-white">
        <h3 className="home-section-hero uppercase">{content.title}</h3>
        <p className="text-sm md:text-base mb-0">{content.description}</p>
      </div>
    </section>
  );
};

export default AboutUsValues;
