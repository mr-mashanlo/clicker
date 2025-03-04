import { motion } from 'motion/react';
import { FC } from 'react';

import useCountdown from '@/hooks/useCountdown';
import useGame from '@/hooks/useGame';

import Heading from '../atoms/heading';

const Countdown: FC = () => {
  const { setStep } = useGame();
  const { countdown } = useCountdown( 3, () => setStep( 'playing' ) );

  const variants = {
    initial: { opacity: 0, scale: 1.5 },
    animate:{ opacity: [ 0, 1 ], scale: [ 1.5, 1 ] },
    exit: { opacity: 0, scale: 1.5 }
  };

  return (
    <motion.div key={countdown} variants={variants} initial="initial" animate="animate" exit="exit">
      <Heading>{countdown}</Heading>
    </motion.div>
  );
};

export default Countdown;