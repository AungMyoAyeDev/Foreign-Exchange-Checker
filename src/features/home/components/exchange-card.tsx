import type { FC } from "react";
import { priceFormatter } from "@/lib/price-formatter";
import { getCurrencyName, getFlagSrc, getSupportedCurrencies } from "@/lib/currency";

type PropsType = {
  type: "send" | "receive";
  value: number;
  currency: string;
  onValueChange?: (value: number) => void;
  onCurrencyChange: (currency: string) => void;
  isLoading?: boolean;
};

const currencies = getSupportedCurrencies();

const ExchangeCard: FC<PropsType> = ({
  type,
  value,
  currency,
  onValueChange,
  onCurrencyChange,
  isLoading = false,
}) => {
  const inputId = `${type}-currency`;
  const flagSrc = getFlagSrc(currency);

  return (
    <div className="p-5 rounded-16 bg-card flex-1 w-full">
      <label
        htmlFor={`${type}-amount`}
        className="text-text-muted text-preset-4 mb-5 uppercase block"
      >
        {type}
      </label>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
        {type === "send" ? (
          <input
            id={`${type}-amount`}
            type="number"
            min="0"
            step="0.01"
            value={Number.isFinite(value) ? value : 0}
            onChange={(event) => onValueChange?.(Number(event.target.value))}
            className="text-preset-1 text-text-primary bg-transparent border-b border-border py-2 w-full min-w-0 focus:outline-none focus:border-primary"
          />
        ) : (
          <output
            id={`${type}-amount`}
            className="text-preset-1 text-primary break-all"
            aria-live="polite"
          >
            {isLoading ? "..." : priceFormatter(value)}
          </output>
        )}

        <div className="flex items-center gap-2 bg-neutral-500 border-2 border-neutral-400 rounded-8 px-3 py-2 focus-within:border-primary">
          {flagSrc && (
            <img src={flagSrc} alt="" className="w-5 h-5 rounded-full shrink-0" />
          )}
          <label htmlFor={inputId} className="sr-only">
            {type} currency
          </label>
          <input
            id={inputId}
            list="currency-options"
            value={currency}
            onChange={(event) => onCurrencyChange(event.target.value.toUpperCase())}
            className="w-20 bg-transparent text-preset-4 text-text-primary uppercase focus:outline-none"
            aria-describedby={`${type}-currency-name`}
          />
          <span id={`${type}-currency-name`} className="sr-only">
            {getCurrencyName(currency)}
          </span>
          <datalist id="currency-options">
            {currencies.map((code) => (
              <option key={code} value={code}>
                {getCurrencyName(code)}
              </option>
            ))}
          </datalist>
        </div>
      </div>
    </div>
  );
};

export default ExchangeCard;
