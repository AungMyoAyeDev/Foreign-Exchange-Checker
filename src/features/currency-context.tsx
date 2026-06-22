import { COMPARE_CURRENCIES } from "@/app/constant";
import type { ConversionLogType, FavoritePairType } from "@/types";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { CurrencyContext } from "./currency-store";

const FAVORITES_KEY = "fx:favorites";
const LOG_KEY = "fx:conversion-log";

const readStorage = <T,>(key: string, fallback: T): T => {
  if (typeof window === "undefined") return fallback;

  try {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
};

const writeStorage = <T,>(key: string, value: T) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
};

const makeId = () => `${Date.now()}-${Math.random().toString(36).slice(2)}`;

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [amount, setAmount] = useState(1000);
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [quoteCurrency, setQuoteCurrency] = useState("EUR");
  const [favorites, setFavorites] = useState<FavoritePairType[]>(() =>
    readStorage(FAVORITES_KEY, []),
  );
  const [conversionLog, setConversionLog] = useState<ConversionLogType[]>(() =>
    readStorage(LOG_KEY, []),
  );

  useEffect(() => writeStorage(FAVORITES_KEY, favorites), [favorites]);
  useEffect(() => writeStorage(LOG_KEY, conversionLog), [conversionLog]);

  const setPair = useCallback((base: string, quote: string) => {
    setBaseCurrency(base);
    setQuoteCurrency(quote);
  }, []);

  const swapCurrencies = useCallback(() => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  }, [baseCurrency, quoteCurrency]);

  const isFavorite = useCallback(
    (base: string, quote: string) =>
      favorites.some((favorite) => favorite.base === base && favorite.quote === quote),
    [favorites],
  );

  const toggleFavorite = useCallback((base: string, quote: string) => {
    setFavorites((current) => {
      const exists = current.some(
        (favorite) => favorite.base === base && favorite.quote === quote,
      );

      if (exists) {
        return current.filter(
          (favorite) => !(favorite.base === base && favorite.quote === quote),
        );
      }

      return [
        {
          id: makeId(),
          base,
          quote,
          createdAt: new Date().toISOString(),
        },
        ...current,
      ];
    });
  }, []);

  const addConversionLog = useCallback(
    (entry: Omit<ConversionLogType, "id" | "createdAt">) => {
      setConversionLog((current) => [
        {
          ...entry,
          id: makeId(),
          createdAt: new Date().toISOString(),
        },
        ...current,
      ]);
    },
    [],
  );

  const deleteConversionLog = useCallback((id: string) => {
    setConversionLog((current) => current.filter((entry) => entry.id !== id));
  }, []);

  const clearConversionLog = useCallback(() => setConversionLog([]), []);

  const value = useMemo(
    () => ({
      amount,
      baseCurrency,
      quoteCurrency,
      compareCurrencies: COMPARE_CURRENCIES,
      favorites,
      conversionLog,
      setAmount,
      setBaseCurrency,
      setQuoteCurrency,
      setPair,
      swapCurrencies,
      toggleFavorite,
      isFavorite,
      addConversionLog,
      deleteConversionLog,
      clearConversionLog,
    }),
    [
      amount,
      baseCurrency,
      quoteCurrency,
      favorites,
      conversionLog,
      setPair,
      swapCurrencies,
      toggleFavorite,
      isFavorite,
      addConversionLog,
      deleteConversionLog,
      clearConversionLog,
    ],
  );

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};
