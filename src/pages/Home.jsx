import NavBar from '../components/NavBar';
import EmptyMemo from '../components/EmptyMemo';
import MemoList from '../components/MemoList';
// 목데이터로 확인
import { MockDataMemo } from '../data/MockDataMemo';

import { useState } from 'react';

const Home = () => {
  const [memos, setMemos] = useState(MockDataMemo);

  // 네브바의 태그 선택
  const [selectedTag, setSelectedTag] = useState('All');
  // 네브바의 검색어 입력
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMemos = memos.filter((memo) => {
    const matchesTag = selectedTag === 'All' || memo.tag === selectedTag;
    const query = searchQuery.trim().toLowerCase();

    const matchesSearch =
      query === '' ||
      memo.title.toLowerCase().includes(query) ||
      memo.content.toLowerCase().includes(query);

    return matchesTag && matchesSearch;
  });

  // 별표 누르는 함수 추가
  const handleToggleImportant = (id) => {
    setMemos((prevMemos) =>
      prevMemos.map((memo) =>
        memo.id === id ? { ...memo, isImportant: !memo.isImportant } : memo
      )
    );
  };

  // 메모 정렬(중요한 메모가 위로 오도록)
  // boolean 값을 숫자로 변환하면 true는 1, false는 0으로 변환되어 내림차순으로 정렬합니다
  // 결국에는 1,1,1,0,0,0 이런식으로 정렬되어서 true가 위로 오게 됩니다.
  const sortedMemos = [...filteredMemos].sort(
    (a, b) => Number(b.isImportant) - Number(a.isImportant)
  );

  return (
    <main className="min-h-screen w-full bg-[#E4EDFF] px-[120px] pt-[72px] pb-[86px]">
      <div className="flex  w-full flex-col gap-[76px]">
        {/* NavBar */}
        <NavBar
          selectedTag={selectedTag}
          onTagChange={setSelectedTag}
          onSearch={setSearchQuery}
        />

        {/* Memo Content */}
        {memos.length === 0 ? (
          <EmptyMemo />
        ) : (
          <MemoList
            memos={sortedMemos}
            onToggleImportant={handleToggleImportant}
          />
        )}
      </div>
    </main>
  );
};

export default Home;
