import starFilledIcon from "../../assets/icons/star-filled.svg";
import starOutlineIcon from "../../assets/icons/star-outline.svg";
import type { Memo } from "../../types/memo";

type MemoCardProps = {
  memo: Memo;
  onTogglePin: (id: string) => void;
  onOpen: (memo: Memo) => void;
};

function MemoCard({ memo, onTogglePin, onOpen }: MemoCardProps) {
  const cardBackground =
    memo.tag === "daily"
      ? "bg-blue-04"
      : memo.tag === "work"
        ? "bg-blue-06"
        : "bg-gray-03";

  const date = new Date(memo.createdAt);

  const dateText = [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join(".");

  return (
    <article
      onClick={() => onOpen(memo)}
      className={`flex h-[285px] w-[285px] cursor-pointer flex-col items-center justify-center gap-2.5 rounded-[20px] px-5 py-3 text-white ${cardBackground}`}
    >
      <div className="flex w-full items-start justify-between gap-4">
        <h2 className="text-heading-small font-bold">{memo.title}</h2>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onTogglePin(memo.id);
          }}
          aria-label={memo.isPinned ? "메모 고정 해제" : "메모 고정"}
          className="cursor-pointer"
        >
          <img
            src={memo.isPinned ? starFilledIcon : starOutlineIcon}
            alt=""
            aria-hidden="true"
            className="h-7 w-7"
          />
        </button>
      </div>

      <p className="mt-4 w-full whitespace-pre-wrap text-body-small">
        {memo.content}
      </p>

      <div className="mt-auto flex w-full items-center justify-between pt-6 text-body-small">
        <span className="capitalize">{memo.tag}</span>
        <time dateTime={memo.createdAt}>{dateText}</time>
      </div>
    </article>
  );
}

export default MemoCard;
