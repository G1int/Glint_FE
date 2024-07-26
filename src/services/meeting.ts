import { useQuery } from "@tanstack/react-query";

import {
  getChatsAPI,
  getMeetingAPI,
  getMyMeetingAPI,
  getSearchMeetingAPI,
} from "apis";
import {
  type chatsResponse,
  type getMeetingListResponse,
  type getSearchMeetingResponse,
} from "types";

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
  lastMeetingId: number | null,
  userId: string
) => {
  return useQuery<getSearchMeetingResponse>({
    queryKey: ["searchMeeting", keyword, limit, lastMeetingId, userId],
    queryFn: () => getSearchMeetingAPI(keyword, limit, lastMeetingId, userId),
    enabled: false,
  });
};
