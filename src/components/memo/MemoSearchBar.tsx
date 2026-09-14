import { useId } from 'react';
import searchIcon from '../../assets/icons/search.svg';
import tagArrowIcon from '../../assets/icons/tag-arrow.svg';

function MemoSearchBar() {
  const searchId = useId();

  return (
    <div
      role="search"
      aria-label="메모 검색"
      className="flex h-20 min-w-0 flex-1 items-center gap-3 rounded-[28px] bg-white-00 p-4 max-sm:order-2 max-sm:h-16 max-sm:basis-full max-sm:p-3"
    >
      <button
        type="button"
        disabled
        className="flex h-9 w-[116px] shrink-0 items-center justify-center gap-2.5 rounded-full bg-blue-01 px-4 py-1.5 text-action-small font-extrabold text-blue-07"
      >
        태그 선택
        <img src={tagArrowIcon} alt="" aria-hidden="true" className="h-4 w-[13px]" />
      </button>
      <label htmlFor={searchId} className="sr-only">
        메모 검색어
      </label>
      <input
        id={searchId}
        type="search"
        disabled
        placeholder="원하는 메모를 검색하세요"
        className="min-w-0 flex-1 rounded-sm bg-transparent text-field-medium text-black-00 placeholder:text-gray-02"
      />
      <button
        type="button"
        aria-label="메모 검색"
        disabled
        className="flex size-12 shrink-0 items-center justify-center rounded-full max-sm:size-10"
      >
        <img src={searchIcon} alt="" aria-hidden="true" className="size-[38.911px] max-sm:size-8" />
      </button>
    </div>
  );
}

export default MemoSearchBar;
