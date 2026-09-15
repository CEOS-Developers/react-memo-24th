import { useState } from "react";

export default function MemoEditor({ memo, onSave, onCancel }) {
  const [title, setTitle] = useState(memo.title);
  const [content, setContent] = useState(memo.content);

  function handleSave(event) {
    event.preventDefault();
    if (!title.trim() || !content.trim()) return;
    onSave({ ...memo, title: title.trim(), content: content.trim() });
  }

  return (
    <form onSubmit={handleSave} className="flex flex-1 flex-col gap-4 mt-2">
      <label className="flex flex-col gap-2 font-bold">
        제목
        <input
          autoFocus
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="w-full rounded-xl bg-surface p-3 text-navy font-normal"
        />
      </label>
      <label className="flex flex-1 flex-col gap-2 font-bold">
        내용
        <textarea
          required
          value={content}
          onChange={(event) => setContent(event.target.value)}
          rows={6}
          className="w-full flex-1 resize-y rounded-xl bg-surface p-3 text-navy font-normal"
        />
      </label>
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-xl bg-page px-5 py-3 text-navy"
        >
          취소
        </button>
        <button
          type="submit"
          disabled={!title.trim() || !content.trim()}
          className="rounded-xl bg-navy px-5 py-3 text-surface disabled:opacity-50"
        >
          저장
        </button>
      </div>
    </form>
  );
}
