import { atom } from "recoil";
import { Modal, Toast, Badge } from "types";

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

export const badgeState = atom<Badge[]>({
  key: "badgeState",
  default: [],
});

export const selectedBadgeState = atom<Badge[]>({
  key: "selectedBadgeState",
  default: [],
});
