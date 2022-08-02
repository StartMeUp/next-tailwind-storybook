import { FC } from 'react';
import type { Todo } from '../../../../reduxToolkit/apis/todos.api';
import { useAppDispatch } from '../../../../reduxToolkit/hooks';
import {
  deleteTodo,
  updateTodoComplete,
} from '../../../../reduxToolkit/slices/todos.slice';
//import { DeleteButton } from '../Button/Button.stories';
import Button from '../Button/Button';

export interface ITodoCard {
  todo: Todo;
  tlwStyle?: string;
}

const TodoCard: FC<ITodoCard> = ({ todo, tlwStyle }) => {
  const dispatch = useAppDispatch();
  return (
    <div
      className={`flex justify-between items-center my-2 border rounded p-2 ${
        tlwStyle && tlwStyle
      }`}
    >
      <span className={`${todo.completed && 'line-through'}`}>
        {todo.title}
      </span>
      <div className="ml-2 flex items-center">
        <input
          type="checkbox"
          defaultChecked={todo.completed}
          onChange={() => dispatch(updateTodoComplete(todo.id))}
        />
        <Button
          text="Delete"
          tlwStyle="bg-orange-200 ml-2"
          onClick={() => dispatch(deleteTodo(todo.id))}
        />
      </div>
    </div>
  );
};

export default TodoCard;
