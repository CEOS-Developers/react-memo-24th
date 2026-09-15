import iconStarOutline from "../../assets/icons/star-outline.svg";
import { TAG_STYLES } from "../../constants/tag";

export default function MemoCard({ memo }) {
  const { bg, label, footer } = TAG_STYLES[memo.tag];

  return (
    <article
      className={`flex size-[285px] shrink-0 flex-col gap-4 rounded-[20px] p-6 text-white-00 shadow-[0_4px_6px_rgba(0,0,0,0.05)] ${bg}`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="truncate text-heading-sm">{memo.title}</h3>
        <button type="button" aria-label="고정" className="size-6 shrink-0 cursor-pointer">
          <img src={iconStarOutline} alt="" className="size-full" />
        </button>
      </div>
      <p className="line-clamp-7 grow text-body-sm opacity-95">{memo.content}</p>
      <div className={`flex justify-between gap-2 text-[14px] leading-5 ${footer}`}>
        <span>{label}</span>
        <span>{memo.date}</span>
      </div>
    </article>
  );
}
