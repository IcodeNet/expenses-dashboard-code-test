export const CURRENCY_SYMBOL = {
  "GBP": "£"
} as const;

export type CurrencyCodeIso = keyof typeof CURRENCY_SYMBOL;

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

export type ProviderTitle = "Monzo";
export type ProviderTitleLower = Lowercase<ProviderTitle>;

export interface ProviderInfo {
  title: ProviderTitle;
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