import { create } from "zustand";
import type { CreateMemoInput, Memo } from "../types/memo";

type MemoState = {
  memos: Memo[];
  addMemo: (input: CreateMemoInput) => void;
  toggleMemoPin: (id: string) => void;
};

export const useMemoStore = create<MemoState>((set) => ({
  memos: [],

  addMemo: (input) => {
    const newMemo: Memo = {
      id: crypto.randomUUID(),
      title: input.title,
      content: input.content,
      tag: input.tag,
      createdAt: new Date().toISOString(),
      isPinned: false,
    };

    set((state) => ({
      memos: [newMemo, ...state.memos],
    }));
  },

  toggleMemoPin: (id) => {
    set((state) => ({
      memos: state.memos.map((memo) =>
        memo.id === id ? { ...memo, isPinned: !memo.isPinned } : memo,
      ),
    }));
  },
}));
