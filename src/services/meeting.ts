import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  getChatsAPI,
  getMeetingAPI,
  getMeetingJoinsAPI,
  getMyMeetingAPI,
  getSearchMeetingAPI,
  postAttendMeetingRoomAPI,
  putAcceptJoinMeetingAPI,
  putOutMeetingAPI,
  putRejectJoinMeetingAPI,
} from "apis";

import type {
  postAttendMeetingRoomQuery,
  chatsResponse,
  getMeetingJoinsQuery,
  getMeetingListResponse,
  getSearchMeetingResponse,
  putOutMeetingQuery,
  putJoinMeetingQuery,
} from "types";

export const useGetChats = (roomId: string) => {
  return useQuery<chatsResponse>({
    queryKey: ["chats"],
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

export const usePostAttendMeetingRoom = () => {
  return useMutation({
    mutationFn: (req: postAttendMeetingRoomQuery) =>
      postAttendMeetingRoomAPI(req),
  });
};

export const useGetMeetingJoins = (req: getMeetingJoinsQuery) => {
  return useQuery({
    queryKey: ["meeting", req],
    queryFn: () => getMeetingJoinsAPI(req),
  });
};

export const useOutMeeting = () => {
  return useMutation({
    mutationFn: (req: putOutMeetingQuery) => putOutMeetingAPI(req),
  });
};

export const useRejectJoinMeeting = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (req: putJoinMeetingQuery) => putRejectJoinMeetingAPI(req),
    onSuccess: (res) =>
      queryClient.invalidateQueries({ queryKey: ["meeting", res.meetingId] }),
  });
};

export const useAcceptJoinMeeting = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (req: putJoinMeetingQuery) => putAcceptJoinMeetingAPI(req),
    onSuccess: () => {
      //TODO  확인 필요
      queryClient.invalidateQueries({ queryKey: ["meeting"] });
    },
  });
};
