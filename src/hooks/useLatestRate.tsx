import { yesterdayDate } from "@/lib/date.ts/date";
import { getLatestRate } from "@/services/currency-service";
import { useQuery } from "@tanstack/react-query";

export const useLatestRate = (base: string, quotes: string[]) => {
  return useQuery({
    queryKey: ["latest_rates", base, quotes],
    queryFn: async () => {
      const yesterday = yesterdayDate();
      const [todayData, yesterdayData] = await Promise.all([
        getLatestRate(base, quotes),
        getLatestRate(base, quotes, yesterday),
      ]);

      const marketData = todayData.map((curr) => {
        const previous = yesterdayData.find(
          (item) => curr.quote === item.quote,
        );
        const previousRate = previous?.rate ?? curr.rate;
        return {
          pair: curr.base + "/" + curr.quote,
          rate: curr.rate,
          change: curr.rate - previousRate,
        };
      });

      return marketData;
    },
  });
};
