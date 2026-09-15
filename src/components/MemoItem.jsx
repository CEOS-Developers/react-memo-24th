import pinActiveIcon from '../assets/pin-active.svg'
import pinIcon from '../assets/pin.svg'
import CATEGORY_STYLES from '../constants/categoryStyles.js'
import IconButton from './IconButton.jsx'

function MemoItem({
  memo,
  onTogglePin,
  onSelectMemo,
}) {
  const { title, content, category, date, isPinned } = memo
  const categoryStyle =
    CATEGORY_STYLES[category] ?? CATEGORY_STYLES.Others

  const handleCardClick = () => {
    onSelectMemo(memo)
  }

  const handleCardKeyDown = (event) => {
    if (event.target !== event.currentTarget) {
      return
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onSelectMemo(memo)
    }
  }

  const handlePinClick = (event) => {
    event.stopPropagation()
    onTogglePin(memo.id)
  }

  return (
    <article
      className={`flex h-71.25 w-71.25 cursor-pointer flex-col gap-2.5 rounded-[20px] p-5 py-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-05 ${categoryStyle.card}`}
      role="button"
      tabIndex={0}
      aria-label={`${title} 상세 보기`}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
    >
      <div className="flex items-center justify-between gap-3">
        <h2 className="min-w-0 flex-1 truncate text-heading-small font-bold text-white-00">
          {title}
        </h2>

        <IconButton
          icon={isPinned ? pinActiveIcon : pinIcon}
          label={isPinned ? '메모 고정 해제' : '메모 고정'}
          className="h-7 w-7 shrink-0 focus-visible:outline-white-00 [&_img]:h-5.5 [&_img]:w-5.75"
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
  )
}

export default MemoItem