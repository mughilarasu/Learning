import { createEntityAdapter, createSelector, nanoid } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const todoAdapter = createEntityAdapter();

const initialState = todoAdapter.getInitialState();

export const todoExtendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
      transformResponse: (res) => {
        const newResponse = res.sort((a, b) => b.id - a.id);
        return todoAdapter.setAll(initialState, newResponse);
      },
      providesTags: (result, error, arg) => [
        { type: "Todos", id: "LIST" },
        ...result.ids.map((id) => ({ type: "Todos", id })),
      ],
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      transformResponse: (responseData) => {
        return todoAdapter.addOne(initialState, responseData);
      },
      invalidatesTags: [{ type: "Todos", id: "LIST" }],
    }),
    updateTodo: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PUT",
        body: todo,
      }),
      transformResponse: (responseData) => {
        return todoAdapter.upsertOne(initialState, responseData);
      },
      invalidatesTags: (result, error, arg) => [{ type: "Todos", id: arg.id }],
    }),

    updateTodoPin: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PUT",
        body: todo,
      }),
      transformResponse: (responseData) => {
        return todoAdapter.upsertOne(initialState, responseData);
      },
      invalidatesTags: (result, error, arg) => [{ type: "Todos", id: arg.id }],
    }),

    // updateTodoPin: builder.mutation({
    //     query: (todo) => ({
    //       url: `todos/${todo.id}`,
    //       method: "PATCH",
    //       // In a real app, we'd probably need to base this on user ID somehow
    //       // so that a user can't do the same reaction more than once
    //       body: todo,
    //     }),
    //     async onQueryStarted(todo, { dispatch, queryFulfilled }) {
    //       // `updateQueryData` requires the endpoint name and cache key arguments,
    //       // so it knows which piece of cache state to update
    //       const patchResult = dispatch(
    //         // updateQueryData takes three arguments: the name of the endpoint to update, the same cache key value used to identify the specific cached data, and a callback that updates the cached data.
    //         todoExtendedApiSlice.util.updateQueryData(
    //           "getTodos",
    //           "getTodos",
    //           (draft) => {
    //             // The `draft` is Immer-wrapped and can be "mutated" like in createSlice
    //             const todoData = draft.entities[todo.id];
    //             if (todoData) todoData.pinned = todo.pinned;
    //           }
    //         )
    //       );
    //       try {
    //         await queryFulfilled;
    //       } catch {
    //         patchResult.undo();
    //       }
    //     },
    //   }),
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/todos/${id}`,
        method: "DELETE",
        body: id,
      }),
      transformResponse: (responseData) => {
        console.log("responseData", responseData);
        return todoAdapter.removeOne(initialState, responseData.id);
      },
      invalidatesTags: (result, error, arg) => [{ type: "Todos", id: arg.id }],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
  useUpdateTodoPinMutation,
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
