import MemoCard from "./MemoCard";

function MemoList({ memos }) {
  return (
    <section className="grid grid-cols-1 gap-[14px] md:grid-cols-2 xl:grid-cols-4">
      {memos.map((memo) => (
        <MemoCard key={memo.id} memo={memo} />
      ))}
    </section>
  );
}

export default MemoList;
