"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useGetVotesLength } from "@/hooks/useGetVotes";

import { SearchIcon } from "lucide-react";

export const Search = () => {
  const { data, error } = useGetVotesLength();

  if (error) throw new Error(error.message);

  return (
    <div className="flex w-full gap-2">
      <form className="relative flex flex-1 items-center">
        <Input
          placeholder={
            data
              ? `총 ${data.allVotesLength}개의 투표와 ${data.activeVotesLength}개의 진행중인 투표`
              : "..."
          }
          className="bg-element w-full !p-2"
        />
        <Button
          variant="icon"
          type="submit"
          className="absolute right-1 !p-2"
        >
          <SearchIcon className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};
