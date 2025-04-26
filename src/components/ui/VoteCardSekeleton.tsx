export const VoteCardSkeleton = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} bg-element h-[150px] animate-pulse space-y-4 rounded-xl border`}>
      <div className="flex h-full gap-3 p-3">
        {/* 좌측 영역 */}
        <div className="flex min-w-[60%] flex-col justify-between">
          <div className="mb-2 space-y-2">
            <div className="flex justify-between">
              <div className="h-4 w-16 rounded-full bg-neutral-600" />
              <div className="h-4 w-12 rounded bg-neutral-600" />
            </div>
            <div className="h-5 w-4/5 rounded bg-neutral-600" />
            <div className="h-4 w-full rounded bg-neutral-400" />
          </div>
          <div className="flex items-center justify-between pt-2 text-[10px]">
            <div className="flex items-center gap-2">
              <div className="min-h-4 min-w-4 rounded-full bg-neutral-600" />
              <div className="h-4 w-12 rounded bg-neutral-400" />
            </div>
            <div className="h-4 w-24 rounded bg-neutral-600" />
          </div>
        </div>

        {/* 우측 옵션 영역 */}
        <div className="flex min-w-[40%] flex-col justify-center border-l p-3">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="mb-2 space-y-1 pt-1"
            >
              <div className="flex justify-between">
                <div className="h-3 w-20 rounded bg-neutral-600" />
                <div className="h-3 w-8 rounded bg-neutral-600" />
              </div>
              <div className="h-1.5 w-full rounded bg-neutral-400" />
            </div>
          ))}
          <div className="mx-auto h-4 w-20 rounded bg-neutral-600" />
        </div>
      </div>
    </div>
  );
};
