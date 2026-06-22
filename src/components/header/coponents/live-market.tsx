import { useMarketPairs } from "@/hooks/useCurrencyData";
import Button from "../../ui/Button";
import { TICKER_PAIRS } from "@/app/constant";
import { priceFormatter } from "@/lib/price-formatter";

const LiveMarket = () => {
  const { data, error, isError, isLoading } = useMarketPairs(TICKER_PAIRS);

  const rates = data ?? [];

  if (isLoading)
    return (
      <p className="bg-surface text-text-muted h-10 px-4 pt-1">Loading...</p>
    );
  if (isError) throw new Error(error?.message ?? "Failed to fetch rates");
  if (rates.length === 0)
    return (
      <p className="bg-surface text-text-muted h-10 px-4 pt-1">
        No rates available
      </p>
    );

  const loopMarquee = [...rates, ...rates];

  return (
    <section className="flex h-10">
      <Button variants="primary" className="rounded-0! px-4 py-3 gap-2 ">
        <div className="w-1.5 h-1.5 rounded-full bg-background animate-pulse" />
        <span>live markets</span>
      </Button>

      <div className="flex-1 flex items-center h-full  overflow-hidden bg-surface">
        <div className="marquee flex items-center w-max">
          {loopMarquee.map((item, index) => (
            <div
              key={`${item.pair}-${index}`}
              className="border-r border-border py-4 px-5 flex items-center gap-2.5 shrink-0"
            >
              <span className="text-text-muted">{item.pair}</span>
              <span className="text-text-primary text-preset-5-medium">
                {priceFormatter(item.rate)}
              </span>
              <span
                className={
                  item.changePercent >= 0
                    ? "text-success text-nowrap"
                    : "text-danger text-nowrap"
                }
              >
                {item.changePercent >= 0 ? "▲ " : "▼"}{" "}
                {item.changePercent >= 0 && "+"}
                {item.changePercent.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveMarket;
