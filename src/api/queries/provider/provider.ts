import type { Dispatch, MutableRefObject, SetStateAction } from "react";
import { ENDPOINTS } from "../../endpoints";
import type { ProviderDataResponse } from "../../types/transactions";
import { PROVIDER_QUERY_CONTENT } from "./constants";

interface GetProviderArgs {
  isAwaitingFetch: MutableRefObject<boolean>;
  setProviderData: Dispatch<SetStateAction<ProviderDataResponse | null>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string>>;
};

const { error: {
  api: apiError,
  network: networkError
} } = PROVIDER_QUERY_CONTENT;

export const getProvider = async ({
  isAwaitingFetch,
  setProviderData,
  setIsLoading,
  setError
}: GetProviderArgs) => {
  try {
    setError("");
    setIsLoading(true);
    isAwaitingFetch.current = false;

    const data = await fetch(ENDPOINTS.provider);

    if (data.ok) {
      const parsed = await data.json();

      setIsLoading(false);
      setProviderData(parsed);
    } else {
      setError(apiError);    
    }
  } catch (e) {
    setIsLoading(false);
    setError(networkError);
  }
}