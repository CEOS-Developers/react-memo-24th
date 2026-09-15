import iconAddMemoBtn from "../../assets/icons/button-add-memo.svg";
import iconProfileBtn from "../../assets/icons/button-profile.svg";
import iconSearchBar from "../../assets/icons/search-bar-icon.svg";
import IconButton from "../common/IconButton";

export default function TopBar() {
  return (
    <header className="mb-8 flex items-center gap-6">
      <div className="flex grow items-center gap-3 rounded-[28px] bg-white-00 p-4">
        <input
          type="text"
          placeholder="원하는 메모를 검색하세요"
          className="min-w-0 grow bg-transparent text-field-md text-blue-07 outline-none placeholder:text-gray-02"
        />
        <IconButton icon={iconSearchBar} label="검색" className="size-12" />
      </div>
      <IconButton icon={iconAddMemoBtn} label="새 메모 작성" className="size-20" />
      <IconButton icon={iconProfileBtn} label="프로필" className="size-20" />
    </header>
  );
}
