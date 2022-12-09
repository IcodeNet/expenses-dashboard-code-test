import { filterExpenses } from "../helpers";
import { SORTED_EXPENSES } from "./data";
import { MOCK_PROVIDER_DATA } from "./mockResponse";

const { transactions } = MOCK_PROVIDER_DATA;
const DEFAULT_FILTER_SIZE = 10;

describe("Dashboard helper functions", () => {
  describe("filterExpenses", () => {
    it("filters out income and defaults to 10 results", () => {
      const output = filterExpenses(transactions);

      expect(output).toHaveLength(10);
      expect(output).toStrictEqual(
        SORTED_EXPENSES.slice(0, DEFAULT_FILTER_SIZE)
      );
    })

    it.each([
      {
        filterCount: 5, 
        expected: SORTED_EXPENSES.slice(0, 5)
      },
      {
        filterCount: 15, 
        expected: SORTED_EXPENSES.slice(0, 15)
    },
    ])("filters out income and returns $filterCount results", ({ filterCount, expected }) => {
      const output = filterExpenses(transactions, filterCount);

      expect(output).toHaveLength(filterCount);
      expect(output).toStrictEqual(expected)
    });
  })
});