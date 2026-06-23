import { api } from "@/app/api/axios";
import type { HistoryPointType, RatesType } from "@/types";

type FrankfurterRatesResponse = {
  amount?: number;
  base?: string;
  date?: string;
  rates?: Record<string, number>;
};

type FrankfurterRateResponse = {
  base?: string;
  quote?: string;
  date?: string;
  rate?: number;
};

type FrankfurterTimeSeriesResponse = {
  base?: string;
  start_date?: string;
  end_date?: string;
  rates?: Record<string, Record<string, number>>;
};

const normalizeRates = (
  data: FrankfurterRatesResponse | FrankfurterRateResponse | RatesType[],
  fallbackBase: string,
  quotes: string[],
): RatesType[] => {
  if (Array.isArray(data)) return data;

  if ("rate" in data && typeof data.rate === "number") {
    return [
      {
        date: data.date ?? new Date().toISOString().split("T")[0],
        base: data.base ?? fallbackBase,
        quote: data.quote ?? quotes[0],
        rate: data.rate,
      },
    ];
  }

  const ratesData = data as FrankfurterRatesResponse;

  return Object.entries(ratesData.rates ?? {}).map(([quote, rate]) => ({
    date: ratesData.date ?? new Date().toISOString().split("T")[0],
    base: ratesData.base ?? fallbackBase,
    quote,
    rate,
  }));
};

export const getLatestRate = async (
  base: string,
  quotes: string[],
  date?: string,
): Promise<RatesType[]> => {
  const cleanQuotes = quotes.filter((quote) => quote !== base);

  if (cleanQuotes.length === 0) {
    return [
      {
        date: date ?? new Date().toISOString().split("T")[0],
        base,
        quote: base,
        rate: 1,
      },
    ];
  }

  const { data } = await api.get<FrankfurterRatesResponse | RatesType[]>(
    "/rates",
    {
      params: { base, quotes: cleanQuotes.join(","), date },
    },
  );

  if (!data) {
    throw new Error("Failed to fetch rate.");
  }

  return normalizeRates(data, base, cleanQuotes);
};

export const getPairRate = async (base: string, quote: string) => {
  if (base === quote) return 1;

  const { data } = await api.get<
    FrankfurterRateResponse | FrankfurterRatesResponse
  >(`/rate/${base}/${quote}`);

  if (!data) {
    throw new Error("Failed to fetch pair rate.");
  }

  return normalizeRates(data, base, [quote])[0]?.rate ?? 0;
};

export const getRateHistory = async ({
  base,
  quote,
  from,
  to,
  group,
}: {
  base: string;
  quote: string;
  from: string;
  to?: string;
  group?: "week" | "month";
}) => {
  if (base === quote) {
    return [{ name: from, date: from, rate: 1 }];
  }

  const { data } = await api.get<FrankfurterTimeSeriesResponse>("/rates", {
    params: { base, quotes: quote, from, to, group },
  });

  console.log(data, "api");

  if (!data) {
    throw new Error("Failed to fetch rate history.");
  }

  return data;
};
