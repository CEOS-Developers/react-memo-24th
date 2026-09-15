export type MemoTag = "Work" | "Daily" | "Others";

export interface Memo {
  id: string;
  isFavorite?: boolean;
  title: string;
  tag: MemoTag;
  date: string;
  content: string;
}
