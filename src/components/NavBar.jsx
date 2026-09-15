import Plus from '../assets/Plus.svg';
import Search from '../assets/Search.svg';
import Profile from '../assets/Profile.svg';
import Tag from '../assets/Tag.svg';
import { useState } from 'react';

function Navbar() {
  const [isTagOpen, setIsTagOpen] = useState(false);

  return (
    <nav className="flex h-[80px] w-full items-center gap-[16px]">
      {/* 왼쪽 검색 영역 */}
      <div className="flex h-full flex-1 items-center gap-[12px] rounded-[28px] bg-[#FAFAFA] p-[16px]">
        <div className="relative shrink-0">
          <button
            className="flex h-[48px] cursor-pointer shrink-0 items-center gap-[8px] rounded-[36px] bg-[#E4EDFF] px-[16px]"
            onClick={() => setIsTagOpen(!isTagOpen)}
          >
            <span className=" text-[16px] leading-[24px] font-extrabold text-[#001B51]">
              태그 선택
            </span>

            <img src={Tag} alt="" />
          </button>

          {isTagOpen && (
            <div className="absolute top-0 left-full ml-[10px] flex w-[116px] flex-col overflow-hidden rounded-[16px] bg-[#E4EDFF] ">
              <button className="cursor-pointer px-[16px] py-[12px] text-left">
                전체보기
              </button>

              <button className="cursor-pointer px-[16px] py-[12px] text-left text-[#7BA7FF]">
                Daily
              </button>

              <button className="cursor-pointer px-[16px] py-[12px] text-left text-[#0037A3]">
                Work
              </button>

              <button className="cursor-pointer px-[16px] py-[12px] text-left text-[#A6B7CB]">
                Others
              </button>
            </div>
          )}
        </div>

        <input
          type="text"
          placeholder="원하는 메모를 검색하세요"
          className="min-w-0 flex-1 bg-transparent outline-none"
        />

        <button className="shrink-0 cursor-pointer">
          <img src={Search} alt="검색" />
        </button>
      </div>

      {/* 오른쪽 버튼 영역 */}
      <div className="flex gap-[10px]">
        {/* + 버튼 */}
        <button className="flex h-[80px] w-[80px] cursor-pointer items-center justify-center rounded-[40px] bg-[#FAFAFA] p-[24px]">
          <img src={Plus} alt="메모 추가" />
        </button>
        {/* 사람 버튼 */}
        <button className="flex h-[80px] w-[80px] cursor-pointer items-center justify-center rounded-[40px] bg-[#FAFAFA] p-[24px]">
          <img src={Profile} alt="프로필" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
