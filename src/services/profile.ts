import { useMutation } from "@tanstack/react-query";
import { putProfileAPI, putProfileImageAPI } from "apis/profile";
import { PostImageQuery, PutProfileQuery } from "types";

export const usePutProfile = (userId: string) => {
  return useMutation({
    mutationFn: (req: PutProfileQuery) => putProfileAPI(userId, req),
  });
};

export const usePutProfileImage = (userId: string) => {
  return useMutation({
    mutationFn: (req: PostImageQuery) => putProfileImageAPI(userId, req),
  });
};
