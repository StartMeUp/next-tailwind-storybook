import type { NextPage } from 'next';
//import { useAppDispatch, useAppSelector } from '../reduxToolkit/hooks';
import { useGetAllQuery } from '../reduxToolkit/apis/todos.api';

const Home: NextPage = () => {
  const { data, error, isLoading, isSuccess } = useGetAllQuery(null);

  if (isLoading) return <div>Loading data ...</div>;

  if (error) return <div>An error has occured: {JSON.stringify(error)}</div>;

  if (isSuccess) {
    return (
      <div>
        <ul>
          {data.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }

  return <div>An unknown error has occured</div>;
};

export default Home;
