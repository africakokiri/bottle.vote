"use client";

import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { categories } from "@/const/const";
import { useFilterStore } from "@/libs/zustand/store";

import { FilterIcon } from "lucide-react";
import { useState } from "react";

export const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { filter, setFilter, selectAllFilter, resetFilter } = useFilterStore();

  const left = categories.slice(0, categories.length / 2);
  const right = categories.slice(categories.length / 2);

  return (
    <>
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
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          header={
            <header className="flex flex-col items-center justify-center gap-2">
              <h2 className="text-lg font-semibold">투표 필터링</h2>
              <p className="text-sm text-neutral-500">카테고리를 선택해 투표를 필터링해요.</p>
            </header>
          }
          body={
            <div className="space-y-2">
              <h3>카테고리</h3>
              <div className="flex justify-between">
                <ul className="w-1/2">
                  {left.map(({ value, name }) => {
                    return (
                      <li key={value}>
                        <label className="flex max-w-fit items-center gap-2 py-1.5 pr-4">
                          <input
                            type="checkbox"
                            className="h-4 w-4"
                            checked={filter.includes(value)}
                            onChange={(e) => setFilter(value, e.target.checked)}
                          />
                          <p>{name}</p>
                        </label>
                      </li>
                    );
                  })}
                </ul>
                <ul className="w-1/2">
                  {right.map(({ value, name }) => {
                    return (
                      <li key={value}>
                        <label className="flex max-w-fit items-center gap-2 py-1.5 pr-4">
                          <input
                            type="checkbox"
                            className="h-4 w-4"
                            checked={filter.includes(value)}
                            onChange={(e) => setFilter(value, e.target.checked)}
                          />
                          <p>{name}</p>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          }
          footer={
            <footer className="flex flex-col gap-2 pt-4">
              <Button
                className="gradient-bg"
                onClick={() => setIsOpen(false)}
              >
                적용하기
              </Button>
              <div className="flex gap-2 *:flex-1">
                <Button
                  className="bg-element border"
                  onClick={() => selectAllFilter()}
                >
                  모두 선택
                </Button>
                <Button
                  className="bg-element border"
                  onClick={() => resetFilter()}
                >
                  필터 초기화
                </Button>
              </div>
            </footer>
          }
        />
      )}
    </>
  );
};
