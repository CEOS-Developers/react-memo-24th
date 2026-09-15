import type { MemoTag } from "../types/memos";

export const TAG_COLORS = {
  Work: "text-blue06",
  Daily: "text-blue04",
  Others: "text-gray03",
} satisfies Record<MemoTag, string>;

export const TAG_OPTIONS = [
  { value: "Work", label: "Work" },
  { value: "Daily", label: "Daily" },
  { value: "Others", label: "Others" },
] satisfies { value: MemoTag; label: string }[];
