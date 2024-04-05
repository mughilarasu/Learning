import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserForm from "../UserForm";

test("it shows two inputs and a button", () => {
  // 3 steps
  //   - render the Component
  //   - manipulate the component or find an element in it
  //   - Assertion - make sure the component is doing what we expect it to do

  render(<UserForm />);
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls setUsers when the form is submitted", () => {
  // NOT THE BEST IMPLEMENTATION

  const argList = [];
  const callback = (...args) => {
    argList.push(args);
  };
  // try to render the component
  // render(<UserForm onUserAdd={() => {}} />);
  render(<UserForm onUserAdd={callback} />);

  // find the two inputs
  const inputs = screen.getAllByRole("textbox");

  // simulate typing in name&email input
  const [nameInput, emailInput] = inputs;
  userEvent.click(nameInput);
  userEvent.keyboard("user1");
  userEvent.click(emailInput);
  userEvent.keyboard("user1@gmail.com");

  // find the button
  const button = screen.getByRole("button");

  // simulate clicking the button
  userEvent.click(button);

  // Assertion to make sure 'onUserAdd' the gets called with name&email
  expect(argList).toHaveLength(1);
  expect(argList[0][0]).toEqual({
    name: "user1",
    email: "user1@gmail.com",
  });
});
