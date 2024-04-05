import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Counter from "../../features/counter/Counter";
import {
  incrementByAmount,
  decrementByAmount,
  decrement,
  increment,
  reset,
} from "../../features/counter/counterSlice";

const mockStore = configureStore([]);

describe("Counter component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      counter: {
        count: 0,
      },
    });
  });

  test("renders with initial count value", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    expect(screen.getByTestId("counterValue")).toHaveTextContent("0");
  });

  test("dispatches reset action when reset button is clicked", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    fireEvent.click(screen.getByText("Reset"));
    expect(store.getActions()).toEqual([reset()]);
  });
  test("dispatches increment action when + button is clicked", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    fireEvent.click(screen.getByText("+"));
    expect(store.getActions()).toEqual([increment()]);
  });
  test("dispatches incrementByAmount action when incrementByAmount button is clicked", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    fireEvent.click(screen.getByText("Increment by 5"));
    expect(store.getActions()).toEqual([incrementByAmount(5)]);
  });
  test("dispatches decrement action when - button is clicked", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    fireEvent.click(screen.getByText("-"));
    expect(store.getActions()).toEqual([decrement()]);
  });

  test("dispatches decrementByAmount action when decrementByAmount button is clicked", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    fireEvent.click(screen.getByText("Decrement by 5"));
    expect(store.getActions()).toEqual([decrementByAmount(5)]);
  });
});
