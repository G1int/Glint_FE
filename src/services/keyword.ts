import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteCurrentKeywordAPI, getCurrentSearchKeywordAPI } from "apis";
import { type getCurrentSearchKeywordResponse } from "types";

export const useGetCurrentSearchKeyword = (
  userId: string,
  limit: number | null
) => {
  return useQuery<getCurrentSearchKeywordResponse>({
    queryKey: ["currentKeyword", userId, limit],
    queryFn: () => getCurrentSearchKeywordAPI(userId, limit),
    enabled: !!userId,
  });
};

export const useDeleteCurrentSearchKeyword = () => {
  return useMutation({
    mutationFn: (searchKeywordId: string) =>
      deleteCurrentKeywordAPI(searchKeywordId),
  });
};
