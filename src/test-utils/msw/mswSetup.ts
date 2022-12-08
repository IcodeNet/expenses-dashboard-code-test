import { setupServer } from "msw/node";

export const server = setupServer();

// Establish API mocking before all tests.
beforeAll(() =>
  server.listen({
    onUnhandledRequest: "warn",
  })
);

// Reset any request handlers that we may add during the tests, so they don't affect other tests.
afterEach(async () => {
  // Fix for requests in one test affecting other
  // https://github.com/mswjs/msw/issues/474#issuecomment-877812103
  // eslint-disable-next-line no-promise-executor-return
  await new Promise((resolve) => setTimeout(resolve.bind(null), 0));
  server.resetHandlers();
});

// Clean up after the tests are finished.
afterAll(() => server.close());
