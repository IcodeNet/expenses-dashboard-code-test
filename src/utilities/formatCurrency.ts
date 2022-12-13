import { CURRENCY_SYMBOL, CurrencyCodeIso } from "../api/types/transactions";

export const formatCurrency = (value: number, currencyCode: CurrencyCodeIso, prependIndicator?: boolean) => {
    const indicator = prependIndicator && value >= 0 ? "+" : "";
    const currencySymbol = CURRENCY_SYMBOL[currencyCode];
    const formattedVal = Math.abs(value).toFixed(2);

    return [indicator, currencySymbol, formattedVal].join("");
}