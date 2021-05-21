import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let user = (set) => ({
  loggedIn: false,
  username: "",
  setUsername: (username) => set({ username }),
  logIn: () => set(() => ({ loggedIn: true })),
  logOut: () => set(() => ({ loggedIn: false })),
});

user = devtools(user);
user = persist(user, { name: "user_settings" });

export const useStore = create(user);
