import { useQuery } from '@tanstack/react-query';

import ServicesQuote from '@/components/feature/services/ServicesQuote';
import { getServices } from '@/config/firebase/api/services';
import Loading from '@/components/shared/Loading';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import Paragraph from '@/components/shared/Paragraph';

const ServiceList = () => {
  useDocumentTitle('Danh mục sản phẩm | Sản phẩm');
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
      <div className="container py-4 md:py-10 mb-12 md:mb-24">
        <Paragraph content={contents[0].description} classNames="m-0" />
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
