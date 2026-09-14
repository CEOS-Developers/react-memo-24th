import searchIcon from '../../assets/icons/search.svg';
import type { Memo } from '../../types/memo';
import MemoCard from './MemoCard';

type MemoListProps = {
  memos: Memo[];
  isFiltered?: boolean;
};

function MemoList({ memos, isFiltered = false }: MemoListProps) {
  if (memos.length === 0) {
    if (isFiltered) {
      return (
        <div className="flex min-h-[420px] flex-col items-center justify-center gap-6 rounded-3xl border-2 border-dashed border-blue-07 px-6 py-12 text-center text-blue-07">
          <img src={searchIcon} alt="" aria-hidden="true" className="size-20" />
          <div className="flex flex-col gap-3">
            <h3 className="text-heading-medium font-semibold max-sm:text-heading-small">
              검색 결과가 없습니다
            </h3>
            <p className="text-body-medium">다른 검색어로 다시 시도해보세요</p>
          </div>
        </div>
      );
    }

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
