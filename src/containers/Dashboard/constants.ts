import type { ProviderTitle } from "../../api/types";

export const DEFAULT_FILTER_COUNT = 10;

export const DASHBOARD_CONTENT = {
  getHeading: (providerTitle?: ProviderTitle) => providerTitle ? `My ${providerTitle} Account` : "My Account",
  expenses: {
    heading: "Expenses"
  }
}