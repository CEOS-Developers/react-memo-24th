import Plus from '../assets/Plus.svg';
import Search from '../assets/Search.svg';
import Profile from '../assets/Profile.svg';
import Tag from '../assets/Tag.svg';

function Navbar() {
  return (
    <nav className="flex h-[80px] w-full items-center gap-[16px]">
      {/* 왼쪽 검색 영역 */}
      <div className="flex h-full flex-1 items-center gap-[12px] rounded-[28px] bg-[#FAFAFA] p-[16px]">
        <button className="flex h-[48px] shrink-0 items-center gap-[8px] rounded-[36px] bg-[#E4EDFF] px-[16px]">
          <span className=" text-[16px] leading-[24px] font-extrabold text-[#001B51]">
            태그 선택
          </span>

          <img src={Tag} alt="" />
        </button>

        <input
          type="text"
          placeholder="원하는 메모를 검색하세요"
          className="min-w-0 flex-1 bg-transparent outline-none"
        />

        <button className="shrink-0">
          <img src={Search} alt="검색" />
        </button>
      </div>

      {/* 오른쪽 버튼 영역 */}
      <div className="flex gap-[10px]">
        {/* + 버튼 */}
        <button className="flex h-[80px] w-[80px] items-center justify-center rounded-[40px] bg-[#FAFAFA] p-[24px]">
          <img src={Plus} alt="메모 추가" />
        </button>
        {/* 사람 버튼 */}
        <button className="flex h-[80px] w-[80px] items-center justify-center rounded-[40px] bg-[#FAFAFA] p-[24px]">
          <img src={Profile} alt="프로필" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
