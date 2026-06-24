import type { RouteObject } from 'react-router-dom';
import Layout from './Layout';
import HomePage from '../pages/HomePage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      // { path: 'photos', element: <PhotosPage /> },
      // { path: 'prices', element: <PricesPage /> },
      // { path: 'where', element: <WherePage /> },
      // { path: 'services', element: <ServicesPage /> },
    ],
  },
];

export default routes;
