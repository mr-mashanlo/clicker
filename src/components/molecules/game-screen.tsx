import { motion } from 'motion/react';
import { FC } from 'react';

import useGame from '@/hooks/useGame';
import useReaction from '@/hooks/useReaction';
import { calculatePosition } from '@/utils/calculate-position';

const GameScreen: FC = () => {
  const { setStep, setScore, setStartTimestamp, setEndTimestamp } = useGame();
  const { numbers, setNumbers, countdown, setCountdown } = useReaction(
    () => {
      setScore( 0 );
      setStartTimestamp( Date.now() );
    },
    () => {
      setStep( 'statistic' );
      setEndTimestamp( Date.now() );
    }
  );

  const variants = {
    initial: { opacity: 0, scale: 1.5 },
    animate:{ opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.5 }
  };

  function handeleButtonClick() {
    setCountdown( 8 );
    setNumbers( prev => prev.slice( 1 ) );
    setScore( prev => prev + 1 );
  }

  return (
    <motion.div key="game" variants={variants} initial="initial" animate="animate" exit="exit">
      <div className="w-120 aspect-square grid grid-cols-10 grid-rows-10 gap-1">
        <motion.button key={numbers[0]} onClick={() => handeleButtonClick()} style={{ gridColumnStart: calculatePosition( 10, numbers[0] ).x, gridRowStart: calculatePosition( 10, numbers[0] ).y }} variants={variants} initial="initial" animate="animate" exit="exit" className="font-black aspect-square bg-black text-white">
          {countdown}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default GameScreen;