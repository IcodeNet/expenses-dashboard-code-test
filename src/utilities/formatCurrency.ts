import { CURRENCY_SYMBOL, CurrencyCodeIso } from "../api/types/transactions";

export const formatCurrency = (value: number, currencyCode: CurrencyCodeIso, prependIndicator?: boolean) => {
    const indicator = prependIndicator && value >= 0 ? "+" : "";

    return `${indicator}${CURRENCY_SYMBOL[currencyCode]}${Math.abs(value).toFixed(2)}`;
}