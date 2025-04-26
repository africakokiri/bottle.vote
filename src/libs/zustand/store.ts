import { type DateSortSelect } from "@/components/SelectAndFilter";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface DatetSortSelect {
  dateSelect: DateSortSelect;

  setDateSortSelect: (dateSelect: DateSortSelect) => void;
}

// 투표 정렬 방식
export const useDatetSortSelectStore = create<DatetSortSelect>()(
  persist(
    (set) => ({
      dateSelect: "latest",

      setDateSortSelect: (dateSelect: DateSortSelect) =>
        set(() => ({
          dateSelect: dateSelect
        }))
    }),
    {
      name: "date-sort",
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
