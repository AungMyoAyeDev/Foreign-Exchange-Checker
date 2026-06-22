export interface ApiResponseType<T> {
  result: T;
}
export type RatesType = {
  date: string;
  base: string;
  quote: string;
  rate: number;
};

export type MarketRateType = {
  pair: string;
  base: string;
  quote: string;
  rate: number;
  change: number;
  changePercent: number;
};

export type HistoryPointType = {
  name: string;
  date: string;
  rate: number;
};

export type FavoritePairType = {
  id: string;
  base: string;
  quote: string;
  createdAt: string;
};

export type ConversionLogType = {
  id: string;
  base: string;
  quote: string;
  amount: number;
  convertedAmount: number;
  rate: number;
  createdAt: string;
};
