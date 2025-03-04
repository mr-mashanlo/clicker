import { motion } from 'motion/react';
import { FC } from 'react';

import useGame from '@/hooks/useGame';

import Button from '../atoms/button';
import Heading from '../atoms/heading';

const StatisticScreen: FC = () => {
  const { setStep, startTimestamp, endTimestamp, score } = useGame();

  const variants = {
    initial: { opacity: 0, scale: 1.5 },
    animate:{ opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.5 }
  };

  return (
    <motion.div key="statistic" variants={variants} initial="initial" animate="animate" exit="exit" className="text-center">
      <Heading>{score} clicks, {endTimestamp - startTimestamp} milliseconds</Heading>
      <Button onClick={() => setStep( 'countdown' )} className="mt-10">New Game</Button>
    </motion.div>
  );
};

export default StatisticScreen;