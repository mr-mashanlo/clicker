import { FC } from 'react';
import { Outlet } from 'react-router';

const MainLayout: FC = () => {
  return (
    <div className="page">
      <Outlet />
    </div>
  );
};

export default MainLayout;