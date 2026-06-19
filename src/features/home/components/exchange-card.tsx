import Button from "@/components/ui/Button";
import chevron from "@/assets/images/icon-chevron-down.svg";
import type { FC } from "react";
import { priceFormatter } from "@/lib/price-formatter";
type PropsType = {
  type: "send" | "receive";
  value: number;
  currency: string;
};
const ExchangeCard: FC<PropsType> = ({ type, value, currency }) => {
  return (
    <div className="p-5 rounded-16 bg-card flex-1">
      <h2 className="text-text-muted text-preset-4 mb-5 uppercase">{type}</h2>
      <div className="flex items-center justify-between gap-4 ">
        <h3
          className={`text-preset-1 ${type === "send" ? "text-text-primary" : "text-primary"} `}
        >
          {priceFormatter(value)}
        </h3>
        <Button className="p-3 rounded-8 gap-2">
          <img
            src="src/assets/images/flags/us.webp"
            alt="Select box drop down icon"
            className="w-5 h-5 rounded-full"
          />
          <p className="text-preset-4 text-text-primary">{currency}</p>
          <img
            src={chevron}
            alt="Select box drop down icon"
            className="w-5 h-5"
          />
        </Button>
      </div>
    </div>
  );
};

export default ExchangeCard;
