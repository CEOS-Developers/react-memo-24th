import Memo from './Memo';

function MemoList({ memos, onToggleImportant }) {
  return (
    <section className="grid grid-cols-4 gap-[20px]">
      {memos.map((memo) => (
        <Memo
          key={memo.id}
          memoId={memo.id}
          title={memo.title}
          content={memo.content}
          tag={memo.tag}
          date={memo.date}
          isImportant={memo.isImportant}
          onToggleImportant={onToggleImportant}
        />
      ))}
    </section>
  );
}

export default MemoList;
