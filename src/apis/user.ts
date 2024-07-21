import { getKakaoInfoResponse, getUserResponse } from "types";
import { ax } from "./axios";

export const getKakaoInfoAPI = async (code: string) => {
  const { data } = await ax.get<getKakaoInfoResponse>(
    `/auth/KAKAO/callback?code=${code}`
  );
  return data;
};

export const getUserAPI = async (id: string) => {
  const { data } = await ax.get<getUserResponse>(`/user/${id}`);

  return data;
};
