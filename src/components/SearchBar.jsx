import searchIcon from '../assets/search.svg'
import IconButton from './IconButton.jsx'
import TagFilter from './TagFilter.jsx'

function SearchBar() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <form
      className="flex h-20 min-w-0 flex-1 items-center gap-[10px] rounded-[28px] bg-white-00 p-4"
      onSubmit={handleSubmit}
    >
      <TagFilter />

      <input
        className="min-w-0 flex-1 bg-transparent text-field-medium font-regular text-black-00 outline-none placeholder:text-gray-02"
        type="search"
        placeholder="원하는 메모를 검색하세요"
        aria-label="메모 검색어"
      />

      <IconButton
        icon={searchIcon}
        label="메모 검색"
        type="submit"
        className="h-12 w-12 shrink-0 hover:bg-blue-01 [&_img]:h-[39px] [&_img]:w-[39px]"
      />
    </form>
  )
}

export default SearchBar