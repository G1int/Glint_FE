import { useQuery } from "@tanstack/react-query";
import { getMainNewMeetingsAPI } from "apis";
import { meetingsResponse } from "types";

export const useGetMainNewMeetings = (lastId: number | null, size: number) => {
  return useQuery<meetingsResponse>({
    queryKey: ["newMeetings", lastId, size],
    queryFn: () => getMainNewMeetingsAPI(lastId, size),
    enabled: !!size,
  });
};
