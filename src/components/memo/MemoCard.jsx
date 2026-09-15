import starIcon from "../../assets/icons/Star.svg";

function MemoCard({ memo }) {
  const tagColorClass = {
    Daily: "bg-blue-03",
    Work: "bg-blue-06",
    Others: "bg-gray-02",
  };

  return (
    <article
      className={`flex h-[200px] flex-col rounded-[20px] p-5 text-white-00 ${
        tagColorClass[memo.tag]
      }`}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-heading-small font-extrabold">{memo.title}</h2>

        <button type="button" aria-label="메모 고정">
          <img src={starIcon} alt="" aria-hidden="true" />
        </button>
      </div>

      <p className="mt-5 whitespace-pre-wrap break-words text-body-small font-regular">
        {memo.content}
      </p>

      <div className="mt-auto flex items-center justify-between text-body-small">
        <span>{memo.tag}</span>
        <time>{memo.date}</time>
      </div>
    </article>
  );
}

export default MemoCard;
