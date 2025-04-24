import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import { FilterIcon, SearchIcon } from "lucide-react";

export default function page() {
  return (
    <div className="container space-y-4">
      <div>
        <h1 className="text-2xl font-bold">투표 목록</h1>
      </div>

      {/* 검색 및 필터 */}
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
    </div>
  );
}
