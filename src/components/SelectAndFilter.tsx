import { Filter } from "@/components/Filter";
import { Select } from "@/components/ui/Select";

export const SelectAndFilter = () => {
  return (
    <div>
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-4">
          <Select
            options={[
              { label: "최신순", value: "latest" },
              { label: "오래된순", value: "oldest" },
              { label: "인기순", value: "popular" }
            ]}
          />

          <Filter />
        </div>
      </div>
    </div>
  );
};
