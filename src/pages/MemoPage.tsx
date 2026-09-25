import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMemoStore } from "../store/memoStore";
import type { MemoFilter } from "../types/memo";
import TagSelect from "../components/memo/TagSelect";
import addMemoEmptyIcon from "../assets/icons/icon-add-memo-empty.svg";
import addMemoHeaderIcon from "../assets/icons/icon-add-memo-header.svg";
import profileIcon from "../assets/icons/icon-profile.svg";
import searchIcon from "../assets/icons/icon-search.svg";
import MemoCard from "../components/memo/MemoCard";

function MemoPage() {
  const navigate = useNavigate();
  const [selectedTag, setSelectedTag] = useState<MemoFilter | null>(null);
  const memos = useMemoStore((state) => state.memos);
  const toggleMemoPin = useMemoStore((state) => state.toggleMemoPin);

  const displayedMemos = [...memos]
    .filter((memo) => {
      return (
        selectedTag === null ||
        selectedTag === "all" ||
        memo.tag === selectedTag
      );
    })
    .sort((firstMemo, secondMemo) => {
      return Number(secondMemo.isPinned) - Number(firstMemo.isPinned);
    });

  return (
    <main className="min-h-screen bg-blue-01 px-6 py-14">
      <div className="mx-auto flex w-full max-w-[920px] flex-col">
        <header className="flex items-center gap-4">
          <div className="flex h-16 flex-1 items-center rounded-[24px] bg-white px-3">
            <TagSelect
              value={selectedTag}
              onChange={(tag) => setSelectedTag(tag)}
            />

            <input
              type="search"
              placeholder="원하는 메모를 검색하세요"
              aria-label="메모 검색"
              className="min-w-0 flex-1 bg-transparent px-3 text-body-small text-gray-05 outline-none placeholder:text-gray-02"
            />

            <button
              type="button"
              aria-label="메모 검색"
              className="cursor-pointer"
            >
              <img
                src={searchIcon}
                alt=""
                aria-hidden="true"
                className="h-8 w-8"
              />
            </button>
          </div>

          <button
            type="button"
            onClick={() => navigate("/memos/new")}
            aria-label="메모 추가"
            className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-white"
          >
            <img
              src={addMemoHeaderIcon}
              alt=""
              aria-hidden="true"
              className="h-8 w-8"
            />
          </button>

          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
            <img src={profileIcon} alt="프로필" className="h-8 w-8" />
          </span>
        </header>

        {displayedMemos.length === 0 ? (
          <section className="mt-14 flex min-h-[540px] items-center justify-center rounded-[20px] border-2 border-dashed border-blue-02">
            <button
              type="button"
              onClick={() => navigate("/memos/new")}
              className="flex cursor-pointer flex-col items-center"
            >
              <img
                src={addMemoEmptyIcon}
                alt=""
                aria-hidden="true"
                className="h-24 w-24"
              />
              <span className="mt-5 text-body-medium font-semibold text-blue-03">
                새로운 메모를 작성해보세요!
              </span>
            </button>
          </section>
        ) : (
          <section className="mt-14 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5">
            {displayedMemos.map((memo) => (
              <MemoCard key={memo.id} memo={memo} onTogglePin={toggleMemoPin} />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}

export default MemoPage;
