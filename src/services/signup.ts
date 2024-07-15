import { useMutation } from "@tanstack/react-query";

import { postCheckNicknameAPI, putSignupAPI } from "apis";
import type { PostCheckNicknameQuery, PutSignupQuery } from "types";

export const usePutSignup = () => {
  return useMutation({
    mutationFn: (req: PutSignupQuery) => putSignupAPI(req),
  });
};

export const usePostCheckNickname = () => {
  return useMutation({
    mutationFn: (req: PostCheckNicknameQuery) => postCheckNicknameAPI(req),
  });
};
