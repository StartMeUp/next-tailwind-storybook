import type { NextPage } from 'next';
import { useEffect } from 'react';
import TodoCard from '../components/templates/todos/TodoCard/TodoCard';
import { useGetAllQuery } from '../reduxToolkit/apis/todos.api';
import { useAppDispatch, useAppSelector } from '../reduxToolkit/hooks';
import { setTodos } from '../reduxToolkit/slices/todos.slice';

const Home: NextPage = () => {
  const { todos } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  const { data, error, isLoading, isSuccess } = useGetAllQuery(null);

  useEffect(() => {
    if (data) dispatch(setTodos(data));
  }, [data, dispatch]);

  if (isLoading) return <div>Loading data ...</div>;

  if (error) return <div>An error has occured: {JSON.stringify(error)}</div>;

  if (isSuccess) {
    return (
      <div className="w-[520px] mx-auto my-6">
        {todos.map((todo) => (
          <TodoCard todo={todo} key={todo.id} />
        ))}
      </div>
    );
  }

  return <div>An unknown error has occured</div>;
};

export default Home;
