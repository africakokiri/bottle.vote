"use server";

import { prisma } from "@/libs/prisma/prisma";

export const getVoteById = async (id: number) => {
  const vote = await prisma.votes.findUnique({
    include: {
      users: true,
      vote_options: true
    },
    where: {
      id
    }
  });

  return vote;
};

// 모든 투표를 날짜 내림차순으로 불러온다.
export const getAllVotesByDesc = async () => {
  const allPosts = await prisma.votes.findMany({
    include: {
      users: true,
      vote_options: true
    },
    orderBy: {
      created_at: "desc"
    }
  });

  return allPosts;
};

// 모든 투표를 날짜 오름차순으로 불러온다.
export const getAllVotesByAsc = async () => {
  const allPosts = await prisma.votes.findMany({
    include: {
      users: true,
      vote_options: true
    },
    orderBy: {
      created_at: "asc"
    }
  });

  return allPosts;
};

// 인기 있는 포스트 순서대로 투표를 불러온다.
export const getAllPopularVotes = async (howMany?: number) => {
  const popularVotes = await prisma.votes.findMany({
    include: {
      users: true,
      vote_options: true
    },
    orderBy: {
      vote_count: "desc"
    },
    ...(howMany && { take: howMany })
  });

  return popularVotes;
};

// 전체 포스트의 개수를 불러온다.
export const getVotesLength = async () => {
  const result = await prisma.$queryRaw<
    {
      allVotesLength: bigint;
      activeVotesLength: bigint;
    }[]
  >`
    SELECT 
      COUNT(*) AS "allVotesLength",
      COUNT(CASE WHEN expires_at >= NOW() THEN 1 END) AS "activeVotesLength"
    FROM votes
  `;

  const { allVotesLength, activeVotesLength } = result[0];

  return {
    allVotesLength: BigInt(allVotesLength),
    activeVotesLength: BigInt(activeVotesLength)
  };
};
