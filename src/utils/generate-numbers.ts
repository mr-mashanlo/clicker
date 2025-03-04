export function generateNumbers( length: number, start: number, end: number ) {
  return Array.from( { length } ).reduce( ( acc: Array<number>, _, index ) => {
    let random;

    do {
      random = Math.floor( Math.random() * end ) + start;
    } while ( random === acc[index - 1] );

    acc.push( random );
    return acc;
  }, [] );
}