import Button from "@/components/ui/Button";
import LogNotFound from "./components/log-notfound";
import arrow from "@/assets/images/icon-arrow-right.svg";
import trash from "@/assets/images/icon-delete.svg";
import { priceFormatter } from "@/lib/price-formatter";
const Log = () => {
  const logList = [1, 2, 3];
  if (logList.length === 0) {
    return <LogNotFound />;
  }
  return (
    <section>
      <div className="flex items-center justify-between py-5">
        <div>
          <h1 className="text-text-muted text-preset-4-medium uppercase mb-1">
            Conversion log
          </h1>
          <p className="text-text-muted text-preset-5">1 logged</p>
        </div>
        <Button className="uppercase bg-none bg-transparent border-none text-danger">
          clear all
        </Button>
      </div>
      <div className="flex flex-col">
        {logList.map((a) => (
          <div
            key={a}
            className="flex items-center justify-between py-4 border border-t-border"
          >
            <div className="flex items-center gap-3">
              <p className="text-preset-5 text-text-muted">
                {new Date().getMinutes()} ago
              </p>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-preset-3 text-text-secondary uppercase">
                    USD
                  </span>
                  <img src={arrow} alt="currency exchange" className="w-3" />
                  <span className="text-preset-3 text-text-secondary uppercase">
                    Eur
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-preset-6 text-text-secondary uppercase">
                    {priceFormatter(10000)} USD
                  </span>
                  <img src={arrow} alt="currency exchange" className="w-3" />
                  <span className="text-preset-6 text-text-secondary uppercase">
                    {priceFormatter(10000)} Eur
                  </span>
                </div>
              </div>
            </div>
            <Button className="p-2 w-fit">
              <img
                src={trash}
                alt="Remove from log conversion"
                className="w-4 "
              />
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Log;
