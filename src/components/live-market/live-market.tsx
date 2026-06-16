import Button from "../ui/Button";

const LiveMarket = () => {
  return (
    <section className="flex ">
      <Button className="rounded-0! px-4 py-3 gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-background" />
        <span>live markets</span>
      </Button>
      <div className="flex-1 flex items-center  flex-nowrap  overflow-hidden bg-surface text-preset-5-medium ">
        <div className="border border-r-border py-4 px-5 flex items-center justify-center gap-2.5">
          <span className="text-text-muted">USD/JPY</span>
          <span className="text-text-primary text-preset-5-medium">157.91</span>
          <span className="text-success text-nowrap">▲ +0.04 %</span>
        </div>{" "}
        <div className="border border-r-border py-4 px-5 flex items-center justify-center gap-2.5">
          <span className="text-text-muted">USD/JPY</span>
          <span className="text-text-primary text-preset-5-medium">157.91</span>
          <span className="text-danger text-nowrap">▼ −0.22%</span>
        </div>
        <div className="border border-r-border py-4 px-5 flex items-center justify-center gap-2.5">
          <span className="text-text-muted">USD/JPY</span>
          <span className="text-text-primary text-preset-5-medium">157.91</span>
          <span className="text-success text-nowrap">▲ +0.04 %</span>
        </div>
        <div className="border border-r-border py-4 px-5 flex items-center justify-center gap-2.5">
          <span className="text-text-muted">USD/JPY</span>
          <span className="text-text-primary text-preset-5-medium">157.91</span>
          <span className="text-danger text-nowrap">▲ +0.04 %</span>
        </div>
        <div className="border border-r-border py-4 px-5 flex items-center justify-center gap-2.5">
          <span className="text-text-muted">USD/JPY</span>
          <span className="text-text-primary text-preset-5-medium">157.91</span>
          <span className="text-success text-nowrap">▲ +0.04 %</span>
        </div>
        <div className="border border-r-border py-4 px-5 flex items-center justify-center gap-2.5">
          <span className="text-text-muted">USD/JPY</span>
          <span className="text-text-primary text-preset-5-medium">157.91</span>
          <span className="text-success text-nowrap">▲ +0.04 %</span>
        </div>
      </div>
    </section>
  );
};

export default LiveMarket;
