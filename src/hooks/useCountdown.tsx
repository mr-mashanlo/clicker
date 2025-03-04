import { useEffect, useState } from 'react';

const useCountdown = ( initial: number, onEnd: () => void ) => {
  const [ countdown, setCountdown ] = useState( initial );

  useEffect( () => {
    if ( countdown <= 0 ) return onEnd();
    const timer = setInterval( () => setCountdown( prev => prev - 1 ), 1000 );
    return () => clearInterval( timer );
  }, [ countdown, onEnd ] );

  return { countdown };
};

export default useCountdown;