import { render, screen } from "@testing-library/react";
import { setupServer } from "msw/browser";
import { rest } from "msw";
import LoadData from "../LoadData";
import fetchData from "../fetchData";
import { TextEncoder } from "node:util";
import { createServer } from "./server";

createServer([
  {
    path: "https://jsonplaceholder.typicode.com/users",
    method: "get",
    res: (req, res, ctx) => {
      return {
        data: [
          {
            id: 1,
            username: "Bret",
          },
          {
            id: 1,
            username: "Antonette",
          },
        ],
      };
    },
  },
]);

// const handlers = [
//   rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
//     return res(
//       ctx.json({
//         data: [
//           {
//             id: 1,
//             username: "Bret",
//           },
//           {
//             id: 1,
//             username: "Antonette",
//           },
//         ],
//       })
//     );
//   }),
// ];

// const server = setupServer(...handlers);

// beforeAll(() => {
//   server.listen();
// });

// afterEach(() => {
//   server.resetHandlers();
// });

// afterAll(() => {
//   server.close();
// });

test("renders usernames", async () => {
  render(<LoadData />);

  const data = await fetchData();
  // const users=["Bret","Antonette"
  // ];
  data.map((d) => {
    expect(d).toEqual("Bret");
    expect(d).toEqual("Antonette");
    return d;
  });
});
