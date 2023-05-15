import { useContext } from "react"

import { MainLayoutContext } from "@/components/layout/MainLayout"

import { Content } from '@/config/types/Content';

const AboutUsInformation = ({ content }: { content: Content }) => {
  const { information } = useContext(MainLayoutContext);


  return (
    <section className="container py-8 md:py-16">
      <h2 className="text-2xl leading-1 m-0">CÔNG TY TNHH</h2>
      <h1 className="text-3xl leading-1 mt-2 mb-4 md:mb-8 font-extrabold">RỒNG VÀNG CAPITAL</h1>
      <p className="text-sm md:text-base mb-10">
        {information?.description}
      </p>

      <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center">
        <div className="w-full md:w-2/5 h-auto">
          {content.image && (
            <img src={content.image} alt="" className="w-full h-auto object-contain object-center" />
          )}
        </div>
        <div className="flex-1">
          <h3 className="home-section-hero text-primary uppercase text-right mb-1">{content.title}</h3>
          <h6 className="text-xl md:text-2xl uppercase text-right m-0 mb-4 md:mb-8">&quot;{content.subtitle}&quot;</h6>

          <p className="text-justify text-sm md:text-base">{content.description}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsInformation;
