import { type DateSortSelect } from "@/components/SelectAndFilter";
import { type CategoriesValue, categories } from "@/const/const";

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

// 투표 필터
interface FilterStore {
  filter: CategoriesValue[];

  setFilter: (value: CategoriesValue, checked: boolean) => void;
  selectAllFilter: () => void;
  resetFilter: () => void;
}

export const useFilterStore = create<FilterStore>()(
  persist(
    (set) => ({
      filter: categories.map((category) => category.value),

      setFilter: (value, checked) =>
        set((state) => ({
          filter: checked ? [...state.filter, value] : state.filter.filter((item) => item !== value)
        })),
      selectAllFilter: () =>
        set(() => ({
          filter: categories.map((category) => category.value)
        })),
      resetFilter: () =>
        set(() => ({
          filter: []
        }))
    }),
    {
      name: "filter",
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
