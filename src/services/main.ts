import { useQuery } from "@tanstack/react-query";
import { getMainNewMeetingsAPI } from "apis";
import { mainNewMeetingsResponse } from "types";

export const useGetMainNewMeetings = (lastId: number | null, size: number) => {
  return useQuery<mainNewMeetingsResponse>({
    queryKey: ["newMeetings", lastId, size],
    queryFn: () => getMainNewMeetingsAPI(lastId, size),
    enabled: !!size,
  });
};
