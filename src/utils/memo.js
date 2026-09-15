export function sortByNewest(list) {
  return [...list].sort((a, b) => b.createdAt - a.createdAt);
}

export function partition(list, predicate) {
  const matched = [];
  const rest = [];
  list.forEach((item) => {
    if (predicate(item)) matched.push(item);
    else rest.push(item);
  });
  return [matched, rest];
}

export function filterMemos(memos, keyword, tag) {
  const normalized = keyword.trim().toLowerCase();
  return memos.filter((memo) => {
    const matchesTag = !tag || memo.tag === tag;
    const matchesKeyword =
      !normalized ||
      memo.title.toLowerCase().includes(normalized) ||
      memo.content.toLowerCase().includes(normalized);
    return matchesTag && matchesKeyword;
  });
}
