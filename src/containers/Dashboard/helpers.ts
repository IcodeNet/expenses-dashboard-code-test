import { DEFAULT_FILTER_COUNT } from "./constants";

export const filterExpenses = (
  transactions: Record<string, any>[],
  filterLimit: number = DEFAULT_FILTER_COUNT
) => {
  if (transactions?.length) {
    const expenses = transactions.reduce((acc, curr) => {
      if (curr.amount.value < 0) acc.push(curr);

      return acc;
    }, []);

    // @ts-ignore
    const sorted = expenses.sort((prev, curr) => {
      const prevAmount = prev.amount.value;
      const currAmount = curr.amount.value;

      return currAmount - prevAmount;
    });

    return sorted.slice(0, filterLimit);
  }

  return [];
}