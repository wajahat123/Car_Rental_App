import { create } from "zustand";

interface CarFilterState {
  selectedFilter: { value: string; type: string } | null;
  setSelectedFilter: (filter: { value: string; type: string }) => void;
}

export const useCarStore = create<CarFilterState>((set) => ({
  selectedFilter: null,
  setSelectedFilter: (filter) => set({ selectedFilter: filter }),
}));
