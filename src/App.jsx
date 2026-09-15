import { useState } from "react";
import EmptyState from "./components/feedback/EmptyState";
import MemoEditor from "./components/memo/MemoEditor";
import MemoList from "./components/memo/MemoList";
import Header from "./components/layout/Header";
import NoResultState from "./components/feedback/NoResultState";
import MemoDetailModal from "./components/memo/MemoDetailModal";

function App() {
  const [memos, setMemos] = useState([]);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedFilterTag, setSelectedFilterTag] = useState("");
  const [selectedMemo, setSelectedMemo] = useState(null);

  function handleCreateMemo(memoData) {
    const newMemo = {
      id: crypto.randomUUID(),
      ...memoData,
    };

    setMemos((currentMemos) => [...currentMemos, newMemo]);
    setIsEditorOpen(false);
  }

  function handleTogglePin(memoId) {
    setMemos((currentMemos) =>
      currentMemos.map((memo) =>
        memo.id === memoId ? { ...memo, isPinned: !memo.isPinned } : memo,
      ),
    );
  }

  const filteredMemos = memos.filter((memo) => {
    const normalizedKeyword = searchKeyword.trim().toLowerCase();

    const matchesSearch = memo.title.toLowerCase().includes(normalizedKeyword);

    const matchesTag = !selectedFilterTag || memo.tag === selectedFilterTag;

    return matchesSearch && matchesTag;
  });

  return (
    <main
      className={`flex min-h-screen flex-col gap-8 p-5 font-pretendard sm:p-8 lg:gap-[76px] lg:px-[120px] lg:py-[72px] ${
        isEditorOpen ? "bg-white-00" : "bg-blue-01"
      }`}
    >
      {!isEditorOpen && (
        <Header
          searchKeyword={searchKeyword}
          selectedFilterTag={selectedFilterTag}
          onSearchKeywordChange={setSearchKeyword}
          onFilterTagChange={setSelectedFilterTag}
          onOpenEditor={() => setIsEditorOpen(true)}
        />
      )}

      {isEditorOpen ? (
        <MemoEditor
          onCreateMemo={handleCreateMemo}
          onClose={() => setIsEditorOpen(false)}
        />
      ) : memos.length === 0 ? (
        <EmptyState onOpenEditor={() => setIsEditorOpen(true)} />
      ) : filteredMemos.length === 0 ? (
        <NoResultState />
      ) : (
        <MemoList
          memos={filteredMemos}
          onTogglePin={handleTogglePin}
          onSelectMemo={setSelectedMemo}
        />
      )}
      {selectedMemo && (
        <MemoDetailModal
          memo={selectedMemo}
          onClose={() => setSelectedMemo(null)}
        />
      )}
    </main>
  );
}

export default App;
