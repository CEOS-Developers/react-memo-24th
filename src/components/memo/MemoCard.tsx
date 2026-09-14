import starIcon from '../../assets/icons/star.svg';
import type { Memo } from '../../types/memo';

const categoryStyles = {
  daily: { label: 'Daily', card: 'bg-memo-daily', footer: 'text-blue-01' },
  work: { label: 'Work', card: 'bg-blue-06', footer: 'text-white-00' },
  others: { label: 'Others', card: 'bg-gray-02', footer: 'text-white-00' },
};

type MemoCardProps = {
  memo: Memo;
};

function MemoCard({ memo }: MemoCardProps) {
  const category = categoryStyles[memo.category];
  const starMask = `url("${starIcon}")`;

  return (
    <article
      className={`flex h-[285px] w-full flex-col gap-5 overflow-hidden rounded-[20px] pt-[25px] pr-[34px] pb-9 pl-[21px] text-white-00 ${category.card}`}
    >
      <header className="flex shrink-0 items-center gap-3">
        <h3 className="min-w-0 flex-1 truncate text-heading-small font-bold" title={memo.title}>
          {memo.title}
        </h3>
        <button
          type="button"
          disabled
          aria-label={memo.isPinned ? '메모 고정 해제' : '메모 고정'}
          aria-pressed={memo.isPinned}
          className="size-7 shrink-0"
        >
          <span
            aria-hidden="true"
            className={`block size-full mask-contain mask-center mask-no-repeat ${memo.isPinned ? 'bg-point' : 'bg-memo-star'}`}
            style={{ maskImage: starMask, WebkitMaskImage: starMask }}
          />
        </button>
      </header>
      <p className="line-clamp-6 min-h-0 flex-1 text-body-small wrap-anywhere whitespace-pre-line">
        {memo.content}
      </p>
      <footer
        className={`mt-auto flex shrink-0 items-center justify-between gap-3 text-body-small font-semibold ${category.footer}`}
      >
        <span>{category.label}</span>
        <time dateTime={memo.date}>{memo.date.replaceAll('-', '.')}</time>
      </footer>
    </article>
  );
}

export default MemoCard;
