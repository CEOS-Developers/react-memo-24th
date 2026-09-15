import exitIcon from "../../assets/icons/Exit.svg";
import modifyIcon from "../../assets/icons/modify.svg";
import trashIcon from "../../assets/icons/Trash.svg";

function MemoDetailModal({ memo, onClose }) {
  const tagColorClass = {
    Daily: "bg-blue-03",
    Work: "bg-blue-06",
    Others: "bg-gray-02",
  };

  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto bg-blue-07/55 p-5"
      onClick={onClose}
    >
      <article
        className={`relative flex min-h-[500px] w-full max-w-[556px] flex-col rounded-3xl p-6 text-white-00 sm:h-[556px] sm:p-10 ${
          tagColorClass[memo.tag]
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="상세 보기 닫기"
          className="absolute right-10 top-10"
        >
          <img src={exitIcon} alt="" aria-hidden="true" className="size-8" />
        </button>

        <h2 className="pr-10 text-heading-medium font-extrabold sm:text-heading-large">
          {memo.title}
        </h2>

        <div className="mt-7 flex items-center">
          <span className="rounded-full bg-white-00 px-5 py-2 text-body-medium font-semibold text-blue-07">
            {memo.tag}
          </span>

          <span className="mx-5 h-[54px] w-[3px] bg-white-00" />

          <time className="text-body-medium font-semibold">{memo.date}</time>
        </div>

        <p className="mt-8 whitespace-pre-wrap break-words text-body-large">
          {memo.content}
        </p>

        <div className="absolute bottom-6 right-6 flex items-center gap-5 sm:bottom-[35px] sm:right-[45px]">
          <button
            type="button"
            aria-label="메모 수정"
            className="flex size-7 items-center justify-center"
          >
            <img
              src={modifyIcon}
              alt=""
              aria-hidden="true"
              className="size-[27px]"
            />
          </button>

          <button type="button" aria-label="메모 삭제" className="size-[32px]">
            <img
              src={trashIcon}
              alt=""
              aria-hidden="true"
              className="size-[32px]"
            />
          </button>
        </div>
      </article>
    </div>
  );
}

export default MemoDetailModal;
