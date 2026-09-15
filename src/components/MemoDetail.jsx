import { useEffect, useRef } from 'react';
import { tags } from '../data/tags';

export default function MemoDetail({ memo, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog.showModal();
    return () => dialog.close();
  }, []);

  return (
    <dialog ref={dialogRef} onCancel={(event) => { event.preventDefault(); onClose(); }} aria-labelledby="detail-title" className={`fixed m-auto max-h-[calc(100vh-48px)] w-[560px] max-w-[calc(100vw-32px)] overflow-y-auto rounded-3xl p-6 text-surface shadow-md backdrop:bg-navy/50 sm:px-11 sm:py-10 ${tags[memo.tag].cardClass}`}>
      <article className="flex min-h-[480px] flex-col">
        <header className="flex items-center justify-between gap-5"><h2 id="detail-title" className="text-3xl font-bold break-words">{memo.title}</h2><button autoFocus onClick={onClose} aria-label="닫기" className="flex size-9 shrink-0 items-center justify-center"><img src="/assets/icons/close.svg" alt="" width="32" height="32" /></button></header>
        <div className="mt-7 mb-8 flex items-center gap-6 text-lg font-bold">
          <span className={`flex items-center gap-4 rounded-full bg-page py-1 pr-5 pl-3 ${tags[memo.tag].textClass}`}><img src={`/assets/icons/${memo.tag}.svg`} alt="" className="size-5" />{tags[memo.tag].label}</span>
          <time dateTime={memo.date} className="flex min-h-[52px] items-center border-l-[3px] border-surface pl-6">{memo.date.replaceAll('-', '.')}</time>
        </div>
        <p className="whitespace-pre-wrap text-lg leading-relaxed break-words">{memo.content}</p>
        <footer className="mt-auto flex justify-end gap-4 pt-8"><button disabled aria-label="메모 수정"><img src="/assets/icons/edit.svg" alt="" width="27" height="27" /></button><button disabled aria-label="메모 삭제"><img src="/assets/icons/trash.svg" alt="" width="24" height="24" /></button></footer>
      </article>
    </dialog>
  );
}
