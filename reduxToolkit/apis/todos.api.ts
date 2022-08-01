import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAll: builder.query<Todo[], null>({
      query: () => '/todos',
    }),
  }),
});

export const { useGetAllQuery } = todoApi;
