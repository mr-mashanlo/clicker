import { createBrowserRouter } from 'react-router';

import MainLayout from '@/layouts/main';
import { homeRouter } from '@/pages/home/router';

const router = createBrowserRouter( [
  {
    path: '/',
    children: [
      {
        element: <MainLayout />,
        children: [ homeRouter ]
      }
    ]
  }
] );

export default router;