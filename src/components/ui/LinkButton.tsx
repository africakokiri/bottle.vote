import { cn } from "@/utils/cn";

import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  className?: string;
  ref?: React.Ref<HTMLAnchorElement>;
  variant?: "icon" | "wide";
  href: string;
};

export const LinkButton = ({ children, className, ref, variant, href, ...props }: LinkButtonProps) => {
  let linkButtonVariant;

  if (variant === "icon") linkButtonVariant = "p-3";

  return (
    <Link
      href={href}
      className={cn(
        `bg-element min-w-fit cursor-pointer rounded-md px-4 py-2 font-semibold hover:bg-neutral-200
dark:hover:bg-neutral-700`,
        linkButtonVariant,
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </Link>
  );
};
