export type MemoTag = "daily" | "work" | "others";

export type MemoFilter = "all" | MemoTag;

export type Memo = {
  id: string;
  title: string;
  content: string;
  tag: MemoTag;
  createdAt: string;
  isPinned: boolean;
};

export type CreateMemoInput = Pick<Memo, "title" | "content" | "tag">;
