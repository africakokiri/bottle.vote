"use client";

import { Button } from "@/components/ui/Button";
import type { Prisma, vote_options } from "@/generated/prisma";
import { cn } from "@/utils/cn";

import { motion } from "motion/react";
import { type Dispatch, type FormEvent, type SetStateAction, useState } from "react";

type VoteWithOption = Prisma.votesGetPayload<{
  include: {
    vote_options: true;
  };
}>;

export const Votes = ({
  voteOptions,
  isDuplicateVote,
  checkedRadio,
  checkedCheckbox,
  setCheckedRadio,
  setCheckedCheckbox
}: {
  voteOptions: vote_options[];
  isDuplicateVote: boolean;
  checkedRadio: string;
  checkedCheckbox: string[];
  setCheckedRadio: Dispatch<SetStateAction<string>>;
  setCheckedCheckbox: Dispatch<SetStateAction<string[]>>;
}) => {
  const handleCheckbox = (name: string) => {
    setCheckedCheckbox((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

  const handleRadio = (name: string) => {
    setCheckedRadio(name);
  };

  return (
    <>
      {voteOptions.map(({ name, id }) => {
        return (
          <motion.div
            whileHover={{ y: -5 }}
            key={id}
            className="flex hover:shadow-xl"
          >
            <label
              htmlFor={id.toString()}
              className={cn(
                `bg-element flex flex-1 appearance-none items-center gap-2 rounded-lg border p-4
text-left accent-fuchsia-500 hover:border-fuchsia-500 sm:transition`,
                checkedRadio === name && "border-fuchsia-500 bg-fuchsia-100",
                checkedCheckbox.includes(name) && "border-fuchsia-500 bg-fuchsia-100"
              )}
            >
              <input
                id={id.toString()}
                value={name}
                name="voteOption"
                type={isDuplicateVote ? "checkbox" : "radio"}
                onChange={() => {}}
                checked={checkedRadio === name || checkedCheckbox.includes(name)}
                className="rounded-full"
                onClick={() => (isDuplicateVote ? handleCheckbox(name) : handleRadio(name))}
              />
              {name}
            </label>
          </motion.div>
        );
      })}
      <Button
        type="submit"
        className="gradient-bg"
      >
        투표하기
      </Button>
    </>
  );
};

const VoteResult = ({ vote }: { vote: VoteWithOption }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">현재 결과</h3>

      <div className="space-y-4">
        {vote.vote_options.map((option) => (
          <div
            key={option.id}
            className="space-y-2"
          >
            <div className="flex justify-between text-sm">
              <span>{option.name}</span>
              <div className="flex gap-3">
                <span>{option.vote_count.toLocaleString()}표</span>
                <span className="font-medium">
                  {Math.round((option.vote_count / vote.vote_count) * 100)}%
                </span>
              </div>
            </div>
            <div className="h-4 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
              <div
                className="gradient-bg h-full"
                style={{ width: `${(option.vote_count / vote.vote_count) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const VoteContent = ({ vote }: { vote: VoteWithOption }) => {
  const [type, setType] = useState("투표");
  const [checkedRadio, setCheckedRadio] = useState("");
  const [checkedCheckbox, setCheckedCheckbox] = useState<string[]>([]);

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="relative space-y-4">
      <div className="flex rounded-md border">
        {["투표", "결과", "댓글"].map((item) => {
          const isActive = type === item;
          return (
            <motion.div
              key={item}
              className="relative w-full"
            >
              <button
                onClick={() => setType(item)}
                className={cn(
                  "w-full cursor-pointer !py-1 hover:!bg-transparent",
                  isActive ? "relative z-10 text-white" : ""
                )}
              >
                {item}
              </button>
              {isActive && (
                <motion.div
                  layoutId="active-tab"
                  className="gradient-bg absolute inset-0 rounded-md"
                  transition={{
                    type: "spring",
                    duration: 0.5,
                    bounce: 0.2
                  }}
                />
              )}
            </motion.div>
          );
        })}
      </div>

      <form
        onSubmit={handleOnSubmit}
        className="flex flex-col space-y-4"
      >
        {type === "투표" ? (
          <Votes
            voteOptions={vote.vote_options}
            isDuplicateVote={vote.is_duplicate_vote}
            checkedRadio={checkedRadio}
            checkedCheckbox={checkedCheckbox}
            setCheckedRadio={setCheckedRadio}
            setCheckedCheckbox={setCheckedCheckbox}
          />
        ) : (
          <VoteResult vote={vote} />
        )}
      </form>
    </div>
  );
};
