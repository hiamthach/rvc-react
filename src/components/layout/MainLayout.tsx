import { useEffect, createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useQuery } from '@tanstack/react-query';

import { Information } from '@/config/types/Information';
import { getInformation } from '@/config/firebase/api/information';

import { useLocation, useNavigationType } from "react-router-dom"

export const MainLayoutContext = createContext<{
  information?: Information;
}>({
  information: undefined,
});

const MainLayout = () => {
  const location = useLocation();
  const navType = useNavigationType();
  const { data } = useQuery(
    ['information'],
    async () => {
      return getInformation();
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (navType !== "POP") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location, navType]);

  return (
    <MainLayoutContext.Provider value={{information: data ? data : undefined}}>
      <Header />
      <Outlet />
      <Footer information={data as Information} />
    </MainLayoutContext.Provider>
  );
};

export default MainLayout;
