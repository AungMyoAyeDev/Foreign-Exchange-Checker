import { useContext } from "react";
import { CurrencyContext } from "./currency-store";

export const useCurrency = () => {
  const context = useContext(CurrencyContext);

  if (!context) {
    throw new Error("useCurrency must be used within CurrencyProvider");
  }

  return context;
};
