import { useContext } from "react"

import { MainLayoutContext } from "@/components/layout/MainLayout";

const ContactBanner = () => {
  const { information } = useContext(MainLayoutContext)

  return (
    <div className="h-[600px] w-full relative">
      <img
        src={information?.contactImg ? information?.contactImg : 'https://picsum.photos/1920/1080'}
        alt="contact-banner"
        className="w-full h-full absolute top-0 right-0 left-0 object-cover object-center"
      />
      <div className="overlay"></div>
      <div className="w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
        <h1 className="text-2xl md:text-4xl font-bold text-white">WE’D LOVE TO HEAR FROM YOU</h1>
      </div>
    </div>
  );
};

export default ContactBanner;
