import { useMutation, useQuery } from "@tanstack/react-query";
import {
  deleteUserAPI,
  getKakaoInfoAPI,
  getUserInfoAPI,
  putLogoutAPI,
} from "apis";
import { getKakaoInfoResponse, getUserInfoResponse } from "types";

export const useGetKakaoInfo = (code: string) => {
  return useQuery<getKakaoInfoResponse>({
    queryKey: ["kakaoInfo", code],
    queryFn: () => getKakaoInfoAPI(code),
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

export const useDeleteUser = (userId: string) => {
  return useMutation({
    mutationFn: () => deleteUserAPI(userId),
  });
};
