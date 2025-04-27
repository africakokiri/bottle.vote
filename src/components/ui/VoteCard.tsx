import { type Prisma } from "@/generated/prisma";

import { format } from "date-fns";
import * as motion from "motion/react-client";
import Link from "next/link";

type VoteWithUser = Prisma.votesGetPayload<{
  include: {
    users: true;
    vote_options: true;
  };
}>;

type VoteCardProps = {
  vote: VoteWithUser;
  className?: string;
};

export const VoteCard = ({ vote, className }: VoteCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`${className} bg-element h-[170px] space-y-4 rounded-xl border hover:border-fuchsia-500
hover:shadow-xl`}
    >
      <Link
        href={`/vote/${vote.id}`}
        className="flex h-full gap-3 p-3"
      >
        <div className="flex min-w-[60%] flex-col justify-between">
          <header className="mb-2 space-y-2">
            <div className="flex justify-between">
              <div
                className="bg-element dark:text-foreground w-fit rounded-full border px-2 py-0.5 text-xs
text-[10px] font-semibold text-neutral-700"
              >
                {vote.category_name}
              </div>
              <p className="text-xs font-bold text-red-500">{vote.vote_count.toLocaleString()}명 참여</p>
            </div>
            <h2 className="line-clamp-1 text-sm font-extrabold">{vote.title}</h2>
            <h3 className="dark:text-foreground line-clamp-2 text-xs text-neutral-700">
              {vote.description}
            </h3>
          </header>

          <footer className="space-y-2 py-0.5 pt-2 text-[10px]">
            <div className="flex items-center gap-2">
              <div className="min-h-4 min-w-4 rounded-full bg-neutral-300 dark:bg-neutral-500" />
              <h4>{vote.users.nickname}</h4>
            </div>
            <p>
              <span>{format(new Date(vote.created_at), "yyyy-MM-dd")}</span>
              <span> ~ </span>
              <span>{format(new Date(vote.expires_at), "yyyy-MM-dd")}</span>
            </p>
          </footer>
        </div>

        <div className="flex min-w-[40%] flex-col justify-center border-l p-3">
          {vote.vote_options.slice(0, 2).map((option, index) => (
            <div
              key={index}
              className="relative mb-1.5 pt-1"
            >
              <div className="mb-0.5 flex items-center justify-between">
                <div className="text-foreground truncate text-[10px]">{option.name}</div>
                <div className="text-[10px] text-neutral-500 dark:text-neutral-400">
                  {Math.round((option.vote_count / vote.vote_count) * 100)}%
                </div>
              </div>
              <div
                className="flex h-1.5 overflow-hidden rounded bg-neutral-200 text-xs dark:bg-neutral-700"
              >
                <div
                  className="gradient-bg h-full rounded"
                  style={{
                    width: `${(option.vote_count / vote.vote_count) * 100}%`
                  }}
                ></div>
              </div>
            </div>
          ))}
          {vote.vote_options.length > 2 && (
            <div className="text-center text-[10px] text-neutral-500 dark:text-neutral-400">
              +{vote.vote_options.length - 2}개 더 보기
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};
