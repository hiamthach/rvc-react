import { RouteProps } from 'react-router-dom';

import HomePage from '@/pages/HomePage';
import AboutUs from '@/pages/AboutUsPage';
import ContactUs from '@/pages/ContactUsPage';
import ServiceAsset from '@/pages/ServiceAssetPage';
import ServiceInvestment from '@/pages/ServiceInvestmentPage';
import ServiceList from '@/pages/ServiceListPage';
import BlogPage from '@/pages/BlogPage';
import BlogByIdPage from '@/pages/BlogByIdPage';
import ServiceLayout from '@/components/layout/ServiceLayout';

const routes: RouteProps[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about-us',
    element: <AboutUs />,
  },
  {
    path: '/contact',
    element: <ContactUs />,
  },
  {
    path: '/services/asset',
    element: (
      <ServiceLayout>
        <ServiceAsset />
      </ServiceLayout>
    ),
  },
  {
    path: '/services/investment',
    element: (
      <ServiceLayout>
        <ServiceInvestment />
      </ServiceLayout>
    ),
  },
  {
    path: '/services/list',
    element: (
      <ServiceLayout>
        <ServiceList />
      </ServiceLayout>
    ),
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/blog/:id',
    element: <BlogByIdPage />,
  },
];

export default routes;
