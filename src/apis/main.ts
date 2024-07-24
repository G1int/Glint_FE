import { getMeetingListResponse } from "types";
import { ax } from "./axios";

export const getMainNewMeetingsAPI = async (
  lastId: number | null,
  size: number
) => {
  let url = `/meetings/new?size=${size}`;

  if (lastId !== null) {
    url += `&lastId=${lastId}`;
  }

  const { data } = await ax.get<getMeetingListResponse>(url);

  return data;
};
