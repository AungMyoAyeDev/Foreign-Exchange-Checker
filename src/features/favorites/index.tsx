import FavoriteNotFound from "./components/favorites-notfound";
import flag1 from "@/assets/images/flags/hk.webp";
import flag2 from "@/assets/images/flags/ca.webp";
import arrow from "@/assets/images/icon-arrow-right.svg";
import star from "@/assets/images/icon-star.svg";
import Button from "@/components/ui/Button";
import { priceFormatter } from "@/lib/price-formatter";

const Favorites = () => {
  const favoritesList = [];
  if (favoritesList.length === 0) {
    return <FavoriteNotFound />;
  }
  const isUp = true;
  return (
    <section>
      <div className="space-y-1 py-5">
        <h1 className="text-text-muted text-preset-4-medium uppercase">
          Pinned pairs
        </h1>
        <p className="text-text-muted text-preset-5">1 favorite</p>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between py-4 border border-t-border">
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              <img src={flag1} alt="flag 1" className="w-5 h-5 rounded-full" />
              <img src={flag2} alt="flag 1" className="w-5 h-5 rounded-full" />
            </div>
            <p className="text-text-primary uppercase text-preset-3">Eur</p>
            <img
              src={arrow}
              alt="arrow right"
              className="w-4 h-4 rounded-full"
            />
            <p className="text-text-primary uppercase text-preset-3">Usd</p>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <div>
              <h2 className="text-preset-3 text-text-secondary">
                {priceFormatter(875.33)}
              </h2>
              <p
                className={`text-preset-5  ${isUp ? "text-green-400" : "text-danger"}`}
              >
                {isUp ? "▲" : "▼"} 3.22 %
              </p>
            </div>

            <Button className="w-fit p-2">
              <img
                src={star}
                alt="Add favorite icon "
                className="w-3 h-3 rounded-full "
              />
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between py-4 border border-t-border">
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              <img src={flag1} alt="flag 1" className="w-5 h-5 rounded-full" />
              <img src={flag2} alt="flag 1" className="w-5 h-5 rounded-full" />
            </div>
            <p className="text-text-primary uppercase text-preset-3">Eur</p>
            <img
              src={arrow}
              alt="arrow right"
              className="w-4 h-4 rounded-full"
            />
            <p className="text-text-primary uppercase text-preset-3">Usd</p>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <div>
              <h2 className="text-preset-3 text-text-secondary">
                {priceFormatter(875.33)}
              </h2>
              <p
                className={`text-preset-5  ${isUp ? "text-green-400" : "text-danger"}`}
              >
                {isUp ? "▲" : "▼"} 3.22 %
              </p>
            </div>

            <Button className="w-fit p-2">
              <img
                src={star}
                alt="Add favorite icon "
                className="w-3 h-3 rounded-full "
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favorites;
