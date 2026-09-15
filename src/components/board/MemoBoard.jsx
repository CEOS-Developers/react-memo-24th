import { sortByNewest } from "../../utils/memo";
import EmptyState from "./EmptyState";
import MemoCard from "./MemoCard";
import SearchEmpty from "./SearchEmpty";

export default function MemoBoard({ memos, hasAnyMemo }) {
  if (memos.length === 0) {
    return hasAnyMemo ? <SearchEmpty /> : <EmptyState />;
  }

  return (
    <main className="flex flex-wrap gap-5">
      {sortByNewest(memos).map((memo) => (
        <MemoCard key={memo.id} memo={memo} />
      ))}
    </main>
  );
}
