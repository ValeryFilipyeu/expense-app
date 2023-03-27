import { isNil } from "lodash";

type Options = {
  currency?: string;
  style?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
};

export const priceFormatter = (
  price: string | number,
  options?: Options,
  locale = "en-US"
): string => {
  if (!isNil(price)) {
    const currency = options?.currency || "USD";

    return new Intl.NumberFormat(locale, {
      style: "currency",
      minimumFractionDigits: 0,
      ...options,
      // must be done this way to prevent incoming null values from breaking the code
      currency,
    }).format(+price);
  }
  return "";
};

