import { useMutation, useQuery } from "@tanstack/react-query";

import {
  getChatsAPI,
  getMeetingAPI,
  getMeetingJoinsAPI,
  getMyMeetingAPI,
  postAttendMeetingRoomAPI,
} from "apis";
import type {
  chatsResponse,
  getMeetingJoinsQuery,
  getMeetingListResponse,
  postAttendMeetingRoomQuery,
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

export const usePostAttendMeetingRoom = () => {
  return useMutation({
    mutationFn: (req: postAttendMeetingRoomQuery) =>
      postAttendMeetingRoomAPI(req),
  });
};

export const useGetMeetingJoins = (req: getMeetingJoinsQuery) => {
  return useQuery({
    queryKey: ["meeting"],
    queryFn: () => getMeetingJoinsAPI(req),
  });
};
