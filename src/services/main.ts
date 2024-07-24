import { useQuery } from "@tanstack/react-query";
import { getMainNewMeetingsAPI } from "apis";
import { getMeetingListResponse } from "types";

export const useGetMainNewMeetings = (lastId: number | null, size: number) => {
  return useQuery<getMeetingListResponse>({
    queryKey: ["newMeetings", lastId, size],
    queryFn: () => getMainNewMeetingsAPI(lastId, size),
    enabled: !!size,
  });
};
