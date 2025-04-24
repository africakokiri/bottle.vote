import { SearchAndFilter } from "@/components/SearchAndFilter";

export default function page() {
  return (
    <div className="container space-y-4">
      <div>
        <h1 className="text-2xl font-bold">투표 목록</h1>
      </div>

      {/* 검색 및 필터 */}
      <SearchAndFilter />
    </div>
  );
}
