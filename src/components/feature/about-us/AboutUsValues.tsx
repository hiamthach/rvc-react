import Paragraph from '@/components/shared/Paragraph';
import { Content } from '@/config/types/Content';

const AboutUsValues = ({ content }: { content: Content }) => {
  return (
    <section className="w-full -h-full py-8 md:py-16 bg-primary">
      <div className="container text-white">
        <h3 className="home-section-hero uppercase">{content.title}</h3>
        <Paragraph content={content.description} classNames="mb-0" />
      </div>
    </section>
  );
};

export default AboutUsValues;
