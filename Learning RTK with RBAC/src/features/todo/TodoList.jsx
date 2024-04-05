import {
  Button,
  Checkbox,
  Divider,
  Dropdown,
  Flex,
  Input,
  Skeleton,
  Tooltip,
} from "antd";
// import {
//   useGetTodosQuery,
//   useUpdateTodoMutation,
//   useDeleteTodoMutation,
//   useAddTodoMutation,
// } from "../api/apiSlice";
import {
  useGetTodosQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
  useAddTodoMutation,
  useUpdateTodoPinMutation,
} from "./todoSlice";
import React, { useState } from "react";
import {
  DeleteOutlined,
  DownOutlined,
  HeartOutlined,
  PushpinFilled,
  PushpinOutlined,
} from "@ant-design/icons";

const filterOptions = [
  {
    key: "0",
    label: "None",
  },
  {
    key: "1",
    label: "Pinned",
  },
  {
    key: "2",
    label: "Completed",
  },
  {
    key: "3",
    label: "Not Completed",
  },
];

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");

  const {
    // data,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery();
  // useGetTodosQuery("getTodos");
  const { todos } = useGetTodosQuery("getTodos", {
    selectFromResult: ({ data }) => {
      const dataArray = [];
      for (const key in data?.entities) {
        if (data?.entities.hasOwnProperty(key)) {
          dataArray.push(data?.entities[key]);
        }
      }
      return {
        todos: dataArray,
      };
    },
  });
  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodoPin] = useUpdateTodoPinMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // addTodo({ userId: 1, title: newTodo, completed: false });
    // setNewTodo("");
    console.log("todos.length + 1", todos.length + 1);
    try {
      await addTodo({
        userId: 1,
        title: newTodo,
        completed: false,
        id: (Number(todos[todos.length - 1].id) + 1).toString(),
        pinned: false,
      }).unwrap();

      setNewTodo("");
    } catch (err) {
      console.error("Failed to save the post", err);
    }
  };
  const handleUpdateSubmit = async (e, todoValue) => {
    e.preventDefault();

    try {
      await updateTodo({
        ...todoValue,
        completed: !todoValue.completed,
      }).unwrap();
    } catch (err) {
      console.error("Failed to save the post", err);
    }
  };
  const handleUpdatePinSubmit = async (e, todoValue) => {
    e.preventDefault();

    try {
      await updateTodoPin({
        ...todoValue,
        pinned: !todoValue.pinned,
      }).unwrap();
    } catch (err) {
      console.error("Failed to save the post", err);
    }
  };
  const handleDeleteSubmit = async (e, todoValue) => {
    e.preventDefault();
    console.log("todoValue", todoValue);
    try {
      deleteTodo({ id: todoValue.id }).unwrap();
    } catch (err) {
      console.error("Failed to save the post", err);
    }
  };
  const [filterBy, setFilterBy] = React.useState(0);

  const newItemSection = (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <Flex wrap="wrap" gap="small" justify="space-between">
        <Input
          style={{
            margin: "8px 0px",
            width: "90%",
            //height: 35,
          }}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo"
          value={newTodo}
          type="text"
        />
        <Button
          htmlType="submit"
          type="primary"
          style={{
            margin: "8px 0px",
          }}
        >
          submit
        </Button>
      </Flex>

      <Dropdown.Button
        style={{
          margin: "8px 0px",
        }}
        icon={<DownOutlined />}
        menu={{
          items: filterOptions,
          onClick: (e) => {
            setFilterBy(Number(e.key));
          },
        }}
      >
        {`Filter By : ${filterOptions[filterBy]?.label}` || "Filter By"}
      </Dropdown.Button>
    </form>
  );

  let content;
  if (isLoading) {
    content = content = [0, 1, 2, 3].map((value) => (
      <article key={value}>
        <Flex wrap="wrap" gap="small">
          <Skeleton paragraph={false} />
        </Flex>
        <Divider />
      </article>
    ));
  } else if (isSuccess) {
    content = todos
      .sort((a, b) => {
        // If a.pinned is true and b.pinned is false, a comes first
        if (a["pinned"] && !b["pinned"]) {
          return -1;
        }
        // If a.pinned is false and b.pinned is true, b comes first
        else if (!a["pinned"] && b["pinned"]) {
          return 1;
        }
        // For equal pinned values, sort by other criteria (e.g., value of completed)
        else {
          return 0;
        }
      })
      .filter((todo) => {
        let key =
          filterOptions[filterBy]?.label === "Pinned"
            ? "pinned"
            : filterOptions[filterBy]?.label === "Completed"
            ? "completed"
            : filterOptions[filterBy]?.label === "Not Completed"
            ? "not completed"
            : null;
        if (key === "pinned" || key === "completed") {
          return todo[key] === true;
        }
        if (key === "not completed") {
          return todo["completed"] === false;
        }

        return todo;
      })
      .map((todo) => {
        //JSON.stringify(todos)
        return (
          <article key={todo.id}>
            <Flex wrap="wrap" gap="small" justify="space-between">
              <div>
                <Checkbox
                  onChange={(e) => handleUpdateSubmit(e, todo)}
                  checked={todo.completed}
                  id={todo.id}
                  style={{
                    margin: "8px 0px",
                  }}
                >
                  {todo.title}
                </Checkbox>
                {/* <input
              type="checkbox"
              checked={todo.completed}
              id={todo.id}
              onChange={() =>
                updateTodo({ ...todo, completed: !todo.completed })
              }
            />
            <label htmlFor={todo.id}>{todo.title}</label>
           */}
              </div>
              <div>
                <Flex wrap="wrap" gap="small">
                  <Tooltip title={todo.pinned ? "Un pin" : "Pin"}>
                    <Button
                      shape="circle"
                      icon={
                        todo.pinned ? <PushpinFilled /> : <PushpinOutlined />
                      }
                      onClick={(e) => handleUpdatePinSubmit(e, todo)}
                    />
                  </Tooltip>
                  <Tooltip title="Delete">
                    <Button
                      shape="circle"
                      icon={<DeleteOutlined />}
                      onClick={(e) => handleDeleteSubmit(e, todo)}
                    />
                  </Tooltip>
                </Flex>
              </div>
            </Flex>
            <Divider />
          </article>
        );
      });
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <main>
      <h3 style={{ textAlign: "center" }}>Todo List</h3>
      {newItemSection}
      {content}
    </main>
  );
};
export default TodoList;
