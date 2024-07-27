import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getKakaoInfoAPI,
  getUserAPI,
  getUserInfoAPI,
  putLogoutAPI,
} from "apis";
import {
  getKakaoInfoResponse,
  getUserInfoResponse,
  getUserResponse,
} from "types";

export const useGetKakaoInfo = (code: string) => {
  return useQuery<getKakaoInfoResponse>({
    queryKey: ["kakaoInfo", code],
    queryFn: () => getKakaoInfoAPI(code),
  });
};

export const useGetUser = (userId: string) => {
  return useQuery<getUserResponse>({
    queryKey: ["user", userId],
    queryFn: () => getUserAPI(userId),
    enabled: !!userId,
  });
};

export const useGetUserInfo = (userId: string) => {
  return useQuery<getUserInfoResponse>({
    queryKey: ["userInfo", userId],
    queryFn: () => getUserInfoAPI(userId),
    enabled: !!userId,
  });
};

export const usePutLogout = () => {
  return useMutation({
    mutationFn: () => putLogoutAPI(),
  });
};
