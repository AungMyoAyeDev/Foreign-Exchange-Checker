import type { ComponentPropsWithoutRef, ReactNode } from "react";
interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variants?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  isLoading?: boolean;
}

const Button = ({
  variants = "primary",
  type = "button",
  children,
  isLoading = false,
  disabled = false,
  className = "",
  ...rest
}: ButtonProps) => {
  const isDisabled = disabled || isLoading;
  const style =
    variants === "primary"
      ? "bg-primary text-background border-primary"
      : variants === "secondary"
        ? "border-2 border-primary text-neutral-50"
        : "bg-none";
  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={isLoading}
      className={` ${style} text-preset-5-medium  uppercase flex items-center justify-center px-3 py-2 rounded-8 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
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
