import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router';

import { Loading } from '@/shared/ui';

const GamePage = lazy( () => import( '../ui/page' ) );

export const gameRouter: RouteObject = {
  path: '/game',
  element: <Suspense fallback={<Loading />}><GamePage /></Suspense>
};