import MemoCard from "./MemoCard";

function MemoList({ memos, onTogglePin }) {
  const sortedMemos = [...memos].sort(
    (firstMemo, secondMemo) =>
      Number(secondMemo.isPinned) - Number(firstMemo.isPinned),
  );

  return (
    <section className="grid grid-cols-1 gap-[14px] md:grid-cols-2 xl:grid-cols-4">
      {sortedMemos.map((memo) => (
        <MemoCard key={memo.id} memo={memo} onTogglePin={onTogglePin} />
      ))}
    </section>
  );
}

export default MemoList;
