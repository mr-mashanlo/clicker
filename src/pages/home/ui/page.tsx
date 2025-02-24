import { FC } from 'react';
import { Link } from 'react-router';

const HomePage: FC = () => {
  return (
    <main aria-labelledby="heading">
      <h2 id="heading" className="">Home page</h2>
      <Link to="/game">to game page</Link>
    </main>
  );
};

export default HomePage;