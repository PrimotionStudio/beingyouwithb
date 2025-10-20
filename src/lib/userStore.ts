import { User } from "@prisma/client";
import { UserType } from "./zod";
import { create } from "zustand";

interface UserState {
  user: UserType | null;
  setUser: (user: UserType) => void;
  loadUserFromCookie: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  loadUserFromCookie: async () => {
    try {
      const res = await fetch("/api/me");
      const data = await res.json();
      if (!res.ok) return set({ user: null });
      set({ user: data.user });
    } catch {
      set({ user: null });
    }
  },
  logout: async () => {
    const res = await fetch("/api/logout", { method: "DELETE" });
    if (res.ok) set({ user: null });
  },
}));
