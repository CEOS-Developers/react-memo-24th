export function sortByNewest(list) {
  return [...list].sort((a, b) => b.createdAt - a.createdAt);
}

export function filterMemos(memos, keyword) {
  const normalized = keyword.trim().toLowerCase();
  if (!normalized) return memos;
  return memos.filter(
    (memo) =>
      memo.title.toLowerCase().includes(normalized) ||
      memo.content.toLowerCase().includes(normalized),
  );
}
