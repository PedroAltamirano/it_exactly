import create from "zustand";

interface PaginationState {
  limit: number;
  offset: number;
  last_page: () => void;
  next_page: () => void;
  change_limit: (payload: number) => void;
}

export const useStore = create<PaginationState>((set) => ({
  limit: 25,
  offset: 0,
  last_page: () =>
    set((state) => ({ ...state, offset: +state.offset - +state.limit })),
  next_page: () =>
    set((state) => ({ ...state, offset: +state.offset + +state.limit })),
  change_limit: (payload: number) =>
    set((state) => ({ ...state, limit: +payload, offset: 0 })),
}));
