import { setupServer } from "msw/node";

export const server = setupServer();

// Establish API mocking before all tests.
beforeAll(() =>
  server.listen({
    onUnhandledRequest: "warn",
  })
);

// Clean up after the tests are finished.
afterAll(() => server.close());
