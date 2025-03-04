import './font.css';
import './tailwind.css';
import './index.sass';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

import router from './router';

createRoot( document.getElementById( 'root' )! ).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
