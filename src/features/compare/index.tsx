import star from "@/assets/images/icon-star.svg";
import starFilled from "@/assets/images/icon-star-filled.svg";
import Button from "@/components/ui/Button";
import { useCompareRates } from "@/hooks/useCurrencyData";
import { getCurrencyName, getFlagSrc } from "@/lib/currency";
import { priceFormatter } from "@/lib/price-formatter";
import { useCurrency } from "../use-currency";

const Compare = () => {
  const {
    amount,
    baseCurrency,
    compareCurrencies,
    toggleFavorite,
    isFavorite,
    setQuoteCurrency,
  } = useCurrency();
  const { data = [], isLoading } = useCompareRates(
    baseCurrency,
    compareCurrencies,
  );

  return (
    <section>
      <div className="space-y-1 py-5">
        <h1 className="text-text-muted text-preset-4-medium uppercase">
          Multi-currency
        </h1>
        <p className="text-text-muted text-preset-5">
          {priceFormatter(amount)} from {baseCurrency} · {data.length || compareCurrencies.length} pairs
        </p>
      </div>
      <div className="flex flex-col">
        {isLoading && (
          <p className="text-text-muted text-preset-4 py-4">Loading rates...</p>
        )}
        {data.map((item) => {
          const flagSrc = getFlagSrc(item.quote);
          const favorite = isFavorite(baseCurrency, item.quote);

          return (
            <div
              key={item.quote}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-t border-border"
            >
              <button
                type="button"
                onClick={() => setQuoteCurrency(item.quote)}
                className="flex items-center gap-2 uppercase text-left hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-4"
              >
                {flagSrc && (
                  <img
                    src={flagSrc}
                    alt=""
                    className="w-5 h-5 rounded-full mr-1"
                  />
                )}
                <h2 className="text-preset-3-medium text-text-secondary">
                  {item.quote}
                </h2>
                <span className="text-text-muted text-preset-5 normal-case">
                  {getCurrencyName(item.quote)}
                </span>
              </button>
              <div className="flex items-center justify-between sm:justify-center gap-2">
                <div className="text-right">
                  <h2 className="text-preset-3-medium text-text-secondary">
                    {priceFormatter(amount * item.rate)}
                  </h2>
                  <span className="text-text-muted text-preset-5">
                    1 {baseCurrency} = {priceFormatter(item.rate)}
                  </span>
                </div>

                <Button
                  className="w-fit p-2 hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                  onClick={() => toggleFavorite(baseCurrency, item.quote)}
                  aria-label={`${favorite ? "Remove" : "Add"} ${baseCurrency}/${item.quote} favorite`}
                >
                  <img
                    src={favorite ? starFilled : star}
                    alt=""
                    className="w-3 h-3 rounded-full"
                  />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Compare;
