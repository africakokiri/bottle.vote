import { Search } from "@/components/Search";
import { SelectAndFilter } from "@/components/SelectAndFilter";
import { VoteListPageVotes } from "@/components/VoteListPageVotes";

export default function page() {
  return (
    <div className="container max-w-7xl space-y-4">
      <div>
        <h1 className="text-3xl font-bold">투표 목록</h1>
      </div>

      <div className="flex flex-col gap-4 sm:gap-0">
        <div className="gap-4 space-y-4 sm:flex">
          {/* 검색  */}
          <Search />

          {/* 모든 투표 / 인기투표 */}
          <SelectAndFilter />
        </div>

        <VoteListPageVotes />
      </div>
    </div>
  );
}
