import { atom } from "recoil";
import { Toast, Badge } from "types";

export const toastState = atom<Toast[]>({
  key: "toastState",
  default: [],
});

export const modalState = atom<React.ReactNode[] | []>({
  key: "modalState",
  default: [],
});

export const badgeState = atom<Badge[]>({
  key: "badgeState",
  default: [],
});

export const selectedBadgeState = atom<Badge[]>({
  key: "selectedBadgeState",
  default: [],
});
