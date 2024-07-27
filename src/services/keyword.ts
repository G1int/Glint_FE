import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (searchKeywordId: string) =>
      deleteCurrentKeywordAPI(searchKeywordId),
    onSuccess: () => {
      // 성공 시, currentKeyword 무효화 -> 업데이트
      queryClient.invalidateQueries({ queryKey: ["currentKeyword"] });
    },
    onError: (error) => {
      console.error("Failed to delete search keyword:", error);
    },
  });
};
