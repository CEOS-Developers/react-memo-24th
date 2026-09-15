import type { Memo } from "../types/memos";
import { MEMO_COLORS, TAG_COLORS } from "../constants/tags";
import PlusIcon from "./icons/PlusIcon";
import SearchIcon from "./icons/SearchIcon";
import StarIcon from "./icons/StarIcon";

type MemoListsProps = {
  memos: Memo[];
  totalCount: number;
  onCreateMemo?: () => void;
};

const MemoLists = ({ memos, totalCount, onCreateMemo }: MemoListsProps) => {
  return (
    <section
      aria-label="메모 목록"
      className={`mt-8 w-full min-w-0 ${totalCount === 0 ? "flex flex-1 flex-col" : ""}`}
    >
      {totalCount === 0 ? (
        <div className="flex w-full flex-1 flex-col items-center justify-center rounded-[24px] border-2 border-dashed border-blue02">
          <button
            type="button"
            aria-label="새로운 메모 작성"
            className="flex bg-blue02 w-30 h-30 items-center justify-center rounded-[75px] cursor-pointer"
            onClick={onCreateMemo}
          >
            <PlusIcon size={32} className="text-gray01" />
          </button>
          <p className="text-heading-medium text-blue02 mt-5">
            새로운 메모를 작성해보세요!
          </p>
        </div>
      ) : memos.length === 0 ? (
        <div id="search-empty-state" role="status">
          <SearchIcon className="text-blue02" />
          <div className="search-empty-text">
            <p className="text-body-small">검색 결과가 없습니다</p>
            <p className="text-body-small">다른 키워드로 검색해보세요</p>
          </div>
        </div>
      ) : (
        <>
          <ul id="favorite-memo-list" aria-label="즐겨찾기 메모" hidden />
          <ul
            id="memo-list"
            aria-label="일반 메모"
            className="flex w-[105%] flex-wrap gap-4"
          >
            {memos.map((memo, index) => (
              <li key={index} className="w-[285px] max-w-full shrink-0">
                <article
                  className={`flex flex-col w-full h-[285px] rounded-2xl text-white00 py-8 px-5 ${MEMO_COLORS[memo.tag]}`}
                >
                  <div className="min-h-0 flex-1 overflow-hidden">
                    <div className="flex justify-between">
                      <h2 className="line-clamp-1 text-heading-small">
                        {memo.title}
                      </h2>
                      <button className="cursor-pointer">
                        <StarIcon className={`text-gray01`} />
                      </button>
                    </div>
                    <p className="mt-3 line-clamp-6 whitespace-pre-wrap break-words text-body-medium">
                      {memo.content}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center justify-between gap-3 text-body-small">
                    <span>{memo.tag}</span>
                    <time dateTime={memo.date}>
                      {memo.date.replaceAll("-", ".")}
                    </time>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default MemoLists;
