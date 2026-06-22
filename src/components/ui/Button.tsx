import { cn } from "@/lib/cn";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variants?: "primary" | "secondary";
  children: ReactNode;
  isLoading?: boolean;
}

const Button = ({
  variants,
  type = "button",
  children,
  isLoading = false,
  disabled = false,
  className = "",
  ...rest
}: ButtonProps) => {
  const isDisabled = disabled || isLoading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={isLoading}
      className={cn(
        "text-preset-5-medium border-2 uppercase flex items-center justify-center px-3 py-2 rounded-8 disabled:opacity-50 disabled:cursor-not-allowed hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary transition-colors",
        variants === "primary"
          ? "bg-primary text-background border-primary"
          : variants === "secondary"
            ? " border-primary text-neutral-50"
            : "bg-neutral-500  border-neutral-400",
        className,
      )}
      {...rest}
    >
      {isLoading && (
        <span className="mr-2" aria-hidden="true">
          loading...
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
