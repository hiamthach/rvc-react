import { useMemo } from 'react';

import { useQuery } from '@tanstack/react-query';

import HomeContent from '@/components/feature/home/HomeContent';
import Loading from '@/components/shared/Loading';

import { Content } from '@/config/types/Content';
import { Partner } from '@/config/types/Partner';
import { Slide } from '@/config/types/Slide';

import { getHomeContent } from '@/config/firebase/api/home';
import { getSlides } from '@/config/firebase/api/slides';
import { getPartners } from '@/config/firebase/api/partners';

const HomePage = () => {
  const { data: contents, isLoading: isContentsLoading } = useQuery(
    ['home', 'contents'],
    async () => {
      return getHomeContent();
    },
    { refetchOnWindowFocus: false }
  );

  const { data: slides, isLoading: isSlidesLoading } = useQuery(
    ['home', 'slides'],
    async () => {
      return getSlides('home');
    },
    { refetchOnWindowFocus: false }
  );

  const { data: partners, isLoading: isPartnerLoading } = useQuery(
    ['home', 'partners'],
    async () => {
      return getPartners();
    },
    { refetchOnWindowFocus: false }
  );

  const isLoading = useMemo(() => {
    return isContentsLoading || isSlidesLoading || isPartnerLoading;
  }, [isContentsLoading, isSlidesLoading, isPartnerLoading]);

  return (
    <div>
      {isLoading ? (
        <div className="h-screen w-full flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <HomeContent data={contents as Content[]} slides={slides as Slide[]} partners={partners as Partner[]} />
      )}
    </div>
  );
};

export default HomePage;
