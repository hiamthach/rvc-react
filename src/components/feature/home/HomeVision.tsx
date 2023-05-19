import Paragraph from '@/components/shared/Paragraph';
import { Content } from '@/config/types/Content';

const HomeVision = ({ contents }: { contents: Content[] }) => {
  if (!contents || contents.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-primary pt-10 pb-16">
      <div className="container">
        <h3 className="text-white home-section-hero mb-2">
          Tầm nhìn & Sứ mệnh
        </h3>
        <div className="bg-yellow h-[10px] w-[100px] rounded-lg mb-4"></div>

        <h4 className="text-white text-2xl leading-[1.2] mb-1">
          {contents[0]?.title}
        </h4>

        <Paragraph
          content={contents[0]?.description || ''}
          classNames="text-white leading-[1.2] mb-8"
        />

        <h4 className="text-white text-2xl leading-[1.2] mb-1">
          {contents[1]?.title}
        </h4>
        <Paragraph
          content={contents[1]?.description || ''}
          classNames="text-white leading-[1.2]"
        />
      </div>
    </section>
  );
};

export default HomeVision;
