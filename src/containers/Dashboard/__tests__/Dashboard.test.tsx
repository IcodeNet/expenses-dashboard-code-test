import { render, screen, waitFor, within } from "@testing-library/react";
import { mockSuccessfulGetRequest } from "../../../test-utils/msw/requestMockHelpers";
import { Dashboard } from "../Dashboard";
import { MOCK_PROVIDER_DATA } from "./data";
import { server } from "../../../test-utils/msw/mswSetup";

describe("Transactions dashboard", () => {
  it("should display loading text when transactions are fetched", async () => {
    mockSuccessfulGetRequest("*/v2/5c62e7c33000004a00019b05", MOCK_PROVIDER_DATA)

    const apiCallSpy = jest.fn();
    server.events.on("request:start", apiCallSpy);

    render(<Dashboard />);

    expect(screen.getByText(/your transactions are loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(apiCallSpy).toHaveBeenCalledTimes(1);
    });

    expect(screen.queryByText(/your transactions are loading/i)).not.toBeInTheDocument();
  });

  it("should display sorted expenses list when fetched", async () => {
    mockSuccessfulGetRequest("*/v2/5c62e7c33000004a00019b05", MOCK_PROVIDER_DATA)

    const apiCallSpy = jest.fn();
    server.events.on("request:start", apiCallSpy);

    render(<Dashboard />);

    await waitFor(() => {
      expect(apiCallSpy).toHaveBeenCalledTimes(1);
    });

    const transactions = screen.getAllByRole("listitem");

    expect(transactions).toHaveLength(3);

    const firstTransaction = transactions[0];
    const secondTransaction = transactions[1];
    const thirdTransaction = transactions[2];

    expect(within(firstTransaction).getByText(/transaction date is 2018-07-05/i)).toBeInTheDocument();
    expect(within(firstTransaction).getByText(/description is transport for london/i)).toBeInTheDocument();
    expect(within(firstTransaction).getByText(/amount is -2.85 gbp/i)).toBeInTheDocument();

    expect(within(secondTransaction).getByText(/transaction date is 2018-06-30/i)).toBeInTheDocument();
    expect(within(secondTransaction).getByText(/description is tesco/i)).toBeInTheDocument();
    expect(within(secondTransaction).getByText(/amount is -57.21 gbp/i)).toBeInTheDocument();

    expect(within(thirdTransaction).getByText(/transaction date is 2018-07-03/i)).toBeInTheDocument();
    expect(within(thirdTransaction).getByText(/description is amazon/i)).toBeInTheDocument();
    expect(within(thirdTransaction).getByText(/amount is -99.95 gbp/i)).toBeInTheDocument();
  });
});