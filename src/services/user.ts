import { useQuery } from "@tanstack/react-query";
import { getKakaoInfoAPI, getUserAPI } from "apis";
import { getKakaoInfoResponse, getUserResponse } from "types";

export const useGetKakaoInfo = (code: string) => {
  return useQuery<getKakaoInfoResponse>({
    queryKey: ["kakaoInfo", code],
    queryFn: () => getKakaoInfoAPI(code),
  });
};

export const useGetUser = (id: string) => {
  return useQuery<getUserResponse>({
    queryKey: ["user", id],
    queryFn: () => getUserAPI(id),
    enabled: !!id,
  });
};
