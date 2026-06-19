import { priceFormatter } from "@/lib/price-formatter";

const HistoryCards = () => {
  const isUp = false;
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5 ">
      <div className="bg-surface rounded-8 p-3 ">
        <h1 className="text-text-muted text-preset-4  uppercase mb-2">OPEN</h1>
        <p className="text-preset-2-bold  text-text-primary">
          {priceFormatter(10000)}
        </p>
      </div>
      <div className="bg-surface rounded-8 p-3 ">
        <h1 className="text-text-muted text-preset-4  uppercase mb-2">Last</h1>
        <p className="text-preset-2-bold  text-text-primary">
          {priceFormatter(10000)}
        </p>
      </div>
      <div className="bg-surface rounded-8 p-3 ">
        <h1 className="text-text-muted text-preset-4  uppercase mb-2">
          Change
        </h1>
        <p
          className={`text-preset-2-bold  ${isUp ? "text-text-primary" : "text-danger"}`}
        >
          {isUp ? "-" : "+"} 0.322
        </p>
      </div>
      <div className="bg-surface rounded-8 p-3 ">
        <h1 className="text-text-muted text-preset-4  uppercase mb-2">
          % Change
        </h1>
        <p
          className={`text-preset-2-bold  ${isUp ? "text-text-primary" : "text-danger"}`}
        >
          {isUp ? "▲" : "▼"} 3.22 %
        </p>
      </div>
    </div>
  );
};

export default HistoryCards;
