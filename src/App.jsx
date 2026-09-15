import { useMemo, useState } from "react";
import MemoBoard from "./components/board/MemoBoard";
import TopBar from "./components/header/TopBar";
import MemoView from "./components/modal/MemoView";
import Modal from "./components/modal/Modal";
import { useMemos } from "./hooks/useMemos";
import { filterMemos } from "./utils/memo";

export default function App() {
  const { memos, togglePin } = useMemos();
  const [keyword, setKeyword] = useState("");
  const [activeTag, setActiveTag] = useState(null);
  const [selectedMemoId, setSelectedMemoId] = useState(null);

  const filteredMemos = useMemo(
    () => filterMemos(memos, keyword, activeTag),
    [memos, keyword, activeTag],
  );

  const selectedMemo = memos.find((memo) => memo.id === selectedMemoId);
  const closeModal = () => setSelectedMemoId(null);

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
        onOpen={setSelectedMemoId}
        onTogglePin={togglePin}
      />

      {selectedMemo && (
        <Modal onClose={closeModal}>
          <MemoView memo={selectedMemo} onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
}
