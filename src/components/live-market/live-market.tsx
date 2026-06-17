import Button from "../ui/Button";
const marketItems = [
  { pair: "USD/JPY", price: "157.91", change: "+0.04%", up: true },
  { pair: "EUR/USD", price: "1.0842", change: "-0.22%", up: false },
  { pair: "GBP/USD", price: "1.2731", change: "+0.11%", up: true },
  { pair: "AUD/USD", price: "0.6620", change: "-0.08%", up: false },
];

const LiveMarket = () => {
  const loopItems = [...marketItems, ...marketItems];
  return (
    <section className="flex ">
      <Button className="rounded-0! px-4 py-3 gap-2 ">
        <div className="w-1.5 h-1.5 rounded-full bg-background animate-pulse" />
        <span>live markets</span>
      </Button>

      <div className="flex-1 overflow-hidden bg-surface">
        <div className="marquee flex w-max">
          {loopItems.map((item, index) => (
            <div
              key={`${item.pair}-${index}`}
              className="border-r border-border py-4 px-5 flex items-center gap-2.5 shrink-0"
            >
              <span className="text-text-muted">{item.pair}</span>
              <span className="text-text-primary text-preset-5-medium">
                {item.price}
              </span>
              <span
                className={
                  item.up
                    ? "text-success text-nowrap"
                    : "text-danger text-nowrap"
                }
              >
                {item.up ? "▲" : "▼"} {item.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveMarket;
