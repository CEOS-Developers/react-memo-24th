import { useNavigate } from "react-router-dom";
import addMemoEmptyIcon from "../assets/icons/icon-add-memo-empty.svg";
import addMemoHeaderIcon from "../assets/icons/icon-add-memo-header.svg";
import dropdownArrowIcon from "../assets/icons/icon-dropdown-arrow.svg";
import profileIcon from "../assets/icons/icon-profile.svg";
import searchIcon from "../assets/icons/icon-search.svg";

function MemoPage() {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-blue-01 px-6 py-14">
      <div className="mx-auto flex w-full max-w-[920px] flex-col">
        <header className="flex items-center gap-4">
          <div className="flex h-16 flex-1 items-center rounded-[24px] bg-white px-3">
            <button
              type="button"
              className="flex h-10 cursor-pointer items-center gap-1 rounded-full bg-blue-01 px-3 text-body-small font-bold text-blue-07"
            >
              태그 선택
              <img
                src={dropdownArrowIcon}
                alt=""
                aria-hidden="true"
                className="h-3 w-3"
              />
            </button>

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
      </div>
    </main>
  );
}

export default MemoPage;
