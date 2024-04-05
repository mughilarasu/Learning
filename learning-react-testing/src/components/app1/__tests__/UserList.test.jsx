import { render, screen, within } from "@testing-library/react";
import UsersList from "../UsersList";

// helper function
function renderComponent() {
  const users = [
    {
      name: "user1",
      email: "user1@gmail.com",
    },
    {
      name: "user2",
      email: "user2@gmail.com",
    },
  ];
  render(<UsersList users={users} />);
  return {
    users,
  };
}
// or
// this also will work and recommended in jest but not in react testing library
// beforeEach(() => {
//   render(<UsersList users={users} />);
// });

test("render one row per user", () => {
  // render the component
  // const users = [
  //   {
  //     name: "user1",
  //     email: "user1@gmail.com",
  //   },
  //   {
  //     name: "user2",
  //     email: "user2@gmail.com",
  //   },
  // ];
  // // approach 1 -
  // render(<UsersList users={users} />);
  // approach 2 - const { container } = render(<UsersList users={users} />);

  renderComponent();

  // find all the rows in the table
  // screen.logTestingPlaygroundURL(); // helps to find the queries
  // approach 1 -
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  // approach 2 - const rows = container.querySelectorAll("tbody tr");

  // Assertion: correct no of rows in the table
  expect(rows).toHaveLength(2);
});

test("render the email and name of user", () => {
  // const users = [
  //   {
  //     name: "user1",
  //     email: "user1@gmail.com",
  //   },
  //   {
  //     name: "user2",
  //     email: "user2@gmail.com",
  //   },
  // ];
  // render(<UsersList users={users} />);
  const { users } = renderComponent();
  const cells = screen.getAllByRole("cell");

  users.forEach((user) => {
    const nameCell = cells.find((cell) => cell.textContent === user.name);
    const emailCell = cells.find((cell) => cell.textContent === user.email);

    expect(nameCell).toBeInTheDocument();
    expect(emailCell).toBeInTheDocument();
  });
  // users.forEach((user) => {
  //   const name = screen.getByRole("cell", { name: user.name });
  //   const email = screen.getByRole("cell", { email: user.email });

  //   expect(name).toBeInTheDocument();
  //   expect(email).toBeInTheDocument();
  // });
});
