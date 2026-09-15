import MemoItem from './MemoItem.jsx'

function MemoList({ memos, onTogglePin }) {
  const pinnedMemos = memos.filter((memo) => memo.isPinned)
  const unpinnedMemos = memos.filter((memo) => !memo.isPinned)

  return (
    <section className="flex w-full flex-col gap-5">
      {pinnedMemos.length > 0 && (
        <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pinnedMemos.map((memo) => (
            <MemoItem key={memo.id} memo={memo} onTogglePin={onTogglePin}/>
          ))}
        </div>
      )}

      {unpinnedMemos.length > 0 && (
        <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {unpinnedMemos.map((memo) => (
            <MemoItem key={memo.id} memo={memo} onTogglePin={onTogglePin}/>
          ))}
        </div>
      )}
    </section>
  )
}

export default MemoList