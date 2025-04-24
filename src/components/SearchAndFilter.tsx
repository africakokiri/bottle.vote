import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import { FilterIcon, SearchIcon } from "lucide-react";

export const SearchAndFilter = () => {
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
      >
        <FilterIcon
          className="h-4 w-4"
          strokeWidth={1.5}
        />
      </Button>
    </div>
  );
};
