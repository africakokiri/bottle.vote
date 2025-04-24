"use client";

import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { categories } from "@/const/const";

import { FilterIcon } from "lucide-react";
import { useState } from "react";

export const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const left = categories.slice(1, categories.length / 2 + 1);
  const right = categories.slice(categories.length / 2 + 1);

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
            <>
              <h3>카테고리</h3>
              <div className="flex justify-between">
                <ul className="w-1/2 space-y-2">
                  {left.map(({ id, name }) => {
                    return (
                      <li
                        key={id}
                        className="space-x-2"
                      >
                        <input
                          id={id}
                          type="checkbox"
                          className="h-4 w-4 accent-black"
                        />
                        <label htmlFor={id}>{name}</label>
                      </li>
                    );
                  })}
                </ul>
                <ul className="w-1/2 space-y-2">
                  {right.map(({ id, name }) => {
                    return (
                      <li
                        key={id}
                        className="space-x-2"
                      >
                        <input
                          id={id}
                          type="checkbox"
                          className="h-4 w-4 accent-black"
                        />
                        <label htmlFor={id}>{name}</label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </>
          }
          footer={
            <footer className="flex flex-col gap-2 pt-4">
              <Button
                className="gradient-bg"
                onClick={() => setIsOpen(false)}
              >
                적용하기
              </Button>
              <Button className="bg-background border">필터 초기화</Button>
            </footer>
          }
        />
      )}
    </>
  );
};
