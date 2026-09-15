import { useState } from "react";
import backIcon from "../../assets/icons/Back.svg";

function getCurrentDate() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const date = String(today.getDate()).padStart(2, "0");

  return `${year}.${month}.${date}`;
}

function MemoEditor({ onCreateMemo, onClose }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !content.trim() || !tag) {
      alert("제목, 태그, 본문을 모두 입력해주세요.");
      return;
    }

    onCreateMemo({
      title: title.trim(),
      content: content.trim(),
      tag,
      date: getCurrentDate(),
      isPinned: false,
    });
  }

  return (
    <section className="mx-auto flex min-h-[688px] max-w-[600px] flex-col bg-white-00">
      <button
        type="button"
        onClick={onClose}
        aria-label="메모 작성 취소"
        className="mb-8 w-fit"
      >
        <img src={backIcon} alt="" aria-hidden="true" />
      </button>

      <form className="flex flex-1 flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="제목을 입력하세요..."
          className="text-heading-medium font-semibold text-blue-07 placeholder:text-blue-03 outline-none"
        />

        <div className="mt-8 flex items-center gap-5">
          <select
            value={tag}
            onChange={(event) => setTag(event.target.value)}
            className="rounded-full bg-blue-01 px-3 py-2 text-body-small font-bold text-blue-07 outline-none"
          >
            <option value="">태그 선택</option>
            <option value="Daily">Daily</option>
            <option value="Work">Work</option>
            <option value="Others">Others</option>
          </select>

          <time className="text-body-medium font-medium text-gray-03">
            {getCurrentDate()}
          </time>
        </div>

        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="본문을 입력하세요..."
          className="mt-8 flex-1 resize-none text-body-small text-blue-07 placeholder:text-blue-03 outline-none"
        />

        <div className="mt-5 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-gray-01 px-6 py-3 text-action-small font-semibold text-gray-03"
          >
            작성 취소
          </button>

          <button
            type="submit"
            className="rounded-full bg-blue-07 px-6 py-3 text-action-small font-semibold text-white-00"
          >
            작성 완료
          </button>
        </div>
      </form>
    </section>
  );
}

export default MemoEditor;
