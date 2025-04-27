import { VoteContent } from "@/components/VoteContent";
import { getVoteById } from "@/database/get";

import { format } from "date-fns/format";
import { ClockIcon } from "lucide-react";

export default async function VoteDetailPage(props: { params: { id: string } }) {
  const params = await props.params;
  const { id: voteId } = params;

  const vote = await getVoteById(parseInt(voteId));

  if (!vote) throw new Error("Error: VoteDetailPage");

  return (
    <div className="container max-w-4xl px-4 py-12">
      <div className="bg-element space-y-4 rounded-lg border p-6">
        <div className="flex items-center justify-between">
          <div>
            {new Date(vote.expires_at).getTime() < Date.now() ? (
              <div
                className="dark:text-foreground w-fit rounded-full border bg-black px-2 py-0.5 text-sm
font-semibold text-white"
              >
                <ClockIcon />
                투표 종료
              </div>
            ) : (
              <div
                className="w-fit rounded-full border bg-green-500 px-2 py-0.5 text-sm font-semibold
text-white dark:text-black"
              >
                진행 중인 투표
              </div>
            )}
          </div>
          <div className="text-xs text-neutral-500 sm:hidden">
            <span>{format(new Date(vote.created_at), "yyyy-MM-dd")}</span>
            <span> ~ </span>
            <span>{format(new Date(vote.expires_at), "yyyy-MM-dd")}</span>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between gap-2">
                <h1 className="text-2xl font-bold sm:text-3xl">{vote.title}</h1>
                <div
                  className="bg-element dark:text-foreground flex w-fit items-center rounded-full border
px-2 text-sm font-semibold text-neutral-700"
                >
                  {vote.category_name}
                </div>
              </div>

              <p className="text-sm text-neutral-500 sm:text-base">{vote.description}</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="minw-8 relative min-h-8">
                <div
                  className="h-8 w-8 rounded-full bg-neutral-300 before:content-[''] dark:bg-neutral-500"
                />
              </div>
              <div className="flex flex-1 items-center justify-between text-sm text-neutral-500">
                <div>
                  <p>{vote.users.nickname}</p>
                  <p>{vote.vote_count.toLocaleString()}명 참여</p>
                </div>
                <div className="hidden sm:block">
                  <span>{format(new Date(vote.created_at), "yyyy-MM-dd")}</span>
                  <span> ~ </span>
                  <span>{format(new Date(vote.expires_at), "yyyy-MM-dd")}</span>
                </div>
              </div>
            </div>
          </div>

          <VoteContent vote={vote} />
        </div>
      </div>
    </div>
  );
}
