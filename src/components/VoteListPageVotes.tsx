"use client";

import { VoteCard } from "@/components/ui/VoteCard";
import { VoteCardSkeleton } from "@/components/ui/VoteCardSekeleton";
import { type CategoriesValue } from "@/const/const";
import { useGetAllVotesByAsc, useGetAllVotesByDesc, useGetPopularVotes } from "@/hooks/useGetVotes";
import { useDatetSortSelectStore, useFilterStore, useSearchStore } from "@/libs/zustand/store";

import { useEffect, useMemo } from "react";

const useSortedVotes = () => {
  const { dateSelect } = useDatetSortSelectStore();

  const latest = useGetAllVotesByDesc();
  const oldest = useGetAllVotesByAsc();
  const popular = useGetPopularVotes();

  const isLoading = latest.isLoading || oldest.isLoading || popular.isLoading;
  const isError = latest.isError || oldest.isError || popular.isError;

  const votes =
    dateSelect === "latest" ? latest.data : dateSelect === "oldest" ? oldest.data : popular.data;

  return { votes, isLoading, isError };
};

export const VoteListPageVotes = () => {
  const { search } = useSearchStore();

  const { votes, isLoading, isError } = useSortedVotes();
  const { filter, filterApplied } = useFilterStore();

  const filteredVotes = useMemo(() => {
    return votes?.filter((vote) => filter.includes(vote.category_value as CategoriesValue));

    // eslint-disable-next-line
  }, [filterApplied, votes]);

  const searchedVotes = useMemo(() => {
    return filteredVotes?.filter((vote) =>
      vote.title
        .toLowerCase()
        .trim()
        .replaceAll(" ", "")
        .includes(search.toLowerCase().trim().replaceAll(" ", ""))
    );
  }, [search, filteredVotes]);

  useEffect(() => {
    console.log(search);
  }, [search]);

  if (isError) throw new Error("Error: VoteListPageVotes 컴포넌트");

  if (!votes) return;

  return (
    <section className="mx-auto w-full space-y-4">
      <div className="vote-grid grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading
          ? Array.from({ length: 15 }).map((_, idx) => <VoteCardSkeleton key={idx} />)
          : search
            ? searchedVotes?.map((vote) => (
                <VoteCard
                  key={vote.id}
                  vote={vote}
                />
              ))
            : filteredVotes?.map((vote) => (
                <VoteCard
                  key={vote.id}
                  vote={vote}
                />
              ))}
        {searchedVotes?.length === 0 && <p>검색된 투표가 없어요.</p>}
      </div>
    </section>
  );
};
