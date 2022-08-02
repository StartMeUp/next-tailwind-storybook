import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../apis/todos.api';

type InitialState = {
  todos: Todo[];
};

const initialState: InitialState = { todos: [] };

export const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    updateTodoComplete: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export default todos.reducer;
export const { setTodos, updateTodoComplete, deleteTodo } = todos.actions;
