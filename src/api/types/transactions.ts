export type CurrencyCodeIso = "GBP" | "USD";

interface TransactionAmount {
  value: number;
  currency_iso: CurrencyCodeIso;
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  category_title: string;
  amount: TransactionAmount;
}

export interface ProviderBalance {
  amount: number;
  currency_iso: CurrencyCodeIso;
}

export interface ProviderInfo {
  title: string;
  account_number: string;
  sort_code: string;
  description: string; 
}

export interface ProviderDataResponse {
  id: string;
  provider: ProviderInfo,
  balance: ProviderBalance,
  transactions: Transaction[]
}