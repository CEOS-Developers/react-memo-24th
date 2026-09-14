import { useState } from 'react';
import MemoList from '../components/memo/MemoList';
import MemoToolbar from '../components/memo/MemoToolbar';
import { initialMemos } from '../data/memos';
import type { MemoCategory } from '../types/memo';
import { filterMemos } from '../utils/filterMemos';

function MemoPage() {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState<MemoCategory | ''>('');
  const visibleMemos = filterMemos(initialMemos, keyword, category);
  const isFiltered = initialMemos.length > 0 && (keyword.trim() !== '' || category !== '');

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[1440px] flex-col gap-[52px] px-[clamp(32px,calc((100%_-_1200px)/2),120px)] pt-[72px] pb-14 max-[900px]:px-8 max-[900px]:pt-12 max-sm:gap-8 max-sm:px-4 max-sm:pt-6 max-sm:pb-8">
      <MemoToolbar
        keyword={keyword}
        category={category}
        onKeywordChange={setKeyword}
        onCategoryChange={setCategory}
      />
      <section aria-labelledby="memo-list-title" className="flex w-full flex-1 flex-col gap-5">
        <h2 id="memo-list-title" className="sr-only">
          메모 목록
        </h2>
        <p role="status" aria-atomic="true" className="sr-only">
          {isFiltered ? `검색 결과 ${visibleMemos.length}개` : `전체 메모 ${visibleMemos.length}개`}
        </p>
        <MemoList memos={visibleMemos} isFiltered={isFiltered} />
      </section>
    </main>
  );
}

export default MemoPage;
