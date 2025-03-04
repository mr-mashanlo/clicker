import { createContext, Dispatch, SetStateAction } from 'react';

import { GameStepType } from '@/types/step';

interface GameContextType {
  step: GameStepType,
  setStep: Dispatch<SetStateAction<GameStepType>>,
  score: number,
  setScore: Dispatch<SetStateAction<number>>,
  startTimestamp: number,
  setStartTimestamp: Dispatch<SetStateAction<number>>,
  endTimestamp: number,
  setEndTimestamp: Dispatch<SetStateAction<number>>
}

const GameContext = createContext<GameContextType | undefined>( undefined );

export default GameContext;