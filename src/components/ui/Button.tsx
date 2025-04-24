import { cn } from "@/utils/cn";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  ref?: React.Ref<HTMLButtonElement>;
  variant?: "icon" | "wide";
};

export const Button = ({ children, className, ref, variant, ...props }: ButtonProps) => {
  let buttonVariant;

  if (variant === "icon") buttonVariant = "p-3";

  return (
    <button
      className={cn(
        "bg-element min-w-fit cursor-pointer rounded-md px-4 py-2 font-semibold hover:bg-neutral-200",
        buttonVariant,
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
};
