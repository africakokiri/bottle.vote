import { create } from "zustand";

type DateSelect = "latest" | "oldest" | "popular";

interface DateSelectStore {
  dateSelect: DateSelect;

  setDateSelect: (dateSelect: DateSelect) => void;
}

// 투표 정렬 방식
export const useDateSelectStore = () =>
  create<DateSelectStore>((set) => ({
    dateSelect: "latest",

    setDateSelect: (dateSelect: DateSelect) =>
      set(() => ({
        dateSelect: dateSelect
      }))
  }));
