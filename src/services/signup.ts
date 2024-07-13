import { useMutation } from "@tanstack/react-query";

import { postCheckNicknameAPI, postSingupAPI } from "apis";
import type { PostCheckNicknameQuery, PostSignupQuery } from "types";

export const usePostSingup = () => {
  return useMutation({
    mutationFn: (req: PostSignupQuery) => postSingupAPI(req),
  });
};

export const usePostCheckNickname = () => {
  return useMutation({
    mutationFn: (req: PostCheckNicknameQuery) => postCheckNicknameAPI(req),
  });
};
