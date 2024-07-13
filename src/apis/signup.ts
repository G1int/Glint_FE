import { ax } from "./axios";
import type { PostCheckNicknameQuery, PostSignup } from "types";

export const postCheckNickname = async (req: PostCheckNicknameQuery) => {
  const { data } = await ax.post(`/users/${req.userId}/nickname`, req.body);

  return data;
};

export const postSingup = async (req: PostSignup) => {
  const { data } = await ax.post(`/users/${req.userId}/detail`, req.body);

  return data;
};
