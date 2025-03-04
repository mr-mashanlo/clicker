export function calculatePosition( width: number, number: number ) {
  const x = number % width ? number % width : width;
  const y = Math.ceil( number / width );
  return { x, y };
}