import type { ConversionLogType, FavoritePairType } from "@/types";
import { createContext } from "react";

export type CurrencyContextValue = {
  amount: number;
  baseCurrency: string;
  quoteCurrency: string;
  compareCurrencies: string[];
  favorites: FavoritePairType[];
  conversionLog: ConversionLogType[];
  setAmount: (amount: number) => void;
  setBaseCurrency: (currency: string) => void;
  setQuoteCurrency: (currency: string) => void;
  setPair: (base: string, quote: string) => void;
  swapCurrencies: () => void;
  toggleFavorite: (base: string, quote: string) => void;
  isFavorite: (base: string, quote: string) => boolean;
  addConversionLog: (entry: Omit<ConversionLogType, "id" | "createdAt">) => void;
  deleteConversionLog: (id: string) => void;
  clearConversionLog: () => void;
};

export const CurrencyContext = createContext<CurrencyContextValue | undefined>(
  undefined,
);
