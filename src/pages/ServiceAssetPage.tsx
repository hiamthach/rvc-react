import { useQuery } from '@tanstack/react-query';

import ServicesQuote from '@/components/feature/services/ServicesQuote';
import ServicesInformation from '@/components/feature/services/ServicesInformation';
import { getServices } from '@/config/firebase/api/services';
import Loading from '@/components/shared/Loading';

import useDocumentTitle from '@/hooks/useDocumentTitle';
import Paragraph from '@/components/shared/Paragraph';

const ServiceAsset = () => {
  useDocumentTitle('Quản lý tài sản | Sản phẩm');

  const { data: contents, isLoading } = useQuery(
    ['services-asset'],
    async () => {
      return getServices('asset');
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
    <div className="flex gap-12 md:gap-24 flex-col">
      <div className="container py-4 md:py-10">
        <Paragraph content={contents[0].description} classNames="m-0" />
      </div>
      <ServicesQuote
        title={contents[1].title}
        quote={contents[1].subtitle ? contents[1].subtitle : ''}
        description={contents[1].description ? contents[1].description : ''}
        img={contents[1].image ? contents[1].image : ''}
        link={contents[1].link ? contents[1].link : '/'}
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

export default ServiceAsset;
