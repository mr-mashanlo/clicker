import { AnimatePresence } from 'motion/react';
import { FC } from 'react';

import useGame from '@/hooks/useGame';

import Countdown from '../molecules/countdown';
import GameScreen from '../molecules/game-screen';
import StartScreen from '../molecules/start-screen';
import StatisticScreen from '../molecules/statistic-screen';

const GameBlock: FC = () => {
  const { step } = useGame();

  return (
    <AnimatePresence initial={false}>
      {step === 'home' && <StartScreen />}
      {step === 'countdown' && <Countdown />}
      {step === 'playing' && <GameScreen />}
      {step === 'statistic' && <StatisticScreen />}
    </AnimatePresence>
  );
};

export default GameBlock;