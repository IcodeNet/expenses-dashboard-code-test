import { formatCurrency } from "../formatCurrency";

describe("formatCurrency utility", () => {
  it.each([
    {
      given: -10.99, expected: "£10.99"
    },
    {
      given: -1.9, expected: "£1.90"
    },
    {
      given: 7, expected: "+£7.00"
    },
    {
      given: 1.1, expected: "+£1.10"
    }
  ])("returns $given GBP currency value formatted to two decimal places", ({ given, expected }) => {
    expect(formatCurrency(given, "GBP")).toEqual(expected);
  });
});