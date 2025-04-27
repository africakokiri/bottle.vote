import { VoteCard } from "@/components/ui/VoteCard";
import { getAllPopularVotes } from "@/database/get";

import * as motion from "motion/react-client";

export const PopularVotes = async ({ howMany }: { howMany: number }) => {
  const popularVotes = await getAllPopularVotes(howMany);

  const container = {
    hidden: {},
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className="mx-auto w-full space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.2 }}
        className="flex justify-between"
      >
        <h2 className="text-3xl font-bold">인기 투표 🔥</h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="vote-grid grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {popularVotes
          .sort((a, b) => b.vote_count - a.vote_count)
          .slice(0, 9)
          .map((popularVote) => {
            return (
              <motion.div
                variants={item}
                key={popularVote.id}
              >
                <VoteCard vote={popularVote} />
              </motion.div>
            );
          })}
      </motion.div>
    </section>
  );
};
