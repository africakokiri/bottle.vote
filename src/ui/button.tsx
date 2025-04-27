import { cn } from "@/utils/tailwind/cn";

import { type ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLButtonElement>;
  variant?: "default" | "icon";
};

export const Button = ({ children, className, ref, variant, ...props }: ButtonProps) => {
  let buttonVariant;

  if (variant === "icon") buttonVariant = "p-3 border-none bg-transparent";

  return (
    <button
      ref={ref}
      className={cn(
        `bg-element min-w-fit cursor-pointer rounded-lg px-4 py-2 font-semibold hover:bg-neutral-200
dark:hover:bg-neutral-700`,
        className,
        buttonVariant
      )}
      {...props}
    >
      {children}
    </button>
  );
};
