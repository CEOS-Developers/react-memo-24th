import { useState } from "react";
import { useNavigate } from "react-router-dom";
import backIcon from "../assets/icons/icon-back.svg";
import dropdownArrowIcon from "../assets/icons/icon-dropdown-arrow.svg";

function MemoCreatePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const today = new Date();
  const dateText = `${today.getFullYear()}.${String(
    today.getMonth() + 1,
  ).padStart(2, "0")}.${String(today.getDate()).padStart(2, "0")}`;

  return (
    <main className="min-h-screen bg-white px-6 py-14">
      <div className="mx-auto w-full max-w-[920px]">
        <button
          type="button"
          onClick={() => navigate("/memos")}
          aria-label="메모 목록으로 돌아가기"
        >
          <img src={backIcon} alt="" aria-hidden="true" className="h-7 w-7" />
        </button>

        <div className="mx-auto mt-12 w-full max-w-[460px]">
          <section className="min-h-[460px] rounded-[20px] bg-blue-01 p-8 shadow-md">
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="제목을 입력하세요..."
              aria-label="메모 제목"
              className="w-full bg-transparent text-heading-small font-bold text-blue-07 outline-none placeholder:text-blue-03"
            />

            <div className="mt-6 flex items-center gap-4">
              <button
                type="button"
                className="flex items-center gap-1 rounded-full bg-blue-02 px-3 py-2 text-body-small font-bold text-blue-07"
              >
                태그 선택
                <img
                  src={dropdownArrowIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-3 w-3"
                />
              </button>

              <span className="h-8 w-px bg-white" />

              <time className="text-body-small font-bold text-white">
                {dateText}
              </time>
            </div>

            <textarea
              value={content}
              onChange={(event) => setContent(event.target.value)}
              placeholder="본문을 입력하세요..."
              aria-label="메모 본문"
              className="mt-8 min-h-[280px] w-full resize-none bg-transparent text-body-medium text-blue-07 outline-none placeholder:text-blue-03"
            />
          </section>

          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={() => navigate("/memos")}
              className="h-14 flex-1 rounded-xl bg-gray-01 font-bold text-gray-04"
            >
              작성 취소
            </button>

            <button
              type="button"
              disabled
              className="h-14 flex-1 rounded-xl bg-blue-03 font-bold text-gray-01"
            >
              작성 완료
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MemoCreatePage;
