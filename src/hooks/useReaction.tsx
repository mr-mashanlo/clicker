import { useEffect, useState } from 'react';

import { generateNumbers } from '@/utils/generate-numbers';

const useReaction = ( onStart: () => void, onEnd: () => void ) => {
  const [ numbers, setNumbers ] = useState<Array<number>>( generateNumbers( 100, 1, 100 ) );
  const [ countdown, setCountdown ] = useState<number>( 8 );

  useEffect( () => {
    onStart();
  }, [] );

  useEffect( () => {
    if ( numbers.length === 0 ) { onEnd(); }
  }, [ numbers ] );

  useEffect( () => {
    if ( countdown <= 0 ) return onEnd();

    const timer = setInterval( () => {
      setCountdown( prev => prev - 1 );
    }, 100 );

    return () => clearInterval( timer );
  }, [ countdown, onEnd ] );

  return { numbers, setNumbers, countdown, setCountdown };
};

export default useReaction;