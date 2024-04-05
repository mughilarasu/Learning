import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";
import { Button, Flex } from "antd";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <section>
      <h3 style={{ textAlign: "center" }} data-testid="counterValue">{count}</h3>
      <Flex gap="small" wrap="wrap" justify="center">
        <Button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </Button>
        <Button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </Button>
        <Button
          onClick={() => {
            dispatch(reset());
          }}
        >
          Reset
        </Button>
        <Button
          onClick={() => {
            dispatch(incrementByAmount(5));
          }}
        >
          Increment by 5
        </Button>
        <Button
          onClick={() => {
            dispatch(decrementByAmount(5));
          }}
        >
          Decrement by 5
        </Button>
      </Flex>
    </section>
  );
};

export default Counter;
