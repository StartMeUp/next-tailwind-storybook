import type { NextPage } from 'next';
import CatCard from '../components/templates/cat/CatCard';
import { mockCatCardProps } from '../components/templates/cat/CatCard.mocks';

const Home: NextPage = () => {
  return (
    <div className="bg-green-100">
      <h1 className="text-xl text-blue-500">This is the Home page</h1>
      <CatCard {...mockCatCardProps.base} />
    </div>
  );
};

export default Home;
