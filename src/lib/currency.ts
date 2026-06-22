import { FLAG_MAP, POPULAR_CURRENCY_CODES } from "@/app/constant";

const flagImages = import.meta.glob<string>("../assets/images/flags/*.webp", {
  eager: true,
  import: "default",
});

const currencyNameFormatter =
  typeof Intl.DisplayNames !== "undefined"
    ? new Intl.DisplayNames(["en"], { type: "currency" })
    : undefined;

export const getCurrencyName = (code: string) => {
  try {
    return currencyNameFormatter?.of(code) ?? code;
  } catch {
    return code;
  }
};

export const getFlagSrc = (code: string) => {
  const flagCode = FLAG_MAP[code.toUpperCase()];
  return flagCode ? flagImages[`../assets/images/flags/${flagCode}.webp`] : "";
};

export const getSupportedCurrencies = () =>
  Array.from(
    new Set([
      ...POPULAR_CURRENCY_CODES,
      ...Object.keys(FLAG_MAP).sort((a, b) => a.localeCompare(b)),
    ]),
  );
