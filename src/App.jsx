import { useState } from 'react'
import EmptyState from './components/EmptyState.jsx'
import Header from './components/Header.jsx'
import MemoList from './components/MemoList.jsx'
import initialMemos from './data/initialMemos.js'

function App() {
  const [memos, setMemos] = useState(initialMemos)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const hasMemos = memos.length > 0

  const visibleMemos =
    selectedCategory === 'All'
      ? memos
      : memos.filter((memo) => memo.category === selectedCategory)

  const handleTogglePin = (memoId) => {
    setMemos((currentMemos) =>
      currentMemos.map((memo) =>
        memo.id === memoId
          ? { ...memo, isPinned: !memo.isPinned }
          : memo,
      ),
    )
  }

  const handleSelectCategory = (category) => {
    setSelectedCategory(category)
  }

  return (
    <main className="min-h-screen bg-blue-01 px-6 py-[72px] font-sans">
      <div
        className={`mx-auto flex w-full max-w-[1200px] flex-col ${
          hasMemos ? 'gap-[52px]' : 'gap-[76px]'
        }`}
      >
        <Header
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />

        {hasMemos ? (
          <MemoList
            memos={visibleMemos}
            onTogglePin={handleTogglePin}
          />
        ) : (
          <EmptyState />
        )}
      </div>
    </main>
  )
}

export default App