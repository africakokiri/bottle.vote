"use client";

import { getAllVotes, getPopularVotes, getVotesLength } from "@/database/get";

import { useQuery } from "@tanstack/react-query";

// 모든 투표를 불러온다.
export const useGetAllVotes = () => {
  return useQuery({
    queryKey: ["allVotes"],
    queryFn: () => getAllVotes(),
    refetchOnMount: false
  });
};

// 인기 있는 포스트 순서대로 투표를 불러온다.
export const useGetPopularVotes = () => {
  return useQuery({
    queryKey: ["popularVotes"],
    queryFn: () => getPopularVotes(),
    refetchOnMount: false
  });
};

// 모든 투표의 개수를 불러온다.
export const useGetVotesLength = () => {
  return useQuery({
    queryKey: ["votesLength"],
    queryFn: () => getVotesLength(),
    refetchOnMount: false
  });
};
