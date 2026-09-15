import pinActiveIcon from "../assets/pin-active.svg";
import pinIcon from "../assets/pin.svg";
import CATEGORY_STYLES from "../constants/categoryStyles.js";
import IconButton from "./IconButton.jsx";

function MemoItem({ memo , onTogglePin }) {
  const { title, content, category, date, isPinned } = memo;
  const categoryStyle = CATEGORY_STYLES[category] ?? CATEGORY_STYLES.Others;
  const handlePinClick = (event) => {
    event.stopPropagation();
    onTogglePin(memo.id);
  };

  return (
    <article
      className={`flex h-[285px] w-[285px] flex-col gap-[10px] rounded-[20px] p-5 py-8 ${categoryStyle.card}`}
    >
      <div className="flex items-center justify-between gap-3">
        <h2 className="min-w-0 flex-1 truncate text-heading-small font-bold text-white-00">
          {title}
        </h2>

        <IconButton
          icon={isPinned ? pinActiveIcon : pinIcon}
          label={isPinned ? "메모 고정 해제" : "메모 고정"}
          className="h-7 w-7 shrink-0 focus-visible:outline-white-00 [&_img]:h-[22px] [&_img]:w-[23px]"
          onClick={handlePinClick}
        />
      </div>

      <p className="line-clamp-7 text-body-small font-regular text-white-00">
        {content}
      </p>

      <div className="mt-auto flex items-center justify-between">
        <span className="text-body-small font-semibold text-blue-01">
          {category}
        </span>
        <span className="text-body-small font-semibold text-blue-01">
          {date}
        </span>
      </div>
    </article>
  );
}

export default MemoItem;
