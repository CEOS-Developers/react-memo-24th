import NavBar from '../components/NavBar';
import EmptyMemo from '../components/EmptyMemo';
import MemoList from '../components/MemoList';
// 목데이터로 확인
import { MockDataMemo } from '../data/MockDataMemo';

import { useState } from 'react';

const Home = () => {
  //const [memos, setMemos] = useState([]);
  const memos = MockDataMemo; // 목데이터로 확인

  // 네브바의 태그 선택
  const [selectedTag, setSelectedTag] = useState('All');
  // 네브바의 검색어 입력
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMemos = MockDataMemo.filter((memo) => {
    const matchesTag = selectedTag === 'All' || memo.tag === selectedTag;
    const query = searchQuery.trim().toLowerCase();

    const matchesSearch =
      query === '' ||
      memo.title.toLowerCase().includes(query) ||
      memo.content.toLowerCase().includes(query);

    return matchesTag && matchesSearch;
  });

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
          <MemoList memos={filteredMemos} />
        )}
      </div>
    </main>
  );
};

export default Home;
