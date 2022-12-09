import { filterExpenses } from "../helpers";
import { SORTED_EXPENSES } from "./data";
import { MOCK_PROVIDER_DATA } from "./mockResponse";

const { transactions } = MOCK_PROVIDER_DATA;
const DEFAULT_FILTER_SIZE = 10;

describe("Dashboard helper functions", () => {
  describe("filterExpenses", () => {
    it("filters out income and defaults to 10 results", () => {
      console.log("Filtered are", filterExpenses(transactions));
      console.log("Expected are", SORTED_EXPENSES.slice(0, DEFAULT_FILTER_SIZE - 1));

      expect(filterExpenses(transactions)).toStrictEqual(
        SORTED_EXPENSES.slice(0, DEFAULT_FILTER_SIZE - 1)
      );
    })

    it.each([
      {
        filterCount: 5, 
        expected: SORTED_EXPENSES.slice(0, 4)
      },
      {
        filterCount: 15, 
        expected: SORTED_EXPENSES.slice(0, 14)
    },
    ])("filters out income and returns $filterCount results", ({ filterCount, expected }) => {
      expect(filterExpenses(transactions, filterCount)).toStrictEqual(expected)
    });
  })
});