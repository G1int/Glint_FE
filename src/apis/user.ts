import { getKakaoInfoResponse, getUserInfoResponse } from "types";
import { ax } from "./axios";

export const getKakaoInfoAPI = async (code: string) => {
  const { data } = await ax.get<getKakaoInfoResponse>(
    `/auth/KAKAO/callback?code=${code}`
  );
  return data;
};

export const getUserInfoAPI = async (userId: string) => {
  const { data } = await ax.get<getUserInfoResponse>(`/users/${userId}/info`);

  return data;
};

export const putLogoutAPI = async () => {
  const { data } = await ax.put(`/auth/logout`);

  return data;
};

export const deleteUserAPI = async (userId: string) => {
  const { data } = await ax.delete(`/users/${userId}`);

  return data;
};
