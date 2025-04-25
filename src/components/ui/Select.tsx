"use client";

import { type DateSortSelect } from "@/components/SelectAndFilter";

import { ChevronDownIcon } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type SelectProps = {
  options: {
    label: string;
    value: DateSortSelect;
  }[];
  width?: string;
  onValueChange: (dateSelect: DateSortSelect) => void;
};

export const Select = ({ options, width, onValueChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onValueChange(selectedOption.value);

    // eslint-disable-next-line
  }, [selectedOption]);

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
      className="bg-element relative w-32 rounded-md transition"
      style={{ width }}
      role="combobox"
      aria-expanded={isOpen}
      aria-controls="select-listbox"
    >
      <div
        className="focus-within:ring-offset-background-light focus-within:ring-offset-element relative
flex items-center rounded-md border py-0.5 ring-offset-2 transition focus-within:ring-2
focus-within:ring-fuchsia-500 hover:border-[1px] hover:border-fuchsia-500"
      >
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="block w-full rounded-md px-2 py-1.5 text-left hover:bg-white
dark:hover:bg-neutral-700"
          type="button"
        >
          {selectedOption.label}
        </button>
        <ChevronDownIcon className="absolute right-2 h-4 w-4" />
      </div>

      {isOpen && (
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.2 }}
          style={{ width }}
          className="bg-element absolute top-12 z-50 w-32 rounded-md border p-0.5 shadow-md"
        >
          {options.map((option, index) => (
            <div
              key={`${option.value}-${index}`}
              role="option"
              aria-selected={selectedOption.value === option.value}
              onClick={() => {
                setIsOpen(false);
                setSelectedOption(option);
              }}
              className="hover:bg-background bg-element block w-full cursor-default rounded-md px-2
py-1.5 text-left"
            >
              {option.label}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};
