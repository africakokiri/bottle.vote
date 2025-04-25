"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { getVotesLength } from "@/database/get";

import { SearchIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export const Search = () => {
  const [votesLength, setVotesLength] = useState({
    allVotesLength: 0,
    activeVotesLength: 0
  });

  const fetchVotesLength = useCallback(async () => {
    const data = await getVotesLength();
    setVotesLength({
      allVotesLength: Number(data.allVotesLength),
      activeVotesLength: Number(data.activeVotesLength)
    });
  }, []);

  useEffect(() => {
    fetchVotesLength();
  }, [fetchVotesLength]);

  return (
    <div className="flex w-full gap-2">
      <form className="relative flex flex-1 items-center">
        <Input
          placeholder={
            votesLength.activeVotesLength
              ? `총 ${votesLength.allVotesLength}개의 투표와 ${votesLength.activeVotesLength}개의 진행중인 투표`
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
