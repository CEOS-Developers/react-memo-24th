import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TagSelect, { type MemoTag } from "../components/memo/TagSelect";
import backIcon from "../assets/icons/icon-back.svg";

function MemoCreatePage() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState<MemoTag | null>(null);

  const isFormComplete =
    tag !== null && title.trim().length > 0 && content.trim().length > 0;

  const memoBackgroundStyle =
    tag === "daily"
      ? "bg-blue-04"
      : tag === "work"
        ? "bg-blue-06"
        : tag === "others"
          ? "bg-gray-03"
          : "bg-[#DDE9FF]";

  const inputTextStyle =
    tag === null
      ? "text-blue-07 placeholder:text-blue-03"
      : "text-white placeholder:text-blue-02";

  const today = new Date();

  const dateText = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join(".");

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
          <section
            className={`min-h-[460px] rounded-[20px] p-8 shadow-md ${memoBackgroundStyle}`}
          >
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="제목을 입력하세요..."
              aria-label="메모 제목"
              className={`w-full bg-transparent text-heading-small font-bold outline-none ${inputTextStyle}`}
            />

            <div className="mt-6 flex items-center gap-4">
              <TagSelect
                value={tag}
                showAll={false}
                variant="editor"
                onChange={(selectedTag) => {
                  if (selectedTag !== "all") {
                    setTag(selectedTag);
                  }
                }}
              />

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
              className={`mt-8 min-h-[280px] w-full resize-none bg-transparent text-body-medium outline-none ${inputTextStyle}`}
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
              disabled={!isFormComplete}
              className={`h-14 flex-1 rounded-xl font-bold ${
                isFormComplete
                  ? "cursor-pointer bg-blue-05 text-white"
                  : "cursor-not-allowed bg-blue-03 text-gray-01"
              }`}
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
