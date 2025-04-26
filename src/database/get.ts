"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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

// 투표를 검색한다.
export const getSearchedVotes = async (search: string) => {
  const searchTerms = search.trim().split(/\s+/);

  console.log(searchTerms);

  // Prisma로 투표를 가져오고 필터링
  const searchedVotes = await prisma.votes.findMany({
    where: {
      title: {
        // 모든 단어가 포함되도록 처리
        contains: searchTerms.join(" "),
        mode: "insensitive"
      }
    }
  });

  return searchedVotes;
};
