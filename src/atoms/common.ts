import { atom } from "recoil";

import type { Toast } from "types";

export const toastState = atom<Toast[]>({
  key: "toastState",
  default: [],
});
