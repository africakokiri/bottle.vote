"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllPosts = async () => {
  const allPosts = await prisma.votes.findMany();

  return allPosts;
};
