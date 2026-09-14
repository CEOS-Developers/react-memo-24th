import tagArrowIcon from '../assets/tag-arrow.svg'

function TagFilter() {
  return (
    <button
      type="button"
      className="flex h-9 w-[116px] shrink-0 items-center justify-center gap-[10px] whitespace-nowrap rounded-full bg-blue-01 px-4 text-action-small font-extrabold text-blue-07 hover:bg-blue-02 focus-visible:outline-2 focus-visible:outline-blue-05"
      aria-expanded="false"
    >
      <span
        className="h-3 w-3 rounded-full bg-gray-02"
        aria-hidden="true"
      />
      <span>All</span>
      <img className="h-[13px] w-4" src={tagArrowIcon} alt="" />
    </button>
  )
}

export default TagFilter