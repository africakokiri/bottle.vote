"use client";

import {
  getAllPopularVotes,
  getAllVotesByAsc,
  getAllVotesByDesc,
  getSearchedVotes,
  getVotesLength
} from "@/database/get";

import { useQuery } from "@tanstack/react-query";

// 모든 투표를 날짜 내림차순으로 불러온다.
export const useGetAllVotesByDesc = () => {
  return useQuery({
    queryKey: ["allVotesByDesc"],
    queryFn: () => getAllVotesByDesc(),
    refetchOnMount: false
  });
};

// 모든 투표를 날짜 오름차순으로 불러온다.
export const useGetAllVotesByAsc = () => {
  return useQuery({
    queryKey: ["allVotesByAsc"],
    queryFn: () => getAllVotesByAsc(),
    refetchOnMount: false
  });
};

// 인기 있는 포스트 순서대로 투표를 불러온다.
export const useGetPopularVotes = () => {
  return useQuery({
    queryKey: ["popularVotes"],
    queryFn: () => getAllPopularVotes(),
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

// 검색된 투표들을 불러온다..
export const useGetSearchedVotes = (search: string) => {
  return useQuery({
    queryKey: ["searchedVotes", search],
    queryFn: () => getSearchedVotes(search),
    refetchOnMount: false
  });
};
