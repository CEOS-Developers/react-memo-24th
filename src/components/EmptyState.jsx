export default function EmptyState({ isEmpty }) {
  return (
    <div
      role="status"
      className={`flex min-h-[500px] flex-col items-center justify-center rounded-[28px] border-2 border-dashed h-[calc(100vh-314px)] ${isEmpty ? "border-soft text-soft gap-7" : "border-navy text-accent gap-3"}`}
    >
      <span
        className={`flex items-center justify-center rounded-full ${isEmpty ? "size-[120px] bg-soft" : "mb-3 size-24 bg-accent"}`}
      >
        <img
          src={`/assets/icons/${isEmpty ? "emptyPlus" : "searchLight"}.svg`}
          alt=""
          width="39"
          height="39"
        />
      </span>
      <p className={isEmpty ? "text-[22px] font-bold" : "text-sm"}>
        {isEmpty ? "새로운 메모를 작성해보세요!" : "검색 결과가 없습니다"}
      </p>
      {!isEmpty && (
        <p className="text-sm text-[#805064]">
          다른 검색어로 다시 시도해보세요
        </p>
      )}
    </div>
  );
}
