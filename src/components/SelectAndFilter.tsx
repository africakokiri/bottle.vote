"use client";

import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { Select } from "@/components/ui/Select";
import { all_votes } from "@/mock/votes";

import { FilterIcon } from "lucide-react";
import { useState } from "react";

export const SelectAndFilter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex w-full items-center justify-between">
        <p className="text-sm text-neutral-500 sm:hidden">{all_votes.length}개의 투표</p>
        <div className="flex items-center gap-4">
          <Select
            options={[
              { label: "최신순", value: "latest" },
              { label: "오래된순", value: "oldest" },
              { label: "인기순", value: "popular" }
            ]}
          />

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
      </div>
    </div>
  );
};
