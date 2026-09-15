import { useState } from "react";
import EmptyState from "./components/feedback/EmptyState";

function App() {
  const [memos, setMemos] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedFilterTag, setSelectedFilterTag] = useState("");
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [selectedMemo, setSelectedMemo] = useState(null);

  return (
    <main
      className={`min-h-screen p-5 font-pretendard ${
        isEditorOpen ? "bg-white-00" : "bg-blue-01"
      }`}
    >
      {isEditorOpen ? (
        <p className="text-center text-lg">메모 작성 화면 준비 중</p>
      ) : (
        <EmptyState onOpenEditor={() => setIsEditorOpen(true)} />
      )}
    </main>
  );
}

export default App;
