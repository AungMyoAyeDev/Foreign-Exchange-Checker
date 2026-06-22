import Button from "@/components/ui/Button";
import LogNotFound from "./components/log-notfound";
import arrow from "@/assets/images/icon-arrow-right.svg";
import trash from "@/assets/images/icon-delete.svg";
import { priceFormatter } from "@/lib/price-formatter";
import { useCurrency } from "../use-currency";

const relativeTime = (value: string) => {
  const diff = Date.now() - new Date(value).getTime();
  const minutes = Math.max(0, Math.round(diff / 60000));

  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;

  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h ago`;

  return `${Math.round(hours / 24)}d ago`;
};

const Log = () => {
  const { conversionLog, clearConversionLog, deleteConversionLog } =
    useCurrency();

  if (conversionLog.length === 0) {
    return <LogNotFound />;
  }

  return (
    <section>
      <div className="flex items-center justify-between py-5">
        <div>
          <h1 className="text-text-muted text-preset-4-medium uppercase mb-1">
            Conversion log
          </h1>
          <p className="text-text-muted text-preset-5">
            {conversionLog.length} logged
          </p>
        </div>
        <Button
          className="uppercase bg-none bg-transparent border-none text-danger hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          onClick={clearConversionLog}
        >
          clear all
        </Button>
      </div>
      <div className="flex flex-col">
        {conversionLog.map((entry) => (
          <div
            key={entry.id}
            className="flex items-center justify-between gap-4 py-4 border-t border-border"
          >
            <div className="flex items-center gap-3 min-w-0">
              <p className="text-preset-5 text-text-muted shrink-0">
                {relativeTime(entry.createdAt)}
              </p>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-preset-3 text-text-secondary uppercase">
                    {entry.base}
                  </span>
                  <img src={arrow} alt="" className="w-3" />
                  <span className="text-preset-3 text-text-secondary uppercase">
                    {entry.quote}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-preset-6 text-text-secondary uppercase">
                    {priceFormatter(entry.amount)} {entry.base}
                  </span>
                  <img src={arrow} alt="" className="w-3" />
                  <span className="text-preset-6 text-text-secondary uppercase">
                    {priceFormatter(entry.convertedAmount)} {entry.quote}
                  </span>
                </div>
              </div>
            </div>
            <Button
              className="p-2 w-fit hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              onClick={() => deleteConversionLog(entry.id)}
              aria-label={`Delete ${entry.base}/${entry.quote} conversion log`}
            >
              <img src={trash} alt="" className="w-4" />
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Log;
