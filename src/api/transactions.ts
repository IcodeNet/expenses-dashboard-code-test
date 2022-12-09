import { Dispatch, SetStateAction } from "react";

interface FetchTransactionsArgs { 
  setTransactions: Dispatch<SetStateAction<[]>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string>>;
};

export const fetchTransactions = async ({ setTransactions, setIsLoading, setError }: FetchTransactionsArgs) => {
  try {
    setError("");
    setIsLoading(true);

    const data = await fetch("https://www.mocky.io/v2/5c62e7c33000004a00019b05");

    if (data.ok) {
      const { transactions } = await data.json();

      setIsLoading(false);
      if (transactions?.length) {
        setTransactions(transactions);
      }
    } else {
      setError("You're transactions are unavailable right now. Please try again later.");    
    }
  } catch (e) {
    console.error(e);
    setError("We were unable to fetch your transactions. Please try again later.");
  }
}