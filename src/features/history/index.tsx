import { useHistoryRates } from "@/hooks/useCurrencyData";
import { dateDaysAgo } from "@/lib/date.ts/date";
import { useState } from "react";
import { useCurrency } from "../use-currency";
import HistoryCards from "./components/history-cards";
import HistoryChart from "./components/history-chart";

const rangeConfig = {
  "1D": { days: 1, group: undefined },
  "7D": { days: 7, group: undefined },
  "30D": { days: 30, group: undefined },
  "1Y": { days: 365, group: "week" },
  "5Y": { days: 365 * 5, group: "month" },
} as const;

const History = () => {
  const [range, setRange] = useState<keyof typeof rangeConfig>("30D");
  const { baseCurrency, quoteCurrency } = useCurrency();
  const selectedRange = rangeConfig[range];
  const { data = [], isLoading } = useHistoryRates({
    base: baseCurrency,
    quote: quoteCurrency,
    from: dateDaysAgo(selectedRange.days),
    group: selectedRange.group,
  });

  return (
    <section>
      <div className="space-y-1 py-5">
        <h1 className="text-text-muted text-preset-4-medium uppercase">
          {baseCurrency}/{quoteCurrency} rate history
        </h1>
        <p className="text-text-muted text-preset-5">
          Live API data from Frankfurter
        </p>
      </div>
      <HistoryCards data={data} isLoading={isLoading} />
      <HistoryChart
        data={data}
        range={range}
        onRangeChange={setRange}
        isLoading={isLoading}
      />
    </section>
  );
};

export default History;
