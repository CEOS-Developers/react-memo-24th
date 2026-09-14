import searchIcon from '../../assets/icons/search.svg';
import type { Memo } from '../../types/memo';
import MemoCard from './MemoCard';

type MemoListProps = {
  memos: Memo[];
  isFiltered?: boolean;
  label?: string;
  onTogglePin: (memoId: Memo['id']) => void;
};

function MemoList({
  memos,
  isFiltered = false,
  label = '작성된 메모',
  onTogglePin,
}: MemoListProps) {
  if (memos.length === 0) {
    if (isFiltered) {
      return (
        <div className="flex min-h-[420px] flex-col items-center justify-center gap-5 rounded-3xl border-2 border-dashed border-blue-07 px-6 py-12 text-center text-blue-07">
          <span
            aria-hidden="true"
            className="flex size-24 items-center justify-center rounded-full bg-blue-07"
          >
            <span
              className="size-[38.911px] bg-blue-01 mask-contain mask-center mask-no-repeat"
              style={{ maskImage: `url("${searchIcon}")`, WebkitMaskImage: `url("${searchIcon}")` }}
            />
          </span>
          <div className="flex flex-col gap-2">
            <h3 className="text-body-small font-normal">검색 결과가 없습니다</h3>
            <p className="text-body-small text-gray-03">다른 검색어로 다시 시도해보세요</p>
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
    <ul aria-label={label} className="flex flex-wrap gap-5">
      {memos.map((memo) => (
        <li key={memo.id} className="w-[285px] max-w-full">
          <MemoCard memo={memo} onTogglePin={onTogglePin} />
        </li>
      ))}
    </ul>
  );
}

export default MemoList;
