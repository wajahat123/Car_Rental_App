// store/navbarStore.ts
import { create } from "zustand";

interface NavbarState {
  isOpen: boolean;
  isVisible: boolean;
  toggleMenu: () => void;
  setVisibility: (visible: boolean) => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
  isOpen: false,
  isVisible: true,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  setVisibility: (visible) => set({ isVisible: visible }),
}));
