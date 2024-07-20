import { PutProfileQuery } from "types";
import { ax } from "./axios";

export const getProfileAPI = async (userId: string) => {
  const { data } = await ax.get(`/users/${userId}/profile`);

  return data;
};

export const putProfileAPI = async (userId: string, req: PutProfileQuery) => {
  const { data } = await ax.put(`/users/${userId}/profile`, req);

  return data;
};
