import { create } from "zustand";

interface FilterState {
    brands: string[];
    types: string[];
    seats: number[];
    model: string[];
    year: number[];
    priceRange: [number, number];
    setBrands: (brands: string[]) => void;
    setTypes: (types: string[]) => void;
    setSeats: (seats: number[]) => void;
    setModel: (model: string[]) => void;
    setYear: (year: number[]) => void;
    setPriceRange: (range: [number, number]) => void;
    resetFilters: () => void;
  }
  
  export const useFilterStore = create<FilterState>((set) => ({
    brands: [],
    types: [],
    seats: [],
    model: [],
    year: [],
    priceRange: [0, 100000], // Default range
    setBrands: (brands) => set({ brands }),
    setTypes: (types) => set({ types }),
    setSeats: (seats) => set({ seats }),
    setModel: (model) => set({ model }),
    setYear: (year) => set({ year }),
    setPriceRange: (range) => set({ priceRange: range }),
    resetFilters: () =>
      set({
        brands: [],
        types: [],
        seats: [],
        model: [],
        year: [],
        priceRange: [0, 100000],
      }),
  }));