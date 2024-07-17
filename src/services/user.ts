import { useQuery } from "@tanstack/react-query";
import { getKakaoInfoAPI } from "apis";
import { getKakaoInfoResponse } from "types";

export const useGetKakaoInfo = (code: string) => {
  return useQuery<getKakaoInfoResponse>({
    queryKey: ["kakaoInfo", code],
    queryFn: () => getKakaoInfoAPI(code),
  });
};
