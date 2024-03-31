import { create } from "zustand";

interface AppState {
    characters: Character[];
    initialCharacters: (characters: Character[]) => void;
  }
  
  interface Character {
   id: string;
   name: string;
   image: string;
  }

const useStore = create<AppState>((set) => ({
    characters: [],
    initialCharacters: (characters) => set({ characters }),
}));

export {useStore};
export type {Character};