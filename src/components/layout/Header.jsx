import plusIcon from "../../assets/icons/plus.svg";
import profileIcon from "../../assets/icons/profile.svg";
import searchIcon from "../../assets/icons/Search.svg";

function Header({ onOpenEditor }) {
  return (
    <header className="flex items-center gap-3">
      <div className="flex h-16 flex-1 items-center rounded-full bg-white-00 px-4 md:h-[100px]">
        <button
          type="button"
          aria-label="태그 필터"
          className="rounded-full bg-blue-01 px-3 py-2 text-body-small font-bold text-blue-07"
        >
          태그 선택
        </button>

        <input
          type="search"
          aria-label="메모 검색"
          placeholder="원하는 메모를 검색하세요"
          className="ml-3 min-w-0 flex-1 bg-transparent text-field-medium text-blue-07 placeholder:text-blue-02 outline-none"
        />

        <button
          type="button"
          aria-label="검색"
          className="ml-2 flex size-11 shrink-0 items-center justify-center md:size-[60px]"
        >
          <img
            src={searchIcon}
            alt=""
            aria-hidden="true"
            className="size-8 md:size-10"
          />
        </button>
      </div>

      <button
        type="button"
        onClick={onOpenEditor}
        aria-label="새 메모 작성"
        className="flex size-14 shrink-0 items-center justify-center rounded-full bg-white-00 md:size-20"
      >
        <img
          src={plusIcon}
          alt=""
          aria-hidden="true"
          className="size-6 md:size-7"
        />
      </button>

      <button
        type="button"
        aria-label="프로필"
        className="hidden size-14 shrink-0 items-center justify-center rounded-full bg-white-00 md:flex md:size-20"
      >
        <img
          src={profileIcon}
          alt=""
          aria-hidden="true"
          className="size-7 md:size-8"
        />
      </button>
    </header>
  );
}

export default Header;
