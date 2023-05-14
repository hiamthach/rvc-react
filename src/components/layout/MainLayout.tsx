import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useQuery } from '@tanstack/react-query';

import { Information } from '@/config/types/Information';
import { getInformation } from '@/config/firebase/api/information';

const MainLayout = () => {
  const { data } = useQuery(
    ['information'],
    async () => {
      return getInformation();
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div>
      <Header />
      <Outlet />
      <Footer information={data as Information} />
    </div>
  );
};

export default MainLayout;
