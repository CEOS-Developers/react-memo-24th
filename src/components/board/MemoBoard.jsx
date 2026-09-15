import { sortByNewest } from "../../utils/memo";
import EmptyState from "./EmptyState";
import MemoCard from "./MemoCard";

export default function MemoBoard({ memos }) {
  if (memos.length === 0) {
    return <EmptyState />;
  }

  return (
    <main className="flex flex-wrap gap-5">
      {sortByNewest(memos).map((memo) => (
        <MemoCard key={memo.id} memo={memo} />
      ))}
    </main>
  );
}
