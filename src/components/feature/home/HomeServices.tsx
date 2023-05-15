import { Content } from '@/config/types/Content';

import clsx from 'clsx';

import { Button } from '@mantine/core';

const HomeServices = ({ content }: { content: Content }) => {
  if (!content) {
    return null;
  }

  return (
    <section className="mt-12 mb-16">
      <div className="container mb-7">
        <h3 className="home-section-hero text-primary">Sản phẩm & dịch vụ</h3>
      </div>

      <div
        className="w-full h-fit py-16 relative"
        style={{
          background: `url(${content.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="overlay"></div>
        <div className="container relative text-white z-20">
          <h4 className="home-section-hero mb-4">{content.title}</h4>
          <p className="text-sm md:text-base mb-8 line-clamp-[10]">{content.description}</p>

          <div className="w-full text-center">
            <Button size="lg" component='a' href={content.link} target='_blank' className={clsx(!content.link && "pointer-events-none" )}>Tìm hiểu thêm</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
