import { useMutation } from "@tanstack/react-query";

import { postCreateRoomAPI } from "apis";
import type { postCreateRoomQuery } from "types";

export const usePostCreateRoom = () => {
  return useMutation({
    mutationFn: (req: postCreateRoomQuery) => postCreateRoomAPI(req),
  });
};
