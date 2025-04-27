"use client";

import { cn } from "@/utils/cn";

import { motion } from "motion/react";
import { type Dispatch, type ReactNode, type SetStateAction, useEffect, useRef } from "react";

type ModalProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  className?: string;
};

export const Modal = ({ setIsOpen, header, body, footer, className }: ModalProps) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (divRef.current && divRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);

    // eslint-disable-next-line
  }, []);

  return (
    <div
      className="absolute top-0 left-0 z-20 flex h-dvh w-dvw items-center justify-center
bg-neutral-900/30 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          `bg-element container mx-4 flex w-4/5 max-w-xl flex-col items-center justify-center gap-4
rounded-lg border`,
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {header && <header className="w-full">{header}</header>}

        <div className="w-full text-sm">{body && <>{body}</>}</div>

        {footer && <footer className="w-full">{footer}</footer>}
      </motion.div>
    </div>
  );
};
