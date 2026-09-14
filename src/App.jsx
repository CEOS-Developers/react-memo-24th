import EmptyState from './components/EmptyState.jsx'
import Header from './components/Header.jsx'

function App() {
  return (
    <main className="min-h-screen bg-blue-01 px-6 py-[72px] font-sans">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[76px]">
        <Header />
        <EmptyState />
      </div>
    </main>
  )
}

export default App