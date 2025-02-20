import { create } from "zustand";

type InputTextStoreType = {
  inputText: string;
  setInputText: (newText: string) => void;
};

export const useInputTextStore = create<InputTextStoreType>(set => ({
  inputText: "",
  setInputText: (newText: string) => {
    set({ inputText: newText });
  },
}));
