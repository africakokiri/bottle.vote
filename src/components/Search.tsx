"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import { SearchIcon } from "lucide-react";

export const Search = () => {
  return (
    <div className="flex w-full gap-2">
      <div className="relative flex flex-1 items-center">
        <Input className="bg-element w-full !p-2" />
        <Button
          variant="icon"
          className="absolute right-0.5"
        >
          <SearchIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
