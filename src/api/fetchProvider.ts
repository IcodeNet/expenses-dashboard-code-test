import { Dispatch, SetStateAction } from "react";
import { ProviderDataResponse, Transaction } from "./types/transactions";

interface FetchProviderArgs { 
  setProviderData: Dispatch<SetStateAction<ProviderDataResponse | null>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string>>;
};

export const fetchProvider = async ({ setProviderData, setIsLoading, setError }: FetchProviderArgs) => {
  try {
    setError("");
    setIsLoading(true);

    const data = await fetch("https://www.mocky.io/v2/5c62e7c33000004a00019b05");

    if (data.ok) {
      const parsed = await data.json();

      setIsLoading(false);
      setProviderData(parsed);
    } else {
      setError("You're account information is unavailable right now. Please try again later.");    
    }
  } catch (e) {
    setIsLoading(false);
    setError("We were unable to fetch your account. Please try again later.");
  }
}