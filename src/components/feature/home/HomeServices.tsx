import { Content } from '@/config/types/Content';

import { Button } from '@mantine/core';

const HomeServices = ({ content }: { content: Content }) => {
  if (!content) {
    return null;
  }

  return (
    <section className="my-8">
      <div className="container mb-7">
        <h3 className="home-section-hero text-primary">Sản phẩm & dịch vụ</h3>
      </div>

      <div
        className="w-full h-fit py-16 relative"
        style={{
          background: `url(${content.image}) no-repeat center center `,
          backgroundSize: 'cover',
        }}
      >
        <div className="overlay"></div>
        <div className="container relative text-white z-20">
          <h4 className="home-section-hero mb-4">{content.title}</h4>
          <p className="text-base mb-8">{content.description}</p>

          <div className="w-full text-center">
            <Button size="lg">Tìm hiểu thêm</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
