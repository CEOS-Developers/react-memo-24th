export type MemoTag = "Work" | "Daily" | "Others";

export interface Memo {
  title: string;
  tag: MemoTag;
  date: string;
  content: string;
}
