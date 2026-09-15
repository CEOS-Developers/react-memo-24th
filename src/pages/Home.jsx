import NavBar from '../components/NavBar';
import EmptyMemo from '../components/EmptyMemo';
import MemoList from '../components/MemoList';
// 목데이터로 확인
import { MockDataMemo } from '../data/MockDataMemo';

import { useState } from 'react';

const Home = () => {
  //const [memos, setMemos] = useState([]);
  const memos = MockDataMemo; // 목데이터로 확인

  const [selectedTag, setSelectedTag] = useState('All');

  const filteredMemos =
    selectedTag === 'All'
      ? MockDataMemo
      : MockDataMemo.filter((memo) => memo.tag === selectedTag);

  return (
    <main className="min-h-screen w-full bg-[#E4EDFF] px-[120px] pt-[72px] pb-[86px]">
      <div className="flex  w-full flex-col gap-[76px]">
        {/* NavBar */}
        <NavBar selectedTag={selectedTag} onTagChange={setSelectedTag} />

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
