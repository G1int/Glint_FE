import { useMutation } from "@tanstack/react-query";

import { postCheckNicknameAPI, putSingupAPI } from "apis";
import type { PostCheckNicknameQuery, PutSignupQuery } from "types";

export const usePutSingup = () => {
  return useMutation({
    mutationFn: (req: PutSignupQuery) => putSingupAPI(req),
  });
};

export const usePostCheckNickname = () => {
  return useMutation({
    mutationFn: (req: PostCheckNicknameQuery) => postCheckNicknameAPI(req),
  });
};
