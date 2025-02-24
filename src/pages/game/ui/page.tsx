import { FC } from 'react';
import { Link } from 'react-router';

const GamePage: FC = () => {
  return (
    <main aria-labelledby="heading">
      <h2 id="heading" className="">Game page</h2>
      <Link to="/">to home page</Link>
    </main>
  );
};

export default GamePage;