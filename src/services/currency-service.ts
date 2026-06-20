import { api } from "@/app/api/axios";
import type { RatesType } from "@/types";

export const getLatestRate = async (
  base: string,
  quotes: string[],
  date?: string,
) => {
  const { data } = await api.get<RatesType[]>("/rates", {
    params: { base, quotes: quotes.join(","), date },
  });
  if (!data) {
    throw new Error("Failed to fetch rate.");
  }
  return data;
};
