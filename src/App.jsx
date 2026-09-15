import { useState } from "react";

function App() {
  // 메모 전체 목록
  const [memos, setMemos] = useState([]);

  // 검색어
  const [searchKeyword, setSearchKeyword] = useState("");

  // 헤더에서 선택한 태그 필터
  const [selectedFilterTag, setSelectedFilterTag] = useState("");

  // 메모 작성 화면 열림 여부
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  // 상세 모달에서 보고 있는 메모
  const [selectedMemo, setSelectedMemo] = useState(null);

  return (
    <main className="min-h-screen bg-blue-100 p-5 font-pretendard">
      <h1 className="text-4xl font-extrabold">Memo</h1>
    </main>
  );
}

export default App;
