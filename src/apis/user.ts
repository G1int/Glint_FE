import axios from "axios";
import { API_URL } from "config";
import { Login } from "types";

export const getKakaoInfo = async (code: string) => {
  const { data } = await axios.get<Login>(
    `${API_URL}/auth/KAKAO/callback?code=${code}`
  );
  return data;
};
