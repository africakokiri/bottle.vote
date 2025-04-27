"use client";

import { AlignJustifyIcon } from "lucide-react";
import { motion } from "motion/react";
import { type ReactNode, useEffect, useRef, useState } from "react";

export const Dropdown = ({ children, className }: { children: ReactNode; className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      role="combobox"
      aria-expanded={isOpen}
      aria-controls="select-listbox"
      className="focus-within:ring-offset-background flex items-center rounded-md ring-offset-2
transition focus-within:ring-2 focus-within:ring-fuchsia-500"
    >
      <button onClick={() => setIsOpen(!isOpen)}>
        <AlignJustifyIcon
          className="h-6 w-6"
          strokeWidth={1.5}
        />
      </button>

      {isOpen && (
        <motion.div
          initial={{ y: -5 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.1 }}
          className={`${className} *:bg-element bg-element absolute top-14 w-32 rounded-md border p-0.5
*:block *:cursor-default *:rounded-md *:border-none *:px-2 *:py-1.5`}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};
