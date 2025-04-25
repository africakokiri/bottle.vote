"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllVotes = async () => {
  const allPosts = await prisma.votes.findMany({
    include: {
      users: true,
      vote_options: true
    }
  });

  return allPosts;
};

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
