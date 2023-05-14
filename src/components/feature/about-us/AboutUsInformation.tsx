import { Content } from '@/config/types/Content';

const AboutUsInformation = ({ content }: { content: Content }) => {
  return (
    <section className="container py-16">
      <h2 className="text-2xl leading-1 m-0">CÔNG TY TNHH</h2>
      <h1 className="text-3xl leading-1 mt-2 mb-8 font-extrabold">RỒNG VÀNG CAPITAL</h1>
      <p className="text-base mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quod ipsa suscipit aliquam, adipisci animi? Ut
        blanditiis voluptas reiciendis a consectetur dolorum facere animi veritatis excepturi, fuga, dicta eum rem.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quod ipsa suscipit aliquam, adipisci animi? Ut
        blanditiis voluptas reiciendis a consectetur dolorum facere animi veritatis excepturi, fuga, dicta eum rem.
      </p>

      <div className="flex gap-10 items-center">
        <div className="h-full aspect-square">
          {content.image && (
            <img src={content.image} alt="" width={400} height={400} className="object-contain object-center" />
          )}
        </div>
        <div className="">
          <h3 className="home-section-hero text-primary uppercase text-right mb-0">{content.title}</h3>
          <h6 className="text-2xl uppercase text-right m-0 mb-8">&quot;{content.subtitle}&quot;</h6>

          <p className="text-justify">{content.description}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsInformation;
