import type {
  chatsResponse,
  GetMeetingResponse,
  getMeetingListResponse,
  postAttendMeetingRoomQuery,
} from "types";
import { ax } from "./axios";

export const getChatsAPI = async (roomId: string) => {
  const { data } = await ax.get<chatsResponse>(`chatrooms/${roomId}/chats`);

  return data;
};

export const getMeetingAPI = async (meetingId: string) => {
  const { data } = await ax.get<GetMeetingResponse>(`meetings/${meetingId}`);

  return data;
};

export const getMyMeetingAPI = async (
  status: "WAITING" | "ACCEPTED",
  userId: string,
  lastMeetingId: number | null,
  limit: number
) => {
  let url = `/meetings/users/${userId}?status=${status}&limit=${limit}`;

  if (lastMeetingId !== null) {
    url += `&lastMeetingId=${lastMeetingId}`;
  }

  const { data } = await ax.get<getMeetingListResponse>(url);

  return data;
};

export const postAttendMeetingRoomAPI = async (
  req: postAttendMeetingRoomQuery
) => {
  const { data } = await ax.post(
    `/meetings/${req.meetingId}/join/users/${req.userId}`
  );

  return data;
};
