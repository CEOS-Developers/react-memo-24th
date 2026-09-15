import { useState } from "react";
import EmptyState from "./components/feedback/EmptyState";
import MemoEditor from "./components/memo/MemoEditor";
import MemoList from "./components/memo/MemoList";

function App() {
  const [memos, setMemos] = useState([]);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  function handleCreateMemo(memoData) {
    const newMemo = {
      id: crypto.randomUUID(),
      ...memoData,
    };

    setMemos((currentMemos) => [...currentMemos, newMemo]);
    setIsEditorOpen(false);
  }

  return (
    <main
      className={`min-h-screen p-5 font-pretendard ${
        isEditorOpen ? "bg-white-00" : "bg-blue-01"
      }`}
    >
      {isEditorOpen ? (
        <MemoEditor
          onCreateMemo={handleCreateMemo}
          onClose={() => setIsEditorOpen(false)}
        />
      ) : memos.length === 0 ? (
        <EmptyState onOpenEditor={() => setIsEditorOpen(true)} />
      ) : (
        <MemoList memos={memos} />
      )}
    </main>
  );
}

export default App;
