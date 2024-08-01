import { useMutation } from "@tanstack/react-query";

import { postCreateRoomAPI, putEditRoomAPI } from "apis";
import type { postCreateRoomQuery, putEditRoomQuery } from "types";

export const usePostCreateRoom = () => {
  return useMutation({
    mutationFn: (req: postCreateRoomQuery) => postCreateRoomAPI(req),
  });
};

export const usePutEditRoom = () => {
  return useMutation({
    mutationFn: (req: putEditRoomQuery) => putEditRoomAPI(req),
  });
};
