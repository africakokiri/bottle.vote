"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// 모든 투표를 불러온다.
export const getAllVotes = async () => {
  const allPosts = await prisma.votes.findMany({
    include: {
      users: true,
      vote_options: true
    }
  });

  return allPosts;
};

// 인기 있는 포스트 순서대로 투표를 불러온다.
export const getPopularVotes = async (howMany?: number) => {
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

// 모든 투표의 개수를 불러온다.
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

  return { allVotesLength, activeVotesLength };
};
