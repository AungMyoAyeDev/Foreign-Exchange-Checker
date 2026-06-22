import FavoriteNotFound from "./components/favorites-notfound";
import arrow from "@/assets/images/icon-arrow-right.svg";
import star from "@/assets/images/icon-star-filled.svg";
import Button from "@/components/ui/Button";
import { priceFormatter } from "@/lib/price-formatter";
import { useCurrency } from "../use-currency";
import { useMarketPairs } from "@/hooks/useCurrencyData";
import { getFlagSrc } from "@/lib/currency";

const Favorites = () => {
  const { favorites, toggleFavorite, setPair } = useCurrency();
  const { data = [], isLoading } = useMarketPairs(
    favorites.map(({ base, quote }) => ({ base, target: quote })),
  );

  if (favorites.length === 0) {
    return <FavoriteNotFound />;
  }

  return (
    <section>
      <div className="space-y-1 py-5">
        <h1 className="text-text-muted text-preset-4-medium uppercase">
          Pinned pairs
        </h1>
        <p className="text-text-muted text-preset-5">
          {favorites.length} favorite{favorites.length === 1 ? "" : "s"}
        </p>
      </div>
      <div className="flex flex-col">
        {isLoading && (
          <p className="text-text-muted text-preset-4 py-4">Loading favorites...</p>
        )}
        {favorites.map((favorite) => {
          const market = data.find(
            (item) => item.base === favorite.base && item.quote === favorite.quote,
          );
          const isUp = (market?.changePercent ?? 0) >= 0;
          const baseFlag = getFlagSrc(favorite.base);
          const quoteFlag = getFlagSrc(favorite.quote);

          return (
            <div
              key={favorite.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-t border-border"
            >
              <button
                type="button"
                onClick={() => setPair(favorite.base, favorite.quote)}
                className="flex items-center gap-2 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-4"
              >
                <div className="flex">
                  {baseFlag && (
                    <img src={baseFlag} alt="" className="w-5 h-5 rounded-full" />
                  )}
                  {quoteFlag && (
                    <img src={quoteFlag} alt="" className="w-5 h-5 rounded-full" />
                  )}
                </div>
                <p className="text-text-primary uppercase text-preset-3">
                  {favorite.base}
                </p>
                <img src={arrow} alt="" className="w-4 h-4 rounded-full" />
                <p className="text-text-primary uppercase text-preset-3">
                  {favorite.quote}
                </p>
              </button>
              <div className="flex items-center justify-between sm:justify-center gap-2">
                <div className="text-right">
                  <h2 className="text-preset-3 text-text-secondary">
                    {market ? priceFormatter(market.rate) : "..."}
                  </h2>
                  <p
                    className={`text-preset-5 ${isUp ? "text-green-400" : "text-danger"}`}
                  >
                    {isUp ? "▲" : "▼"}{" "}
                    {Math.abs(market?.changePercent ?? 0).toFixed(2)} %
                  </p>
                </div>

                <Button
                  className="w-fit p-2 hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                  onClick={() => toggleFavorite(favorite.base, favorite.quote)}
                  aria-label={`Remove ${favorite.base}/${favorite.quote} favorite`}
                >
                  <img src={star} alt="" className="w-3 h-3 rounded-full" />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Favorites;
