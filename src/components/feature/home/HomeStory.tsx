import { Content } from '@/config/types/Content';

import { Button } from '@mantine/core';

const HomeStory = ({ content }: { content: Content }) => {
  if (!content) {
    return null;
  }
  return (
    <section className="container my-10">
      <div className="flex flex-col md:flex-row w-full gap-6 md:flex-nowrap flex-wrap items-stretch">
        <div className="flex-1 py-[100px]">
          <h3 className="home-section-hero">{content.title}</h3>
          <div className="h-[10px] w-32 bg-primary rounded-lg mb-4"></div>
          <p className="bg-light w-fit text-primary font-medium my-6">&quot;{content.subtitle}&quot;</p>

          <p className="font-medium text-base mb-12">{content.description}</p>

          <Button size="lg">Tìm hiểu thêm</Button>
        </div>
        <div className="flex-1 relative">
          {content.image && (
            <img
              src={content.image}
              width={560}
              height={420}
              alt=""
              className="relative w-full object-cover object-center block md:w-auto md:absolute md:left-5 md:top-1/2 md:translate-y-[-50%] z-10"
            />
          )}

          <div className="bg-primary absolute top-0 right-0 h-full w-0 md:w-2/3 lg:w-1/2 z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeStory;
