import { Content } from '@/config/types/Content';
import { Partner } from '@/config/types/Partner';
import { Slide } from '@/config/types/Slide';

import CustomCarousel from '@/components/shared/CustomCarousel';

import HomePartner from './HomePartner';
import HomeServices from './HomeServices';
import HomeStory from './HomeStory';
import HomeVision from './HomeVision';

const HomeContent = ({ data, partners, slides }: { data: Content[]; partners: Partner[]; slides: Slide[] }) => {
  if (!data) {
    return null;
  }

  return (
    <div>
      <CustomCarousel slides={slides} />
      <HomeStory content={data[0]} />
      <HomeVision contents={[data[1], data[2]]} />
      <HomePartner partners={partners} />
      <HomeServices content={data[3]} />
    </div>
  );
};

export default HomeContent;
