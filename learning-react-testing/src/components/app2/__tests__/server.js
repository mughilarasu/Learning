import { setupServer } from "msw/browser";
import { rest } from "msw";

export function createServer(handlersConfig) {
  const handlers = handlersConfig.map((config) => {
    return rest[config.method || "get"](config.path, (req, res, ctx) => {
      return res(ctx.json(config.res(req, res, ctx)));
    });
  });
  const server = setupServer(...handlers);
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });
//   return handlers;
}
