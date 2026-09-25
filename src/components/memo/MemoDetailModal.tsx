import type { Memo } from "../../types/memo";
import closeIcon from "../../assets/icons/icon-close.svg";
import dailyDotIcon from "../../assets/icons/dot-daily.svg";
import othersDotIcon from "../../assets/icons/dot-others.svg";
import workDotIcon from "../../assets/icons/dot-work.svg";
import editIcon from "../../assets/icons/icon-edit.svg";
import trashIcon from "../../assets/icons/icon-trash.svg";

type MemoDetailModalProps = {
  memo: Memo;
  onClose: () => void;
};

function MemoDetailModal({ memo, onClose }: MemoDetailModalProps) {
  const backgroundColor =
    memo.tag === "daily"
      ? "bg-blue-04"
      : memo.tag === "work"
        ? "bg-blue-06"
        : "bg-gray-03";

  const tagLabel =
    memo.tag === "daily" ? "Daily" : memo.tag === "work" ? "Work" : "Others";

  const tagIcon =
    memo.tag === "daily"
      ? dailyDotIcon
      : memo.tag === "work"
        ? workDotIcon
        : othersDotIcon;

  const date = new Date(memo.createdAt);
  const dateText = [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join(".");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,27,81,0.50)] p-6">
      <section
        role="dialog"
        aria-modal="true"
        aria-label="메모 상세 보기"
        className={`relative flex min-h-[490px] w-full max-w-[490px] flex-col rounded-[20px] p-10 text-white shadow-lg ${backgroundColor}`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="상세 보기 닫기"
          className="absolute right-8 top-8 cursor-pointer"
        >
          <img src={closeIcon} alt="" aria-hidden="true" className="h-7 w-7" />
        </button>

        <h2 className="pr-12 text-heading-medium font-bold">{memo.title}</h2>

        <div className="mt-6 flex items-center gap-4">
          <span className="flex items-center gap-2 rounded-full bg-blue-01 px-3 py-2 text-body-small font-bold text-blue-05">
            <img src={tagIcon} alt="" aria-hidden="true" className="h-5 w-5" />
            {tagLabel}
          </span>

          <span className="h-8 w-px bg-white" />

          <time className="text-body-small font-bold">{dateText}</time>
        </div>

        <p className="mt-8 whitespace-pre-wrap text-body-medium">
          {memo.content}
        </p>

        <div className="mt-auto flex justify-end gap-4 pt-8">
          <button
            type="button"
            aria-label="메모 수정"
            className="cursor-pointer"
          >
            <img src={editIcon} alt="" aria-hidden="true" className="h-7 w-7" />
          </button>

          <button
            type="button"
            aria-label="메모 삭제"
            className="cursor-pointer"
          >
            <img
              src={trashIcon}
              alt=""
              aria-hidden="true"
              className="h-7 w-7"
            />
          </button>
        </div>
      </section>
    </div>
  );
}

export default MemoDetailModal;
