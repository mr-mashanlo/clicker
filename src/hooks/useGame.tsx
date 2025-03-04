import { useContext } from 'react';

import GameContext from '@/contexts/game-context';

const useGame = () => {
  const context = useContext( GameContext );
  if ( !context ) throw new Error( 'useGame must be used within GameProvider' );
  return context;
};

export default useGame;