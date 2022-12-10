import { CURRENCY_SYMBOL, CurrencyCodeIso } from "../api/types/transactions";

export const formatCurrency = (value: number, currencyCode: CurrencyCodeIso) => {
    const prepend = value >= 0 ? "+" : "";

    return `${prepend}${CURRENCY_SYMBOL[currencyCode]}${Math.abs(value).toFixed(2)}`;
}