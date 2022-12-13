import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockFailedGetRequest, mockSuccessfulGetRequest } from "../../../test-utils/msw/requestMockHelpers";
import { Dashboard } from "../Dashboard";
import { MOCK_PROVIDER_DATA, MOCK_PROVIDER_DATA_CONDENSED } from "./data";
import { server } from "../../../test-utils/msw/mswSetup";
import { act } from "react-dom/test-utils";

describe("Transactions dashboard", () => {
  beforeEach(() => {
    mockSuccessfulGetRequest("*/v2/5c62e7c33000004a00019b05", MOCK_PROVIDER_DATA_CONDENSED)
  })

  describe("account info", () => {
    it("should display skeleton loaders when provider is fetching", async () => {  
      const apiCallSpy = jest.fn();
      server.events.on("request:start", apiCallSpy);
  
      render(<Dashboard />);

      expect(screen.getByTestId("skeleton-card-credentials")).toBeInTheDocument();
      expect(screen.getByTestId("skeleton-card-balance")).toBeInTheDocument();

      await waitFor(
        () => expect(screen.queryByTestId("skeleton-card-credentials")).not.toBeInTheDocument()
      );
      expect(screen.queryByTestId("skeleton-card-balance")).not.toBeInTheDocument();
    });

    it("should display account information when provider is fetched", async () => {  
      const apiCallSpy = jest.fn();
      server.events.on("request:start", apiCallSpy);
  
      render(<Dashboard />);

      await waitFor(
        () => expect(screen.queryByTestId("skeleton-card-credentials")).not.toBeInTheDocument()
      );
      expect(screen.queryByTestId("skeleton-card-balance")).not.toBeInTheDocument();

      expect(
        screen.getByRole("heading", { name: /sort code \| account number/i })
      ).toBeInTheDocument();
      expect(screen.getByText(/12-34-56 \| 12345678/i)).toBeInTheDocument()

      expect(
        screen.getByRole("heading", { name: /current balance/i })
      ).toBeInTheDocument();
      expect(screen.getByText(/£1250.32/i)).toBeInTheDocument()
    });
  })

  describe("expenses table", () => {
    it("should display skeleton loaders when transactions are fetching", async () => {  
      const apiCallSpy = jest.fn();
      server.events.on("request:start", apiCallSpy);
  
      render(<Dashboard />);
  
      expect(screen.getByRole("columnheader", { name: /date/i })).toBeInTheDocument();
      expect(screen.getByRole("columnheader", { name: /description/i })).toBeInTheDocument();
      expect(screen.getByRole("columnheader", { name: /amount/i })).toBeInTheDocument();
  
      expect(screen.getAllByTestId("skeleton-loader")).toHaveLength(9);
  
      await waitFor(() => {
        expect(apiCallSpy).toHaveBeenCalledTimes(1);
      });
  
      expect(screen.queryByTestId("skeleton-loader")).not.toBeInTheDocument();
    });
  
    it("should display sorted expenses list when fetched", async () => {  
      const apiCallSpy = jest.fn();
      server.events.on("request:start", apiCallSpy);
  
      render(<Dashboard />);
  
      await waitFor(() => {
        expect(apiCallSpy).toHaveBeenCalledTimes(1);
      });
  
      expect(screen.queryByTestId("skeleton-loader")).not.toBeInTheDocument();
      
      const transactions = screen.getAllByRole("row");
  
      expect(transactions).toHaveLength(4);

      const [
        _,
        firstTransaction,
        secondTransaction,
        thirdTransaction
      ] = transactions;
  
      expect(within(firstTransaction).getByText(/05\/07\/2018/i)).toBeInTheDocument();
      expect(within(firstTransaction).getByText(/transport for london/i)).toBeInTheDocument();
      expect(within(firstTransaction).getByText(/£2.85/i)).toBeInTheDocument();
  
      expect(within(secondTransaction).getByText(/30\/06\/2018/i)).toBeInTheDocument();
      expect(within(secondTransaction).getByText(/tesco/i)).toBeInTheDocument();
      expect(within(secondTransaction).getByText(/£57.21/i)).toBeInTheDocument();
  
      expect(within(thirdTransaction).getByText(/03\/07\/2018/i)).toBeInTheDocument();
      expect(within(thirdTransaction).getByText(/amazon/i)).toBeInTheDocument();
      expect(within(thirdTransaction).getByText(/£99.95/i)).toBeInTheDocument();
    });
  
    it.each([
      {
        given: "15",
        expected: 16
      },
      {
        given: "20",
        expected: 21
      }
    ])("contains toggle which allows number of results per page to be selected", async ({
      given,
      expected 
    }) => {
      mockSuccessfulGetRequest("*/v2/5c62e7c33000004a00019b05", MOCK_PROVIDER_DATA)
  
      const apiCallSpy = jest.fn();
      server.events.on("request:start", apiCallSpy);
  
      render(<Dashboard />);
  
      await waitFor(() => {
        expect(apiCallSpy).toHaveBeenCalledTimes(1);
      });
  
      expect(screen.getAllByRole("row")).toHaveLength(11);
  
      const resultsSelect = screen.getByRole("combobox", { name: /no. of results/i });
  
      expect(resultsSelect).toBeInTheDocument();
  
      userEvent.click(resultsSelect);
  
      expect(screen.getAllByRole("option")).toHaveLength(3);
  
      const option = screen.getByRole("option", { name: new RegExp(given) });
      
      expect(option).toBeInTheDocument();
      userEvent.selectOptions(resultsSelect, option);
  
      await waitFor(() => expect(screen.getAllByRole("row")).toHaveLength(expected));
    });
  
    it("displays an error message when provider cannot be fetched", async () => {
      mockFailedGetRequest("*/v2/5c62e7c33000004a00019b05", {})
  
      const apiCallSpy = jest.fn();
      server.events.on("request:start", apiCallSpy);
  
      render(<Dashboard />);
  
      await waitFor(() => {
        expect(apiCallSpy).toHaveBeenCalledTimes(1);
      });
  
      const alert = screen.getByRole("alert");
  
      await waitFor(() => expect(alert).toBeInTheDocument());
  
      expect(
        within(alert).getByText(/your account information is unavailable right now. please try again later./i)
      ).toBeInTheDocument();
    });
  });
});