import { Content } from '@/config/types/Content';

const AboutUsStory = ({ content }: { content: Content }) => {
  return (
    <section className="py-8 md:py-16">
      <div className="container">
        <h3 className="home-section-hero">{content.title}</h3>
        <div className="h-[10px] w-32 bg-primary rounded-lg mb-2 md:mb-4"></div>
        <p className="bg-light w-fit text-primary font-medium my-3 md:my-6">&quot;{content.subtitle}&quot;</p>

        <p className="font-medium text-sm md:text-base mb-12">{content.description}</p>
      </div>
    </section>
  );
};

export default AboutUsStory;
