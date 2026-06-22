import Button from "@/components/ui/Button";
import exchangeIcon from "@/assets/images/icon-exchange.svg";
import starIcon from "@/assets/images/icon-star-filled.svg";
import starOutlineIcon from "@/assets/images/icon-star.svg";
import ExchangeCard from "./components/exchange-card";
import { useCurrency } from "../use-currency";
import { usePairRate } from "@/hooks/useCurrencyData";
import { priceFormatter } from "@/lib/price-formatter";

const Home = () => {
  const {
    amount,
    baseCurrency,
    quoteCurrency,
    setAmount,
    setBaseCurrency,
    setQuoteCurrency,
    swapCurrencies,
    toggleFavorite,
    isFavorite,
    addConversionLog,
  } = useCurrency();
  const { data: rate = 0, isLoading } = usePairRate(baseCurrency, quoteCurrency);
  const convertedAmount = amount * rate;
  const favorite = isFavorite(baseCurrency, quoteCurrency);

  const handleLogConversion = () => {
    if (!rate) return;

    addConversionLog({
      base: baseCurrency,
      quote: quoteCurrency,
      amount,
      convertedAmount,
      rate,
    });
  };

  return (
    <section>
      <h1 className="text-preset-2 uppercase text-text-primary">
        check the rate
      </h1>
      <div className="mt-4 px-5 bg-surface rounded-20 ">
        <div className="flex flex-col md:flex-row items-center gap-6 py-5">
          <ExchangeCard
            type="send"
            value={amount}
            currency={baseCurrency}
            onValueChange={setAmount}
            onCurrencyChange={setBaseCurrency}
          />

          <Button
            className="w-12 h-12 shrink-0 hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            onClick={swapCurrencies}
            aria-label="Swap send and receive currencies"
          >
            <img src={exchangeIcon} alt="currency exchange button icon" />
          </Button>
          <ExchangeCard
            type="receive"
            value={convertedAmount}
            currency={quoteCurrency}
            onCurrencyChange={setQuoteCurrency}
            isLoading={isLoading}
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 justify-between py-4">
          <p className="text-preset-5 text-text-secondary">
            1 {baseCurrency} = {isLoading ? "..." : priceFormatter(rate)}{" "}
            {quoteCurrency}
          </p>
          <div className="flex uppercase gap-3">
            <Button
              variants={favorite ? "primary" : "secondary"}
              onClick={() => toggleFavorite(baseCurrency, quoteCurrency)}
              className="hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              <img
                src={favorite ? starIcon : starOutlineIcon}
                alt=""
                className="w-4 h-4"
              />
              {favorite ? "favorited" : "favorite"}
            </Button>
            <Button
              variants="secondary"
              onClick={handleLogConversion}
              disabled={!rate || isLoading}
              className="hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              log conversion
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
