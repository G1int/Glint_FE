import type {
  chatsResponse,
  GetMeetingResponse,
  getMeetingListResponse,
  getSearchMeetingResponse,
  postAttendMeetingRoomQuery,
  getMeetingJoinsQuery,
  getMeetingJoinsResponse,
  putOutMeetingQuery,
  putJoinMeetingQuery,
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

export const getSearchMeetingAPI = async (
  keyword: string,
  limit: number,
  lastMeetingId: number | null,
  userId: string,
  locationIds: number[]
) => {
  const params: {
    keyword: string;
    limit: number;
    lastMeetingId?: number;
    locationIds?: number[];
  } = {
    keyword: keyword,
    limit: limit,
  };

  if (lastMeetingId !== null) {
    params.lastMeetingId = lastMeetingId;
  }

  if (locationIds.length > 0) {
    params.locationIds = locationIds;
  }

  let url = `/meetings/search`;

  if (userId !== null) {
    url += `?userId=${userId}`;
  }

  // 파라미터 수동 직렬화
  const queryString = Object.keys(params)
    .map((key) => {
      const value = params[key as keyof typeof params];
      if (Array.isArray(value)) {
        return value
          .map((item) => `${key}=${encodeURIComponent(item)}`)
          .join("&");
      }
      return `${key}=${encodeURIComponent(value as string | number)}`;
    })
    .join("&");

  // 완성된 URL
  url += `&${queryString}`;

  const { data } = await ax.get<getSearchMeetingResponse>(url);

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

export const getMeetingJoinsAPI = async (req: getMeetingJoinsQuery) => {
  const { data } = await ax.get<getMeetingJoinsResponse>(
    `/meetings/${req.meetingId}/join`,
    {
      params: req.query,
    }
  );

  return data;
};

export const putOutMeetingAPI = async (req: putOutMeetingQuery) => {
  const { data } = await ax.put(
    `/meetings/${req.meetingId}/users/${req.userId}/out`
  );

  return data;
};

export const putRejectJoinMeetingAPI = async (req: putJoinMeetingQuery) => {
  const { data } = await ax.put(
    `/meetings/${req.meetingId}/join/users/${req.userId}/reject`
  );

  return data;
};

export const putAcceptJoinMeetingAPI = async (req: putJoinMeetingQuery) => {
  const { data } = await ax.put(
    `/meetings/${req.meetingId}/join/users/${req.userId}/accept`
  );

  return data;
};
