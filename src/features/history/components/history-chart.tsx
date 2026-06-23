import HistoryAreaChart from "@/components/area-chart";
import Button from "@/components/ui/Button";
import type { HistoryPointType } from "@/types";

const ranges = ["1D", "1W", "1M", "1Y", "5Y"] as const;

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
          <HistoryAreaChart data={data} />
        )}
      </div>
    </section>
  );
};

export default HistoryChart;
