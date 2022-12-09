import type { Transaction } from "../../api/types/transactions";
import { DEFAULT_FILTER_COUNT } from "./constants";

export const filterExpenses = (
  transactions: Transaction[],
  filterLimit: number = DEFAULT_FILTER_COUNT
): Transaction[] => {
  if (transactions?.length) {
    const expenses = transactions.filter((transaction) => transaction.amount.value < 0);

    const sorted = expenses.sort((prev, curr) => {
      const prevAmount = prev.amount.value;
      const currAmount = curr.amount.value;

      return currAmount - prevAmount;
    });

    return sorted.slice(0, filterLimit);
  }

  return [];
}