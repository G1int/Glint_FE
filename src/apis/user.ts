import {
  getKakaoInfoResponse,
  getUserInfoResponse,
  getUserResponse,
} from "types";
import { ax } from "./axios";

export const getKakaoInfoAPI = async (code: string) => {
  const { data } = await ax.get<getKakaoInfoResponse>(
    `/auth/KAKAO/callback?code=${code}`
  );
  return data;
};

export const getUserAPI = async (userId: string) => {
  const { data } = await ax.get<getUserResponse>(`/users/${userId}`);

  return data;
};

export const getUserInfoAPI = async (userId: string) => {
  const { data } = await ax.get<getUserInfoResponse>(`/users/${userId}/info`);

  return data;
};
