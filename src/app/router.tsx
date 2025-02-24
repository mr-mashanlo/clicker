import { createBrowserRouter } from 'react-router';

import { gameRouter } from '@/pages/game';
import { homeRouter } from '@/pages/home';

import { MainLayout } from './ui/layout';

const router = createBrowserRouter( [
  {
    path: '/',
    children: [
      {
        element: <MainLayout />,
        children: [ homeRouter, gameRouter ]
      }
    ]
  }
] );

export default router;