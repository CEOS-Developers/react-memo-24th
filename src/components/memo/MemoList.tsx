import type { Memo } from '../../types/memo';
import MemoCard from './MemoCard';

type MemoListProps = {
  memos: Memo[];
};

function MemoList({ memos }: MemoListProps) {
  if (memos.length === 0) {
    return (
      <p className="py-20 text-center text-heading-small font-semibold text-gray-04">
        새로운 메모를 작성해보세요!
      </p>
    );
  }

  return (
    <ul aria-label="작성된 메모" className="flex flex-wrap gap-5">
      {memos.map((memo) => (
        <li key={memo.id} className="w-[285px] max-w-full">
          <MemoCard memo={memo} />
        </li>
      ))}
    </ul>
  );
}

export default MemoList;
