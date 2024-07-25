import { getMeetingListResponse } from "types";
import { ax } from "./axios";

export const getMainNewMeetingsAPI = async (
  lastMeetingId: number | null,
  limit: number
) => {
  let url = `/meetings/new?limit=${limit}`;

  if (lastMeetingId !== null) {
    url += `&lastMeetingId=${lastMeetingId}`;
  }

  const { data } = await ax.get<getMeetingListResponse>(url);

  return data;
};
