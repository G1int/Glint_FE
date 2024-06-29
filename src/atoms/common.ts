import { atom } from "recoil";

import { type Modal, type Toast } from "types";

export const toastState = atom<Toast[]>({
  key: "toastState",
  default: [],
});

export const modalState = atom<Modal>({
  key: "modalState",
  default: {
    isOpen: false,
    title: "",
    content: "",
  },
});
