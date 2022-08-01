import { configureStore } from '@reduxjs/toolkit';
import { todoApi } from './apis/todos.api';
import todosReducer from './slices/todos.slice';

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
    todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
