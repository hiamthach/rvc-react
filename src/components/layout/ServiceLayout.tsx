import { ReactNode, useMemo } from 'react';

import { useQuery } from '@tanstack/react-query';
import { getSlides } from '@/config/firebase/api/slides';
import { getTestimonials } from '@/config/firebase/api/testimonials';
import Loading from '../shared/Loading';
import ServicesTestimonial from '../feature/services/ServicesTestimonial';
import CustomCarousel from '../shared/CustomCarousel';

const ServiceLayout = ({ children }: { children: ReactNode }) => {
  const { data: slides, isLoading: isSlidesLoading } = useQuery(
    ['services-slides'],
    async () => {
      return getSlides('services');
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const { data: testimonials, isLoading: isTestimonialLoading } = useQuery(
    ['testimonials'],
    async () => {
      return getTestimonials();
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const isLoading = useMemo(() => {
    return isSlidesLoading || isTestimonialLoading;
  }, [isSlidesLoading, isTestimonialLoading]);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <CustomCarousel slides={slides ? slides : []} />
      <div className="py-20 w-full">{children}</div>
      <ServicesTestimonial testimonials={testimonials ? testimonials : []} />
    </>
  );
};

export default ServiceLayout;
