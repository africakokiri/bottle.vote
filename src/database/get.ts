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

export const getPopularVotes = async (howMany: number) => {
  const popularVotes = await prisma.votes.findMany({
    include: {
      users: true,
      vote_options: true
    },
    orderBy: {
      vote_count: "desc"
    },
    take: howMany
  });

  return popularVotes;
};

export const getVotesLength = async () => {
  const allVotesLength = await prisma.votes.count({});

  const activeVotesLength = await prisma.votes.count({
    where: {
      expires_at: {
        gte: new Date()
      }
    }
  });

  return { allVotesLength, activeVotesLength };
};
