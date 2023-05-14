import ContactContent from '@/components/feature/contact/ContactContent';
import Loading from '@/components/shared/Loading';
import { getInformation } from '@/config/firebase/api/information';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import { useQuery } from '@tanstack/react-query';

const ContactUsPage = () => {
  useDocumentTitle('Liên hệ');

  const { data, isLoading } = useQuery(
    ['information'],
    async () => {
      return getInformation();
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  if (!data || isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }

  return <ContactContent information={data} />;
};

export default ContactUsPage;
