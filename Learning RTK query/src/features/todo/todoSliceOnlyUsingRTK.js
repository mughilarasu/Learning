import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const todoAdapter = createEntityAdapter();

const initialState = todoAdapter.getInitialState();

export const todoExtendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
      //   transformResponse: (res) => {
      //     const newResponse = res.sort((a, b) => b.id - a.id);
      //     return todoAdapter.setAll(initialState, newResponse);
      //   },
      //   providesTags: (result, error, arg) => [
      //     { type: "Todos", id: "LIST" },
      //     ...result.ids.map((id) => ({ type: "Todos", id })),
      //   ],
      providesTags: ["Todos"],
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      //   transformResponse: (responseData) => {
      //     console.log("responseData", responseData);
      //     return todoAdapter.setAll(initialState, responseData);
      //   },
      invalidatesTags: ["Todos"],
      //   invalidatesTags: [{ type: "Todos", id: "LIST" }],
    }),
    updateTodo: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PUT",
        body: todo,
      }),
      //   transformResponse: (responseData) => {
      //     console.log("responseData", responseData);
      //     console.log("initialState", initialState);
      //     return todoAdapter.setAll(initialState, responseData);
      //   },
      invalidatesTags: ["Todos"],
      //invalidatesTags: (result, error, arg) => [{ type: "Todos", id: arg.id }],
    }),
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/todos/${id}`,
        method: "DELETE",
        body: id,
      }),
      //   transformResponse: (responseData) => {
      //     return todoAdapter.setAll(initialState, responseData);
      //   },
      invalidatesTags: ["Todos"],
      // invalidatesTags: (result, error, arg) => [{ type: "Todos", id: arg.id }],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = todoExtendedApiSlice;

// returns the query result object
export const selectTodoResult =
  todoExtendedApiSlice.endpoints.getTodos.select();

// Creates memoized selector
const selectTodoData = createSelector(
  selectTodoResult,
  (todoResult) => todoResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllTodo,
  selectById: selectTodoById,
  selectIds: selectTodoIds,
  // Pass in a selector that returns the posts slice of state
} = todoAdapter.getSelectors((state) => selectTodoData(state) ?? initialState);
