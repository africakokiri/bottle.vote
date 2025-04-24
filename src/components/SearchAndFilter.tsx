"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";

import { FilterIcon, SearchIcon } from "lucide-react";
import { useState } from "react";

export const SearchAndFilter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-full gap-4">
      <div className="relative flex flex-1 items-center">
        <Input className="bg-element w-full !p-2" />
        <Button
          variant="icon"
          className="absolute right-1"
        >
          <SearchIcon className="h-4 w-4" />
        </Button>
      </div>

      <Button
        variant="icon"
        className="border"
        onClick={() => setIsOpen(true)}
      >
        <FilterIcon
          className="h-4 w-4"
          strokeWidth={1.5}
        />
      </Button>

      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
};
