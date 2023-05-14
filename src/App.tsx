import { Route, RouteProps, Routes } from 'react-router-dom';

import history from './config/routes/history';

import CustomRouter from './config/routes/CustomRouter';
import MainLayout from './components/layout/MainLayout';

import routes from './config/routes';
import ComingSoon from './pages/ComingSoon';

function App() {
  const renderRouter = (routes: RouteProps[]) => {
    return routes.map((route, index) => <Route path={route.path} key={index} element={route.element} />);
  };

  return (
    <CustomRouter history={history}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {renderRouter(routes)}
        </Route>
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </CustomRouter>
  );
}

export default App;
