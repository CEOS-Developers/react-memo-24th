export function sortByNewest(list) {
  return [...list].sort((a, b) => b.createdAt - a.createdAt);
}
