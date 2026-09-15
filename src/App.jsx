import MemoBoard from "./components/board/MemoBoard";
import TopBar from "./components/header/TopBar";
import { useMemos } from "./hooks/useMemos";

export default function App() {
  const { memos } = useMemos();

  return (
    <div className="mx-auto max-w-[1248px] px-6 pt-12 pb-24">
      <TopBar />
      <MemoBoard memos={memos} />
    </div>
  );
}
