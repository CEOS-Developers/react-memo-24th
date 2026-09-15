import plusIcon from "../../assets/icons/plus.svg";
import profileIcon from "../../assets/icons/profile.svg";
import searchIcon from "../../assets/icons/Search.svg";

function Header({
  searchKeyword,
  selectedFilterTag,
  onSearchKeywordChange,
  onFilterTagChange,
  onOpenEditor,
}) {
  return (
    <header className="flex items-center gap-3">
      <div className="flex h-16 flex-1 items-center rounded-full bg-white-00 px-4 md:h-[100px]">
        <select
          value={selectedFilterTag}
          onChange={(event) => onFilterTagChange(event.target.value)}
          aria-label="메모 태그 필터"
          className="rounded-full bg-blue-01 px-3 py-2 text-body-small font-bold text-blue-07 outline-none"
        >
          <option value="">태그 선택</option>
          <option value="Daily">Daily</option>
          <option value="Work">Work</option>
          <option value="Others">Others</option>
        </select>

        <input
          type="search"
          value={searchKeyword}
          onChange={(event) => onSearchKeywordChange(event.target.value)}
          aria-label="메모 검색"
          placeholder="원하는 메모를 검색하세요"
          className="ml-3 min-w-0 flex-1 bg-transparent text-field-medium text-blue-07 placeholder:text-blue-02 outline-none"
        />

        <img
          src={searchIcon}
          alt=""
          aria-hidden="true"
          className="ml-2 size-8 shrink-0 md:size-10"
        />
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
