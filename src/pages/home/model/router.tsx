import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router';

import { Loading } from '@/shared/ui';

const HomePage = lazy( () => import( '../ui/page' ) );

export const homeRouter: RouteObject = {
  path: '/',
  element: <Suspense fallback={<Loading />}><HomePage /></Suspense>
};