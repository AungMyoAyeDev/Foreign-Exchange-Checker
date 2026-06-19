import flag1 from "@/assets/images/flags/ae.webp";
import star from "@/assets/images/icon-star.svg";
import Button from "@/components/ui/Button";
import { priceFormatter } from "@/lib/price-formatter";
const Compare = () => {
  return (
    <section>
      <div className="space-y-1 py-5">
        <h1 className="text-text-muted text-preset-4-medium uppercase">
          Multi-currency
        </h1>
        <p className="text-text-muted text-preset-5">
          1,000 from USD · 15 pairs
        </p>
      </div>
      {/* compare container */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between py-4 border border-t-border">
          <div className="flex items-center justify-center gap-2 uppercase">
            <img
              src={flag1}
              alt="flag "
              className="w-5 h-5 rounded-full mr-1"
            />
            <h2 className="text-preset-3-medium text-text-secondary">Eur</h2>
            <span className="text-text-muted text-preset-5">Euro</span>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <h2 className="text-preset-3-medium text-text-secondary">
              {priceFormatter(875.33)}
            </h2>
            <span className="text-text-muted text-preset-5">
              {priceFormatter(0.33)}
            </span>

            <Button className="w-fit p-2">
              <img
                src={star}
                alt="Add favorite icon "
                className="w-3 h-3 rounded-full "
              />
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between py-4 border border-y-border">
          <div className="flex items-center justify-center gap-2 uppercase">
            <img
              src={flag1}
              alt="flag "
              className="w-5 h-5 rounded-full mr-1"
            />
            <h2 className="text-preset-3-medium text-text-secondary">Eur</h2>
            <span className="text-text-muted text-preset-5">Euro</span>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <h2 className="text-preset-3-medium text-text-secondary">
              {priceFormatter(875.33)}
            </h2>
            <span className="text-text-muted text-preset-5">
              {priceFormatter(0.33)}
            </span>

            <Button className="w-fit p-2">
              <img
                src={star}
                alt="Add favorite icon "
                className="w-3 h-3 rounded-full "
              />
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between py-4 border border-y-border">
          <div className="flex items-center justify-center gap-2 uppercase">
            <img
              src={flag1}
              alt="flag "
              className="w-5 h-5 rounded-full mr-1"
            />
            <h2 className="text-preset-3-medium text-text-secondary">Eur</h2>
            <span className="text-text-muted text-preset-5">Euro</span>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <h2 className="text-preset-3-medium text-text-secondary">
              {priceFormatter(875.33)}
            </h2>
            <span className="text-text-muted text-preset-5">
              {priceFormatter(0.33)}
            </span>

            <Button className="w-fit p-2">
              <img
                src={star}
                alt="Add favorite icon "
                className="w-3 h-3 rounded-full "
              />
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between py-4 border border-y-border">
          <div className="flex items-center justify-center gap-2 uppercase">
            <img
              src={flag1}
              alt="flag "
              className="w-5 h-5 rounded-full mr-1"
            />
            <h2 className="text-preset-3-medium text-text-secondary">Eur</h2>
            <span className="text-text-muted text-preset-5">Euro</span>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <h2 className="text-preset-3-medium text-text-secondary">
              {priceFormatter(875.33)}
            </h2>
            <span className="text-text-muted text-preset-5">
              {priceFormatter(0.33)}
            </span>

            <Button className="w-fit p-2">
              <img
                src={star}
                alt="Add favorite icon "
                className="w-3 h-3 rounded-full "
              />
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between py-4 border border-y-border">
          <div className="flex items-center justify-center gap-2 uppercase">
            <img
              src={flag1}
              alt="flag "
              className="w-5 h-5 rounded-full mr-1"
            />
            <h2 className="text-preset-3-medium text-text-secondary">Eur</h2>
            <span className="text-text-muted text-preset-5">Euro</span>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <h2 className="text-preset-3-medium text-text-secondary">
              {priceFormatter(875.33)}
            </h2>
            <span className="text-text-muted text-preset-5">
              {priceFormatter(0.33)}
            </span>

            <Button className="w-fit p-2">
              <img
                src={star}
                alt="Add favorite icon "
                className="w-3 h-3 rounded-full "
              />
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between py-4 border border-y-border">
          <div className="flex items-center justify-center gap-2 uppercase">
            <img
              src={flag1}
              alt="flag "
              className="w-5 h-5 rounded-full mr-1"
            />
            <h2 className="text-preset-3-medium text-text-secondary">Eur</h2>
            <span className="text-text-muted text-preset-5">Euro</span>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <h2 className="text-preset-3-medium text-text-secondary">
              {priceFormatter(875.33)}
            </h2>
            <span className="text-text-muted text-preset-5">
              {priceFormatter(0.33)}
            </span>

            <Button className="w-fit p-2">
              <img
                src={star}
                alt="Add favorite icon "
                className="w-3 h-3 rounded-full "
              />
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between py-4 border border-y-border">
          <div className="flex items-center justify-center gap-2 uppercase">
            <img
              src={flag1}
              alt="flag "
              className="w-5 h-5 rounded-full mr-1"
            />
            <h2 className="text-preset-3-medium text-text-secondary">Eur</h2>
            <span className="text-text-muted text-preset-5">Euro</span>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <h2 className="text-preset-3-medium text-text-secondary">
              {priceFormatter(875.33)}
            </h2>
            <span className="text-text-muted text-preset-5">
              {priceFormatter(0.33)}
            </span>

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

export default Compare;
