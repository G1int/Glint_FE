import { atom } from "recoil";

import type { Toast } from "types";

interface ModalState {
  isOpen: boolean;
  title: string;
  content: React.ReactNode;
}

export const toastState = atom<Toast[]>({
  key: "toastState",
  default: [],
});

export const modalState = atom<ModalState>({
  key: "modalState",
  default: {
    isOpen: false,
    title: "",
    content: "",
  },
});
