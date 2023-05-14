import { useQuery } from '@tanstack/react-query';

import ServicesQuote from '@/components/feature/services/ServicesQuote';
import { getServices } from '@/config/firebase/api/services';
import Loading from '@/components/shared/Loading';

const ServiceList = () => {
  const { data: contents, isLoading } = useQuery(
    ['services-list'],
    async () => {
      return getServices('list');
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading || !contents) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }
  return (
    <div className="">
      <div className="container">
        <p className="m-0">{contents[0].description}</p>
      </div>
      <ServicesQuote
        title={contents[1].title}
        quote={contents[1].subtitle ? contents[1].subtitle : ''}
        description={contents[1].description}
        img={contents[1].image ? contents[1].image : ''}
        link={contents[1].link ? contents[1].link : '/'}
      />
      <ServicesQuote
        title={contents[2].title}
        quote={contents[2].subtitle ? contents[2].subtitle : ''}
        description={contents[2].description}
        img={contents[2].image ? contents[2].image : ''}
        link={contents[2].link ? contents[2].link : '/'}
      />
    </div>
  );
};

export default ServiceList;
