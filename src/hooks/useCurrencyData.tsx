import {
  getLatestRate,
  getPairRate,
  getRateHistory,
} from "@/services/currency-service";
import type { MarketRateType } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const usePairRate = (base: string, quote: string) => {
  return useQuery({
    queryKey: ["pair_rate", base, quote],
    queryFn: () => getPairRate(base, quote),
  });
};

export const useCompareRates = (base: string, quotes: string[]) => {
  const uniqueQuotes = Array.from(new Set(quotes.filter((quote) => quote)));

  return useQuery({
    queryKey: ["compare_rates", base, uniqueQuotes],
    queryFn: async () => {
      const sameBaseRates = uniqueQuotes
        .filter((quote) => quote === base)
        .map((quote) => ({ date: "", base, quote, rate: 1 }));
      const apiQuotes = uniqueQuotes.filter((quote) => quote !== base);
      const apiRates = apiQuotes.length ? await getLatestRate(base, apiQuotes) : [];
      return [...sameBaseRates, ...apiRates].sort((a, b) =>
        a.quote.localeCompare(b.quote),
      );
    },
  });
};

export const useMarketPairs = (
  pairs: Array<{ base: string; target: string }>,
) => {
  return useQuery({
    queryKey: ["market_pairs", pairs],
    queryFn: async () => {
      const rows = await Promise.all(
        pairs.map(async ({ base, target }) => {
          const todayRate = await getLatestRate(base, [target]);
          const history = await getRateHistory({
            base,
            quote: target,
            from: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7)
              .toISOString()
              .split("T")[0],
          });
          const current = todayRate[0]?.rate ?? 0;
          const previous = history.at(-2)?.rate ?? history[0]?.rate ?? current;
          const change = current - previous;
          const changePercent = previous ? (change / previous) * 100 : 0;

          return {
            pair: `${base}/${target}`,
            base,
            quote: target,
            rate: current,
            change,
            changePercent,
          } satisfies MarketRateType;
        }),
      );

      return rows;
    },
  });
};

export const useHistoryRates = ({
  base,
  quote,
  from,
  group,
}: {
  base: string;
  quote: string;
  from: string;
  group?: "week" | "month";
}) => {
  return useQuery({
    queryKey: ["history_rates", base, quote, from, group],
    queryFn: () => getRateHistory({ base, quote, from, group }),
  });
};
