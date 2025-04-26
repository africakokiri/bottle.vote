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
  filterApplied: boolean;

  setFilter: (value: CategoriesValue, checked: boolean) => void;
  selectAllFilter: () => void;
  resetFilter: () => void;
  applyFilter: () => void;
}

export const useFilterStore = create<FilterStore>()(
  persist(
    (set) => ({
      filter: categories.map((category) => category.value),
      filterApplied: false,

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
        })),
      applyFilter: () =>
        set((state) => ({
          filterApplied: !state.filterApplied
        }))
    }),
    {
      name: "filter",
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);

// 투표 검색
interface SearchStore {
  search: string;

  setSearch: (search: string) => void;
}

export const useSearchStore = create<SearchStore>()(
  persist(
    (set) => ({
      search: "",

      setSearch: (search: string) =>
        set(() => ({
          search: search
            .trim()
            .replaceAll(" ", "")
            .replace(/[^\p{L}\p{N}\s]/gu, "")
        }))
    }),
    {
      name: "search",
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
