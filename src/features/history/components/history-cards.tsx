import { priceFormatter } from "@/lib/price-formatter";
import type { HistoryPointType } from "@/types";

const HistoryCards = ({
  data,
  isLoading = false,
}: {
  data: HistoryPointType[];
  isLoading?: boolean;
}) => {
  const open = data[0]?.rate ?? 0;
  const last = data.at(-1)?.rate ?? 0;
  const change = last - open;
  const changePercent = open ? (change / open) * 100 : 0;
  const isUp = change >= 0;
  const value = (rate: number) => (isLoading ? "..." : priceFormatter(rate));

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5 ">
      <div className="bg-surface rounded-8 p-3 ">
        <h1 className="text-text-muted text-preset-4  uppercase mb-2">OPEN</h1>
        <p className="text-preset-2-bold  text-text-primary">
          {value(open)}
        </p>
      </div>
      <div className="bg-surface rounded-8 p-3 ">
        <h1 className="text-text-muted text-preset-4  uppercase mb-2">Last</h1>
        <p className="text-preset-2-bold  text-text-primary">
          {value(last)}
        </p>
      </div>
      <div className="bg-surface rounded-8 p-3 ">
        <h1 className="text-text-muted text-preset-4  uppercase mb-2">
          Change
        </h1>
        <p
          className={`text-preset-2-bold  ${isUp ? "text-green-400" : "text-danger"}`}
        >
          {isLoading ? "..." : `${isUp ? "+" : ""}${change.toFixed(4)}`}
        </p>
      </div>
      <div className="bg-surface rounded-8 p-3 ">
        <h1 className="text-text-muted text-preset-4  uppercase mb-2">
          % Change
        </h1>
        <p
          className={`text-preset-2-bold  ${isUp ? "text-green-400" : "text-danger"}`}
        >
          {isLoading
            ? "..."
            : `${isUp ? "▲" : "▼"} ${Math.abs(changePercent).toFixed(2)} %`}
        </p>
      </div>
    </div>
  );
};

export default HistoryCards;
