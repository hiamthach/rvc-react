import { Content } from '@/config/types/Content';

import AboutUsInformation from './AboutUsInformation';
import AboutUsStory from './AboutUsStory';
import AboutUsValues from './AboutUsValues';
import AboutUsVision from './AboutUsVision';

const AboutUsContent = ({ contents }: { contents: Content[] }) => {
  return (
    <div className="mt-24">
      <AboutUsInformation content={contents[0]} />
      <AboutUsVision contents={[contents[1], contents[2]]} />
      <AboutUsValues content={contents[3]} />
      <AboutUsStory content={contents[4]} />
    </div>
  );
};

export default AboutUsContent;
