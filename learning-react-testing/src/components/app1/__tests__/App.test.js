import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../../App";

test("can receive a new user and show it on a list", () => {
  render(<App />);
  //   const nameInput = screen.getByRole("textbox", {
  //     name: /name/i,
  //   });
  //   const emailInput = screen.getByRole("textbox", {
  //     name: /email/i,
  //   });

  //   userEvent.click(nameInput);
  //   userEvent.keyboard("user1");
  //   userEvent.click(emailInput);
  //   userEvent.keyboard("user1@gmail.com");

  //   const button = screen.getByRole("button");
  //   userEvent.click(button);

  //   const name = screen.getByRole("cell", { name: "user1" });
  //   const email = screen.getByRole("cell", { email: "user1@gmail.com" });

  //   //  screen.debug(); debugger
  //   expect(name).toBeInTheDocument();
  //   expect(email).toBeInTheDocument();

  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);

  userEvent.type(nameInput, "user1");
  userEvent.type(emailInput, "user1@gmail.com");

  const button = screen.getByRole("button", { name: /add user/i });
  userEvent.click(button);

  const name = screen.getByText("user1");
  const email = screen.getByText("user1@gmail.com");

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
