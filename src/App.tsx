import { useState } from "react";
import PlusIcon from "./components/icons/PlusIcon";
import SearchIcon from "./components/icons/SearchIcon";
import PeopleIcon from "./components/icons/PeopleIcon";
import mockMemos from "./data/mockData";
import type { Memo, MemoTag } from "./types/memos";
import MemoLists from "./components/MemoLists";
import Select from "./components/Select";
import { TAG_OPTIONS } from "./constants/tags";

function App() {
  const [memos, setMemos] = useState<Memo[]>(mockMemos);
  const [keyword, setKeyword] = useState("");
  const [selectedTag, setSelectedTag] = useState<MemoTag | "">("");

  const query = keyword.trim().toLowerCase();

  const filteredMemos = memos.filter((memo) => {
    const matchesTag = selectedTag === "" || memo.tag === selectedTag;

    const matchesKeyword =
      memo.title.toLowerCase().includes(query) ||
      memo.content.toLowerCase().includes(query);

    return matchesTag && matchesKeyword;
  });

  return (
    <div className="flex flex-col w-screen min-h-dvh p-30 pt-18 pb-21.5 bg-blue01">
      <div className="flex w-full min-w-130 max-w-300 items-center gap-2.5">
        <form className="flex min-w-0 flex-1">
          <div className="flex w-full items-center p-4 gap-2.5 rounded-[28px] bg-white00">
            <div className="shrink-0">
              <span aria-hidden="true"></span>
              <Select
                aria-label="검색 태그"
                options={[
                  { value: "", label: "태그 선택" },
                  ...TAG_OPTIONS,
                ]}
                value={selectedTag}
                onValueChange={(value) => {
                  if (
                    value === "" ||
                    value === "Work" ||
                    value === "Daily" ||
                    value === "Others"
                  ) {
                    setSelectedTag(value);
                  }
                }}
              />
            </div>
            <input
              className="min-w-0 flex-1 text-field-medium"
              type="text"
              aria-label="메모 검색"
              placeholder="원하는 메모를 검색하세요"
            />
            <button type="submit" aria-label="검색" className="shrink-0">
              <SearchIcon className="text-blue07" />
            </button>
          </div>
        </form>
        <button
          type="button"
          aria-label="새로운 메모 작성"
          className="shrink-0 p-4 bg-white00 rounded-[40px]"
        >
          <PlusIcon className="text-blue07" />
        </button>
        <button
          type="button"
          aria-label="마이페이지"
          className="shrink-0 p-4 bg-white00 rounded-[40px]"
        >
          <PeopleIcon className="text-blue07" />
        </button>
      </div>

      <MemoLists memos={filteredMemos} totalCount={memos.length} />
    </div>
  );
}

export default App;
