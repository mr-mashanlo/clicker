import { motion } from 'motion/react';
import { FC } from 'react';

import useGame from '@/hooks/useGame';

import Button from '../atoms/button';

const StartScreen: FC = () => {
  const { setStep } = useGame();

  const variants = {
    initial: { opacity: 0, scale: 1.5 },
    animate:{ opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.5 }
  };

  return (
    <motion.div key="start" variants={variants} initial="initial" animate="animate" exit="exit">
      <Button onClick={() => setStep( 'countdown' )}>Start Game</Button>
    </motion.div>
  );
};

export default StartScreen;