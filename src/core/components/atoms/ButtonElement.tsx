import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonElementProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "success" | "danger" | "warning";
  children: ReactNode;
  asChild?: boolean;
}

export const ButtonElement = ({
  children,
  asChild,
  className,
  variant,
  ...props
}: ButtonElementProps) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={clsx(
        "p-2 rounded text-sm transition-colors focus:ring-2 ring-blue-100 shadow-md",
        {
          "bg-none text-gray-600 border border-gray-600 hover:text-gray-400":
            variant === "default",
          "bg-blue-500 text-white hover:bg-blue-500/80 shadow-blue-500/50":
            variant === "primary",
          "bg-green-500 text-white hover:bg-green-500/80 shadow-green-500/50":
            variant === "success",
          "bg-red-500 text-white hover:bg-red-500/80 shadow-red-500/50":
            variant === "danger",
          "bg-yellow-500 text-gray-600 hover:bg-yellow-500/80 shadow-yellow-500/50":
            variant === "warning",
        },
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};
