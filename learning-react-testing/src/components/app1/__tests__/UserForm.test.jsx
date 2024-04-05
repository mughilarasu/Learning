import { render, screen, fireEvent, waitFor } from "@testing-library/react";
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
  // THE BEST IMPLEMENTATION

  const mockOnUserAdd = jest.fn();

  // try to render the component
  render(<UserForm onUserAdd={mockOnUserAdd} />);

  // find the two inputs
  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });
  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });

  // simulate typing in name&email input
  userEvent.click(nameInput);
  userEvent.keyboard("user1");
  userEvent.click(emailInput);
  userEvent.keyboard("user1@gmail.com");

  // find the button
  const button = screen.getByRole("button");

  // simulate clicking the button
  userEvent.click(button);

  // Assertion to make sure 'onUserAdd' the gets called with name&email

  expect(mockOnUserAdd).toHaveBeenCalled();
  expect(mockOnUserAdd).toHaveBeenCalledWith({
    name: "user1",
    email: "user1@gmail.com",
  });
});

test("empties the two inputs when form is submitted", async () => {
  // Mocking the onUserAdd function
  const mockOnUserAdd = jest.fn();

  render(<UserForm onUserAdd={mockOnUserAdd} />);

  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const button = screen.getByRole("button");

  // Simulating user input
  userEvent.type(nameInput, "user1");
  userEvent.type(emailInput, "user1@gmail.com");
  userEvent.click(button);

  // Simulating form submission
  // fireEvent.submit(screen.getByRole("form"));

  // Wait for state updates

  // await waitFor(() => {
  //   // Assertions
  //   expect(mockOnUserAdd).toHaveBeenCalledWith({
  //     name: "user1",
  //     email: "user1@gmail.com",
  //   });
  //   expect(nameInput).toHaveValue("");
  //   expect(emailInput).toHaveValue("");
  // });
  // or

  await waitFor(() => {
    // Assertions
    expect(mockOnUserAdd).toHaveBeenCalledWith({
      name: "user1",
      email: "user1@gmail.com",
    });
  });
  // Wait for input fields to be cleared
  await waitFor(() => {
    expect(nameInput).toHaveValue("");
  });
  // Wait for input fields to be cleared
  await waitFor(() => {
    expect(emailInput).toHaveValue("");
  });
});
