"use client";

import { Button } from "@/components/ui/Button";
import { categories } from "@/const/const";

import { motion } from "motion/react";
import { type Dispatch, type SetStateAction, useEffect, useRef } from "react";

export const Modal = ({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) => {
  const divRef = useRef<HTMLDivElement>(null);

  const left = categories.slice(1, categories.length / 2 + 1);
  const right = categories.slice(categories.length / 2 + 1);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (divRef.current && divRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);

    // eslint-disable-next-line
  }, []);

  return (
    <div
      className="absolute top-0 left-0 z-20 flex h-dvh w-dvw items-center justify-center
bg-neutral-900/30 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="bg-element container mx-4 flex w-4/5 flex-col items-center justify-center gap-4
rounded-lg border"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-lg font-semibold">투표 필터링</h2>
          <p className="text-sm text-neutral-500">카테고리를 선택해 투표를 필터링해요.</p>
        </div>

        <div className="w-full space-y-2 text-sm">
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

          <div className="flex flex-col gap-2 pt-4">
            <Button
              className="gradient-bg"
              onClick={() => setIsOpen(false)}
            >
              적용하기
            </Button>
            <Button className="bg-background border">필터 초기화</Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
