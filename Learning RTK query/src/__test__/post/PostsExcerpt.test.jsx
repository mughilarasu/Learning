import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
//import PostsList from "./PostsList";
import PostsExcerpt from "../../features/posts/PostsExcerpt";

const mockStore = configureStore([]);

describe("PostsList component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      posts: {
        ids: [1, 2, 3],
        entities: {
          1: { id: 1, title: "Post 1" },
          2: { id: 2, title: "Post 2" },
          3: { id: 3, title: "Post 3" },
        },
        status: "succeeded",
        error: null,
      },
    });
  });

  // test("renders correctly", () => {
  //   render(
  //     <Provider store={store}>
  //       <PostsList />
  //     </Provider>
  //   );
  //   expect(screen.getByTestId("post-list-search-bar")).toBeInTheDocument();
  // });

  // test("search functionality works correctly", () => {
  //   render(
  //     <Provider store={store}>
  //       <PostsList />
  //     </Provider>
  //   );

  //   const searchBar = screen.getByPlaceholderText("Search...");
  //   fireEvent.change(searchBar, { target: { value: "post 1" } });

  //   expect(screen.queryBy * "Post 1").toBeInTheDocument();
  //   expect(screen.queryByText("Post 2")).not.toBeInTheDocument();

  //   fireEvent.change(searchBar, { target: { value: "post 2" } });

  //   expect(screen.queryByText("Post 1")).not.toBeInTheDocument();
  //   expect(screen.queryBy * "Post 2").toBeInTheDocument();
  // });

  test("shows posts by default", () => {
    render(
      <Provider store={store}>
        <PostsExcerpt />
      </Provider>
    );
    const cards = screen.getAllByTestId("postcolumns");
    expect(cards).toBeInTheDocument();
  });
});
