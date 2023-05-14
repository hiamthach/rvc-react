import { Content } from '@/config/types/Content';

const AboutUsStory = ({ content }: { content: Content }) => {
  return (
    <section className="py-16">
      <div className="container">
        <h3 className="home-section-hero">{content.title}</h3>
        <div className="h-[10px] w-32 bg-primary rounded-lg mb-4"></div>
        <p className="bg-light w-fit text-primary font-medium my-6">&quot;{content.subtitle}&quot;</p>

        <p className="font-medium text-base mb-12">{content.description}</p>
      </div>
    </section>
  );
};

export default AboutUsStory;
