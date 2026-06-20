export interface ApiResponseType<T> {
  result: T;
}
export type RatesType = {
  date: Date;
  base: string;
  quote: string;
  rate: number;
};
