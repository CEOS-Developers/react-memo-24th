import { useMemo, useState } from "react";
import MemoBoard from "./components/board/MemoBoard";
import TopBar from "./components/header/TopBar";
import { useMemos } from "./hooks/useMemos";
import { filterMemos } from "./utils/memo";

export default function App() {
  const { memos, togglePin } = useMemos();
  const [keyword, setKeyword] = useState("");
  const [activeTag, setActiveTag] = useState(null);

  const filteredMemos = useMemo(
    () => filterMemos(memos, keyword, activeTag),
    [memos, keyword, activeTag],
  );

  return (
    <div className="mx-auto max-w-[1248px] px-6 pt-12 pb-24">
      <TopBar
        keyword={keyword}
        onKeywordChange={setKeyword}
        activeTag={activeTag}
        onTagChange={setActiveTag}
      />
      <MemoBoard
        memos={filteredMemos}
        hasAnyMemo={memos.length > 0}
        onTogglePin={togglePin}
      />
    </div>
  );
}
