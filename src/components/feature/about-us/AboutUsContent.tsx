import { Content } from '@/config/types/Content';

import AboutUsInformation from './AboutUsInformation';
import AboutUsStory from './AboutUsStory';
import AboutUsValues from './AboutUsValues';
import AboutUsVision from './AboutUsVision';

const AboutUsContent = ({ contents }: { contents: Content[] }) => {
  return (
    <div className="mt-24">
      <AboutUsInformation content={contents[0]} />
      <AboutUsVision content={contents[1]} />
      <AboutUsValues content={contents[2]} />
      <AboutUsStory content={contents[3]} />
    </div>
  );
};

export default AboutUsContent;
