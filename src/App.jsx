import { useMemo, useState } from "react";
import MemoBoard from "./components/board/MemoBoard";
import TopBar from "./components/header/TopBar";
import { useMemos } from "./hooks/useMemos";
import { filterMemos } from "./utils/memo";

export default function App() {
  const { memos } = useMemos();
  const [keyword, setKeyword] = useState("");

  const filteredMemos = useMemo(() => filterMemos(memos, keyword), [memos, keyword]);

  return (
    <div className="mx-auto max-w-[1248px] px-6 pt-12 pb-24">
      <TopBar keyword={keyword} onKeywordChange={setKeyword} />
      <MemoBoard memos={filteredMemos} hasAnyMemo={memos.length > 0} />
    </div>
  );
}
