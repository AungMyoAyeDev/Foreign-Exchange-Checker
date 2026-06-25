import HistoryAreaChart from "@/components/area-chart";
import Button from "@/components/ui/Button";
import { dateFormatter } from "@/lib/date.ts/date";
import type { HistoryPointType } from "@/types";

const ranges = ["1D", "1W", "1M", "1Y", "5Y"] as const;

const chartData = [
  {
    date: dateFormatter.getDateTime("2025-01-01"),
    base: "EUR",
    quote: "USD",
    rate: 1.0361,
  },
  {
    date: dateFormatter.getDateTime("2025-02-01"),
    base: "EUR",
    quote: "USD",
    rate: 1.0419,
  },
  {
    date: dateFormatter.getDateTime("2025-03-01"),
    base: "EUR",
    quote: "USD",
    rate: 1.0798,
  },
  {
    date: dateFormatter.getDateTime("2025-04-01"),
    base: "EUR",
    quote: "USD",
    rate: 1.1215,
  },
  {
    date: dateFormatter.getDateTime("2025-05-01"),
    base: "EUR",
    quote: "USD",
    rate: 1.1286,
  },
  {
    date: dateFormatter.getDateTime("2025-06-01"),
    base: "EUR",
    quote: "USD",
    rate: 1.1515,
  },
  {
    date: dateFormatter.getDateTime("2025-07-01"),
    base: "EUR",
    quote: "USD",
    rate: 1.1689,
  },
  {
    date: dateFormatter.getDateTime("2025-08-01"),
    base: "EUR",
    quote: "USD",
    rate: 1.1635,
  },
  {
    date: dateFormatter.getDateTime("2025-09-01"),
    base: "EUR",
    quote: "USD",
    rate: 1.1733,
  },
  {
    date: dateFormatter.getDateTime("2025-10-01"),
    base: "EUR",
    quote: "USD",
    rate: 1.1648,
  },
  {
    date: dateFormatter.getDateTime("2025-11-01"),
    base: "EUR",
    quote: "USD",
    rate: 1.1566,
  },
  {
    date: dateFormatter.getDateTime("2025-12-01"),
    base: "EUR",
    quote: "USD",
    rate: 1.171,
  },
];

const HistoryChart = ({
  data,
  range,
  onRangeChange,
  isLoading = false,
}: {
  data: HistoryPointType[];
  range: (typeof ranges)[number];
  onRangeChange: (range: (typeof ranges)[number]) => void;
  isLoading?: boolean;
}) => {
  return (
    <section>
      <div className="flex flex-wrap  gap-2 mb-3">
        {ranges.map((item) => (
          <Button
            key={item}
            variants={range === item ? "primary" : "ghost"}
            onClick={() => onRangeChange(item)}
            className="hover:border-primary focus-visible:outline focus-visible:outline-primary text-sm px-4"
          >
            {item}
          </Button>
        ))}
      </div>
      <div className="p-4 radius-4 bg-surface">
        {isLoading ? (
          <p className="text-text-muted text-preset-4">Loading chart...</p>
        ) : (
          <HistoryAreaChart data={chartData} />
        )}
      </div>
    </section>
  );
};

export default HistoryChart;
