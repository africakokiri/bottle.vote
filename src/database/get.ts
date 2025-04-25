"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllPosts = async () => {
  const allPosts = await prisma.votes.findMany({
    include: {
      users: true,
      vote_options: true
    }
  });

  return allPosts;
};
