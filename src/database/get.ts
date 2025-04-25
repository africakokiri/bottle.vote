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
