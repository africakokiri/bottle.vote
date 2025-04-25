import { type DateSortSelect } from "@/components/SelectAndFilter";

import { create } from "zustand";

interface DatetSortSelect {
  dateSelect: DateSortSelect;

  setDateSortSelect: (dateSelect: DateSortSelect) => void;
}

// 투표 정렬 방식
export const useDatetSortSelectStore = create<DatetSortSelect>((set) => ({
  dateSelect: "latest",

  setDateSortSelect: (dateSelect: DateSortSelect) =>
    set(() => ({
      dateSelect: dateSelect
    }))
}));
