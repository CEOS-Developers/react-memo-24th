import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  accessToken: string | null;
  email: string | null;
  setAccessToken: (token: string) => void;
  setEmail: (email: string) => void;
  clearAccessToken: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      email: null,

      setAccessToken: (token) => set({ accessToken: token }),
      setEmail: (email) => set({ email }),

      clearAccessToken: () =>
        set({
          accessToken: null,
          email: null,
        }),
    }),
    {
      name: "memo-auth",
    },
  ),
);
