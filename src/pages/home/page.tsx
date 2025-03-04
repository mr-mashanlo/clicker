import { FC } from 'react';

import GameTemplate from '@/components/templates/game-template';

const HomePage: FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center relative">
      <GameTemplate />
    </main>
  );
};

export default HomePage;