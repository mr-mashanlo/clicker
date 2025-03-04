import { FC } from 'react';

import GameProvider from '@/providers/game-provider';

import GameBlock from '../organisms/game-block';

const GameTemplate: FC = () => {
  return (
    <GameProvider>
      <GameBlock />
    </GameProvider>
  );
};

export default GameTemplate;