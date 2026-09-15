import { useState } from 'react';
import Header from './components/Header';
import MemoList from './components/MemoList';
import MemoDetail from './components/MemoDetail';
import EmptyState from './components/EmptyState';
import { sampleMemos } from './data/sampleMemos';

export default function App() {
  const [memos, setMemos] = useState(sampleMemos);
  const [searchText, setSearchText] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [selectedMemo, setSelectedMemo] = useState(null);

  const visibleMemos = memos.filter((memo) => {
    const matchesTag = selectedTag === 'all' || memo.tag === selectedTag;
    const matchesSearch = `${memo.title} ${memo.content}`.toLowerCase().includes(searchText.trim().toLowerCase());
    return matchesTag && matchesSearch;
  });
  const pinnedMemos = visibleMemos.filter((memo) => memo.isPinned);
  const regularMemos = visibleMemos.filter((memo) => !memo.isPinned);

  function togglePin(memoId) {
    setMemos((previousMemos) => previousMemos.map((memo) => memo.id === memoId ? { ...memo, isPinned: !memo.isPinned } : memo));
  }

  return (
    <div className="mx-auto w-[calc(100%-32px)] max-w-[1200px] pt-8 pb-[86px] md:w-5/6 md:pt-[72px]">
      <Header searchText={searchText} onSearchChange={setSearchText} selectedTag={selectedTag} onTagChange={setSelectedTag} />
      <main className={`flex flex-col gap-5 ${memos.length === 0 ? 'mt-[76px]' : 'mt-[52px]'}`}>
        {visibleMemos.length === 0 ? <EmptyState isEmpty={memos.length === 0} /> : <>
          <MemoList title="고정된 메모" memos={pinnedMemos} onTogglePin={togglePin} onSelect={setSelectedMemo} />
          <MemoList title="일반 메모" memos={regularMemos} onTogglePin={togglePin} onSelect={setSelectedMemo} />
        </>}
      </main>
      {selectedMemo && <MemoDetail memo={selectedMemo} onClose={() => setSelectedMemo(null)} />}
    </div>
  );
}
