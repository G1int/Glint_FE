import { ax } from "./axios";
import type { PostCheckNicknameQuery, PutSignupQuery } from "types";

export const postCheckNicknameAPI = async (req: PostCheckNicknameQuery) => {
  const { data } = await ax.post(`/users/${req.userId}/nickname`, req.body);

  return data;
};

export const putSignupAPI = async (req: PutSignupQuery) => {
  const { data } = await ax.put(`/users/${req.userId}/detail`, req.body);

  return data;
};
