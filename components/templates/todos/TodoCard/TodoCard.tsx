import { FC } from 'react';
import type { Todo } from '../../../../reduxToolkit/apis/todos.api';
import { DeleteButton } from '../Button/Button.stories';

export interface ITodoCard {
  todo: Todo;
  tlwStyle?: string;
}

const TodoCard: FC<ITodoCard> = ({ todo, tlwStyle }) => {
  return (
    <div
      className={`flex justify-between items-center my-2 border rounded p-2 ${
        tlwStyle && tlwStyle
      }`}
    >
      <span>{todo.title}</span>
      <div className="ml-2 flex items-center">
        <input type="checkbox" defaultChecked={todo.completed} />
        <DeleteButton text="Delete" tlwStyle="bg-orange-200 ml-2" />
      </div>
    </div>
  );
};

export default TodoCard;
