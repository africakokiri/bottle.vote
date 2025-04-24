import * as motion from "motion/react-client";
import Link from "next/link";

type CardProps = {
  popularVote: any;
  className?: string;
};

export const VoteCard = ({ popularVote: vote, className }: CardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`${className} bg-element h-[150px] space-y-4 rounded-xl border hover:border-fuchsia-500
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
                className="bg-background dark:text-foreground w-fit rounded-full border px-2 py-0.5
text-xs text-[10px] font-semibold text-neutral-700"
              >
                {vote.category}
              </div>
              <p className="text-xs font-bold text-red-500">{vote.vote_count}명 투표</p>
            </div>
            <h2 className="line-clamp-1 text-sm font-extrabold">{vote.title}</h2>
            <h3 className="dark:text-foreground line-clamp-2 text-xs text-neutral-700">
              {vote.description}
            </h3>
          </header>

          <footer className="flex items-center justify-between py-0.5 pt-2 text-[10px]">
            <div className="flex items-center gap-2">
              <div className="min-h-4 min-w-4 rounded-full bg-neutral-500" />
              <h4>{vote.created_by.name}</h4>
            </div>
            <p>{vote.created_at}</p>
          </footer>
        </div>

        <div className="flex min-w-[40%] flex-col justify-center border-l p-3">
          {vote.options
            .sort((a, b) => b.votes - a.votes)
            .slice(0, 2)
            .map((option, index) => (
              <div
                key={index}
                className="relative mb-1.5 pt-1"
              >
                <div className="mb-0.5 flex items-center justify-between">
                  <div className="text-foreground truncate text-[10px]">{option.name}</div>
                  <div className="text-[10px] text-neutral-500 dark:text-neutral-400">
                    {Math.round((option.votes / vote.vote_count) * 100)}%
                  </div>
                </div>
                <div
                  className="flex h-1.5 overflow-hidden rounded bg-neutral-200 text-xs
dark:bg-neutral-700"
                >
                  <div
                    className="gradient-bg h-full rounded"
                    style={{
                      width: `${(option.votes / vote.vote_count) * 100}%`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          {vote.options.length > 2 && (
            <div className="text-center text-[10px] text-neutral-500 dark:text-neutral-400">
              +{vote.options.length - 2}개 더 보기
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};
