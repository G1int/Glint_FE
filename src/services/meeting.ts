import { useQuery } from "@tanstack/react-query";

import {
  getChatsAPI,
  getMeetingAPI,
  getMyMeetingAPI,
  getSearchMeeting,
} from "apis";
import type { chatsResponse, getMeetingListResponse } from "types";

export const useGetChats = (roomId: string) => {
  return useQuery<chatsResponse>({
    queryKey: ["chats", roomId],
    queryFn: () => getChatsAPI(roomId),
  });
};

export const useGetMeeting = (meetingId: string) => {
  return useQuery({
    queryKey: ["meeting", meetingId],
    queryFn: () => getMeetingAPI(meetingId),
  });
};

export const useGetMyMeeting = (
  status: "WAITING" | "ACCEPTED",
  userId: string,
  lastMeetingId: number | null,
  limit: number
) => {
  return useQuery<getMeetingListResponse>({
    queryKey: ["myMeeting", status, userId, lastMeetingId, limit],
    queryFn: () => getMyMeetingAPI(status, userId, lastMeetingId, limit),
    enabled: !!status && !!userId && !!limit,
  });
};

export const useGetSearchMeeting = (
  keyword: string,
  limit: number,
  lastMeetingId: number | null
) => {
  return useQuery<getMeetingListResponse>({
    queryKey: ["searchMeeting", keyword, limit, lastMeetingId],
    queryFn: () => getSearchMeeting(keyword, limit, lastMeetingId),
    enabled: false,
  });
};
