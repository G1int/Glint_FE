import { ax } from "./axios";
import type { PostCheckNicknameQuery, PostSignupQuery } from "types";

export const postCheckNicknameAPI = async (req: PostCheckNicknameQuery) => {
  const { data } = await ax.post(`/users/${req.userId}/nickname`, req.body);

  return data;
};

export const postSingupAPI = async (req: PostSignupQuery) => {
  const { data } = await ax.post(`/users/${req.userId}/detail`, req.body);

  return data;
};
