import { useMutation } from "@tanstack/react-query";
import { putProfileAPI } from "apis/profile";
import { PutProfileQuery } from "types";

export const usePutProfile = (userId: string) => {
  return useMutation({
    mutationFn: (req: PutProfileQuery) => putProfileAPI(userId, req),
  });
};
