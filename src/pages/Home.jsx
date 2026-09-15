import NavBar from '../components/NavBar';
import EmptyMemo from '../components/EmptyMemo';
import MemoList from '../components/MemoList';

import { useState } from 'react';

const Home = () => {
  const [memos, setMemos] = useState([]);

  return (
    <main className="min-h-screen w-full bg-[#E4EDFF] px-[120px] pt-[72px] pb-[86px]">
      <div className="flex  w-full flex-col gap-[76px]">
        {/* NavBar */}
        <NavBar />

        {/* Memo Content */}
        {memos.length === 0 ? <EmptyMemo /> : <MemoList memos={memos} />}
      </div>
    </main>
  );
};

export default Home;
