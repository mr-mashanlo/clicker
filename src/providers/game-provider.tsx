import { FC, ReactNode, useState } from 'react';

import GameContext from '@/contexts/game-context';
import { GameStepType } from '@/types/step';

interface Props {
  children: ReactNode
}

const GameProvider: FC<Props> = ( { children } ) => {
  const [ step, setStep ] = useState<GameStepType>( 'home' );
  const [ score, setScore ] = useState<number>( 0 );
  const [ startTimestamp, setStartTimestamp ] = useState<number>( 0 );
  const [ endTimestamp, setEndTimestamp ] = useState<number>( 0 );

  return (
    <GameContext.Provider value={{ step, setStep, score, setScore, startTimestamp, setStartTimestamp, endTimestamp, setEndTimestamp }}>
      { children }
    </GameContext.Provider>
  );
};

export default GameProvider;