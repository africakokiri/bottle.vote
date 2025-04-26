"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useGetVotesLength } from "@/hooks/useGetVotes";

import { SearchIcon } from "lucide-react";

export const Search = () => {
  const { data, isError, isLoading } = useGetVotesLength();

  if (isError) throw new Error("Error: Search 컴포넌트");

  return (
    <div className="flex w-full gap-2">
      {isLoading ? (
        <div className="flex w-full animate-pulse">
          <div className="relative flex flex-1 items-center">
            <div className="h-10 w-full rounded-md bg-gray-200 dark:bg-neutral-700" />
            <div className="absolute right-1 h-8 w-8 rounded bg-gray-300 dark:bg-neutral-600" />
          </div>
        </div>
      ) : (
        <form className="relative flex flex-1 items-center">
          <Input
            placeholder={`총 ${data?.allVotesLength}개의 투표와 ${data?.activeVotesLength}개의 진행중인 투표`}
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
      )}
    </div>
  );
};
