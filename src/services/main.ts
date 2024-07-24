import { useQuery } from "@tanstack/react-query";
import { getMainNewMeetingsAPI } from "apis";
import { getMeetingListResponse } from "types";

export const useGetMainNewMeetings = (
  lastMeetingId: number | null,
  limit: number
) => {
  return useQuery<getMeetingListResponse>({
    queryKey: ["newMeetings", lastMeetingId, limit],
    queryFn: () => getMainNewMeetingsAPI(lastMeetingId, limit),
    enabled: !!limit,
  });
};
