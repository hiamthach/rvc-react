import { getAboutUs } from '@/config/firebase/api/about-us';
import { useQuery } from '@tanstack/react-query';

import AboutUsContent from '@/components/feature/about-us/AboutUsContent';
import Loading from '@/components/shared/Loading';

const AboutUs = () => {
  const { data, isLoading } = useQuery(
    ['about-us'],
    async () => {
      return getAboutUs();
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div>
      {isLoading ? (
        <div className="h-screen w-full flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <AboutUsContent contents={data ? data : []} />
      )}
    </div>
  );
};

export default AboutUs;
