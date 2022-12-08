import { render, screen, waitFor } from "@testing-library/react";
import { mockSuccessfulGetRequest } from "../../../test-utils/msw/requestMockHelpers";
import { Dashboard } from "../Dashboard";
import { MOCK_PROVIDER_DATA } from "./mockResponse";
import { server } from "../../../test-utils/msw/mswSetup";

describe("Transactions dashboard", () => {
  it("should display placeholder text", async () => {
    mockSuccessfulGetRequest("*/v2/5c62e7c33000004a00019b05", MOCK_PROVIDER_DATA)

    const apiCallSpy = jest.fn();
    server.events.on("request:start", apiCallSpy);

    render(<Dashboard />);

    expect(screen.findByRole("heading", { name: /dashboard list goes here/i }));

    await waitFor(() => {
      expect(apiCallSpy).toHaveBeenCalledTimes(1);
    });
  });
});