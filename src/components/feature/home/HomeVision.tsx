import { Content } from '@/config/types/Content';

const HomeVision = ({ contents }: { contents: Content[] }) => {
  if (!contents || contents.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-primary pt-6 pb-12">
      <div className="container">
        <h3 className="text-white home-section-hero">Tầm nhìn & Sứ mệnh</h3>
        <div className="bg-yellow h-[10px] w-[100px] rounded-lg"></div>

        <h4 className="text-white text-2xl leading-1 mb-3">{contents[0]?.title}</h4>
        <p className="text-white text-base leading-1">{contents[0]?.description}</p>

        <h4 className="text-white text-2xl leading-1 mb-3">{contents[1]?.title}</h4>
        <p className="text-white text-base leading-1">{contents[1]?.description}</p>
      </div>
    </section>
  );
};

export default HomeVision;
