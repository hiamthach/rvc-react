import { useQuery } from '@tanstack/react-query';

import ServicesQuote from '@/components/feature/services/ServicesQuote';
import ServicesInformation from '@/components/feature/services/ServicesInformation';
import { getServices } from '@/config/firebase/api/services';
import Loading from '@/components/shared/Loading';
import useDocumentTitle from '@/hooks/useDocumentTitle';

const ServiceInvestment = () => {
  useDocumentTitle('Ủy thác đầu tư | Sản phẩm');

  const { data: contents, isLoading } = useQuery(
    ['services-investment'],
    async () => {
      return getServices('investment');
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
    <div className="flex flex-col gap-24">
      <div className="container py-10">
        <p className="m-0">{contents[0].description}</p>
      </div>
      <ServicesQuote
        title={contents[1].title}
        quote={contents[1].subtitle ? contents[1].subtitle : ''}
        description={contents[1].description ? contents[1].description : ''}
        img={contents[1].image ? contents[1].image : ''}
        link={contents[1].link ? contents[1].link : '/'}
      />
      <ServicesInformation
        title={contents[3].title}
        subtitle={contents[3].subtitle ? contents[3].subtitle : ''}
        description={contents[3].description}
        img={contents[3].image ? contents[3].image : ''}
        isReverse={true}
      />
      <ServicesInformation
        title={contents[2].title}
        subtitle={contents[2].subtitle ? contents[2].subtitle : ''}
        description={contents[2].description}
        img={contents[2].image ? contents[2].image : ''}
      />
    </div>
  );
};

export default ServiceInvestment;
