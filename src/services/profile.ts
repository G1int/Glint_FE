import { useMutation, useQuery } from "@tanstack/react-query";
import { getProfileAPI, putProfileAPI } from "apis/profile";
import { getProfileResponse, PutProfileQuery } from "types";

export const useGetProfile = (userId: string) => {
  return useQuery<getProfileResponse>({
    queryKey: ["profile", userId],
    queryFn: () => getProfileAPI(userId),
  });
};

export const usePutProfile = (userId: string) => {
  return useMutation({
    mutationFn: (req: PutProfileQuery) => putProfileAPI(userId, req),
  });
};
