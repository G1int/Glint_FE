import { getKakaoInfoResponse } from "types";
import { ax } from "./axios";

export const getKakaoInfoAPI = async (code: string) => {
  const { data } = await ax.get<getKakaoInfoResponse>(
    `/auth/KAKAO/callback?code=${code}`
  );
  return data;
};
