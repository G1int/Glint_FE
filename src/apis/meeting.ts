import type { chatsResponse, GetMeetingResponse } from "types";
import { ax } from "./axios";

export const getChatsAPI = async (roomId: string) => {
  const { data } = await ax.get<chatsResponse>(`chatrooms/${roomId}/chats`);

  return data;
};

export const getMeetingAPI = async (meetingId: string) => {
  const { data } = await ax.get<GetMeetingResponse>(`meetings/${meetingId}`);

  return data;
};
