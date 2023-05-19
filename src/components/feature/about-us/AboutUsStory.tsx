import Paragraph from '@/components/shared/Paragraph';
import { Content } from '@/config/types/Content';

const AboutUsStory = ({ content }: { content: Content }) => {
  return (
    <section className="py-8 md:py-16">
      <div className="container">
        <h3 className="home-section-hero">{content.title}</h3>
        <div className="h-[10px] w-32 bg-primary rounded-lg mb-2 md:mb-4"></div>
        <p className="bg-light w-fit text-primary font-medium my-3 md:my-6">
          &quot;{content.subtitle}&quot;
        </p>

        <Paragraph content={content.description} classNames="mb-12" />
      </div>
    </section>
  );
};

export default AboutUsStory;
